import Link from "next/link";

export default function Icra2026Page() {
  return (
    <main className="min-h-screen text-white">
      <div className="container mx-auto max-w-3xl px-4 py-16">
        {/* Back */}
        <Link
          href="/#projects"
          className="inline-flex items-center text-sm text-white/60 hover:text-white mb-8"
        >
          ← Back to home
        </Link>

        {/* Title */}
        <h1 className="font-serif text-3xl md:text-5xl">
          Spectral Whitening and Confidence Fusion for Robust Sonar Scan
          Matching
        </h1>

        <p className="text-white/60 mt-2 text-sm">
          ICRA 2026 Submission · Sonar-centric Mapping
        </p>

        {/* Abstract */}
        <section className="mt-8 space-y-4">
          <h2 className="font-semibold text-lg">Abstract</h2>
          <p className="text-white/70 leading-relaxed">
            Robust sonar scan registration is a critical of underwater mapping
            and navigation. While Fourier-SOFT in 2D (FS2D) and related
            Fourier-based approaches provide an efficient foundation, they
            remain sensitive to rotation ambiguities and translation reliability
            in cluttered conditions. In this work, we strengthen the FS2D
            pipeline with three targeted modifications: (i) multi-ring spectral
            whitening for more stable yaw estimation, (ii) phase-only
            cross-power spectrum with peak-to-sidelobe ratio (PSR) scoring for
            sharper translation recovery, and (iii) fusion of PSR with zero-mean
            normalized cross-correlation (ZNCC) for more reliable hypothesis
            selection. We validate across synthetic ground-truth transforms,
            Gazebo simulations of river and shipwreck environments, and a
            real-world pool experiment with obstructions. Across these settings,
            our approach consistently improves yaw stability and translation
            accuracy while maintaining runtime efficiency. These findings
            demonstrate that confidence-aware spectral correlation is a
            practical and efficient path toward more reliable sonar-based SLAM
            in cluttered underwater environments.
          </p>
        </section>

        {/* Demo video */}
        <section className="mt-10">
          <h2 className="font-semibold text-lg mb-3">Demo Video</h2>
          <div className="aspect-video w-full rounded-xl overflow-hidden border border-white/10">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/c7LGXdiGTjc"
              title="Demo Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>

        {/* PDF */}
        <section className="mt-10">
          <h2 className="font-semibold text-lg mb-2">Full Paper</h2>
          <a
            href="/ICRA2026.pdf"
            target="_blank"
            className="inline-flex items-center px-5 py-3 rounded-lg border border-white/20 hover:bg-white hover:text-gray-950 transition"
          >
            Download PDF
          </a>
        </section>

        {/* Contact */}
        <section className="mt-16 border-t border-white/10 pt-8">
          <p className="text-white/60 text-sm">
            Have questions or want to discuss underwater robotics?
          </p>
          <Link
            href="mailto:itserichuynh@gmail.com"
            className="inline-flex mt-4 px-5 py-2.5 rounded-lg border border-white/20 text-sm font-semibold hover:bg-white hover:text-gray-950 transition"
          >
            Get in touch
          </Link>
        </section>
      </div>
    </main>
  );
}
