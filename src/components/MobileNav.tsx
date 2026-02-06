"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileNavProps {
  currentPath?: string;
}

export function MobileNav({ currentPath = "/" }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/odszkodowanie-lot-sluzbowy", label: "Odszkodowania" },
    { href: "/bilet-firmowy-prawa", label: "Bilety firmowe" },
    { href: "/artykuly", label: "Artykuły" },
    { href: "/o-autorze", label: "O autorze" }
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="text-white hover:bg-slate-800"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-slate-900 z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-slate-800">
            <Link href="/" onClick={closeMenu} className="flex items-center gap-2 text-white font-bold">
              <Briefcase className="h-5 w-5" />
              BizneLot.info
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={closeMenu}
              className="text-white hover:bg-slate-800"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto py-4">
            <ul className="space-y-1 px-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className={`block px-4 py-3 rounded-lg text-white hover:bg-slate-800 transition-colors ${
                      currentPath === link.href ? "bg-slate-800 font-semibold" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-slate-800">
            <p className="text-xs text-slate-400 text-center">
              Portal edukacyjny o prawach pasażerów
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}