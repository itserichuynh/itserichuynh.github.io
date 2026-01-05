import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/Card";

// Import ALL your photos here (not limited)
import photo1 from "@/assets/images/photography/nighthawks.jpeg";
import photo2 from "@/assets/images/photography/american_gothics.jpeg";
import photo3 from "@/assets/images/photography/staircase.jpeg";
import photo4 from "@/assets/images/photography/starry_night.jpg";
import photo5 from "@/assets/images/photography/empire_state.jpg";
import photo6 from "@/assets/images/photography/guggenheim.jpg";

type GalleryPhoto = {
  src: any;
  alt: string;
  caption: string;
  tag?: string;
};

const allPhotos: GalleryPhoto[] = [
  {
    src: photo1,
    alt: "Museum light over a quiet hallway",
    caption: "soft light, holding still",
    tag: "museum",
  },
  {
    src: photo2,
    alt: "A frame inside a frame",
    caption: "frames within frames",
    tag: "museum",
  },
  {
    src: photo3,
    alt: "A person pausing in front of a painting",
    caption: "the pause before wonder",
    tag: "people",
  },
  {
    src: photo4,
    alt: "Museum visitors drifting by",
    caption: "quiet traffic of footsteps",
    tag: "people",
  },
  {
    src: photo5,
    alt: "Film texture with warm grain",
    caption: "grain like a small memory",
    tag: "film",
  },
  {
    src: photo6,
    alt: "A museum corner, barely noticed",
    caption: "a corner that kept its secret",
    tag: "film",
  },
];

export default function PhotographyPage() {
  return (
    <main className="min-h-screen text-white">
      <div className="container mx-auto max-w-5xl px-4 py-16">
        <Link
          href="/projects/unpublished-experiments#photography"
          className="inline-flex items-center text-sm text-white/60 hover:text-white mb-8"
        >
          ← Back to home
        </Link>

        <h1 className="font-serif text-3xl md:text-5xl">People & Paintings</h1>
        <p className="text-white/60 mt-3 max-w-2xl">
          A full gallery — museums, film days, and the quiet moments in between.
        </p>

        <div className="mt-10">
          <Card className="p-4 md:p-6 lg:p-8">
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
              {allPhotos.map((p, idx) => (
                <figure
                  key={idx}
                  className="mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                >
                  <Image
                    src={p.src}
                    alt={p.alt}
                    className="w-full h-auto object-cover"
                    placeholder="blur"
                  />
                  <figcaption className="p-4">
                    <p className="text-sm text-white/80 leading-snug">
                      {p.caption}
                    </p>
                    {p.tag ? (
                      <p className="text-xs text-white/45 mt-2">{p.tag}</p>
                    ) : null}
                  </figcaption>
                </figure>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}
