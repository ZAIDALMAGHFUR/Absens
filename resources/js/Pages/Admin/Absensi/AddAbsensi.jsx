import React, { useState } from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import Swal from "sweetalert2";
import Select from 'react-select';

export default function addAbsensi(props) {

    const data = props.Position.map(val => val.name);
    const options = data.map((val, index) => {
        return {
            value: props.Position[index].id,
            label: val,
        };
    });
    console.log(options);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [start_time, setStart_time] = useState("");
    const [batas_start_time, setBatas_start_time] = useState("");
    const [end_time, setEnd_time] = useState("");
    const [batas_end_time, setBatas_end_time] = useState("");
    const [attendance_id, setAttendance_id] = useState("");
    const [position_id, setPosition_id] = useState([]);

    /** Only get the id */
    const selectedPositionId = position_id.map((item) => item.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            title,
            description,
            start_time,
            batas_start_time,
            end_time,
            batas_end_time,
            attendance_id,
            position_id: selectedPositionId,
        };

        console.log(data);
        Swal.fire({
            icon: "success",
            title: "Absensi berhasil di tambahkan!",
            showConfirmButton: true,
        });

        Inertia.post("/storeabsensi", data);
        setTitle("");
        setDescription("");
        setStart_time("");
        setBatas_start_time("");
        setEnd_time("");
        setBatas_end_time("");
        setAttendance_id("");
        setPosition_id([]);
    };



    const handleJabatanChange = (position_id) => {
        setPosition_id(position_id)
    }

    return (
        <AdminLayout>
            <Head title="Jabatan" />
            <div className="mt-[5.7rem] sm:ml-[16rem] xl:ml-[15rem]">

                <div className="m-10  text- font-bold flex justify-between xl:text-4xl xl:m-[5rem]">
                    <h1>Tambahkan Absensi</h1>
                </div>

                <div className="flex justify-center">
                    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                                Add Absensi
                            </h5>
                            <div>
                                <label
                                    type="name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Nama/Judul Absensi
                                </label>
                                <input
                                    type="name"
                                    name="name"
                                    id="name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                    placeholder="Hari Senin" required
                                    onChange={(title) =>
                                        setTitle(title.target.value)
                                    }
                                    value={title}
                                />
                            </div>
                            <div>
                                <label
                                    type="name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    keterangan
                                </label>
                                <textarea
                                    type="keterangan"
                                    name="keterangan"
                                    id="keterangan"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                                    placeholder="Hari Ahad" required
                                    onChange={(description) =>
                                        setDescription(description.target.value)
                                    }
                                    value={description}
                                />
                            </div>
                            <div>
                                <label
                                    type="name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    start time
                                </label>
                                <input
                                    type="time"
                                    name="keterangan"
                                    id="keterangan"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " required
                                    onChange={(start_time) =>
                                        setStart_time(start_time.target.value)
                                    }
                                    value={start_time}
                                />
                            </div>
                            <div>
                                <label
                                    type="name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    batas start time
                                </label>
                                <input
                                    type="time"
                                    name="keterangan"
                                    id="keterangan"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " required
                                    onChange={(batas_start_time) =>
                                        setBatas_start_time(
                                            batas_start_time.target.value
                                        )
                                    }
                                    value={batas_start_time}
                                />
                            </div>
                            <div>
                                <label
                                    type="name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    end time
                                </label>
                                <input
                                    type="time"
                                    name="keterangan"
                                    id="keterangan"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " required
                                    onChange={(end_time) =>
                                        setEnd_time(end_time.target.value)
                                    }
                                    value={end_time}
                                />
                            </div>
                            <div>
                                <label
                                    type="name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    batas end time
                                </label>
                                <input
                                    type="time"
                                    name="keterangan"
                                    id="keterangan"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " required
                                    onChange={(batas_end_time) =>
                                        setBatas_end_time(
                                            batas_end_time.target.value
                                        )
                                    }
                                    value={batas_end_time}
                                />
                            </div>
                            <label
                                type="name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                posisi
                            </label>
                            <Select
                                isMulti
                                name="jabatan[]"
                                options={options}
                                className="basic-multi-select"
                                classNamePrefix="select" required
                                onChange={handleJabatanChange}
                                value={position_id}
                            />

                            <input
                                type="submit"
                                className="cursor-pointer w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                value="Add Absensi"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
