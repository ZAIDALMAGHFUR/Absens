import React from "react";
import printJS from 'print-js'
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link } from "@inertiajs/inertia-react";
import AttendanceBadges from "@/Pages/Home/Partials/AttendanceBadges";

export default function NotPresent(props) {

  function printForm() {
    printJS({
      printable: 'form1',
      type: 'html',
      targetStyles: ['*'],
      style: '@page { size: Letter landscape; }',
    })
  }

  console.log(props);
  const { attendance, notPresentData } = props;
  return (
    <AdminLayout auth={props.auth} errors={props.errors} header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Tidak Hadir</h2>}>
      <Head title={props.title} />

      <div className="mt-32 sm:ml-[16rem] xl:ml-[15rem]">
        <div className="xl:m-[5rem]">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-5">
            <div className="card mb-3 p-5 bg-white">
              <div id="form1" className="card-body">
                <div className="mb-3 mb-md-0">
                  <h5 className="card-title">{attendance.title}</h5>
                  <h6 className="card-subtitle mb-2 text-gray-800">{attendance.description}</h6>
                  <button onClick={() => printForm()} className='text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' >Print daftar belum absen</button>
                  <div className="flex align-items-center gap-2">
                    <AttendanceBadges attendance={attendance} />
                    <span href="" className="badge badge-warning">
                      Tidak Hadir
                    </span>
                  </div>
                </div>
                <form action="" method="get">
                  <div className="mb-3">
                    <label htmlFor="filterDate" className="form-label font-bold">
                      Tampilkan Berdasarkan Tanggal
                    </label>
                    <div className="form-control">
                      <div className="input-group">
                        <input type="date" placeholder="Search…" className="input input-bordered" name="display-by-date" defaultValue={props.displayByDate} />
                        <button className="btn btn-square">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                        </button>
                      </div>
                    </div>

                  </div>
                </form>
                {props.notPresentData.length === 0 && (
                  <small className="font-bold">
                    Tidak ada data yang bisa ditampilkan, <a href="">Tampilkan data berdasarkan hari ini.</a>
                  </small>
                )}
                {notPresentData.map((data, i) => (
                  <div key={i}>
                    <div className="p-5 border border-gray-50 rounded mb-5">
                      <div>
                        Tanggal : <span className="font-bold">{data["not_presence_date"]}</span>
                      </div>
                      <div>
                        Jumlah : <span className="font-bold">{data["users"].length}</span>
                      </div>
                    </div>
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 whitespace-nowrap">
                          <th scope="col" className="px-6 py-3 border">
                            No
                          </th>
                          <th scope="col" className="px-6 py-3 border">
                            User
                          </th>
                          <th scope="col" className="px-6 py-3 border">
                            Kontak
                          </th>
                          <th scope="col" className="px-6 py-3 border">
                            Posisi
                          </th>
                          <th scope="col" className="px-6 py-3 border">
                            Aksi
                          </th>
                        </tr>
                      </thead>
                      {data.users
                        ? data.users.map((user, i) => {
                          return (
                            <tbody key={i}>
                              <tr className="bg-white dark:bg-gray-800 whitespace-nowrap" key={i}>
                                <td className="px-6 py-4 border">{i + 1}</td>
                                <td className="px-6 py-4 border-b">{user.name}</td>
                                <td className="px-6 py-4 border-b">
                                  <a href={`mailto:${user["email"]}`}>{user["email"]}</a>
                                  <span className="font-bold"> / </span>
                                  <a href={`tel:${user["phone"]}`}>{user["phone"]}</a>
                                </td>
                                <td className="px-6 py-4 border-b">{user["position"]["name"]}</td>

                                <td className="px-6 py-4 border-b">
                                  <Link
                                    method="POST"
                                    href={route("presences.present", attendance.id)}
                                    data={{
                                      presence_date: data["not_presence_date"],
                                      user_id: user.id,
                                    }}
                                    as="button"
                                    className="font-bold badge badge-success"
                                    type="submit"
                                  >
                                    Hadir
                                  </Link>
                                </td>
                              </tr>
                            </tbody>
                          );
                        })
                        : ""}
                    </table>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
