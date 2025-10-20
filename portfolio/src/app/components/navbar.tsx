'use client'

import { useState, useEffect, type ReactNode } from 'react'
import Link from 'next/link'
import type { JSX } from 'react'

export default function Navbar(): JSX.Element {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])

  const NavLinks: ReactNode = (
    <>
      <li>
        <Link href="/" className="transition-colors text-[--color-light] hover:text-[--color-primary]">
          Home
        </Link>
      </li>
      <li>
        <Link href="/about" className="transition-colors text-[--color-light] hover:text-[--color-primary]">
          About
        </Link>
      </li>
      <li>
        <Link href="/projects" className="transition-colors text-[--color-light] hover:text-[--color-primary]">
          Projects
        </Link>
      </li>
      <li>
        <Link href="/writings" className="transition-colors text-[--color-light] hover:text-[--color-primary]">
          Writings
        </Link>
      </li>
      <li>
        <Link href="/resume" className="transition-colors text-[--color-light] hover:text-[--color-primary]">
          Resume
        </Link>
      </li>
    </>
  )

  return (
    <header className="sticky top-0 z-50 py-4 ">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div
          className="mt-12 rounded-2xl border border-white/20 shadow-lg ring-1 ring-black/5
                     backdrop-blur-md dark:supports-[backdrop-filter]:bg-neutral-900/30"
        >
          <nav className="flex h-14 items-center justify-center px-4">
            <ul className="hidden md:flex items-center gap-8 text-sm">{NavLinks}</ul>
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center rounded-lg p-2
                         hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[--color-primary]"
              aria-controls="mobile-menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">Toggle navigation</span>
              <svg
                className={`h-6 w-6 transition-transform ${open ? 'rotate-90' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
            </button>
          </nav>
          <div
            id="mobile-menu"
            className={`md:hidden overflow-hidden border-t border-white/10 transition-[max-height] duration-300 ease-out ${
              open ? 'max-h-64' : 'max-h-0'
            }`}
          >
            <ul className="flex flex-col gap-2 px-4 py-3 text-sm">{NavLinks}</ul>
          </div>
        </div>
      </div>
    </header>
  )
}
