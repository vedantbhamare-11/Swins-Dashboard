'use client'; // Ensure this is a client-side component

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Github } from "lucide-react";

const SignUp: React.FC = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left Part: Black Background */}
      <div className="w-1/2 bg-black"></div>

      {/* Right Part: Sign Up Form */}
      <div className="w-1/2 bg-white flex flex-col justify-center p-8 relative">
        {/* Login Link in the top-right corner */}
        <div className="absolute top-4 right-4">
          <Link href="#" className="hover:underline">
            Login
          </Link>
        </div>

        {/* Sign Up Form */}
        <div className="max-w-md mx-auto">
          {/* Heading */}
          <h1 className="text-2xl font-bold mb-2 text-center">Create an account</h1>
          <p className="text-[#71717A] mb-6 text-center">
            Enter your email to create your account
          </p>

          {/* Email Input */}
          <div className="mb-4">
            <Input
              type="email"
              id="email"
              placeholder="name@example.com"
              className="w-full"
            />
          </div>

          {/* Create Account Button */}
            <Button className="w-full mb-6">
              Create Account
            </Button>

          {/* Separator with Text */}
          <div className="my-4 flex items-center">
            <Separator className="flex-grow w-1" />
            <span className="px-2 text-sm text-gray-500">OR CONTINUE WITH</span>
            <Separator className="flex-grow w-1" />
          </div>

          {/* GitHub Button */}
          <Button variant="outline" className="w-full mb-6">
            <Github className="mr-2" /> GitHub
          </Button>

          {/* Terms and Privacy */}
          <p className="text-sm text-[#71717A] text-center mx-10">
            By clicking continue, you agree to our{" "}
            
              Terms of Service
          
            and{" "}
            
              Privacy Policy
           
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
