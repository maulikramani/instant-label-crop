"use client";

import { JSX } from "react/jsx-runtime";
import Image from "next/image";
import "./Navbar.css";

function Navbar({ currentPage }: { currentPage: string }): JSX.Element {
    return (
        <>
            {" "}
            <div className="navbar navbar-expand-lg custom-navbar">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <Image
                            src="./logo.svg"
                            width={180}
                            height={40}
                            alt="Instant Label Crop"
                        />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbaroptions"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                        className="collapse navbar-collapse"
                        id="navbaroptions"
                    >
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a
                                    className={`nav-link ${
                                        currentPage === "home" && "active"
                                    }`}
                                    href="/"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="nav-icon"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                        />
                                    </svg>
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className={`nav-link ${
                                        currentPage === "blogs" && "active"
                                    }`}
                                    href="/blogs"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="nav-icon"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15"
                                        />
                                    </svg>
                                    Blogs
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className={`nav-link ${
                                        currentPage === "about" && "active"
                                    }`}
                                    href="/about"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="nav-icon"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    About Us
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className={`nav-link ${
                                        currentPage === "contact" && "active"
                                    }`}
                                    href="/contact"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="nav-icon"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
