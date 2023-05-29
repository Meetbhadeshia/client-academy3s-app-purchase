
import FooterMenu from "./footerMenu";
import "./footer.css";
import { useState, useEffect } from 'react'

function Footer() {
    const [resize, setResize] = useState(window.innerWidth);

    function handleResize() {
        setResize(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [resize]);
    const AboutUs = [
        {
            id: 1,
            title: "About Us",
            list: [
                "About",
                "Courses",
                "Events",
                "Career",
                "Became a Teacher",
                "Contact",
            ],
        },
    ];

    const UsefulLinks = [
        {
            id: 1,
            title: "Useful Links",
            list: [
                "Browse Library",
                "Library",
                "Partners",
                "News & Blog",
                "Faq",
                "Tutorials",
            ],
        },
    ];
    return (
        <footer className="footer">
            <div className="footer-sec">
                <div className="footer-container">
                    <div className="footer-inner">
                        <div className="footer-col-1 footerCol">
                            <div className="footer-logo">
                                <img src="/images/academy 3s white.png" alt="footer-logo" width="190px" height="70px" />
                            </div>
                            <div className="description">
                                <h5 style={{ fontSize: resize < 900 && '1rem' }}>
                                    There are course and event custom post types so you can easily
                                    create and manage course, events.
                                </h5>
                            </div>
                            <div className="footer-address">
                                <ul className="contactInfo">
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> {/* telicon */}
                                        <a href="tel:40276244183"> +(402) 762 441 83</a>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> {/* mailicon */}
                                        <a href="mailto:info@echooling.com"> info@echooling.com </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-col-2 footerCol">
                            {AboutUs.map((item) => (
                                <FooterMenu key={item.id} title={item.title} list={item.list} />
                            ))}
                        </div>
                        <div className="footer-col-3 footerCol">
                            {UsefulLinks.map((item) => (
                                <FooterMenu key={item.id} title={item.title} list={item.list} />
                            ))}
                        </div>
                        <div className="footer-col-4 footerCol">
                            <div className="news-letter">
                                <h3 className="footer-menu-title">Newsletter</h3>
                                <div className="footer-form">
                                    <p className="desc">
                                        Get the latest Echooling news delivered to you inbox
                                    </p>
                                    <form className="form-2" action="#">
                                        <input
                                            className="footer-input"
                                            type="email"
                                            required
                                            placeholder="Enter your email"
                                        />
                                        <button className="btn">
                                            <i className="arrow-right"></i>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-sec">
                        <div className="copyright">
                            © 2022 <a href="/">Academy3s.</a> All Rights Reserved
                        </div>
                        <div className="socials">
                            <div className="social-title">Follow Us</div>
                            <ul className="social-icon">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="white" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg> {/* facebook icon */}
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="white" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg> {/* twitter icon */}
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="white" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg> {/* linkedin icon */}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;