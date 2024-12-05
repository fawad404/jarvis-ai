"use client";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-secondary text-light p-4 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo and Heading */}
        <div className="flex items-center space-x-4">
          <Image
            src="/logo.png" // Replace with the path to your PNG logo
            alt="Jarvis AI Logo"
            width={60}
            height={60}
            className="rounded-full"
          />
          <h1 className="text-light font-bold text-xl">JARVIS AI</h1>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link
            href="/"
            className="text-light hover:text-accent transition duration-200"
          >
            Home
          </Link>
          <Link
            href="/features"
            className="text-light hover:text-accent transition duration-200"
          >
            Features
          </Link>
          <Link
            href="/about"
            className="text-light hover:text-accent transition duration-200"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-light hover:text-accent transition duration-200"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
