<script lang="ts">
  import { onMount } from 'svelte';
  import * as THREE from 'three';

  let container: HTMLDivElement;
  let isHovered = (false);
  let activePeersCount = (124);
  let syncRate = ('14.2 ms');

  onMount(() => {
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 600;

    // Scene & Camera
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030508, 0.002);

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 240;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Nodes Generation
    const nodeCount = 90;
    const nodes: { pos: THREE.Vector3; vel: THREE.Vector3; type: 'peer' | 'core' | 'enterprise' }[] = [];
    const radius = 100;

    for (let i = 0; i < nodeCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * radius;
      
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      const type = i < 4 ? 'core' : (i < 12 ? 'enterprise' : 'peer');

      nodes.push({
        pos: new THREE.Vector3(x, y, z),
        vel: new THREE.Vector3(
          (Math.random() - 0.5) * 0.08,
          (Math.random() - 0.5) * 0.08,
          (Math.random() - 0.5) * 0.08
        ),
        type
      });
    }

    // Node Points Mesh
    const pointsGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(nodeCount * 3);
    const colors = new Float32Array(nodeCount * 3);

    const colorCyan = new THREE.Color(0x06b6d4);
    const colorEmerald = new THREE.Color(0x10b981);
    const colorOrange = new THREE.Color(0xf97316);

    nodes.forEach((node, i) => {
      positions[i * 3] = node.pos.x;
      positions[i * 3 + 1] = node.pos.y;
      positions[i * 3 + 2] = node.pos.z;

      const c = node.type === 'core' ? colorOrange : (node.type === 'enterprise' ? colorEmerald : colorCyan);
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    });

    pointsGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    pointsGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const pointsMat = new THREE.PointsMaterial({
      size: 4.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending
    });

    const pointsMesh = new THREE.Points(pointsGeo, pointsMat);
    scene.add(pointsMesh);

    // Line Connections
    const maxDistance = 42;
    const linesMat = new THREE.LineBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.22,
      blending: THREE.AdditiveBlending
    });

    let linesMesh: THREE.LineSegments | null = null;

    // Packets (Data Traffic Animation)
    const packetCount = 28;
    const packets: {
      from: number;
      to: number;
      progress: number;
      speed: number;
      mesh: THREE.Mesh;
    }[] = [];

    const packetGeo = new THREE.SphereGeometry(0.8, 8, 8);
    const packetMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.9
    });

    for (let p = 0; p < packetCount; p++) {
      const from = Math.floor(Math.random() * nodeCount);
      let to = Math.floor(Math.random() * nodeCount);
      while (to === from) to = Math.floor(Math.random() * nodeCount);

      const packetMesh = new THREE.Mesh(packetGeo, packetMat);
      scene.add(packetMesh);

      packets.push({
        from,
        to,
        progress: Math.random(),
        speed: 0.005 + Math.random() * 0.01,
        mesh: packetMesh
      });
    }

    // Mouse Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 40;
      targetY = -y * 40;
    };

    window.addEventListener('mousemove', onMouseMove);

    // Resize Observer
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', onResize);

    // Animation Loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      // Smooth mouse damping
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      camera.position.x = mouseX;
      camera.position.y = mouseY;
      camera.lookAt(0, 0, 0);

      // Rotate whole constellation
      pointsMesh.rotation.y += 0.0015;
      pointsMesh.rotation.x += 0.0005;

      // Update Node Positions
      const posAttr = pointsGeo.getAttribute('position') as THREE.BufferAttribute;
      const posArray = posAttr.array as Float32Array;

      for (let i = 0; i < nodeCount; i++) {
        const node = nodes[i];
        node.pos.add(node.vel);

        // Boundary check
        if (node.pos.length() > radius) {
          node.vel.multiplyScalar(-1);
        }

        posArray[i * 3] = node.pos.x;
        posArray[i * 3 + 1] = node.pos.y;
        posArray[i * 3 + 2] = node.pos.z;
      }
      posAttr.needsUpdate = true;

      // Rebuild Dynamic Lines
      const linePositions: number[] = [];
      for (let i = 0; i < nodeCount; i++) {
        for (let j = i + 1; j < nodeCount; j++) {
          const dist = nodes[i].pos.distanceTo(nodes[j].pos);
          if (dist < maxDistance) {
            linePositions.push(
              nodes[i].pos.x, nodes[i].pos.y, nodes[i].pos.z,
              nodes[j].pos.x, nodes[j].pos.y, nodes[j].pos.z
            );
          }
        }
      }

      if (linesMesh) {
        scene.remove(linesMesh);
        linesMesh.geometry.dispose();
      }

      const linesGeo = new THREE.BufferGeometry();
      linesGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
      linesMesh = new THREE.LineSegments(linesGeo, linesMat);
      linesMesh.rotation.copy(pointsMesh.rotation);
      scene.add(linesMesh);

      // Update Data Packets
      packets.forEach(packet => {
        packet.progress += packet.speed;
        if (packet.progress >= 1) {
          packet.progress = 0;
          packet.from = Math.floor(Math.random() * nodeCount);
          packet.to = Math.floor(Math.random() * nodeCount);
        }

        const start = nodes[packet.from].pos;
        const end = nodes[packet.to].pos;

        const currentPos = new THREE.Vector3().lerpVectors(start, end, packet.progress);
        currentPos.applyEuler(pointsMesh.rotation);
        packet.mesh.position.copy(currentPos);
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      pointsGeo.dispose();
      pointsMat.dispose();
      if (linesMesh) {
        scene.remove(linesMesh);
        linesMesh.geometry.dispose();
      }
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  });
</script>

<div class="relative w-full h-[520px] md:h-[680px] overflow-hidden rounded-2xl border border-white/10 bg-bg-dark/40 backdrop-blur-md">
  <!-- Canvas Container -->
  <div bind:this={container} class="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"></div>

  <!-- HUD Telemetry Overlay -->
  <div class="absolute top-6 left-6 flex flex-col gap-2 pointer-events-none z-10">
    <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-bg-surface/80 border border-accent-cyan/30 text-xs font-mono text-accent-cyan backdrop-blur-md">
      <span class="w-2 h-2 rounded-full bg-accent-cyan animate-ping"></span>
      <span class="font-bold">EDGE-MESH P2P</span>
      <span class="text-white/40">|</span>
      <span>TOPOLOGY: DECENTRALIZED</span>
    </div>
    <div class="flex items-center gap-4 text-[11px] font-mono text-text-secondary">
      <span class="flex items-center gap-1">
        <span class="w-1.5 h-1.5 rounded-full bg-accent-emerald"></span>
        Nodes: <strong class="text-white">{activePeersCount} peers</strong>
      </span>
      <span class="flex items-center gap-1">
        <span class="w-1.5 h-1.5 rounded-full bg-accent-orange"></span>
        CRDT Sync: <strong class="text-white">{syncRate}</strong>
      </span>
      <span class="flex items-center gap-1">
        <span class="w-1.5 h-1.5 rounded-full bg-accent-cyan"></span>
        Crypto: <strong class="text-white">ML-DSA-65</strong>
      </span>
    </div>
  </div>

  <!-- Bottom Legend -->
  <div class="absolute bottom-6 right-6 hidden md:flex items-center gap-3 px-4 py-2 rounded-xl bg-bg-surface/80 border border-white/10 text-xs font-mono text-text-muted backdrop-blur-md pointer-events-none">
    <span class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-accent-orange"></span> Core Nodes</span>
    <span class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-accent-emerald"></span> Enterprise Nodes</span>
    <span class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-accent-cyan"></span> Community Peers</span>
  </div>
</div>
