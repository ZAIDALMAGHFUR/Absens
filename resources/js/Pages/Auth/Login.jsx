import React, { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />
            <div>
                <h1 className='text-3xl font-extrabold flex justify-center text-white'>hallo again!</h1>
                <p className='m-4 text-white font-semibold text-xl flex justify-center items-start text-center'>welcome back to the absence website</p>
            </div>
            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
            <form onSubmit={submit}>
                <div>
                    {/* <InputLabel forInput="email" value="Email" /> */}
                    <label className='text-white' forInput="email" value="Email">Email</label>
                    <TextInput
                        type="text"
                        name="email"
                        value={data.email}
                        className="rounded-lg bg-gray-700 mt-2 p-2   focus:border-blue-500 focus:bg-gray-800 focus:outline-none  w-[20rem] xl:w-[25rem] text-white"
                        autoComplete="username"
                        isFocused={true}
                        handleChange={onHandleChange}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    {/* <InputLabel forInput="password" value="Password" /> */}
                    <label className='text-white' forInput="password" value="Password">Password</label>

                    <TextInput
                        type="password"
                        name="password"
                        value={data.password}
                        className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none w-[20rem] xl:w-[25rem] text-white"
                        autoComplete="current-password"
                        handleChange={onHandleChange}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox name="remember" value={data.remember} handleChange={onHandleChange} />
                        <span className="ml-2 text-sm text-white">Remember me</span>
                    </label>
                </div>

                <div className="flex items-center justify-between mt-4">
                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className=" text-sm text-white hover:text-teal-500 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ">
                            Forgot your password?
                        </Link>
                    )}

                    <PrimaryButton className="ml-4 bg-teal-500 " processing={processing}>
                        Log in
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}