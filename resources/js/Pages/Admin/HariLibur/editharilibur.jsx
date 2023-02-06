import React, { useState } from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/inertia-react';
import { Inertia } from "@inertiajs/inertia";
import Swal from 'sweetalert2'

export default function editharilibur(props) {

    const [title, setTitle] = useState(props.allharilibur.title);
    const [description, setDescription] = useState(props.allharilibur.description);
    const [holiday_date, setHoliday_date] = useState(props.allharilibur.holiday_date);


    const updateHoliday = async (e) => {
        e.preventDefault();

        Inertia.post(`/updateharilibur/${props.allharilibur.id}`, {

            title: title,
            description: description,
            holiday_date: holiday_date,
            _method: "PUT"
        }, {
            onSuccess: () => {

                Swal.fire({
                    title: 'Success!',
                    text: 'Data updated successfully!',
                    icon: 'success',
                    showConfirmButton: true,
                    timer: 15000
                })
            }

        });
    }

    return (

        <AdminLayout>
            <Head title="Jabatan" />
            <div className='mt-[5.7rem] sm:ml-[16rem] xl:ml-[15rem]'>

                <div className='m-10  text- font-bold flex justify-between xl:text-4xl xl:m-[5rem]'>
                    <h1>Edit Hari Libur</h1>
                </div>

                <div className='flex justify-center'>
                    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <form className="space-y-6" onSubmit={updateHoliday}>
                            <h5 className="text-xl font-medium text-gray-900 dark:text-white">Edit Hari Libur</h5>
                            <div>
                                <label type="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name Position</label>
                                <input type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Manager" value={title} onChange={(e) => setTitle(e.target.value)} />
                            </div>
                            <div>
                                <label type="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name Position</label>
                                <textarea type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Manager" value={description} onChange={(e) => setDescription(e.target.value)} />
                            </div>
                            <div>
                                <label type="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name Position</label>
                                <input type="date" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Manager" value={holiday_date} onChange={(e) => setHoliday_date(e.target.value)} />
                            </div>
                            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Update Hari Libur</button>
                        </form>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
