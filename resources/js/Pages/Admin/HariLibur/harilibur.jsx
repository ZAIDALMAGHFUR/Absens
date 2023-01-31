import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link } from '@inertiajs/inertia-react';
import Delete from '../../../Components/Deleteku';


export default function HariLibur(props) {
    // console.log(props.holiday)
    return (
        <>
            <Head title="HariLibur" />
            <AdminLayout>
                <div className='mt-20 xl:ml-[15rem]'>
                    <div className='m-10  text- font-bold flex justify-between xl:text-4xl xl:m-[5rem]'>
                        <h1>Tambahkan Hari Liur</h1>
                        <a href="/addharilibur"><button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Tambahakan Hari Libur</button></a>
                    </div>

                    <div>
                        <div className='xl:m-[5rem]'>
                            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 whitespace-nowrap">
                                            <th scope="col" className="px-6 py-3 border">No</th>
                                            <th scope="col" className="px-6 py-3 border">NAMA HARI LIBUR</th>
                                            <th scope="col" className="px-6 py-3 border">KETERANGAN</th>
                                            <th scope="col" className="px-6 py-3 border" border>TANGGAL LIBUR</th>
                                            <th scope="col" className="px-6 py-3 border">EDIT</th>
                                            <th scope="col" className="px-6 py-3 border">DELETE</th>
                                        </tr>
                                    </thead>
                                    {props.holiday ? props.holiday.map((data, i) => {
                                        return (
                                            <tbody key={i}>
                                                <tr className="bg-white dark:bg-gray-800 whitespace-nowrap" key={i}>
                                                    <td className="px-6 py-4 border">{i + 1}</td>
                                                    <td className="px-6 py-4 border-b">{data.title}</td>
                                                    <td className="px-6 py-4 border-b">{data.description}</td>
                                                    <td className="px-6 py-4 border-b">{data.holiday_date}</td>
                                                    <td className="px-6 py-4 border-b">

                                                        <Link href={`/editharilibur/${data.id}`}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-400" fill="none"
                                                                viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                            </svg>
                                                        </Link>
                                                    </td>

                                                    <td className="px-6 py-4 border-b">
                                                        <Delete URL={'/deleteharilibur'} id={data.id} />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        )
                                    }) : ""}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </AdminLayout>
        </>
    );
}
