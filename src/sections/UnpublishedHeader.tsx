import Link from "next/link";

export const UnpublishedHeader = () => {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <Link href="/" className="nav-item">
          home
        </Link>
        <a href="#learning-log" className="nav-item">
          youtube
        </a>
        <a href="#gallery" className="nav-item">
          photography
        </a>
        <a href="#recipes" className="nav-item">
          recipes
        </a>
        {/* <a
          href="/projects/unpublished-experiments"
          className="nav-item hover:bg-blue-400 hover:text-gray-200"
        >
          Unpublished Experiments
        </a> */}
        <a href="mailto:itserichuynh@gmail.com" className="nav-item">
          contact
        </a>
      </nav>
    </div>
  );
};
