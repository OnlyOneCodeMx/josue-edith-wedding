import { useState, useRef } from 'react';
import { Transition } from '@headlessui/react';
import NavList from './ui/NavList';

function Nav() {
  const ref = useRef();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed top-0 w-full z-50">
      <nav className="bg-[#bf8599]">
        <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="font-courgette text-2xl">
                  Josue <span className="text-white">&</span> Edith
                </h1>
              </div>
              <div className="hidden lg:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <NavList tailwindClass="text-sm" />
                </div>
              </div>
            </div>
            <div className="-mr-2 flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-[#f9d7e4] inline-flex items-center justify-center p-2 rounded-md text-black hover:bg-[#f9d7e4] "
                aria-controls="mobile-menu"
                aria-expanded="false">
                <span className="sr-only">Abrir menu principal</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6 text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6 text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95">
          <div className="lg:hidden" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <NavList
                closeMenu={() => setIsOpen(false)}
                tailwindClass="text-base block"
              />
            </div>
          </div>
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;
