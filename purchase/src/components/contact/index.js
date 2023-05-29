import React from 'react'
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import FAQ from "../faq"
import "./styles.css"

const Contact = () => {
    return (
        <div className="main-container-contact">
            <div className="contact-component">
                <div className="left-contact-com">
                    <div className="diff-detail-box">
                        <img className="image-icon-contact" src="/images/contact/1.png" />
                        <div>
                            <Typography className="heading-individual-contact" variant="subtitle2">
                                Address
                            </Typography>
                            <Typography className="subText-heading-contact" variant="subtitle2">
                                Survey No 334,  15 Kokilkunj, CHSL,
                                Tragad <br />Road, Ahmedabad.
                            </Typography>
                        </div>
                    </div>
                    <div className="diff-detail-box">
                        <img className="image-icon-contact" src="/images/contact/2.png" />
                        <div>
                            <Typography className="heading-individual-contact" variant="subtitle2">
                                Contact
                            </Typography>
                            <Typography className="subText-heading-contact" variant="subtitle2">
                                Mobile: +91 - 9289497697
                                <br />Mail: contact@echooling.com
                            </Typography>
                        </div>
                    </div>
                    <div className="diff-detail-box">
                        <img className="image-icon-contact" src="/images/contact/3.png" />
                        <div>
                            <Typography className="heading-individual-contact" variant="subtitle2">
                                Hour of operation
                            </Typography>
                            <Typography className="subText-heading-contact" variant="subtitle2">
                                Monday - Friday: 09:00 - 20:00 <br />
                                Sunday & Junday: 10:30 - 22:00
                            </Typography>
                        </div>
                    </div>
                </div>
                <div className="right-contact-com">
                    <Typography variant="h5" sx={{ padding: '10px', fontWeight: 'bold', color: '#0F1216' }}>
                        Questions? <br />
                        Feel free to contact us.
                    </Typography>
                    <div className="five-inputs-contact">
                        <input className="single-input-contact" placeholder='Name' />
                        <input className="single-input-contact" placeholder='Email' />
                        <input className="single-input-contact" placeholder='Subject' />
                        <input className="single-input-contact" placeholder='Phone' />
                        <textarea className="single-input-contact" style={{ width: "100%", padding: '10 30px 0', height: '34vh' }} placeholder='Message' />
                    </div>
                </div>
            </div>
            <Button className="sendMessageBtn" variant="contained" sx={{ ml: { xs: '25%', md: '50%' } }}>Send Message</Button>
        </div >
    )
}

export default Contact