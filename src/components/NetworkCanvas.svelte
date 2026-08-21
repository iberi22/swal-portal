<script lang="ts">
  import { onMount } from "svelte";
  import * as THREE from "three";

  let container: HTMLDivElement;
  let activePeersCount = 124;
  let syncRate = "14.2 ms";

  onMount(() => {
    if (!container) return;

    let width = container.clientWidth || 600;
    let height = container.clientHeight || 520;

    // Scene & Fog
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x060910, 0.0018);

    const camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
    camera.position.set(0, 15, 230);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Root Group for smooth unified rotation
    const networkGroup = new THREE.Group();
    scene.add(networkGroup);

    // Generate Circular Sprite Texture for Smooth Anti-Aliased Nodes
    const createCircleTexture = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext("2d")!;
      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
      gradient.addColorStop(0.3, "rgba(255, 255, 255, 0.8)");
      gradient.addColorStop(0.6, "rgba(6, 182, 212, 0.4)");
      gradient.addColorStop(1, "rgba(6, 182, 212, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 64, 64);
      return new THREE.CanvasTexture(canvas);
    };

    const circleTexture = createCircleTexture();

    // Node Parameters
    const nodeCount = 84;
    const radius = 95;
    const nodes: {
      pos: THREE.Vector3;
      vel: THREE.Vector3;
      type: "peer" | "core" | "enterprise";
    }[] = [];

    const colorCyan = new THREE.Color(0x06b6d4);
    const colorEmerald = new THREE.Color(0x10b981);
    const colorOrange = new THREE.Color(0xf97316);

    const positions = new Float32Array(nodeCount * 3);
    const colors = new Float32Array(nodeCount * 3);

    for (let i = 0; i < nodeCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = (0.3 + 0.7 * Math.cbrt(Math.random())) * radius;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta) * 0.85; // slight ellipsoid
      const z = r * Math.cos(phi);

      const type: "peer" | "core" | "enterprise" = i < 4 ? "core" : (i < 14 ? "enterprise" : "peer");

      nodes.push({
        pos: new THREE.Vector3(x, y, z),
        vel: new THREE.Vector3(
          (Math.random() - 0.5) * 0.06,
          (Math.random() - 0.5) * 0.06,
          (Math.random() - 0.5) * 0.06
        ),
        type
      });

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      const c = type === "core" ? colorOrange : (type === "enterprise" ? colorEmerald : colorCyan);
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    // Nodes Points Geometry
    const pointsGeo = new THREE.BufferGeometry();
    pointsGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    pointsGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const pointsMat = new THREE.PointsMaterial({
      size: 7.5,
      map: circleTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const pointsMesh = new THREE.Points(pointsGeo, pointsMat);
    networkGroup.add(pointsMesh);

    // Dynamic Preallocated Line Mesh (ZERO allocation in animation loop)
    const maxLines = 600;
    const maxDistance = 38;
    const linePositions = new Float32Array(maxLines * 6);

    const linesGeo = new THREE.BufferGeometry();
    const linePosAttr = new THREE.BufferAttribute(linePositions, 3);
    linePosAttr.setUsage(THREE.DynamicDrawUsage);
    linesGeo.setAttribute("position", linePosAttr);

    const linesMat = new THREE.LineBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.28,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const linesMesh = new THREE.LineSegments(linesGeo, linesMat);
    networkGroup.add(linesMesh);

    // Packets (Data Traffic Animation inside the Group)
    const packetCount = 20;
    const packets: {
      from: number;
      to: number;
      progress: number;
      speed: number;
      mesh: THREE.Mesh;
    }[] = [];

    const packetGeo = new THREE.SphereGeometry(1.0, 8, 8);
    const packetMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending
    });

    for (let p = 0; p < packetCount; p++) {
      const from = Math.floor(Math.random() * nodeCount);
      let to = Math.floor(Math.random() * nodeCount);
      while (to === from) to = Math.floor(Math.random() * nodeCount);

      const packetMesh = new THREE.Mesh(packetGeo, packetMat);
      networkGroup.add(packetMesh);

      packets.push({
        from,
        to,
        progress: Math.random(),
        speed: 0.006 + Math.random() * 0.008,
        mesh: packetMesh
      });
    }

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let isDragging = false;
    let prevPointerX = 0;
    let prevPointerY = 0;

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

      if (isDragging) {
        const deltaX = clientX - prevPointerX;
        const deltaY = clientY - prevPointerY;
        networkGroup.rotation.y += deltaX * 0.008;
        networkGroup.rotation.x += deltaY * 0.008;
        prevPointerX = clientX;
        prevPointerY = clientY;
      } else {
        const rect = container.getBoundingClientRect();
        const x = (clientX - rect.left) / rect.width - 0.5;
        const y = (clientY - rect.top) / rect.height - 0.5;
        targetMouseX = x * 25;
        targetMouseY = -y * 20;
      }
    };

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      prevPointerX = clientX;
      prevPointerY = clientY;
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    container.addEventListener("mousedown", onPointerDown);
    window.addEventListener("mousemove", onPointerMove);
    window.addEventListener("mouseup", onPointerUp);

    // ResizeObserver for robust layout resizing
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const w = entry.contentRect.width;
        const h = entry.contentRect.height;
        if (w > 0 && h > 0) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setSize(w, h);
        }
      }
    });

    resizeObserver.observe(container);

    // Animation Loop
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);

      // Smooth camera parallax
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;
      camera.position.x = mouseX;
      camera.position.y = 15 + mouseY;
      camera.lookAt(0, 0, 0);

      // Autonomous gentle group rotation
      if (!isDragging) {
        networkGroup.rotation.y += 0.0018;
        networkGroup.rotation.x += 0.0004;
      }

      // Update Node Positions
      const posAttr = pointsGeo.getAttribute("position") as THREE.BufferAttribute;
      const posArr = posAttr.array as Float32Array;

      for (let i = 0; i < nodeCount; i++) {
        const node = nodes[i];
        node.pos.add(node.vel);

        // Boundary bounce
        if (node.pos.length() > radius) {
          node.vel.multiplyScalar(-1);
          node.pos.clampLength(0, radius);
        }

        posArr[i * 3] = node.pos.x;
        posArr[i * 3 + 1] = node.pos.y;
        posArr[i * 3 + 2] = node.pos.z;
      }
      posAttr.needsUpdate = true;

      // Update Dynamic Lines using setDrawRange (0 memory allocation)
      let lineIndex = 0;
      for (let i = 0; i < nodeCount && lineIndex < maxLines; i++) {
        for (let j = i + 1; j < nodeCount && lineIndex < maxLines; j++) {
          const dist = nodes[i].pos.distanceTo(nodes[j].pos);
          if (dist < maxDistance) {
            const base = lineIndex * 6;
            linePositions[base] = nodes[i].pos.x;
            linePositions[base + 1] = nodes[i].pos.y;
            linePositions[base + 2] = nodes[i].pos.z;
            linePositions[base + 3] = nodes[j].pos.x;
            linePositions[base + 4] = nodes[j].pos.y;
            linePositions[base + 5] = nodes[j].pos.z;
            lineIndex++;
          }
        }
      }

      linePosAttr.needsUpdate = true;
      linesGeo.setDrawRange(0, lineIndex * 2);

      // Update Data Packets
      for (let p = 0; p < packetCount; p++) {
        const packet = packets[p];
        packet.progress += packet.speed;
        if (packet.progress >= 1) {
          packet.progress = 0;
          packet.from = Math.floor(Math.random() * nodeCount);
          let nextTo = Math.floor(Math.random() * nodeCount);
          while (nextTo === packet.from) nextTo = Math.floor(Math.random() * nodeCount);
          packet.to = nextTo;
        }

        const start = nodes[packet.from].pos;
        const end = nodes[packet.to].pos;
        packet.mesh.position.lerpVectors(start, end, packet.progress);
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener("mousedown", onPointerDown);
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("mouseup", onPointerUp);
      resizeObserver.disconnect();
      renderer.dispose();
      pointsGeo.dispose();
      pointsMat.dispose();
      linesGeo.dispose();
      linesMat.dispose();
      packetGeo.dispose();
      packetMat.dispose();
      circleTexture.dispose();
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  });
</script>

<div class="relative w-full h-[520px] md:h-[680px] overflow-hidden rounded-2xl border border-white/10 bg-bg-dark/40 backdrop-blur-md select-none">
  <!-- Canvas Container with cursor cue -->
  <div bind:this={container} class="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"></div>

  <!-- HUD Telemetry Overlay -->
  <div class="absolute top-6 left-6 flex flex-col gap-2 pointer-events-none z-10">
    <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-bg-surface/80 border border-accent-cyan/30 text-xs font-mono text-accent-cyan backdrop-blur-md shadow-lg shadow-accent-cyan/5">
      <span class="w-2 h-2 rounded-full bg-accent-cyan animate-ping"></span>
      <span class="font-bold">EDGE-MESH P2P</span>
      <span class="text-white/40">|</span>
      <span>TOPOLOGY: DECENTRALIZED</span>
    </div>
    <div class="flex flex-wrap items-center gap-4 text-[11px] font-mono text-text-secondary">
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

  <!-- Bottom Legend & Drag Cue -->
  <div class="absolute bottom-6 left-6 right-6 flex items-center justify-between pointer-events-none z-10">
    <span class="text-[10px] font-mono text-text-muted hidden sm:inline-block">
      ❖ Interactive 3D Mesh · Drag to rotate
    </span>
    <div class="hidden md:flex items-center gap-3 px-4 py-2 rounded-xl bg-bg-surface/80 border border-white/10 text-xs font-mono text-text-muted backdrop-blur-md">
      <span class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-accent-orange"></span> Core Nodes</span>
      <span class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-accent-emerald"></span> Enterprise Nodes</span>
      <span class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-accent-cyan"></span> Community Peers</span>
    </div>
  </div>
</div>
