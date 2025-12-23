import memojiImage from "@/assets/images/chefkiss.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/baguette.svg";
import SparkleIcon from "@/assets/icons/noodle.svg";
import IceCreamIcon from "@/assets/icons/taco.svg";
import AvocadoIcon from "@/assets/icons/avocado.svg";
import CupCakeIcon from "@/assets/icons/cupcake.svg";
import { HeroOrbit } from "@/components/HeroOrbit";

export const HeroUnpublishedSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] -z-10">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="10s"
        >
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={850}
          rotation={60}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="10s"
        >
          <AvocadoIcon className="size-20 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={700}
          rotation={-110}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="10s"
        >
          <AvocadoIcon className="size-16 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={700}
          rotation={-60}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="10s"
        >
          <CupCakeIcon className="size-16 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={800}
          rotation={-150}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="10s"
        >
          <CupCakeIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="8s"
        >
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={520}
          rotation={-41}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="5s"
        >
          <IceCreamIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="6s"
        >
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="12s"
        >
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={650}
          rotation={-5}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="10s"
        >
          <IceCreamIcon className="size-12 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={710}
          rotation={144}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="12s"
        >
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={720}
          rotation={85}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="8s"
        >
          <IceCreamIcon className="size-7 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={750}
          rotation={-120}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="15s"
        >
          <StarIcon className="size-14 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={820}
          rotation={200}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="5s"
        >
          <IceCreamIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[180px]"
            alt="Person peeking from behind laptop"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">
              Drafting my first (future) cookbook
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Eric Huynh
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            A small collection of personal work—photography, cooking, and other
            side projects.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl"
          >
            <span className="font-semibold">Explore More</span>
            <ArrowDown className="size-4" />
          </a>

          <a
            href="#contactme"
            className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl"
          >
            <span>👋</span>
            <span className="font-semibold">Let&apos;s Connect</span>
          </a>
        </div>
      </div>
    </div>
  );
};
