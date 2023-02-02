import React, { useState } from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import Swal from "sweetalert2";
import Select from "react-select";

export default function editabsensi(props) {
    console.log(props.Position)
    const data = props.Position.map((val) => val.name);
    const options = data.map((val, index) => {
        return {
            value: props.Position[index].id,
            label: val,
        };
    });

    //state
    const [title, setTitle] = useState(props.allabsensi.title);
    const [description, setDescription] = useState(
        props.allabsensi.description
    );
    const [start_time, setStart_time] = useState(props.allabsensi.start_time);
    const [batas_start_time, setBatas_start_time] = useState(
        props.allabsensi.batas_start_time
    );
    const [end_time, setEnd_time] = useState(props.allabsensi.end_time);
    const [batas_end_time, setBatas_end_time] = useState(
        props.allabsensi.batas_end_time
    );
    const [attendance_id, setAttendance_id] = useState(
        props.allabsensi.attendance_id
    );
    const [position_id, setPosition_id] = useState(
        props.allabsensi.position_id
    );

    const selectedPositionId = position_id?.map((item) => item.value);

    //method "updateCategory"
    const updatePosition = async (e) => {
        e.preventDefault();
        //sending data
        Inertia.post(
            `/updateabsensi/${props.allabsensi.id}`,
            {
                //data
                title: title,
                description: description,
                start_time: start_time,
                batas_start_time: batas_start_time,
                end_time: end_time,
                batas_end_time: batas_end_time,
                attendance_id: attendance_id,
                position_id: selectedPositionId,
                _method: "PUT",
            },
            {
                onSuccess: () => {
                    //show alert
                    Swal.fire({
                        title: "Success!",
                        text: "Data updated successfully!",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                },
            }
        );
    };

    const handleJabatanChange = (position_id) => {
        setPosition_id(position_id);
    };

    console.log(props);
    return (
        <AdminLayout>
            <Head title="Jabatan" />
            <div className="mt-[5.7rem] sm:ml-[16rem] xl:ml-[15rem]">

                <div className="m-10  text- font-bold flex justify-between xl:text-4xl xl:m-[5rem]">
                    <h1>Edit Posisi Jabatan</h1>
                </div>

                <div className="flex justify-center">
                    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <form className="space-y-6" onSubmit={updatePosition}>
                            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                                Edit Absensi in website
                            </h5>
                            <div>
                                <label
                                    type="name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Name Absensi
                                </label>
                                <input
                                    type="name"
                                    name="name"
                                    id="name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " required
                                    placeholder="Manager"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>
                            <div>
                                <label
                                    type="name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Description
                                </label>
                                <input
                                    type="name"
                                    name="name"
                                    id="name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " required
                                    placeholder="Manager"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>
                            <div>
                                <label
                                    type="name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Jam masuk
                                </label>
                                <input
                                    type="time"
                                    name="name"
                                    id="name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " required
                                    placeholder="Manager"
                                    value={start_time}
                                    onChange={(e) => setStart_time(e.target.value)}
                                />
                            </div>
                            <div>
                                <label
                                    type="name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Batas Jam Masuk
                                </label>
                                <input
                                    type="time"
                                    name="name"
                                    id="name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " required
                                    placeholder="Manager"
                                    value={batas_start_time}
                                    onChange={(e) =>
                                        setBatas_start_time(e.target.value)
                                    }
                                />
                            </div>
                            <div>
                                <label
                                    type="name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Jam Keluar
                                </label>
                                <input
                                    type="time"
                                    name="name"
                                    id="name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " required
                                    placeholder="Manager"
                                    value={end_time}
                                    onChange={(e) => setEnd_time(e.target.value)}
                                />
                            </div>
                            <div>
                                <label
                                    type="name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Batas Jam Keluar
                                </label>
                                <input
                                    type="time"
                                    name="name"
                                    id="name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " required
                                    placeholder="Manager"
                                    value={batas_end_time}
                                    onChange={(e) =>
                                        setBatas_end_time(e.target.value)
                                    }
                                />
                            </div>
                            <Select
                                isMulti
                                name="jabatan[]"
                                options={options}
                                className="basic-multi-select"
                                classNamePrefix="select"
                                onChange={handleJabatanChange}
                                defaultValue={Attendance => position_id}
                            />
                            <button
                                type="submit"
                                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Update Absensi
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
