import { cn } from "@/lib/utils";
import Buttonn from "./button";
import { Source_Code_Pro } from "next/font/google";

const fontt = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["700"],
});
const Header = () => {
  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  border-b border-n-6  lg:backdrop-blur-sm py-4
    
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10   justify-between">
        <a className="block w-fit xl:mr-8" href="#hero">
          <img
            src={"/1000139820 (5).png"}
            width={105}
            height={40}
            alt="Brainwave"
          />
        </a>

        <div className={cn("flex items-center gap-x-3 mr-0.5", fontt.className)}>
          <a
            href="#signup"
            className="text-xs font-bold uppercase tracking-wider  mr-8 text-n-1/50 transition-colors hover:text-n-1 "
          >
            New account
          </a>
          <Buttonn
            className="text-white  letter uppercase hover:text-purple-400 text-[0.75rem] transition-colors"
            href="#login"
          >
            Sign in
          </Buttonn>
        </div>
      </div>
    </div>
  );
};

export default Header;
