import React from "react";
import { Link } from "@inertiajs/inertia-react";
import Alert from "@/Pages/Home/Partials/Alert";

export default function HomeLayout({ children }) {
    return (
        <>
            <div className="navbar bg-white shadow-xl text-primary-content">
                <div className="flex-1">
                    <a className="btn btn-ghost text-black normal-case text-xl fw-bold">
                        Absensi App
                    </a>
                </div>
                <div className="flex-none">
                    <ul className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                        <li>
                            <Link href="/">Beranda</Link>
                        </li>
                    </ul>
                    <li>
                        <Link
                            href={route("logout")}
                            method="post"
                            as="button"
                            className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        >
                            Log Out
                        </Link>
                    </li>
                </div>
            </div>

            <div className="max-w-5xl mx-auto py-[3rem] px-10">
                <Alert />
                <div>{children}</div>
            </div>
        </>
    );
}
