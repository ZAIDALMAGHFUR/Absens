import React from "react";
import "boxicons";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link } from "@inertiajs/inertia-react";
import AttendanceBadges from "@/Pages/Home/Partials/AttendanceBadges";

export default function Index(props) {
    return (
        <>
            <Head title={props.title} />
            <AdminLayout>
                <div className="mt-20 xl:ml-[15rem]">
                    <div>
                        <div className="xl:m-[5rem]">
                            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-4 p-10">
                                    <div>
                                        <h3 className="text-3xl font-bold mb-4 text-black">
                                            Daftar Absensi Dengan Kehadiran
                                        </h3>
                                        {props.attendances &&
                                            Object.keys(props.attendances).map(
                                                (key, i) => {
                                                    let attendance =
                                                        props.attendances[key];
                                                    return (
                                                        <Link
                                                            href={route(
                                                                "presences.show",
                                                                attendance
                                                            )}
                                                            key={i}
                                                            className="card w-full bg-primary text-white mb-4"
                                                        >
                                                            <div className="card-body">
                                                                <h2 className="card-title">
                                                                    {attendance.title}
                                                                </h2>
                                                                <p>
                                                                    {
                                                                        attendance.description
                                                                    }
                                                                </p>

                                                                <AttendanceBadges
                                                                    attendance={
                                                                        attendance
                                                                    }
                                                                />
                                                            </div>
                                                        </Link>
                                                    );
                                                }
                                            )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AdminLayout>
        </>
    );
}
