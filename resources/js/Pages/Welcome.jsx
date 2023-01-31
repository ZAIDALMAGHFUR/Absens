import React, {useState} from 'react';
import { Link, Head } from '@inertiajs/inertia-react';

export default function Welcome(props) {
    const getDate = new window.Date();

    let time = getDate.toLocaleTimeString();
        const [currentTime, setCurrentTime] = useState(time);

        function updateTime(){
            let getDate = new window.Date();
            let time = getDate.toLocaleTimeString();
            setCurrentTime(time);
        }

        setInterval(updateTime, 1000);
    return (
        <>
            <Head title="Welcome" />
            {/* {{ asset('img/myimage.png') }} */}
            <div className="bg-[url('/public/images/bg.jpg')] bg-cover h-screen">
                <div className="relative flex items-top justify-center min-h-screen sm:items-center sm:pt-0">
                    <div className=" bg-white h-[18rem] w-[20rem] mt-52 rounded-md">
                        <h1 className='text-center text-teal-500 font-semibold mt-3 text-2xl'>Holla selamat datang website Absensi</h1>
                            <h1 className='flex justify-center font-mono text-3xl text-black mt-6'>
                            {
                                currentTime
                            }
                            </h1>
                        <div className='text-center pt-[4rem]'>
                            {props.auth.user ? (
                                <Link href={route('dashboard')} className="text-sm text-black">
                                    Back To Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link href={route('login')} className="text-sm text-white bg-teal-500 p-3  rounded-md hover:bg-slate-900">
                                        Log in
                                    </Link>

                                    <Link
                                        href={route('register')}
                                        className="ml-4 text-sm text-white bg-teal-500 p-3  rounded-md hover:bg-slate-900"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
