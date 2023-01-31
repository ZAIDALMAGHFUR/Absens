import { Inertia } from "@inertiajs/inertia";
import { Link, useForm } from "@inertiajs/inertia-react";
import React, { useState } from "react";

export default function PresenceForm({ attendance, holiday, data }) {
    const {
        data: values,
        setData: setValues,
        post,
        processing,
        errors,
    } = useForm({
        title: "",
        description: "",
    });

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        post(route("home.minta-izin", attendance), values);
    }

    return (
        <>
            <div>
                {holiday ? (
                    <div className="alert alert-success mb-5">
                        <small className="font-bold">
                            Hari ini adalah hari libur.
                        </small>
                    </div>
                ) : (
                    <>
                        {/* {{-- jika tidak menggunakan qrcode (button) dan karyawan saat ini tidak menekan tombol izin --}} */}
                        {!attendance.data.is_using_qrcode &&
                        !data["is_there_permission"] ? (
                            <>
                                {/* {{-- jika belum absen dan absen masuk sudah dimulai --}} */}
                                {attendance.data.is_start &&
                                    !data["is_has_enter_today"] && (
                                        <>
                                            {/*wire:click="sendEnterPresence"
        wire:loading.attr="disabled" wire:target="sendEnterPresence"*/}
                                            <Link
                                                href={route(
                                                    "home.sendEnterPresence",
                                                    { attendance: attendance }
                                                )}
                                                method="POST"
                                                className="btn btn-primary px-3 py-2 btn-sm font-bold block w-full mb-2"
                                            >
                                                Masuk
                                            </Link>
                                            {/* <a
                                            href="{{ route('home.permission', attendance.id) }}"
                                            className="btn btn-info px-3 py-2 btn-sm font-bold block w-full"
                                        >
                                            Izin
                                        </a> */}
                                            {/* The button to open modal */}
                                            <label
                                                htmlFor="izin-modal"
                                                className="btn w-full"
                                            >
                                                Izin
                                            </label>

                                            {/* Put this part before </body> tag */}
                                            <input
                                                type="checkbox"
                                                id="izin-modal"
                                                className="modal-toggle"
                                            />
                                            <div className="modal">
                                                <div className="modal-box">
                                                    <form
                                                        onSubmit={handleSubmit}
                                                    >
                                                        <div>
                                                            <input
                                                                type="text"
                                                                placeholder="Alasan"
                                                                value={
                                                                    values.title
                                                                }
                                                                id="title"
                                                                onChange={
                                                                    handleChange
                                                                }
                                                                className="input w-full mb-4 border border-success"
                                                            />
                                                            {errors.title && (
                                                                <small className="text-red-600">
                                                                    {
                                                                        errors.title
                                                                    }
                                                                </small>
                                                            )}
                                                            <textarea
                                                                className="textarea w-full border border-success"
                                                                id="description"
                                                                value={
                                                                    values.description
                                                                }
                                                                onChange={
                                                                    handleChange
                                                                }
                                                                placeholder="Alasan detail..."
                                                            ></textarea>
                                                            {errors.description && (
                                                                <small className="text-red-600">
                                                                    {
                                                                        errors.description
                                                                    }
                                                                </small>
                                                            )}
                                                        </div>
                                                        <div className="modal-action">
                                                            <button
                                                                disabled={
                                                                    processing
                                                                }
                                                                type="submit"
                                                                className="btn btn-primary"
                                                            >
                                                                Minta Izin
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </>
                                    )}

                                {data["is_has_enter_today"] && (
                                    <div className="alert alert-success mb-5">
                                        <small className="block font-bold">
                                            Anda sudah berhasil mengirim absensi
                                            masuk.
                                        </small>
                                    </div>
                                )}

                                {/* // {{-- jika absen pulang sudah dimulai, dan karyawan sudah absen masuk dan belum absen pulang --}} */}
                                {attendance.data.is_end &&
                                    data["is_has_enter_today"] &&
                                    data["is_not_out_yet"] && (
                                        <>
                                            {/*wire:click="sendOutPresence"
wire:loading.attr="disabled" wire:target="sendOutPresence"*/}
                                            <Link
                                                href={route(
                                                    "home.sendOutPresence",
                                                    { attendance: attendance }
                                                )}
                                                method="POST"
                                                className="btn btn-primary px-3 py-2 btn-sm font-bold block w-full"
                                            >
                                                Pulang
                                            </Link>
                                        </>
                                    )}

                                {/* // {{-- sudah absen masuk dan absen pulang --}} */}
                                {data["is_has_enter_today"] &&
                                    !data["is_not_out_yet"] && (
                                        <div className="alert alert-success mb-5">
                                            <small className="block font-bold">
                                                Anda sudah melakukan absen masuk
                                                dan absen pulang.
                                            </small>
                                        </div>
                                    )}

                                {/* // {{-- jika sudah absen masuk dan belum saatnya absen pulang --}} */}
                                {data["is_has_enter_today"] &&
                                    !attendance.data.is_end && (
                                        <div className="alert alert-danger">
                                            <small className="font-bold">
                                                Belum saatnya melakukan absensi
                                                pulang.
                                            </small>
                                        </div>
                                    )}
                            </>
                        ) : (
                            <>
                                {
                                    /* prettier-ignore */ (
                                    data["is_there_permission"] &&
                                        !data["is_permission_accepted"]
                                ) && (
                                    <div className="alert alert-info">
                                        <small className="font-bold">
                                            Permintaan izin sedang diproses
                                            (atau masih belum di terima).
                                        </small>
                                    </div>
                                )
                                }
                                {
                                    /* prettier-ignore */ (
                                    data["is_there_permission"] &&
                                        data["is_permission_accepted"]
                                ) ? (
                                    <div className="alert alert-success mb-5">
                                        <small className="font-bold">
                                            Permintaan izin sudah diterima.
                                        </small>
                                    </div>
                                ) : (
                                    <></>
                                )
                                }
                            </>
                        )}
                    </>
                )}
            </div>
        </>
    );
}
