import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link } from '@inertiajs/inertia-react';
import Delete from '../../../Components/Deleteku';

export default function Jabatan(props) {
    console.log(props)
    return (
        <>
            <Head title="Jabatan" />
            <AdminLayout >
                <div className='mt-20 xl:ml-[15rem]'>

                    <div className='m-10  text- font-bold flex justify-between xl:text-4xl xl:m-[5rem]'>
                        <h1>Tambahkan Posisi Jabatan</h1>
                        <a href="/addjabatan"><button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Tambahakan Jabatan</button></a>
                    </div>

                    <div>
                        <div className='xl:m-[5rem]'>
                            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 whitespace-nowrap">
                                            <th scope="col" className="px-6 py-3 border">No</th>
                                            <th scope="col" className="px-6 py-3 border">Name</th>
                                            <th scope="col" className="px-6 py-3 border">created at</th>
                                            <th scope="col" className="px-6 py-3 border">Edit</th>
                                            <th scope="col" className="px-6 py-3 border">Delete</th>
                                        </tr>
                                    </thead>
                                    {props.Position ? props.Position.map((data, i) => {
                                        return (
                                            <tbody key={i}>
                                                <tr className="bg-white dark:bg-gray-800 whitespace-nowrap" key={i}>
                                                    <td className="px-6 py-4 border">{i + 1}</td>
                                                    <td className="px-6 py-4 border-b">{data.name}</td>
                                                    <td className="px-6 py-4 border-b">{data.created_at}</td>
                                                    <td className="px-6 py-4 border-b">

                                                        <Link href={`/editjabatan/${data.id}`}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-400" fill="none"
                                                                viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                            </svg>
                                                        </Link>
                                                    </td>


                                                    <td className="px-6 py-4 border-b">
                                                        <Delete URL={'/deletejabatan'} id={data.id} />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        )
                                    }) : ""}
                                </table>
                            </div>
                        </div>
                        <div className='p-20'>
                            <h1>Nb</h1>
                            <p><span>1</span>. Pastikan tidak ada yang menggunakan data di atas untuk menghapus nya</p>
                            <p> <span>2</span>. Posisi di atas datap di  gunakan untu menentukan jabatan apa sja yang di perboleh kan absensi</p>
                        </div>
                    </div>
                </div>

            </AdminLayout>
        </>
    );
}





// import React from 'react';
// import 'boxicons';
// import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
// import { Head, Link } from '@inertiajs/inertia-react';
// import Delete from '../../Components/Deleteku';

// export default function Jabatan(props) {
//     console.log(props)
//     return (
//         <AuthenticatedLayout
//             auth={props.auth}
//             errors={props.errors}
//             header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Jabatan</h2>}
//         >
//             <Head title="Jabatan" />
//             <div className='m-10  text- font-bold flex justify-between xl:text-4xl xl:m-[5rem]'>
//                 <h1>Tambahakan Posisi Jabatan</h1>
//                 <a href="/addjabatan"><button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Tambahakan Jabatan</button></a>
//             </div>

//             <div>
//                 <div className='xl:m-[5rem]'>
//                     <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
//                         <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
//                             <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//                                 <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 whitespace-nowrap">
//                                     <th scope="col" className="px-6 py-3 border">No</th>
//                                     <th scope="col" className="px-6 py-3">Name</th>
//                                     <th scope="col" className="px-6 py-3">created at</th>
//                                     <th scope="col" className="px-6 py-3">Edit</th>
//                                     <th scope="col" className="px-6 py-3">Delete</th>
//                                 </tr>
//                             </thead>
//                             {props.Position ? props.Position.map((data, i) => {
//                                 // {
//                                 //     props.users.map((p) => {
//                                 //         return p.position_id = data.id ? check += p.position_id : check == 0
//                                 //     })
//                                 // }
//                                 return (
//                                     <tbody key={i}>
//                                         <tr className="bg-white dark:bg-gray-800 whitespace-nowrap" key={i}>
//                                             <td className="px-6 py-4 border">{i + 1}</td>
//                                             <td className="px-6 py-4 border-b">{data.name}</td>
//                                             <td className="px-6 py-4 border-b">{data.created_at}</td>
//                                             <td className="px-6 py-4 border-b">

//                                                 <Link href={`/editjabatan/${data.id}`}>
//                                                     <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-400" fill="none"
//                                                         viewBox="0 0 24 24" stroke="currentColor">
//                                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
//                                                             d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
//                                                     </svg>
//                                                 </Link>
//                                             </td>
//                                             {check = 0}

//                                             <td className="px-6 py-4 border-b">
//                                                 <Delete URL={'/deletejabatan'} id={data.id} checker={check} />
//                                             </td>
//                                         </tr>
//                                     </tbody>
//                                 )
//                             }) : ""}
//                         </table>
//                     </div>
//                 </div>
//                 <div className='p-20'>
//                     <h1>Nb</h1>
//                     <p><span>1</span>. Pastikan tidak ada yang menggunakan data di atas untuk menghapus nya</p>
//                     <p> <span>2</span>. Posisi di atas datap di  gunakan untu menentukan jabatan apa sja yang di perboleh kan absensi</p>
//                 </div>
//             </div>
//         </AuthenticatedLayout>
//     );
// }
