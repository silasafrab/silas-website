"use client";

import { useEffect, useRef, useState } from "react";

import { Link } from "@/i18n/navigation";

import IconMenu from "./icons/IconMenu";

export type MobileNavLink = { name: string; hash: string };

export function MobileNavDropdown({
  links,
  ariaLabelOpen,
  ariaLabelClose,
}: {
  links: readonly MobileNavLink[];
  ariaLabelOpen: string;
  ariaLabelClose: string;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onEscape);
    return () => document.removeEventListener("keydown", onEscape);
  }, [open]);

  return (
    <div ref={rootRef} className="relative shrink-0 md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav-dropdown"
        aria-label={open ? ariaLabelClose : ariaLabelOpen}
        onClick={() => setOpen((o) => !o)}
        className="size-10 bg-black flex items-center justify-center p-0 border-0 cursor-pointer"
      >
        <IconMenu width={40} height={40} className="block" />
      </button>

      {open ? (
        <div
          id="mobile-nav-dropdown"
          role="menu"
          className="absolute left-0 top-10 z-50 flex min-w-[12rem] flex-col rounded-sm border border-black/10 bg-white py-3 shadow-lg"
        >
          <ul className="flex flex-col gap-1 px-2">
            {links.map((item) => (
              <li key={item.hash} role="none">
                <Link
                  role="menuitem"
                  href={{ pathname: "/", hash: item.hash }}
                  scroll={true}
                  className="block rounded px-3 py-2 text-xl font-semibold text-black monument opacity-40 transition-opacity duration-500 hover:bg-black/5 hover:opacity-100"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
