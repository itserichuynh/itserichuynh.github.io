import Link from "next/link";
import breadImage from "@/assets/images/jalapeno_cheddar.png";
import Image from "next/image";

export default function JalapenoCheddarBreadPage() {
  return (
    <main className="min-h-screen text-white">
      <div className="container mx-auto max-w-3xl px-4 py-16">
        <Link
          href="/projects/unpublished-experiments#projects"
          className="inline-flex items-center text-sm text-white/60 hover:text-white mb-8"
        >
          ← Back
        </Link>

        <h1 className="font-serif text-3xl md:text-5xl">
          Jalapeño Cheddar Loaf
        </h1>

        <p className="text-white/60 mt-2 text-sm">
          Unpublished Work · Bread · Spicy · Cheesy
        </p>

        {/* Intro */}
        {/* <section className="mt-8 space-y-4">
          <h2 className="font-semibold text-lg">What this is</h2>
          <p className="text-white/70 leading-relaxed">
            Not everything I make ends up in a paper. Some of it ends up on a
            plate. This is my go-to jalapeño cheddar loaf: soft inside, crisp
            crust, and just enough heat to keep things interesting.
          </p>
        </section> */}

        <section className="mt-10">
          <div className="mt-4 rounded-xl overflow-hidden border border-white/10">
            <div className="aspect-video w-full bg-white/5 flex items-center justify-center text-white/40 text-sm">
              <Image src={breadImage} alt="Jalapeno Cheddar Loaf"></Image>
            </div>

            {/* Example video slot */}
            {/* <div className="mt-4 aspect-video w-full rounded-xl overflow-hidden border border-white/10">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/VIDEO_ID_HERE"
                title="Jalapeño Cheddar Loaf"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div> */}
          </div>
        </section>

        {/* Quick facts */}
        <section className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { k: "Time", v: "3–4 hrs (same-day)" },
            { k: "Yield", v: "1 loaf" },
            { k: "Difficulty", v: "Easy–Medium" },
          ].map((item) => (
            <div
              key={item.k}
              className="rounded-xl border border-white/10 bg-white/5 p-4"
            >
              <p className="text-white/60 text-xs uppercase tracking-wide">
                {item.k}
              </p>
              <p className="mt-1 text-white/85">{item.v}</p>
            </div>
          ))}
        </section>

        {/* Ingredients */}
        <section className="mt-10">
          <h2 className="font-semibold text-lg mb-3">Ingredients</h2>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <ul className="space-y-2 text-white/75 leading-relaxed">
              <li>
                <span className="text-white/90 font-medium">Bread flour</span> —
                400 g
              </li>
              <li>
                <span className="text-white/90 font-medium">Water</span> — 280 g
                (70% hydration)
              </li>
              <li>
                <span className="text-white/90 font-medium">Salt</span> — 8 g
              </li>
              <li>
                <span className="text-white/90 font-medium">Instant yeast</span>{" "}
                — 3 g (or 5 g active dry)
              </li>
              <li>
                <span className="text-white/90 font-medium">
                  Sharp cheddar, grated
                </span>{" "}
                — 120–160 g
              </li>
              <li>
                <span className="text-white/90 font-medium">Jalapeños</span> —
                1–2 fresh, diced (or 2–3 tbsp pickled, drained)
              </li>
              <li>
                <span className="text-white/90 font-medium">Optional</span> —
                garlic powder (½ tsp), honey (1 tsp), black pepper
              </li>
            </ul>
            <p className="mt-4 text-white/60 text-sm">
              Notes: For less heat, remove seeds/ribs. For more heat, keep them.
              Use low-moisture cheddar if you can (less goo leakage).
            </p>
          </div>
        </section>

        {/* Steps */}
        <section className="mt-10 space-y-4">
          <h2 className="font-semibold text-lg">Method</h2>

          <div className="rounded-xl border border-white/10 bg-white/5 p-5 space-y-4">
            <div>
              <h3 className="font-semibold text-white/90">
                1) Mix & rest (20 min)
              </h3>
              <p className="text-white/70 leading-relaxed mt-1">
                Mix flour + water until no dry bits. Rest 15–20 minutes.
                Sprinkle in salt + yeast and mix again until combined.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white/90">
                2) First rise + folds (60–90 min)
              </h3>
              <p className="text-white/70 leading-relaxed mt-1">
                Let dough rise at room temp. Do 2–3 stretch-and-folds every
                20–30 minutes until it feels smoother and holds shape.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white/90">
                3) Add jalapeños + cheddar
              </h3>
              <p className="text-white/70 leading-relaxed mt-1">
                Gently flatten dough into a rectangle, sprinkle fillings, fold
                up, and pinch seams. If the dough fights you, rest 10 minutes
                and try again.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white/90">
                4) Shape + proof (45–75 min)
              </h3>
              <p className="text-white/70 leading-relaxed mt-1">
                Shape into a tight round or oval. Proof seam-side down on
                parchment until slightly puffy. Press test: indentation should
                slowly spring back.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white/90">5) Bake</h3>
              <p className="text-white/70 leading-relaxed mt-1">
                Preheat to <span className="text-white/85">475°F / 245°C</span>{" "}
                with Dutch oven inside for 30 minutes. Score dough. Bake{" "}
                <span className="text-white/85">20 min covered</span>, then{" "}
                <span className="text-white/85">18–22 min uncovered</span> until
                deep golden. Cool at least 45 minutes before slicing (hardest
                step).
              </p>
            </div>
          </div>
        </section>

        {/* Tips */}
        <section className="mt-10">
          <h2 className="font-semibold text-lg mb-3">Tips</h2>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <ul className="space-y-2 text-white/75 leading-relaxed">
              <li>
                If your loaf is dense: extend proof time or use warmer water.
              </li>
              <li>
                If cheese leaks: use thicker cubes instead of fine shred, or
                tuck fillings deeper when shaping.
              </li>
              <li>Want more flavor: swap 50–80 g of flour for whole wheat.</li>
            </ul>
          </div>
        </section>

        {/* Printable / Download */}
        {/* <section className="mt-10">
          <h2 className="font-semibold text-lg mb-2">Download</h2>
          <div className="flex flex-wrap gap-4">
            <a
              href="/recipes/jalapeno-cheddar-loaf.pdf"
              target="_blank"
              className="inline-flex items-center px-5 py-3 rounded-lg border border-white/20 hover:bg-white hover:text-gray-950 transition"
            >
              Printable PDF
            </a>
            <a
              href="/recipes"
              className="inline-flex items-center px-5 py-3 rounded-lg border border-white/20 hover:bg-white hover:text-gray-950 transition"
            >
              More recipes
            </a>
          </div>
          <p className="text-white/60 text-sm mt-3">
            (Optional) If you don’t have a PDF yet, remove the button for now.
          </p>
        </section> */}

        {/* Contact */}
        <section className="mt-16 border-t border-white/10 pt-8">
          <p className="text-white/60 text-sm">
            If you try it, tell me how it went (and how spicy you made it).
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
