import Image from "next/image";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
import Menu from "./menu";
import Search from "./search";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start h-3">
          <Link href="/" className="flex-start">
            <Image
              src="/images/Life-Pharmacy-Logo.png"
              alt={`${APP_NAME}`}
              height={100}
              width={100}
              priority={true}
            />
            <span className="hidden lg:block font-bold text-2xl ml-3"></span>
          </Link>
        </div>
        <div className="hidden md:block">
          <Search />
        </div>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
