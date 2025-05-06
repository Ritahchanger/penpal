import Image from "next/image";

import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="text-lg font-bold tracking-wider hover:opacity-80 flex items-center space-x-2"
    >
      <Image src="/icons/pen-tool.png" alt="Logo" width={24} height={24} />
      <span className="hidden sm:inline text-white">Bemi Editors</span>
    </Link>
  );
};

export default Logo;
