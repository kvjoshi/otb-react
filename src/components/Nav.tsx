/* This example requires Tailwind CSS v2.0+ */
import React , { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
    BookmarkAltIcon,
    CalendarIcon,
    ChartBarIcon,
    CursorClickIcon,
    MenuIcon,
    PhoneIcon,
    PlayIcon,
    RefreshIcon,
    ShieldCheckIcon,
    SupportIcon,
    ViewGridIcon,
    XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import logo from '../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faRunning} from '@fortawesome/free-solid-svg-icons'
const nav_mob = [
    {
        name: 'Adventure Zone',
        href: 'adventure',
        icon: ChartBarIcon,
    },
    {
        name: 'Aqua Zone',
        href: 'aqua',
        icon: ChartBarIcon,
    },
    {
        name: 'Restro-Cafe',
        href: 'restro',
        icon: ChartBarIcon,
    },
    {
        name: 'Events',
        href: 'events',
        icon: ChartBarIcon,
    },
    {
        name: 'Blog',
        href: '#',
        icon: ChartBarIcon,
    },
    {
        name: 'Locate Us',
        href: 'locate-us',
        icon: ChartBarIcon,
    }
]
const callsToAction = [
    { name: 'Watch Demo', href: '#', icon: PlayIcon },
    { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]
const nav_social = [
    {
        name: 'Help Center',
        description: 'Get all of your questions answered in our forums or contact support.',
        href: '#',
        icon: SupportIcon,
    },
    {
        name: 'Guides',
        description: 'Learn how to maximize our platform to get the most out of it.',
        href: '#',
        icon: BookmarkAltIcon,
    },
    {
        name: 'Events',
        description: 'See what meet-ups and other events we might be planning near you.',
        href: '#',
        icon: CalendarIcon,
    },
    { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}


const Nav: React.FC = () => { {
    return (
        <Popover className="relative  z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center  py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <a href="./">
                            <span className="sr-only">Out Of The Box</span>
                            <img
                                className="h-20 w-auto sm:h-20"
                                src={ logo }
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="-mr-2 -my-2 md:hidden">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Open menu</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>
                    <Popover.Group as="nav" className="hidden md:flex space-x-10">
                        <a href="./adventure" className="nav-link">
                            Adventure Zone
                        </a>
                        <a href="./aqua" className="nav-link">
                            Aqua Zone
                        </a>
                        <a href="#" className="nav-link">
                            Restro Cafe
                        </a>
                        <a href="#" className="nav-link">
                            Events
                        </a>
                        <a href="#" className="nav-link">
                            Blog
                        </a>
                        <a href="#" className="nav-link">
                            Locate Us
                        </a>
                    </Popover.Group>
                    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                        <a href="tel:+918980989999" className="btn-purple  py-2 px-4 ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>

                            <span className='pl-2'>Call Us</span>
                        </a>

                    </div>
                </div>
            </div>

            <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                        <div className="pt-5 pb-6 px-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <a href={'./'}>
                                    <img
                                        className="h-30 w-auto justify-self-center"
                                        src={ logo }
                                        alt="OTB Logo"
                                    />
                                    </a>
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">Close menu</span>
                                        <XIcon className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                            </div>
                            <div className="mt-8">
                                <nav className="grid gap-y-8">
                                    {nav_mob.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="mob-nav-link"
                                        >
                                            {/*<item.icon className="mob-nav-icon" aria-hidden="true" />*/}
                                            <span className="mob-nav-text">{item.name}</span>
                                        </a>
                                    ))}

                                </nav>
                            </div>
                        </div>
                        <div className="py-6 px-5 space-y-6">
                            {/*<div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                {nav_social.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>*/}
                            <div>
                                <a
                                    href="tel:+918980989999"
                                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <span className='pl-2'>
                                    Contact Us
                                    </span>
                                </a>

                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}}
export default Nav
