import Image from "next/image";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer mt-5">
            <div className="container">
                <div className="row">
                    {/* Footer logo and small description section */}
                    <div className="col-lg-4 mb-4">
                        <div className="footer-brand">
                            <Image
                                src="./logo.svg"
                                alt="Instant Label Crop"
                                height={40}
                                width={180}
                                className="mb-3 footer-brand-logo"
                            />
                            <p className="text-muted">
                                Simplify your Meesho shipping process with our
                                smart PDF label cropping tool.
                            </p>
                        </div>
                    </div>

                    {/* Footer Company Section */}
                    <div className="col-lg-4 col-md-4 mb-4">
                        <h5 className="footer-heading">Company</h5>
                        <ul className="footer-links">
                            <li>
                                <a href="/about">About Us</a>
                            </li>
                            <li>
                                <a href="/blogs">Blog</a>
                            </li>
                            <li>
                                <a href="/contact">Contact</a>
                            </li>
                        </ul>
                    </div>

                    {/* Footer Legal Section */}
                    <div className="col-lg-4 col-md-4 mb-4">
                        <h5 className="footer-heading">Legal</h5>
                        <ul className="footer-links">
                            <li>
                                <a href="/privacy">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="/terms">Terms of Service</a>
                            </li>
                            <li>
                                <a href="/cookies">Cookie Policy</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom mt-4 pt-4 border-top">
                    <div className="d-flex flex-wrap justify-content-between align-items-center">
                        <p className="text-muted mb-0">
                            © 2025 Instant PDF Crop. All rights reserved.
                        </p>
                        <div className="d-flex align-items-center">
                            <Image
                                src="./logo.svg"
                                height={24}
                                width={108}
                                alt="Instant Label Crop"
                                className="me-2"
                            />
                            <span className="text-muted">
                                Made with ❤️ for Online sellers
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
