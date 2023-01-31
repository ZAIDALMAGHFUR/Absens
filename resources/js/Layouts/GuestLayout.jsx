import React from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/inertia-react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen rounded-xl flex flex-col p-5  sm:justify-center items-center pt-6 sm:pt-0 bg-gray-800">
            <div className="w-full rounded-xl sm:max-w-md mt-48 px-6 py-4 bg-gray-900 shadow-md overflow-hidden sm:rounded-lg xl:mt-6">
                {children}
            </div>
        </div>
    );
}
