import React, { useState } from "react";
import "boxicons";
import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from "@inertiajs/inertia-react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, RadialLinearScale, PointElement, LineElement, Filler, CategoryScale, LinearScale, BarElement } from "chart.js";
import { PolarArea } from "react-chartjs-2";
import { Bar } from 'react-chartjs-2';


export default function Dashboard(props) {
    const getDate = new window.Date();

    let time = getDate.toLocaleTimeString();
    const [currentTime, setCurrentTime] = useState(time);

    function updateTime() {
        let getDate = new window.Date();
        let time = getDate.toLocaleTimeString();
        setCurrentTime(time);
    }

    ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

    setInterval(updateTime, 1000);
    ChartJS.register(ArcElement, Tooltip, Legend);

    const data1 = {
        labels: ["User", "Jabatan", "Hari Libur"],
        datasets: [
            {
                data: [props.user, props.positions, props.Holiday],
                backgroundColor: ["rgba(255, 99, 132, 0.5)", "rgba(54, 162, 235, 0.5)", "rgba(255, 206, 86, 0.5)"],
                borderWidth: 1,
            },
        ],
    };


    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Bar Chart',
            },
        },
    };

    const labels = props.graph.map((item) => item.nama);

    const color = ['rgba(255, 99, 132, 0.5)', 'rgba(53, 162, 235, 0.5)', 'rgba(255, 206, 86, 0.5)']


    const data9 = {
        labels,
        datasets: [
            {
                label: 'alfa',
                data: props.graph.map((item) => item.data.alfa),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'hadir',
                data: props.graph.map((item) => item.data.masuk),
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
            {
                label: 'izin',
                data: props.graph.map((item) => item.data.izin),
                backgroundColor: 'rgba(255, 206, 86, 0.5)',
            },
        ],
    };



    return (
        <>
            <Head title="Dashboard Admin" />
            <AdminLayout auth={props.auth} errors={props.errors} header={<h2 className="font-semibold text-xl text-gray-800 ">Dashboard</h2>}>
                <div className="mt-20 sm:ml-[10rem] lg:m-[10rem] xl:ml-[15rem]">
                    <div className="p-10 sm:ml-[5rem] sm:-mr-[5rem] xl:flex">
                        <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
                            <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                                <div className="flex-auto p-4">
                                    <div className="flex flex-row -mx-3">
                                        <div className="flex-none w-2/3 max-w-full px-3">
                                            <div>
                                                <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase text-black dark:opacity-60">Total Users</p>
                                                <h5 className="mb-2 font-bold text-black"> {props.user} users</h5>
                                                <p className="mb-0 text-black dark:opacity-60">
                                                    <span className="text-sm font-bold leading-normal text-emerald-500">All </span>
                                                    This Website
                                                </p>
                                            </div>
                                        </div>
                                        <div className="px-3 text-right basis-1/3">
                                            <div className="inline-block w-12 h-12 text-center pt-3 rounded-full bg-gradient-to-tl from-blue-500 to-violet-500">
                                                <box-icon name="user" color="#ffffff"></box-icon>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
                            <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                                <div className="flex-auto p-4">
                                    <div className="flex flex-row -mx-3">
                                        <div className="flex-none w-2/3 max-w-full px-3">
                                            <div>
                                                <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase text-black dark:opacity-60">total jabatan</p>
                                                <h5 className="mb-2 font-bold text-black">{props.positions} Jabatan</h5>
                                                <p className="mb-0 text-black dark:opacity-60">
                                                    <span className="text-sm font-bold leading-normal text-emerald-500">All </span>
                                                    This Website
                                                </p>
                                            </div>
                                        </div>
                                        <div className="px-3 text-right basis-1/3">
                                            <div className="inline-block w-12 h-12 text-center pt-3 rounded-full bg-gradient-to-tl from-cyan-700 to-blue-500">
                                                <box-icon name="food-menu" color="#ffffff"></box-icon>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
                            <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                                <div className="flex-auto p-4">
                                    <div className="flex flex-row -mx-3">
                                        <div className="flex-none w-2/3 max-w-full px-3">
                                            <div>
                                                <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase text-black dark:opacity-60">total Hari libur</p>
                                                <h5 className="mb-2 font-bold text-black">{props.Holiday} Hari Libur</h5>
                                                <p className="mb-0 text-black dark:opacity-60">
                                                    <span className="text-sm font-bold leading-normal text-emerald-500">All </span>
                                                    This Website
                                                </p>
                                            </div>
                                        </div>
                                        <div className="px-3 text-right basis-1/3">
                                            <div className="inline-block w-12 h-12 text-center pt-3 rounded-full bg-gradient-to-tl from-red-600 to-orange-600">
                                                <box-icon name="landscape" color="#ffffff"></box-icon>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
                            <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                                <div className="flex-auto p-4">
                                    <div className="flex flex-row -mx-3">
                                        <div className="flex-none w-2/3 max-w-full px-3">
                                            <div>
                                                <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase text-black dark:opacity-60">Jam saat ini</p>
                                                {currentTime}
                                                <p className="mb-0 text-black dark:opacity-60">
                                                    <span className="text-sm font-bold leading-normal text-emerald-500">All </span>
                                                    This Website
                                                </p>
                                            </div>
                                        </div>
                                        <div className="px-3 text-right basis-1/3">
                                            <div className="inline-block w-12 h-12 text-center pt-3 rounded-full bg-gradient-to-tl from-blue-600 to-purple-600">
                                                <box-icon type="solid" name="hourglass-bottom" color="#ffffff"></box-icon>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-center mx-auto shadow-xl w-full max-w-sm bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex justify-center items-center">
                            {newFunction()}
                        </div>
                    </div>



                    <div className="bg-white shadow-xl rounded-xl m-3 xl:m-[10rem] ">
                        <div className="xl:m-[2rem]">
                            <Bar options={options} data={data9} />
                        </div>
                    </div>
                </div>
            </AdminLayout>
        </>
    );

    function newFunction() {
        return <PolarArea data={data1} />;
    }
}
