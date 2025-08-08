"use client";
import { useState } from "react";
import Link from "next/link";
// import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
// import { IoLogoMarkdown } from "react-icons/io";

const navigation = {
  categories: [],
  pages: [
    // { name: 'Login', href: '#' },
    // { name: 'Sign Up', href: '#' },
  ],
};

export default function TopNavBar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
        />
        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-closed:-translate-x-full"
          >
            <div className="flex px-4 pt-5 pb-2">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <IoLogoMarkdown
                  aria-hidden="true"
                  className="size-6"
                ></IoLogoMarkdown>
              </button>
            </div>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              <div className="flow-root">
                <a
                  href="/login"
                  className="-m-2 block p-2 font-medium text-gray-900"
                >
                  Sign in
                </a>
              </div>
              <div className="flow-root">
                <a
                  href="#"
                  className="-m-2 block p-2 font-medium text-gray-900"
                >
                  Create account
                </a>
              </div>
            </div>

            <div className="border-t border-gray-200 px-4 py-6">
              <a href="#" className="-m-2 flex items-center p-2">
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/flags/flag-canada.svg"
                  className="block h-auto w-5 shrink-0"
                />
                <span className="ml-3 block text-base font-medium text-gray-900">
                  CAD
                </span>
                <span className="sr-only">, change currency</span>
              </a>
            </div>
          </DialogPanel>
        </div>
      </Dialog> */}

      <header className="relative bg-white">
        {/* <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          Get free delivery on orders over $100
        </p> */}

        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                {/* <Bars3Icon aria-hidden="true" className="size-6" /> */}
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link href="/">
                  <span className="sr-only">Your Company</span>
                  <img
                    alt=""
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                    className="h-8 w-auto"
                  />
                </Link>
              </div>

              <div className="text-gray-600 ml-auto flex items-center gap-5">
                <Link
                  href={"/"}
                  className="text-zinc-600 underline-offset-[4px]"
                >
                  Home
                </Link>

                <Link
                  href={"/dashboard"}
                  className="text-zinc-600 underline-offset-[4px]"
                >
                  Dashboard
                </Link>

                <Link
                  href={"/learning"}
                  className="text-zinc-600 underline-offset-[4px]"
                >
                  Learning
                </Link>

                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <Link
                    href={"/login"}
                    className="text-md font-medium text-gray-700 hover:text-cyan-600"
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    className="text-md font-medium text-gray-700 hover:text-cyan-600"
                  >
                    Create account
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
