import React from 'react';
import { Link } from '@inertiajs/inertia-react';

export default function NavLink({ href, active, children }) {
    return (
        <Link
            href={href}
            className={
                active
                    ? 'inline-flex text-white items-center px-14 pt-1 rounded-xl  bg-blue-600 text-sm font-medium leading-8 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out'
                    : 'inline-flex items-center  pt-1  border-transparent text-sm font-medium leading-5 hover:border-gray-300 focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out'
            }
        >
            {children}
        </Link>
    );
}
