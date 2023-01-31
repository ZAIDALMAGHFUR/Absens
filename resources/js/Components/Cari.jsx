//import react
import React, { useState } from "react";
//import inertia adapter
import { Inertia } from "@inertiajs/inertia";
import axios from "axios";
// import pic from "../../../../public/images/bg-technologi.jpg";

export default function Search() {

    //define state
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const searchHandler = (e) => {
        setIsLoading(true);
        setBooks([]);
        axios
            .post(`/search`, {
                q: e.target.value,
            })
            .then((response) => {
                733;
                setIsLoading(false);
                setBooks(response.data.books);
            });
    };
    return (
        <>
            <input
                type="text"
                className="form control"
                onChange={(e) => searchHandler(e)}
                placeholder="search product here..."
            />

            {isLoading && (
                <div className="justify-content-center mb-3 text-center">
                    <div className="spinner-border text success" role="status">
                        <span className="visually hidden">Loading...</span>
                    </div>
                    <h6 className="mt-2">Loading...</h6>
                </div>
            )}
            {books.map((book, index) => (
                <div className="col-lg-3 col-md-4 col-sm-6 mb-3" key={index}>
                    <div class="card">
                        {book.cover == null ? (
                            <div className="">
                                <img
                                    src={pic}
                                    alt=""
                                    className="card-img-top"
                                    height="250"
                                />
                            </div>
                        ) : (
                            <div>
                                <img
                                    src={
                                        location.protocol +
                                        "//" +
                                        location.host +
                                        "/storage/cover/" +
                                        book.cover
                                    }
                                    alt=""
                                    className="card-img-top"
                                    height="250"
                                />
                            </div>
                        )}
                        <div class="card-body">
                            <h5 class="card-title">{book.book_code}</h5>
                            <p class="card-text">{book.title}</p>
                            <p
                                className={
                                    book.status === "in stock"
                                        ? "card-text text-end fw-bold text-success"
                                        : "card-text text-end fw-bold text-danger"
                                }
                            >
                                {book.status}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}