import React, { useState } from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, usePage } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';
import Swal from 'sweetalert2';
// import { swal } from 'vendor/realrashid/sweet-alert/resources/js/sweetalert.all';

export default function addJabatan(props) {

    const { errors } = usePage().props;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [position_id, setPosition_id] = useState('');
    const [role_id, setRole_id] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const fields = [
            { name: 'Name', value: name },
            { name: 'Email', value: email },
            { name: 'Password', value: password },
            { name: 'Phone', value: phone },
            { name: 'Position', value: position_id },
            { name: 'Role', value: role_id },
        ];

        for (const field of fields) {
            if (field.value === '') {
                Swal.fire({
                    title: 'Oops!',
                    text: `${field.name} cannot be empty !`,
                    icon: 'error',
                    showConfirmButton: true,
                    timer: 15000,
                });
                return;
            }
        }

        function showSuccessAlert() {
            Swal.fire({
                title: 'Success!',
                text: 'Data saved successfully!',
                icon: 'success',
                showConfirmButton: true,
                timer: 15000,
            });
        }

        function showErrorAlert(error) {
            Swal.fire({
                title: 'Error!',
                text: error.response.data.message,
                icon: 'error',
                showConfirmButton: true,
                timer: 15000,
            });
        }

        Inertia.post('/storekariawan', {
            name,
            email,
            password,
            phone,
            position_id,
            role_id,
        }, {
            onSuccess: showSuccessAlert,
            onError: showErrorAlert,
        });
    };



    // console.log(errors)
    return (
        <AdminLayout>
            <Head title="Kariawan" />
            <div className='mt-[5.7rem] sm:ml-[16rem] xl:ml-[15rem]'>
                <div className='m-10  text- font-bold flex justify-between xl:text-4xl xl:m-[5rem]'>
                    <h1>Tambahakan karyawan</h1>
                </div>

                <div>
                    <div className='flex justify-center'>
                        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                            <form className="space-y-6" action="#" onSubmit={handleSubmit}>
                                <h5 className="text-xl font-medium text-gray-900 dark:text-white">Tambah karyawan in website</h5>
                                <div>

                                    {/* nama */}
                                    <label type="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User Name</label>
                                    <input type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="nama" onChange={(name) => setName(name.target.value)} value={name} />

                                    {/* email */}
                                    <label type="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="saipul@gmail.com" onChange={(email) => setEmail(email.target.value)} value={email} />

                                    {/* {errors.email && (
                                        <div className="alert bg-red-600">
                                            {errors.email}
                                        </div>
                                    )} */}

                                    {/* password */}
                                    <label type="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" onChange={(password) => setPassword(password.target.value)} value={password} />

                                    {/* no telphone */}
                                    <label type="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">No Phone</label>
                                    <input type="text" name="text" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="8021657782" onChange={(phone) => setPhone(phone.target.value)} value={phone} />

                                    {/* Jabatan */}
                                    <label type="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Position</label>
                                    <select name="jabatan" id="jabatan" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" onChange={(event) => setPosition_id(event.target.value)} value={position_id}>
                                        {props.positions.map((position, index) => {
                                            return (
                                                <option key={index} value={position.id}>
                                                    {position.name}
                                                </option>
                                            )
                                        })}
                                    </select>
                                    <label type="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Role</label>
                                    <select name="jabatan" id="jabatan" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" onChange={(event) => setRole_id(event.target.value)} value={role_id}>
                                        {props.role.map((role, index) => {
                                            return (
                                                <option key={index + 6} value={role.id}>
                                                    {role.name}
                                                </option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => handleSubmit()}>Tambah karyawan</button>
                            </form>
                        </div>
                    </div>
                    <div className='p-[3rem]'>
                        <h1>NB</h1>
                        <p>1. Password harus lebih dari 8 karakter</p>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}