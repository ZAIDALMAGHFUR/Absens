import React, { useState } from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, usePage } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';
import Swal from 'sweetalert2'

export default function addJabatan(props) {

    const { errors } = usePage().props;
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        Inertia.post('/storejabatan', {
            name: name
        }, {
            onSuccess: () => {

                //show alert
                Swal.fire({
                    title: 'Success!',
                    text: 'Data saved successfully!',
                    icon: 'success',
                    showConfirmButton: true,
                    timer: 15000
                })
            }
        })
    }




    console.log(errors)
    return (
        <AdminLayout>
            <Head title="Jabatan" />
            <div className='mt-20 sm:ml-[15rem] xl:ml-[15rem]'>
                <div className='m-10  text- font-bold flex justify-between xl:text-4xl xl:m-[5rem]'>
                    <h1>Tambahakan Posisi Jabatan</h1>
                </div>

                <div className='flex justify-center'>
                    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <form className="space-y-6" action="#" onSubmit={handleSubmit}>
                            <h5 className="text-xl font-medium text-gray-900 dark:text-white">Add Position in website</h5>
                            <div>
                                <label type="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name Position</label>
                                <input type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Manager" onChange={(name) => setName(name.target.value)} value={name} />
                            </div>
                            {errors.name && (
                                <div className="alert bg-red-600">
                                    {errors.name}
                                </div>
                            )}
                            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => handleSubmit()}>Add Position</button>
                        </form>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}