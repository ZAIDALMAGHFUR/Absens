//import react  
import React from "react";

//import inertia adapter
import { Inertia } from '@inertiajs/inertia';

//import Sweet Alert
import Swal from 'sweetalert2';



export default function Delete({ URL, id }) {

    //method destroy
    const destroy = async (id) => {

        //show sweet alert
        Swal.fire({
            title: 'Are you sure?',
            text: "Kamu yakin memilih ini!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                //delete
                Inertia.delete(`${URL}/${id}`)
                Swal.fire({
                    title: 'Success!',
                    text: 'Data deleted successfully!',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500
                })
            } else {
                Swal.fire({
                    title: 'Success!',
                    text: 'Data not deleted!',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    }

    return (
        <>
            <button onClick={() => destroy(id)} className="btn btn-danger btn-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-400" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </button>
        </>
    )

}