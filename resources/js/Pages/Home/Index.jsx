import HomeLayout from "@/Layouts/HomeLayout";
import { Link } from "@inertiajs/inertia-react";
import React from "react";
import AttendanceBadges from "./Partials/AttendanceBadges";

function Index(props) {

    let attendances = props.attendances;
    let attendancesArray = Object.values(attendances);


    console.log(typeof props.attendances)
    return (
        <HomeLayout>
            <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-4">
                <div>
                    <h3 className="text-3xl font-bold mb-4">
                        Daftar Absensi Hari Ini
                    </h3>

                    {attendancesArray.map((attendance, i) => (
                        <Link
                            href={route("home.show", attendance)}
                            key={i}
                            className="card w-full bg-base-100 shadow-xl mb-4 border"
                        >
                            <div className="card-body">
                                <h2 className="card-title">
                                    {attendance.title}
                                </h2>
                                <p>{attendance.description}</p>

                                <AttendanceBadges attendance={attendance} />
                            </div>
                        </Link>
                    ))}


                    {/* {props.attendances.map((attendance, i) => (
                        <Link
                            href={route("home.show", attendance)}
                            key={i}
                            className="card w-full bg-base-100 shadow-xl mb-4 border border-slate-500"
                        >
                            <div className="card-body">
                                <h2 className="card-title">
                                    {attendance.title}
                                </h2>
                                <p>{attendance.description}</p>

                                <AttendanceBadges attendance={attendance} />
                            </div>
                        </Link>
                    ))} */}



                    {/* {Array.isArray(props.attendances) && props.attendances.length ?
                                        props.attendances.map((attendance, i) => (
                                            <Link
                                                href={route("home.show", attendance)}
                                                key={i}
                                                className="card w-full bg-base-100 shadow-xl mb-4 border border-slate-500"
                                            >
                                                <div className="card-body">
                                                    <h2 className="card-title">
                                                        {attendance.title}
                                                    </h2>
                                                    <p>{attendance.description}</p>

                                                    <AttendanceBadges attendance={attendance} />
                                                </div>
                                            </Link>
                                        )) : <div>Data tidak tersedia</div>
                    } */}
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <tbody>
                                <tr>
                                    <th>Nama</th>
                                    <td>{props.auth.user.name}</td>
                                </tr>
                                <tr>
                                    <th>Email</th>
                                    <td>{props.auth.user.email}</td>
                                </tr>
                                <tr>
                                    <th>No. Telp</th>
                                    <td>{props.auth.user.phone}</td>
                                </tr>
                                <tr>
                                    <th>Bergabung Pada</th>
                                    <td>{props.auth.user.created_at}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </HomeLayout>
    );
}

export default Index;
