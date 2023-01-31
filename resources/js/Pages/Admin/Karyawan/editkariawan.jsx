import React, { useState } from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';
import Swal from 'sweetalert2'


export default function addJabatan(props) {
    const [name, setName] = useState(props.allkariawan.name);
    const [email, setEmail] = useState(props.allkariawan.email);
    const [password, setPassword] = useState(props.allkariawan.password);
    const [phone, setPhone] = useState(props.allkariawan.phone);
    const [positions, setPositions] = useState([]);
    const [position_id, setPosition_id] = useState(props.allkariawan.position_id);
    const [role_id, setRole_id] = useState(props.allkariawan.role_id);


    const updateUser = async (e) => {
        e.preventDefault();
        //sending data
        Inertia.post(`/updatekariawan/${props.allkariawan.id}`, {

            //data
            name: name,
            email: email,
            password: password,
            phone: phone,
            position_id: position_id,
            role_id: role_id,
            _method: "PUT"
        }, {
            onSuccess: () => {

                //show alert
                Swal.fire({
                    title: 'Success!',
                    text: 'Data updated successfully!',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500
                })
            }

        });
    }


    console.log('props last: ', props)
    return (
        <AdminLayout>
            <Head title="Kariawan" />
            <div className='mt-20 xl:ml-[15rem]'>

                <div className='m-10  text- font-bold flex justify-between xl:text-4xl xl:m-[5rem]'>
                    <h1>Edit karyawan</h1>
                </div>

                <div>
                    <div className='flex justify-center'>
                        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                            <form className="space-y-6" onSubmit={updateUser}>
                                <h5 className="text-xl font-medium text-gray-900 dark:text-white">Edit karyawan in website</h5>
                                <div>
                                    {/* nama */}
                                    <label type="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User Name</label>
                                    <input type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="nama" required value={name} onChange={(e) => setName(e.target.value)} />

                                    {/* email */}
                                    <label type="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="saipul@gmail.com" required onChange={(e) => setEmail(e.target.value)} value={email} />

                                    {/* password */}
                                    <label type="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required onChange={(e) => setPassword(e.target.value)} value={password} />

                                    {/* no telphone */}
                                    <label type="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">No Phone</label>
                                    <input type="text" name="text" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="8021657782" required onChange={(e) => setPhone(e.target.value)} value={phone} />

                                    {/* Jabatan */}
                                    <label type="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Position</label>
                                    <select name="jabatan" id="jabatan" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required onChange={(e) => setPosition_id(e.target.value)} value={position_id}>
                                        {props.positions.map((position, index) => {
                                            return (
                                                <option key={index} value={position.id}>
                                                    {position.name}
                                                </option>
                                            )
                                        })}
                                    </select>
                                    <label type="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Role</label>
                                    <select name="jabatan" id="jabatan" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required onChange={(e) => setRole_id(e.target.value)} value={role_id}>
                                        {props.role.map((role, index) => {
                                            return (
                                                <option key={index + 6} value={role.id}>
                                                    {role.name}
                                                </option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit karyawan</button>
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