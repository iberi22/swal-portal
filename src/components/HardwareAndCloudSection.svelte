<script lang="ts">
  let selectedHardware = <'gpu' | 'cpu'>('gpu');
  let estimatedCost = (' -  / mo');
</script>

<section id="gpu-cloud" class="py-24 px-6 relative border-t border-white/5">
  <div class="max-w-7xl mx-auto space-y-16">
    <!-- Header -->
    <div class="space-y-4 max-w-3xl">
      <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-xs font-mono text-accent-cyan">
        <span>COMPUTE & PERSISTENCE</span>
      </div>
      <h2 class="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
        Local GPU Inference & <span class="text-accent-cyan">Cloud Membership</span>
      </h2>
      <p class="text-text-secondary text-base md:text-lg leading-relaxed">
        Zero software paywalls. Compute runs locally whenever hardware is present. Cloud persistence is billed strictly at direct infrastructure cost.
      </p>
    </div>

    <!-- 2 Column Comparison -->
    <div class="grid lg:grid-cols-2 gap-8">
      <!-- Local GPU Mode -->
      <div class="glass-panel p-8 md:p-10 space-y-6 border-accent-cyan/30 bg-gradient-to-br from-bg-surface to-accent-cyan/5">
        <div class="flex items-center justify-between">
          <div class="w-12 h-12 rounded-2xl bg-accent-cyan/10 border border-accent-cyan/30 flex items-center justify-center text-2xl">
            ⚡
          </div>
          <span class="px-3 py-1 rounded-full bg-accent-cyan text-bg-void text-xs font-mono font-bold uppercase">
            100% Free & Private
          </span>
        </div>

        <div class="space-y-2">
          <h3 class="text-2xl font-bold text-white">Local GPU Acceleration</h3>
          <p class="text-xs font-mono text-accent-cyan">WebGPU · wgpu · Ollama · llama.cpp</p>
        </div>

        <p class="text-sm text-text-secondary leading-relaxed">
          If your device is equipped with a dedicated or integrated GPU (NVIDIA RTX, Apple Silicon M-series, AMD, Vulkan), SWAL applications run LLM and visual inference locally. Your prompts, embeddings, and context never leave your silicon.
        </p>

        <div class="space-y-2.5 pt-2 border-t border-white/5 font-mono text-xs text-text-muted">
          <div class="flex items-center gap-2 text-white">
            <span class="text-accent-cyan">✔</span> Zero latency overhead
          </div>
          <div class="flex items-center gap-2 text-white">
            <span class="text-accent-cyan">✔</span> 100% Offline execution
          </div>
          <div class="flex items-center gap-2 text-white">
            <span class="text-accent-cyan">✔</span> Zero API tokens consumed
          </div>
        </div>
      </div>

      <!-- Partner Cloud Persistence -->
      <div class="glass-panel p-8 md:p-10 space-y-6 border-accent-emerald/30 bg-gradient-to-br from-bg-surface to-accent-emerald/5">
        <div class="flex items-center justify-between">
          <div class="w-12 h-12 rounded-2xl bg-accent-emerald/10 border border-accent-emerald/30 flex items-center justify-center text-2xl">
            ☁️
          </div>
          <span class="px-3 py-1 rounded-full bg-accent-emerald text-bg-void text-xs font-mono font-bold uppercase">
            Cost-Only Pricing
          </span>
        </div>

        <div class="space-y-2">
          <h3 class="text-2xl font-bold text-white">Partner Cloud Persistence</h3>
          <p class="text-xs font-mono text-accent-emerald">Encrypted Multi-Region Redundancy</p>
        </div>

        <p class="text-sm text-text-secondary leading-relaxed">
          Optional off-site persistence membership for continuous cloud backup and multi-device sync across continents. Pricing is strictly transparent: <strong>you only pay for the raw cloud resources consumed</strong> (storage, bandwidth, fallback LLM tokens).
        </p>

        <div class="space-y-2.5 pt-2 border-t border-white/5 font-mono text-xs text-text-muted">
          <div class="flex items-center gap-2 text-white">
            <span class="text-accent-emerald">✔</span> Zero software markup (bash license fee)
          </div>
          <div class="flex items-center gap-2 text-white">
            <span class="text-accent-emerald">✔</span> End-to-end encrypted storage blobs
          </div>
          <div class="flex items-center gap-2 text-white">
            <span class="text-accent-emerald">✔</span> Tiered pricing starting at real VPS cost
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
