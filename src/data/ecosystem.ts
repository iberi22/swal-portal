export interface SwalApp {
  id: string;
  name: string;
  tagline: string;
  category: "core" | "enterprise" | "civic" | "creator" | "mobile";
  description: string;
  stack: string[];
  status: "production" | "active" | "beta" | "published";
  repoStatus: "public" | "invite";
  repoUrl?: string;
  liveUrl?: string;
  isEnterpriseClient?: boolean;
}

export const SWAL_APPS: SwalApp[] = [
  /* OCULTO: tripro.cl / ManteniApp aún no lanzado
  {
    id: "manteniapp",
    name: "ManteniApp",
    tagline: "Industrial Field Service Management SaaS (tripro.cl)",
    category: "enterprise",
    description: "Enterprise FSM SaaS with AI diagnostics, digital approval workflows, and 100% offline-first operations for mining and heavy industry in Chile. First commercial deployment with strategic enterprise partner tripro.cl.",
    stack: ["TypeScript", "PWA", "Python", "PostgreSQL", "AI Diagnostics"],
    status: "production",
    repoStatus: "invite",
    liveUrl: "https://tripro.cl/manteniapp",
    isEnterpriseClient: true,
  },
  */
  {
    id: "xavier",
    name: "Xavier",
    tagline: "Cognitive Agentic Memory Engine & GraphRAG",
    category: "core",
    description: "High-performance persistent memory core in Rust for autonomous AI agents. Multi-tier vector indexing, GraphRAG knowledge graphs, and sealed pack verification.",
    stack: ["Rust", "Axum", "SQLite-vec", "Docker", "MCP / XTSP"],
    status: "production",
    repoStatus: "public",
    repoUrl: "https://github.com/iberi22/xavier",
  },
  {
    id: "edge-mesh",
    name: "edge-mesh",
    tagline: "P2P Data Plane & Post-Quantum Network",
    category: "core",
    description: "Decentralized peer-to-peer data plane with real-time CRDT synchronization, gossip protocol, and post-quantum cryptographic identity (ML-DSA-65 / ML-KEM-768).",
    stack: ["Rust", "libp2p", "Tokio", "CRDT / Yjs", "Post-Quantum"],
    status: "production",
    repoStatus: "public",
    repoUrl: "https://github.com/iberi22/edge-mesh",
  },
  {
    id: "swal-agent-runner",
    name: "swal-agent-runner",
    tagline: "Autonomous Agent Runtime & VFS Sandboxes",
    category: "core",
    description: "Secure, sandboxed execution runtime for local AI agents with virtual filesystem isolation, role-based orchestration, and GitCore 3.8 task execution.",
    stack: ["Rust", "VFS", "WASM", "GitCore 3.8"],
    status: "production",
    repoStatus: "public",
    repoUrl: "https://github.com/iberi22/swal-agent-runner",
  },
  {
    id: "swal-ui",
    name: "@swal/ui",
    tagline: "Unified Hive Dark Design System",
    category: "core",
    description: "Modular, accessible design system engineered in Svelte 5 and Tailwind CSS 4, defining the visual identity and interaction patterns across the SWAL network.",
    stack: ["Svelte 5", "Tailwind CSS 4", "Design Tokens"],
    status: "production",
    repoStatus: "public",
    repoUrl: "https://github.com/iberi22/swal-ui",
  },
  {
    id: "worldexams",
    name: "SaberParaTodos (WorldExams)",
    tagline: "Decentralized Free Educational Testing Platform",
    category: "civic",
    description: "Academic preparation and testing engine for 16+ countries with automated question generation and local-first AI evaluation.",
    stack: ["Astro 6", "Svelte 5", "TypeScript", "Tailwind CSS"],
    status: "production",
    repoStatus: "invite",
    liveUrl: "https://saberparatodos.space",
  },
  {
    id: "shelf",
    name: "Shelf",
    tagline: "Offline-First POS & Inventory Engine",
    category: "enterprise",
    description: "Point of sale and inventory management PWA with peer-to-peer CRDT sync. Sell anywhere without internet or expensive proprietary cloud cash registers.",
    stack: ["React 19", "TypeScript", "Yjs", "IndexedDB", "CRDT"],
    status: "production",
    repoStatus: "invite",
    liveUrl: "https://estante-inventario.vercel.app",
  },
  {
    id: "orionhealth",
    name: "OrionHealth",
    tagline: "Privacy-First Health Assistant & SSI",
    category: "mobile",
    description: "Encrypted personal health ecosystem featuring Self-Sovereign Identity (SSI) on-device, automated sync engines, and offline medical records.",
    stack: ["Flutter", "Dart", "Encrypted SQLite", "SSI"],
    status: "active",
    repoStatus: "public",
    repoUrl: "https://github.com/iberi22/OrionHealth",
  },
  {
    id: "isar-memory",
    name: "Isar Agent Memory",
    tagline: "On-Device Semantic Memory for Dart & Flutter",
    category: "mobile",
    description: "High-performance vector memory and knowledge graph package published on pub.dev for offline-first Flutter AI applications.",
    stack: ["Dart", "pub.dev", "Isar Database", "Embeddings"],
    status: "published",
    repoStatus: "public",
    liveUrl: "https://pub.dev/packages/isar_agent_memory",
    repoUrl: "https://github.com/iberi22/isar_agent_memory",
  },
  {
    id: "swal-files",
    name: "SWAL Files",
    tagline: "GPU-Accelerated Native Agentic File Manager",
    category: "core",
    description: "Ultra-fast file manager in native Rust powered by WGPU hardware rendering and integrated local agent context extraction.",
    stack: ["Rust", "WGPU", "Tokio", "macOS QuickLook"],
    status: "active",
    repoStatus: "public",
    repoUrl: "https://github.com/iberi22/swal-files",
  },
  {
    id: "pocket-cerebro",
    name: "Pocket Cerebro",
    tagline: "Offline AI Assistant & Wearables Runtime",
    category: "mobile",
    description: "Mobile and wearable (WearOS) personal AI assistant running private on-device models with multi-tier memory synchronization.",
    stack: ["Flutter", "WearOS", "Isar", "ONNX Runtime"],
    status: "active",
    repoStatus: "invite",
  },
  {
    id: "swal-vault",
    name: "SWAL Vault",
    tagline: "Self-Sovereign Identity & Passkey Bóveda",
    category: "core",
    description: "Zero-knowledge biometric passkey wallet and decentralized identity provider integrating with Xavier Clavis.",
    stack: ["Flutter", "Rust FFI", "Passkeys", "WebAuthn"],
    status: "active",
    repoStatus: "invite",
  },
  {
    id: "tiktboost",
    name: "TikTokBoost",
    tagline: "Local-First TikTok Studio & AI Analytics",
    category: "creator",
    description: "Content scheduling, predictive video engagement metrics, and automated video generation studio running 100% in-browser.",
    stack: ["Svelte 5", "Astro", "TypeScript", "Canvas API"],
    status: "production",
    repoStatus: "invite",
    liveUrl: "https://tiktboost.vercel.app",
  },
  {
    id: "maloca",
    name: "Maloca",
    tagline: "Community Governance & Council Assembly Hub",
    category: "core",
    description: "Universal governance module where humans and autonomous agent delegates deliberate, vote, and manage shared repositories.",
    stack: ["Svelte 5", "SurrealDB", "CRDT", "Governance DAO"],
    status: "active",
    repoStatus: "invite",
  },
  {
    id: "gos",
    name: "GOS (Gastronomic Open Standard)",
    tagline: "Open Culinary Data & Recipe Interoperability",
    category: "civic",
    description: "Open standard and PWA for structured recipe documentation, nutritional analysis, and decentralized restaurant reviews.",
    stack: ["Astro", "JSON Schema", "Flutter PWA"],
    status: "active",
    repoStatus: "public",
    repoUrl: "https://github.com/iberi22/gastronomic-open-standard-GOS",
  },
  {
    id: "veedur-ia",
    name: "Veedur-IA.co",
    tagline: "Civic Intelligence & Public Procurement Audit",
    category: "civic",
    description: "Civic oversight platform for automated anomaly detection, network graphs, and transparency in public contract records (SECOP).",
    stack: ["Astro", "Python", "NLP", "Knowledge Graphs"],
    status: "active",
    repoStatus: "invite",
  },
  {
    id: "nido",
    name: "Nido",
    tagline: "AI-Assisted Architectural & Space Designer",
    category: "creator",
    description: "Interactive architectural layout and interior floor planning tool with WebGPU hardware acceleration and AI layout generation.",
    stack: ["WebGPU", "Svelte 5", "TypeScript", "Geometry Engines"],
    status: "active",
    repoStatus: "invite",
  },
  ];

export const ISO_STANDARDS = [
  {
    code: "ISO 27001:2022",
    name: "Information Security Management System (ISMS)",
    coverage: "100% Control Mapping",
    desc: "End-to-end cryptographic protection (AES-256-GCM / ML-KEM-768), strict role-based access control (RBAC), and hardware vault isolation.",
    badge: "Security Base"
  },
  {
    code: "ISO 27701:2019",
    name: "Privacy Information Management System (PIMS)",
    coverage: "Local-First Architecture",
    desc: "Guaranteed zero PII exfiltration. User data is processed on-device and never shared or aggregated without explicit local consent.",
    badge: "Privacy Sovereign"
  },
  {
    code: "ISO 27017 / 27018",
    name: "Cloud Security & PII Protection in Cloud",
    coverage: "Zero-Knowledge Persistence",
    desc: "Cloud persistence nodes store only encrypted raw bytes. Storage providers possess zero capability to inspect or parse payload data.",
    badge: "Cloud Zero-Knowledge"
  },
  {
    code: "ISO 42001:2023",
    name: "Artificial Intelligence Management System (AIMS)",
    coverage: "Human-in-the-Loop AI",
    desc: "Deterministic audit trails for all agentic decisions. AI agents advise and coordinate but never hold unilateral voting authority.",
    badge: "AI Governance"
  }
];

/* OCULTO: tripro.cl / ManteniApp aún no lanzado
export const TRIPRO_CASE_STUDY = {
  partnerName: "tripro.cl",
  country: "Chile",
  industry: "Industrial Mining & Engineering Field Services",
  flagshipApp: "ManteniApp",
  quote: "tripro.cl fue el primer socio comercial que confió en nuestra empresa, posicionándose como cliente pionero y empresa referente que utiliza el software de SWAL para fortalecer su operación y proteger la privacidad de sus datos sin costes adicionales.",
  metrics: [
    { label: "Uptime en Terreno", value: "100%", detail: "Operación continua en faenas sin internet" },
    { label: "Coste por Usuario", value: "$0 / mes", detail: "Sin licencias SaaS recurrentes" },
    { label: "Privacidad de Datos", value: "100% Local", detail: "Datos operativos soberanos en Chile" },
    { label: "Firmas Digitales", value: "Instantáneas", detail: "Validación biométrica en terreno" }
  ]
};
*/
