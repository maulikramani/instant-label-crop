"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Features from "@/components/Features";

import { useRef, useState, useEffect } from "react";
import React from "react";
import { CircleX, FileText, ScissorsLineDashed } from "lucide-react";
import MessageBox from "@/components/MessageBox";

export default function Home() {
    const uploadRef = useRef<HTMLInputElement | null>(null);
    const [pdfFile, setPdfFile] = useState<File | undefined>();
    const [marketplace, setMarketplace] = useState<string>("meesho");
    const [format, setFormat] = useState<string>("single");

    // Message box
    const [message, setMessage] = useState<string>("");
    const [messageType, setMessageType] = useState<
        null | "success" | "info" | "error" | "warning"
    >(null);

    useEffect(() => {
        if (message && messageType != "info") {
            const timer = setTimeout(() => {
                setMessage("");
                setMessageType(null);
            }, 4000);
            return () => clearTimeout(timer);
        }
    }, [message]);

    const handleUploadClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPdfFile(event.target.files?.[0]);
        console.log(event.target.files?.[0]);
    };

    const handlePrepareLabel = () => {
        // check if user has uploaded pdf.
        if (!pdfFile) {
            setMessage("Please select a PDF file first.");
            setMessageType("warning");
        }

        try {
            setMessage("Processing PDF...");
            setMessageType("info");
        } catch {}
    };

    return (
        <div>
            <Navbar currentPage="home" />
            <main className="container">
                <div className={`row justify-content-center mb-2 mt-3`}>
                    <div className={`col-md-8`}>
                        <div
                            className={`${styles["upload-container"]} p-2`}
                            id="upload-container"
                        >
                            {/* Choose PDF Section */}
                            <input
                                type="file"
                                id="file-input"
                                accept=".pdf"
                                className="d-none"
                                ref={uploadRef}
                                onChange={handleUploadClick}
                            ></input>
                            <button
                                className={`btn ${styles["btn-primary"]} m-1`}
                                onClick={() => uploadRef?.current?.click()}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    fill="currentColor"
                                    className={`bi bi-file-earmark-pdf me-2`}
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
                                    <path d="M4.603 14.087a.81.81 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.68 7.68 0 0 1 1.482-.645 19.697 19.697 0 0 0 1.062-2.227 7.269 7.269 0 0 1-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.65-.823.192-.077.4-.12.602-.077a.7.7 0 0 1 .477.365c.088.164.12.356.127.538.007.188-.012.396-.047.614-.084.51-.27 1.134-.52 1.794a10.954 10.954 0 0 0 .98 1.686 5.753 5.753 0 0 1 1.334.05c.364.066.734.195.96.465.12.144.193.32.2.518.007.192-.047.382-.138.563a1.04 1.04 0 0 1-.354.416.856.856 0 0 1-.51.138c-.331-.014-.654-.196-.933-.417a5.712 5.712 0 0 1-.911-.95 11.651 11.651 0 0 0-1.997.406 11.307 11.307 0 0 1-1.02 1.51c-.292.35-.609.656-.927.787a.793.793 0 0 1-.58.029z" />
                                </svg>
                                Choose PDF File
                            </button>

                            {/* Dispaly uploaded file section */}
                            {pdfFile && (
                                <div
                                    className={`${styles["file-name"]} small mb-2 p-0`}
                                >
                                    <FileText />
                                    <span
                                        className={`${styles["file-name-text"]} text-muted`}
                                    >
                                        {pdfFile ? pdfFile.name : ""}
                                    </span>
                                    <CircleX
                                        onClick={() => setPdfFile(undefined)}
                                    />
                                </div>
                            )}

                            {/* Options selection section */}
                            <div
                                className={`${styles["options-container"]} mb-1 p-2`}
                            >
                                <div className={styles["option-section"]}>
                                    <h4>Choose Format</h4>
                                    <div className={styles["radio-group"]}>
                                        <div
                                            className={`${styles["radio-option"]} p-2`}
                                        >
                                            <input
                                                type="radio"
                                                name="format"
                                                id="format-single"
                                                checked={format === "single"}
                                                onChange={() =>
                                                    setFormat("single")
                                                }
                                            />
                                            <label htmlFor="format-single">
                                                Single Label (For Sticker
                                                Printer)
                                            </label>
                                        </div>
                                        <div
                                            className={`${styles["radio-option"]} p-2`}
                                        >
                                            <input
                                                type="radio"
                                                name="format"
                                                id="format-a4"
                                                checked={format === "a4"}
                                                onChange={() => setFormat("a4")}
                                            />
                                            <label htmlFor="format-a4">
                                                A4 Layout (For A4 Paper)
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className={`${styles["option-section"]}`}>
                                    <h4>Choose Marketplace</h4>
                                    <div className={styles["radio-group"]}>
                                        <div
                                            className={`${styles["radio-option"]} p-2`}
                                        >
                                            <input
                                                type="radio"
                                                name="marketplace"
                                                id="marketplace-meesho"
                                                value="meesho"
                                                checked={
                                                    marketplace === "meesho"
                                                }
                                                onChange={() =>
                                                    setMarketplace("meesho")
                                                }
                                            />
                                            <label htmlFor="marketplace-meesho">
                                                <Image
                                                    src="/images/meesho_logo.png"
                                                    height={20}
                                                    width={20}
                                                    alt="Meesho logo"
                                                    className="me-2"
                                                />
                                                Meesho
                                            </label>
                                        </div>
                                        <div
                                            className={`${styles["radio-option"]} p-2`}
                                        >
                                            <input
                                                type="radio"
                                                name="marketplace"
                                                id="marketplace-flipkart"
                                                value="flipkart"
                                                checked={
                                                    marketplace === "flipkart"
                                                }
                                                onChange={() =>
                                                    setMarketplace("flipkart")
                                                }
                                            />
                                            <label htmlFor="marketplace-flipkart">
                                                <Image
                                                    src="/images/flipkart_logo.png"
                                                    height={20}
                                                    width={20}
                                                    className="me-2"
                                                    alt="Flipkart logo"
                                                />
                                                Flipkart
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Prepare shipping labels button section */}
                            <button
                                id="prepare-button"
                                className={`${styles["btn"]} ${styles["btn-primary"]} ${styles["prepare-button"]} btn-sm w-100 p-0`}
                                onClick={handlePrepareLabel}
                            >
                                <div className="d-flex align-items-center justify-content-center">
                                    <ScissorsLineDashed />
                                    <span>Prepare Shipping Label</span>
                                    <div
                                        className={`${styles["progress"]} ms-2`}
                                        style={{ width: 60, height: 8 }}
                                    >
                                        <div
                                            id="progress-bar"
                                            className={`${styles["progress-bar"]}`}
                                            role="progressbar"
                                            style={{ width: "0%" }}
                                            aria-valuenow={0}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        ></div>
                                    </div>
                                </div>
                            </button>
                        </div>

                        <MessageBox
                            message={message}
                            type={messageType}
                            onClose={() => {
                                setMessage("");
                                setMessageType(null);
                            }}
                        />
                    </div>
                </div>

                <Features />
            </main>
            <Footer />
        </div>
    );
}
