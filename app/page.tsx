import { Play, ArrowRight, Sparkles, Binary, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-white sm:bg-zinc-50">
      <div className="pointer-events-none absolute inset-0">
        <div className="hero-grid absolute inset-0 opacity-15 sm:opacity-25" />
        <div className="absolute -left-32 top-12 size-72 rounded-full bg-lime-200/40 blur-3xl" />
        <div className="absolute right-0 top-24 size-72 rounded-full bg-cyan-200/35 blur-3xl" />
        <div className="absolute bottom-6 left-1/3 size-72 rounded-full bg-orange-200/30 blur-3xl" />
      </div>

      <section className="relative mx-auto grid min-h-screen w-full max-w-7xl items-center gap-10 px-5 py-16 max-[389px]:gap-8 max-[389px]:px-4 max-[389px]:py-12 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
        <div className="flex flex-col gap-6 max-[389px]:gap-5 lg:gap-7">
          <div className="fade-up inline-flex w-fit items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-zinc-700 max-[389px]:px-2.5 max-[389px]:py-0.5 max-[389px]:text-[10px] max-[389px]:tracking-[0.08em] sm:border-zinc-900/20">
            <Sparkles className="size-3.5" />
            Editorial learning platform for interview mastery
          </div>

          <div className="fade-up fade-up-delay-1 flex flex-col gap-4 lg:gap-5">
            <h1 className="text-balance text-[2.2rem] font-semibold leading-[1.02] tracking-[-0.015em] text-zinc-900 max-[389px]:text-[1.95rem] max-[389px]:leading-[1.06] max-[389px]:tracking-[-0.01em] sm:text-5xl sm:leading-[0.98] sm:tracking-[-0.02em] lg:text-[5rem]">
              Don&apos;t Memorize
              <span className="block">Algorithms.</span>
              <span className="inline-block bg-zinc-900 px-3 py-1 text-zinc-100 max-[389px]:px-2.5 max-[389px]:py-0.5 sm:bg-zinc-950 sm:text-lime-300">
                Read Their Logic.
              </span>
            </h1>
            <p className="max-w-xl text-pretty text-[0.98rem] leading-relaxed text-zinc-700 max-[389px]:text-[0.93rem] max-[389px]:leading-[1.58] sm:text-lg sm:leading-relaxed">
              A high-clarity DSA workspace that visualizes each move in linked lists, trees, graphs,
              recursion, and DP. Train your reasoning so you can justify decisions live in interviews.
            </p>
          </div>

          <div className="fade-up fade-up-delay-2 flex flex-col gap-2.5 sm:flex-row sm:items-center">
            <Button size="lg" className="h-11 w-full bg-zinc-900 px-5 text-zinc-100 hover:bg-zinc-800 max-[389px]:h-10 max-[389px]:text-sm sm:w-auto sm:bg-zinc-950 sm:text-lime-300">
              Start Learning Free
              <ArrowRight data-icon="inline-end" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-11 w-full border-zinc-300 px-5 text-zinc-900 hover:bg-zinc-900 hover:text-white max-[389px]:h-10 max-[389px]:text-sm sm:w-auto sm:border-zinc-950"
            >
              <Play data-icon="inline-start" />
              Watch 2-Min Demo
            </Button>
          </div>

          <div className="fade-up fade-up-delay-3 grid gap-2 text-sm text-zinc-700 max-[389px]:text-[13px] sm:grid-cols-2">
            <p className="flex items-center gap-2 rounded-md border border-zinc-200 bg-zinc-50/80 px-3 py-2 max-[389px]:gap-1.5 max-[389px]:px-2.5 max-[389px]:py-1.5 sm:border-zinc-900/10 sm:bg-white">
              <CheckCircle2 className="size-4 text-zinc-950" />
              No credit card required
            </p>
            <p className="flex items-center gap-2 rounded-md border border-zinc-200 bg-zinc-50/80 px-3 py-2 max-[389px]:gap-1.5 max-[389px]:px-2.5 max-[389px]:py-1.5 sm:border-zinc-900/10 sm:bg-white">
              <CheckCircle2 className="size-4 text-zinc-950" />
              320+ interview patterns
            </p>
            <p className="flex items-center gap-2 rounded-md border border-zinc-200 bg-zinc-50/80 px-3 py-2 max-[389px]:gap-1.5 max-[389px]:px-2.5 max-[389px]:py-1.5 sm:border-zinc-900/10 sm:bg-white">
              <CheckCircle2 className="size-4 text-zinc-950" />
              Real-time execution timeline
            </p>
            <p className="flex items-center gap-2 rounded-md border border-zinc-200 bg-zinc-50/80 px-3 py-2 max-[389px]:gap-1.5 max-[389px]:px-2.5 max-[389px]:py-1.5 sm:border-zinc-900/10 sm:bg-white">
              <CheckCircle2 className="size-4 text-zinc-950" />
              Designed for FAANG-style rounds
            </p>
          </div>
        </div>

        <div className="fade-up fade-up-delay-2 relative">
          <div className="pulse-soft absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-zinc-900/5 via-lime-100/40 to-cyan-100/30 blur-xl" />
          <div className="relative flex flex-col gap-4 rounded-[2rem] border border-zinc-300 bg-white p-4 shadow-[0_28px_80px_-50px_rgba(0,0,0,0.45)] max-[389px]:gap-3 max-[389px]:p-3.5 sm:gap-5 sm:border-2 sm:border-zinc-950 sm:p-6 sm:shadow-[0_40px_100px_-55px_rgba(0,0,0,0.7)]">
            <div className="flex items-center justify-between rounded-xl border border-zinc-800/20 bg-zinc-900 px-3 py-2 text-xs text-zinc-300 sm:border-zinc-950/20 sm:bg-zinc-950">
              <span className="font-medium text-lime-300">Binary Search Tree Insert</span>
              <span className="rounded-md bg-zinc-800 px-2 py-1 font-mono text-zinc-100">Step 08 / 16</span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-zinc-900/20 bg-zinc-50 p-4">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-zinc-600">
                  Code Playback
                </p>
                <div className="flex flex-col gap-2 font-mono text-xs text-zinc-900">
                  <p className="rounded-md border border-zinc-900/10 bg-lime-100 px-2 py-1">if value &lt; node.val:</p>
                  <p className="rounded-md border border-zinc-900/10 bg-cyan-100 px-2 py-1">node = node.left</p>
                  <p className="rounded-md px-2 py-1">insert(node, value)</p>
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-900/20 bg-zinc-50 p-4">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-zinc-600">
                  State Snapshot
                </p>
                <div className="flex flex-col gap-2 text-xs text-zinc-900">
                  <div className="flex items-center justify-between rounded-md border border-zinc-900/10 bg-white px-2 py-1">
                    <span>Current Node</span>
                    <span>52</span>
                  </div>
                  <div className="flex items-center justify-between rounded-md border border-zinc-900/10 bg-white px-2 py-1">
                    <span>Decision</span>
                    <span>Go Left</span>
                  </div>
                  <div className="flex items-center justify-between rounded-md border border-zinc-900/10 bg-white px-2 py-1">
                    <span>Path</span>
                    <span>[70, 60, 52]</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-3 rounded-xl border border-zinc-950/20 bg-zinc-100 px-4 py-3 sm:grid-cols-2">
              <div className="flex items-center gap-2 text-sm font-medium text-zinc-900">
                <Binary className="size-4 text-zinc-900" />
                Reasoning mode: ON
              </div>
              <p className="text-xs text-zinc-700 sm:text-right">High-contrast trace view for fast mental parsing</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
