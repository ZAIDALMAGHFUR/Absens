import React, { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                <div>
                    {/* <InputLabel forInput="name" value="Name" /> */}
                    <label className='text-white' forInput="name" value="name">Name</label>

                    <TextInput
                        type="text"
                        name="name"
                        value={data.name}
                        className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none w-[19rem] xl:w-[25rem] text-white"
                        autoComplete="name"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    {/* <InputLabel forInput="email" value="Email" /> */}
                    <label className='text-white' forInput="email" value="email">Email</label>

                    <TextInput
                        type="email"
                        name="email"
                        value={data.email}
                        className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none w-[19rem] xl:w-[25rem] text-white"
                        autoComplete="username"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    {/* <InputLabel forInput="password" value="Password" /> */}
                    <label className='text-white' forInput="password" value="password">Password</label>

                    <TextInput
                        type="password"
                        name="password"
                        value={data.password}
                        className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none w-[19rem] xl:w-[25rem] text-white"
                        autoComplete="new-password"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    {/* <InputLabel forInput="password_confirmation" value="Confirm Password" /> */}
                    <label className='text-white' forInput="password_confirmation" value="password_confirmation">Password Confirmation</label>

                    <TextInput
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none w-[19rem] xl:w-[25rem] text-white"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div >
                <div className="mt-4">
                    {/* <InputLabel forInput="phone" value="phone" /> */}
                    <label className='text-white' forInput="phone" value="phone">Phone</label>

                    <TextInput
                        type="text"
                        name="phone"
                        value={data.phone}
                        className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none w-[19rem] xl:w-[25rem] text-white"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.phone} className="mt-2" />
                </div >

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route('login')}
                        className=" text-sm text-white hover:text-teal-500 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="ml-4 bg-teal-500" processing={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
