"use client";
import { TypographyH2 } from "./ui/typography";
import { Button } from "./ui/button";
import Link from "next/link";
import { SignInButton, useAuth } from "@clerk/nextjs";

const Navbar = () => {
  const { isSignedIn } = useAuth();
  return (
    <nav className="w-full py-8 ">
      <div className="bg-white/20 py-3 flex justify-between items-center rounded-md mx-5 sm:mx-10 md:mx-20">
        <div className="flex items-center h-full">
          <TypographyH2 className="border-b-0 px-4 text-2xl md:text-3xl font-bold bg-[linear-gradient(90deg,_rgba(109,145,147,1)_0%,_rgba(132,134,137,1)_50%,_rgba(158,120,124,1)_100%)] bg-clip-text text-transparent">
            RW Fintech
          </TypographyH2>
        </div>
        <div className="flex px-4">
          
            <Link href={isSignedIn ? "/dashboard" : "/sign-in"}>
              <Button variant="premium" className="cursor-pointer">
                {isSignedIn ? "Dashboard" : "Get Started"}
              </Button>
            </Link>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
