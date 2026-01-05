import Link from "next/link";

export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <Link href="/" className="nav-item">
          Home
        </Link>
        <a href="#projects" className="nav-item">
          Projects
        </a>
        <a href="#aboutme" className="nav-item">
          About
        </a>
        <a href="/Eric_CV.pdf" className="nav-item">
          CV
        </a>
        <a
          href="/projects/unpublished-experiments"
          className="
            nav-item
            relative
            transition-colors duration-300
            hover:text-white
            after:absolute after:left-0 after:-bottom-1
            after:h-[2px] after:w-0
            after:bg-gradient-to-r after:from-emerald-300 after:to-sky-400
            after:transition-all after:duration-300
            hover:after:w-full
          "
        >
          Unpublished Experiments
        </a>
        <a href="mailto:itserichuynh@gmail.com" className="nav-item">
          Contact
        </a>
      </nav>
    </div>
  );
};
