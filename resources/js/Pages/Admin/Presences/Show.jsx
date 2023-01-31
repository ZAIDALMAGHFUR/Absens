import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link } from "@inertiajs/inertia-react";
import AttendanceBadges from "@/Pages/Home/Partials/AttendanceBadges";

export default function Show(props) {
  const { attendance } = props;
  return (
    <AdminLayout auth={props.auth} errors={props.errors} header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Kehadiran</h2>}>
      <Head title={props.title} />

      <div className="mt-20 xl:ml-[15rem]">
        <div className="xl:m-[5rem]">
          <div className="btn">
            <a href="presences/export">gass maseh </a>
          </div>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-5 ">
            <div className="card mb-3 p-5 bg-white">
              <div className="card-body">
                <div className="mb-3 mb-md-0">
                  <h5 className="card-title">{attendance.title}</h5>
                  <h6 className="card-subtitle mb-2 text-gray-800">{attendance.description}</h6>
                  <div className="d-flex align-items-center gap-2">
                    <AttendanceBadges attendance={attendance} />
                    <a href={route("presences.permissions", attendance.id)} className="badge text-bg-info">
                      Karyawaan Izin
                    </a>
                    <a href={route("presences.not-present", attendance.id)} className="badge text-bg-danger">
                      Belum Absen
                    </a>
                  </div>
                </div>

                <div>
                  <div>
                    <div>
                      <div className="mb-2">
                        <small className="font-bold text-gray-800 block">Range Jam Masuk</small>
                        <span>
                          {attendance.start_time} - {attendance.batas_start_time}
                        </span>
                      </div>
                      <div className="mb-2">
                        <small className="font-bold text-gray-800 block">Range Jam Pulang</small>
                        <span>
                          {attendance.end_time} - {attendance.batas_end_time}
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="mb-2">
                        <small className="font-bold text-gray-800 block">Jabatan / Posisi</small>
                        <div>
                          {attendance.positions.map((position, i) => (
                            <span key={i} className="badge badge-success inline-block mr-1">
                              {position.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 whitespace-nowrap">
                        <th scope="col" className="px-6 py-3 border">No</th>
                        <th scope="col" className="px-6 py-3 border">User</th>
                        <th scope="col" className="px-6 py-3 border">Tanggal Absensi</th>
                        <th scope="col" className="px-6 py-3 border">Waktu Absen Masuk</th>
                        <th scope="col" className="px-6 py-3 border">Waktu Absen Keluar</th>
                        <th scope="col" className="px-6 py-3 border">Status</th>
                        <th scope="col" className="px-6 py-3 border">Aksi</th>
                      </tr>
                    </thead>
                    {attendance.presences
                      ? attendance.presences.map((data, i) => {
                        return (
                          <tbody key={i}>
                            <tr className="bg-white dark:bg-gray-800 whitespace-nowrap" key={i}>
                              <td className="px-6 py-4 border">{i + 1}</td>
                              <td className="px-6 py-4 border-b">{data.user.name}</td>
                              <td className="px-6 py-4 border-b">{data.presence_date}</td>
                              <td className="px-6 py-4 border-b">{data.presence_enter_time}</td>
                              <td className="px-6 py-4 border-b">{data.presence_out_time ? data.presence_out_time : <span class="badge text-bg-danger">Belum Absensi Pulang</span>}</td>
                              <td className="px-6 py-4 border-b">{data.is_permission ? <span class="badge text-bg-warning">Izin</span> : <span class="badge text-bg-success">Hadir</span>}</td>
                              <td className="px-6 py-4 border-b">asd</td>
                            </tr>
                          </tbody>
                        );
                      })
                      : ""}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
