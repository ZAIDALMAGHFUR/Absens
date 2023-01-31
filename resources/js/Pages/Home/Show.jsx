import HomeLayout from "@/Layouts/HomeLayout";
import { Link } from "@inertiajs/inertia-react";
import React from "react";
import Alert from "./Partials/Alert";
import AttendanceBadges from "./Partials/AttendanceBadges";
import PresenceForm from "./Partials/PresenceForm";

export default function Show(props) {
    const { attendance } = props;
    return (
        <HomeLayout>
            <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-4">
                <div>
                    <div className="mb-2">
                        <AttendanceBadges attendance={props.attendance} />
                    </div>
                    {/* @include('partials.alerts') */}

                    <h1 className="text-2xl my-2">{attendance.title}</h1>
                    <p className="mb-5">{attendance.description}</p>

                    <div className="mb-4">
                        <span className="badge badge-info border shadow-sm">
                            Masuk : {attendance.data.start_time.substring(0, 5)}{" "}
                            - {attendance.data.batas_start_time.substring(0, 5)}
                        </span>
                        <span className="badge badge-info border shadow-sm">
                            Pulang : {attendance.data.end_time.substring(0, 5)}{" "}
                            - {attendance.data.batas_end_time.substring(0, 5)}
                        </span>
                    </div>

                    {!attendance.data.is_using_qrcode ? (
                        <>
                            <PresenceForm
                                attendance={attendance}
                                holiday={props.holiday}
                                data={props.data}
                            />
                        </>
                    ) : (
                        // <livewire:presence-form :attendance="attendance" :data="$data" :holiday="$holiday">
                        // @include('home.partials.qrcode-presence')
                        <></>
                    )}
                </div>
                <div>
                    <h5 className="mb-3">Histori 30 Hari Terakhir</h5>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Tanggal</th>
                                    <th scope="col">Jam Masuk</th>
                                    <th scope="col">Jam Pulang</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody
                                dangerouslySetInnerHTML={{
                                    __html: props.tableHistory,
                                }}
                            >
                                {/* {props.priodDate.map((date, i) => (
                                    <tr key={i} dangerouslySetInnerHTML={{__html: }}>
                                        
                                    </tr>
                                ))} */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </HomeLayout>
    );
}
