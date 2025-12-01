import Link from "next/link";

export default function UnderwaterEnhancementPage() {
  return (
    <main className="min-h-screen text-white">
      <div className="container mx-auto max-w-3xl px-4 py-16">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-white/60 hover:text-white mb-8"
        >
          ← Back to home
        </Link>

        <h1 className="font-serif text-3xl md:text-5xl">
          Optimizing Underwater Image Enhancement Algorithms Through HoloOcean
          Simulator
        </h1>

        <p className="text-white/60 mt-2 text-sm">NERC 2024 Poster</p>

        {/* Abstract */}
        <section className="mt-8 space-y-4">
          <h2 className="font-semibold text-lg">Abstract</h2>
          <p className="text-white/70 leading-relaxed">
            This project uses the HoloOcean simulator to test and refine
            underwater image enhancement algorithms under controllable
            turbidity, lighting, and depth conditions. We evaluate
            transformer-based and GAN-based enhancement methods to recover
            color, clarity, and detail from degraded underwater images without
            requiring physical access to an underwater testing environment.
          </p>
        </section>

        {/* Demo video */}
        <section className="mt-10">
          <h2 className="font-semibold text-lg mb-3">Demo Video</h2>
          <div className="aspect-video w-full rounded-xl overflow-hidden border border-white/10">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/2uz9l6BaipI"
              title="Demo Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>

        {/* PDF */}
        <section className="mt-10">
          <h2 className="font-semibold text-lg mb-2">Poster PDF</h2>
          <a
            href="/Huynh-NERC2024Poster.pdf"
            target="_blank"
            className="inline-flex items-center px-5 py-3 rounded-lg border border-white/20 hover:bg-white hover:text-gray-950 transition"
          >
            View Poster
          </a>
        </section>

        {/* Contact */}
        <section className="mt-16 border-t border-white/10 pt-8">
          <p className="text-white/60 text-sm">
            Want to learn more about my underwater vision work?
          </p>
          <Link
            href="/#contactme"
            className="inline-flex mt-4 px-5 py-2.5 rounded-lg border border-white/20 text-sm font-semibold hover:bg-white hover:text-gray-950 transition"
          >
            Contact me
          </Link>
        </section>
      </div>
    </main>
  );
}
