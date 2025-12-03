import Link from "next/link";

export default function SonarSimToRealPage() {
  return (
    <main className="min-h-screen text-white">
      <div className="container mx-auto max-w-3xl px-4 py-16">
        <Link
          href="/#projects"
          className="inline-flex items-center text-sm text-white/60 hover:text-white mb-8"
        >
          ← Back to home
        </Link>

        <h1 className="font-serif text-3xl md:text-5xl">
          Modality Matters: A Sim-to-Real Study of Sonar-Based Object Detection
          and Tracking
        </h1>

        <p className="text-white/60 mt-2 text-sm">
          OCEANS, 2025 · Sonar Modality, Object Detection, Object Tracking
        </p>

        {/* Abstract */}
        <section className="mt-8 space-y-4">
          <h2 className="font-semibold text-lg">Abstract</h2>
          <p className="text-white/70 leading-relaxed">
            Deep learning for underwater object detection and tracking using
            sonar remains challenging due to limited labeled data and the noisy,
            modality-dependent nature of acoustic imagery. This paper presents a
            sim-to-real evaluation pipeline using two model architectures:
            YOLOv8 for detection and SiamRPN++ for tracking. Both models are
            pretrained on synthetic sonar data generated in the HoloOcean
            simulator and fine-tuned on real-world data from two types of sonar,
            a Ping360 scanning imaging sonar and an Oculus M750d multibeam
            sonar. We evaluate performance using mAP@50 for detection and
            average IoU for tracking. Results show that modality has a
            significant impact on generalization: YOLOv8 benefits from synthetic
            pretraining but struggles with domain shifts between sonar types,
            while SiamRPN++ offers more stable localization under noise but
            requires more diverse data to perform well. These findings
            underscore the need for modality-aware training and evaluation
            strategies when deploying sonar perception models in real-world
            underwater environments.
          </p>
        </section>

        {/* Demo video */}
        <section className="mt-10">
          <h2 className="font-semibold text-lg mb-3">Demo Video</h2>
          <div className="aspect-video w-full rounded-xl overflow-hidden border border-white/10">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/xXtmJIGSjl8"
              title="Demo Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>

        {/* PDF */}
        <section className="mt-10">
          <h2 className="font-semibold text-lg mb-2">Full Paper</h2>
          {/* DOI */}
          <div className="flex gap-4">
            <a
              href="https://ieeexplore.ieee.org/document/11244929"
              target="_blank"
              className="inline-flex items-center px-5 py-3 rounded-lg border border-white/20 hover:bg-white hover:text-gray-950 transition"
            >
              DOI
            </a>

            <a
              href="/OCEANS2025.pdf"
              target="_blank"
              className="inline-flex items-center px-5 py-3 rounded-lg border border-white/20 hover:bg-white hover:text-gray-950 transition"
            >
              Download PDF
            </a>
          </div>
        </section>

        {/* Contact */}
        <section className="mt-16 border-t border-white/10 pt-8">
          <p className="text-white/60 text-sm">
            Want to discuss underwater sonar perception?
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
