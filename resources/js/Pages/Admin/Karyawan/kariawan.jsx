import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link } from '@inertiajs/inertia-react';
import Delete from '../../../Components/Deleteku';
import Paginator from '../../../Components/Paginator';




export default function Kariawan(props) {




    console.log(props)


    return (
        <>
            <Head title="karyawan" />
            <AdminLayout>
                <div className='mt-20 sm:ml-[17rem] xl:ml-[15rem]'>


                    <div className='m-10  text- font-bold flex justify-between xl:text-4xl xl:m-[5rem]'>
                        <h1>Tambahkan Karyawan</h1>
                        <Link href="/addkariawan"><button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Tambahkan karyawan</button></Link>
                    </div>

                    <div>

                        <div className='m-20'>
                            <form action='/kariawan' className="flex items-center">
                                <label for="simple-search" className="sr-only" name="search">Search</label>
                                <div className="relative w-full">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                                    </div>
                                    <input name="search" type="text" id="search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" />
                                </div>
                                <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                    <span className="sr-only">Search</span>
                                </button>
                            </form>
                        </div>



                        <div className='xl:m-[5rem]'>
                            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="col" className="px-6 py-3 border">No</th>
                                            <th scope="col" className="px-6 py-3 border">Name</th>
                                            <th scope="col" className="px-6 py-3 border">Email</th>
                                            <th scope="col" className="px-6 py-3 border">No.Telphone</th>
                                            <th scope="col" className="px-6 py-3 border">Role</th>
                                            <th scope="col" className="px-6 py-3 border">Jabatan</th>
                                            <th scope="col" className="px-6 py-3 border">Edit</th>
                                            <th scope="col" className="px-6 py-3 border">Delete</th>
                                        </tr>
                                    </thead>
                                    {props.user.data != 0 ? props.user.data.map((data, i) => {
                                        return (
                                            <tbody key={i}>
                                                <tr className="bg-white dark:bg-gray-800" key={i}>
                                                    <td className="px-6 py-4 border">{i + 1}</td>
                                                    <td className="px-6 py-4 border-b">{data.name}</td>
                                                    <td className="px-6 py-4 border-b">{data.email}</td>
                                                    <td className="px-6 py-4 border-b">{data.phone}</td>
                                                    <td className="px-6 py-4 border-b">
                                                        {props.role ? props.role.map((data2, i) => {
                                                            return (
                                                                <>
                                                                    {
                                                                        data.role_id == data2.id ? data2.name : ""
                                                                    }
                                                                </>
                                                            )
                                                        }) : ""}
                                                    </td>
                                                    <td className="px-6 py-4 border-b">

                                                        {props.positions ? props.positions.map((data3, i) => {
                                                            return (
                                                                <>
                                                                    {
                                                                        data.position_id == data3.id ? data3.name : ""
                                                                    }
                                                                </>
                                                            )
                                                        }) : ""}

                                                    </td>
                                                    <td className="px-6 py-4 border-b">
                                                        <Link href={`/editkariawan/${data.id}`}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-400" fill="none"
                                                                viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                            </svg>
                                                        </Link>
                                                    </td>
                                                    <td className="px-6 py-4 border-b">
                                                        <Delete URL={'/deletekariawan'} id={data.id} />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        )
                                    }) : <td className='w-full text-center font-extrabold text-xl' colSpan={8}>Data Karyawan Tidak Di Temukan</td>}
                                </table>
                            </div >
                            <div className='flex justify-end items-center m-4'>
                                <Paginator meta={props.user.meta} />
                            </div>
                        </div >
                        <div className='p-20' >
                            <h1>Nb</h1>
                            <p><span>1</span>. Pastikan tidak ada yang menggunakan data di atas untuk menghapus nya</p>
                            <p> <span>2</span>. Posisi di atas datap di  gunakan untu menentukan jabatan apa sja yang di perboleh kan absensi</p>
                        </div>
                    </div >

                </div>
            </AdminLayout >
        </>
    );
}

