import Link from "next/link";

export default function ProstheticArmPage() {
  return (
    <main className="min-h-screen text-white">
      <div className="container mx-auto max-w-3xl px-4 py-16">
        {/* Back link */}
        <Link
          href="/#projects"
          className="inline-flex items-center text-sm text-white/60 hover:text-white mb-8"
        >
          ← Back to home
        </Link>

        {/* Title */}
        <h1 className="font-serif text-3xl md:text-5xl">
          3D-Printed Prosthetic Arm with Tendon-Driven Actuation
        </h1>

        <p className="text-white/60 mt-2 text-sm">
          MassBay STEM Expo, 2019 - 2020
        </p>

        {/* Abstract */}
        <section className="mt-8 space-y-4">
          <h2 className="font-semibold text-lg">Overview</h2>
          <p className="text-white/70 leading-relaxed">
            This project explores low-cost 3D-printed prosthetic arm. I designed
            and 3D-printed all parts in SolidWorks, routed tendons using elastic
            and non-elastic cords through the joints, and used four servos to
            actuate all five fingers. Control signals come either from an EMG
            sensor or from a MATLAB character-recognition pipeline, which
            identified handwritten characters and triggered American Sign
            Language gestures on the hand.
          </p>
          <p className="text-white/70 leading-relaxed">
            During the second semester, I extended the arm design to include an
            elbow joint. I used a Kinect camera to identify the human supervisor
            elbow angle to control the arm.
          </p>
        </section>

        {/* Demo videos side by side */}
        <section className="mt-10">
          <h2 className="font-semibold text-lg mb-4">Demo Videos</h2>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Muscle sensor demo */}
            <div className="space-y-2">
              <h3 className="font-medium text-sm md:text-base">
                Muscle sensor–controlled arm
              </h3>
              <div className="aspect-video w-full rounded-xl overflow-hidden border border-white/10">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/mZ35tk0hR1w"
                  title="Muscle sensor prosthetic arm demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {/* ASL demo */}
            <div className="space-y-2">
              <h3 className="font-medium text-sm md:text-base">
                American Sign Language demo
              </h3>
              <div className="aspect-video w-full rounded-xl overflow-hidden border border-white/10">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/RWwLrfof85E"
                  title="ASL prosthetic hand demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Humanoid Arm */}
            <div className="space-y-2">
              <h3 className="font-medium text-sm md:text-base">Humanoid Arm</h3>
              <div className="aspect-video w-full rounded-xl overflow-hidden border border-white/10">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/4SJMyIUztRA"
                  title="Humanoid Arm Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>

        {/* Quick details */}
        <section className="mt-10 space-y-3">
          <h2 className="font-semibold text-lg">Project Details</h2>
          <ul className="list-disc list-inside text-white/70 text-sm leading-relaxed space-y-1.5">
            <li>
              Designed modular fingers, palm, and forearm in SolidWorks with
              routed tendon paths and a servo mounting frame.
            </li>
            <li>
              Used elastic and inelastic paracord as artificial tendons to flex
              and extend the fingers via four hobby servos.
            </li>
            <li>
              Implemented EMG-based control using a bicep muscle sensor with an
              Arduino.
            </li>
            <li>
              Built a MATLAB pipeline for character recognition to trigger ASL
              gestures on the prosthetic hand.
            </li>
          </ul>
        </section>

        {/* Contact */}
        <section className="mt-16 border-t border-white/10 pt-8">
          <p className="text-white/60 text-sm">
            Want to chat about low-cost prosthetics or student hardware
            projects?
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
