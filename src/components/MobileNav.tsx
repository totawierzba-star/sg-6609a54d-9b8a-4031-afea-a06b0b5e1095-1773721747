"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Plane, Shield, FileText, User } from "lucide-react";
import { getTranslations, type Locale } from "@/lib/translations";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  locale?: Locale;
}

export function MobileNav({ isOpen, onClose, locale = "pl" }: MobileNavProps) {
  const t = getTranslations(locale);
  const basePath = locale === "en" ? "/en" : "";

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm" onClick={onClose} />
      
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-slate-900 shadow-2xl">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-slate-700">
            <div className="flex items-center gap-3">
              <img src="/bizneslotlogotyp.png" alt="Logo" className="h-8 w-auto" />
              <h2 className="text-xl font-bold text-white">
                {locale === "en" ? "BusinessFlight.info" : "BiznesLot.info"}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-white hover:bg-slate-800 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto p-6">
            <ul className="space-y-2">
              <li>
                <Link
                  href={`${basePath}/`}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-slate-800 transition-colors"
                  onClick={onClose}
                >
                  <Plane className="h-5 w-5" />
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link
                  href={`${basePath}/pracodawca-a-odszkodowanie`}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-slate-800 transition-colors"
                  onClick={onClose}
                >
                  <Shield className="h-5 w-5" />
                  {t.nav.employerCompensation}
                </Link>
              </li>
              <li>
                <Link
                  href={`${basePath}/anulowany-lot-delegacja`}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-slate-800 transition-colors"
                  onClick={onClose}
                >
                  <Plane className="h-5 w-5" />
                  {t.nav.canceledFlight}
                </Link>
              </li>
              <li>
                <Link
                  href={`${basePath}/opozniony-lot-delegacja`}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-slate-800 transition-colors"
                  onClick={onClose}
                >
                  <Plane className="h-5 w-5" />
                  {t.nav.delayedFlight}
                </Link>
              </li>
              <li>
                <Link
                  href={`${basePath}/bilet-firmowy-prawa`}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-slate-800 transition-colors"
                  onClick={onClose}
                >
                  <FileText className="h-5 w-5" />
                  {t.nav.ticketRights}
                </Link>
              </li>
              <li>
                <Link
                  href={`${basePath}/artykuly`}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-slate-800 transition-colors"
                  onClick={onClose}
                >
                  <FileText className="h-5 w-5" />
                  {t.nav.articles}
                </Link>
              </li>
              <li>
                <Link
                  href={`${basePath}/o-autorze`}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-slate-800 transition-colors"
                  onClick={onClose}
                >
                  <User className="h-5 w-5" />
                  {t.nav.about}
                </Link>
              </li>
            </ul>
          </nav>

          <div className="p-6 border-t border-slate-700">
            <p className="text-sm text-slate-400 text-center">
              {t.footer.tagline}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}