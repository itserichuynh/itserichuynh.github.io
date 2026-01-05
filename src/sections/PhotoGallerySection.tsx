"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { Card } from "@/components/Card";

// Replace with your real imports
import nighthakws from "@/assets/images/photography/nighthawks.jpeg";
import american_gothics from "@/assets/images/photography/american_gothics.jpeg";
import staircase from "@/assets/images/photography/staircase.jpeg";
import starry_night from "@/assets/images/photography/starry_night.jpg";
import empire_state from "@/assets/images/photography/empire_state.jpg";
import guggenheim from "@/assets/images/photography/guggenheim.jpg";
import sunset from "@/assets/images/photography/sunset.jpg";
import lake_michigan from "@/assets/images/photography/lake_michigan.jpg";
import hiking from "@/assets/images/photography/hiking.jpg";
// (Add up to 12 here)

type GalleryPhoto = {
  src: any;
  alt: string;
  caption: string; // whispery caption
  tag?: string;
};

export const PhotographyGallerySection = () => {
  const photos: GalleryPhoto[] = useMemo(
    () => [
      {
        src: nighthakws,
        alt: "Museum visitors standing in front of Edward Hopper’s Nighthawks painting.",
        caption: "watch people watch loneliness",
        tag: "The Art Institute of Chicago",
      },
      {
        src: american_gothics,
        alt: "People photographing Grant Wood’s American Gothic.",
        caption: "everyone looking, differently",
        tag: "The Art Institute of Chicago",
      },
      {
        src: staircase,
        alt: "The museum staircase in the Institute of Art in Chicago.",
        caption: "light resting on stone",
        tag: "The Art Institute of Chicago",
      },
      {
        src: starry_night,
        alt: "Two visitors standing in front of Van Gogh’s The Starry Night, one holding up a phone to take a photo.",
        caption: "trying to keep the stars",
        tag: "MoMA",
      },
      {
        src: empire_state,
        alt: "The Empire State Building seen between city buildings at dusk, reflected through glass.",
        caption: "the city, softened by glass",
        tag: "New York",
      },
      {
        src: guggenheim,
        alt: "Curved ramps inside the Guggenheim Museum with hanging plants and people leaning over railings.",
        caption: "gravity feels quieter here",
        tag: "Guggenheim Museum",
      },
      {
        src: sunset,
        alt: "A crowd seated under a bridge in Chicago watching sunlight spill into a city skyline.",
        caption: "the day finding its way out",
        tag: "Chicago River",
      },
      {
        src: lake_michigan,
        alt: "Boats scattered across Lake Michigan viewed from above near the shoreline.",
        caption: "too big to be a lake",
        tag: "Lake Michigan",
      },
      {
        src: hiking,
        alt: "A small group hiking uphill through snow toward bright winter sunlight in a forest.",
        caption: "moving forward, slowly",
        tag: "Kearsage Mnt.",
      },
      // Add up to 12
    ],
    []
  );

  // Only show 6–12 on homepage:
  const HOME_LIMIT = 9; // pick any number from 6–12
  const homePhotos = photos.slice(0, HOME_LIMIT);

  // Music: off by default, low volume
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio("/audio/In_Dreamland_by_Chillpeach.mp3"); // put file in /public/audio/
    audio.loop = true;
    audio.volume = 0.2; // 0.15–0.25
    audioRef.current = audio;
    setIsReady(true);

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (audio.paused) {
        await audio.play();
        setIsPlaying(true);
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    } catch {
      setIsPlaying(false);
    }
  };

  return (
    <section id="gallery" className="pb-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
            Photography
          </p>
        </div>

        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          A quiet gallery
        </h2>

        <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-xl mx-auto">
          Moments, briefly held.
        </p>

        {/* Controls row: music + link to full gallery */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
          <button
            onClick={toggleMusic}
            disabled={!isReady}
            className={[
              "h-11 px-5 rounded-xl font-semibold inline-flex items-center justify-center",
              "border border-white/10",
              isReady
                ? "bg-white/10 hover:bg-white/15 text-white"
                : "bg-white/5 text-white/40 cursor-not-allowed",
            ].join(" ")}
            title="Click to play/pause background music"
          >
            {isPlaying ? "Pause music" : "Play music"}
          </button>

          {/* <Link
            href="/projects/photography"
            className="h-11 px-5 rounded-xl font-semibold inline-flex items-center justify-center border border-white/10 bg-white text-gray-950 hover:bg-white/90"
          >
            View full gallery →
          </Link> */}
          <span
            className="h-11 px-5 rounded-xl font-semibold inline-flex items-center justify-center
             border border-white/10 bg-white/5 text-white/50 cursor-not-allowed"
            title="Gallery coming soon"
          >
            Full gallery coming soon
          </span>
        </div>

        <div className="mt-10 md:mt-14">
          <Card className="p-4 md:p-6 lg:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {homePhotos.map((p, idx) => (
                <figure
                  key={idx}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                >
                  <Image
                    src={p.src}
                    alt={p.alt}
                    className="h-[320px] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                    placeholder="blur"
                  />

                  {/* optional small tag */}
                  {p.tag ? (
                    <figcaption className="absolute left-3 top-3">
                      <span className="text-xs px-3 py-1 rounded-full bg-black/40 backdrop-blur border border-white/10 text-white/80">
                        {p.tag}
                      </span>
                    </figcaption>
                  ) : null}

                  {/* whispery caption always visible (subtle), stronger on hover */}
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <div className="rounded-xl border border-white/10 bg-black/35 backdrop-blur px-4 py-3">
                      <p className="text-sm text-white/85 leading-snug">
                        {p.caption}
                      </p>
                    </div>
                  </div>
                </figure>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm text-white/55">
                Mostly shot on my Fujifilm camera. Trying to use my film camera
                more though...
              </p>
              {/* <Link
                href="/projects/photography"
                className="text-sm text-white/70 hover:text-white underline underline-offset-4"
              >
                See everything in /photography
              </Link> */}
            </div>
            <div className="gap-3">
              <Link
                href="https://www.youtube.com/watch?v=DSWYAclv2I8"
                className="text-sm text-white/70 hover:text-white underline underline-offset-4"
              >
                Music: Chillpeach - &apos;In Dreamland&apos; background music
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
