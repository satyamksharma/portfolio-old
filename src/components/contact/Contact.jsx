import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_lhwsmdm", "template_j5zr8qj", form.current, "LWPGVh5OEKMIkPSss");
        e.target.reset();
    };
    return (
        <section
            className='contact section'
            id='contact'
        >
            <h2
                className='section__title'
                data-aos='zoom-in-up'
            >
                Get in Touch!
            </h2>
            <span
                className='section__subtitle'
                data-aos='zoom-in-up'
            >
                Contact Me
            </span>

            <div className='contact__container container grid'>
                <div className='contact__content'>
                    <h3
                        className='contact__title'
                        data-aos='zoom-out-up'
                    >
                        Talk to me
                    </h3>

                    <div className='contact__info'>
                        <div
                            className='contact__card'
                            data-aos='zoom-out-up'
                        >
                            <i className='bx bx-mail-send contact__card-icon'></i>
                            <h3 className='contact__card-title'>Email</h3>
                            <span className='contact__card-data'>ksatyam433@gmail.com</span>

                            <a
                                href='mailto:ksatyam433@gmail.com.com'
                                className='contact__button'
                            >
                                Write me{" "}
                                <i className='bx bx-right-arrow-alt contact__button-icon'></i>
                            </a>
                        </div>
                        <div
                            className='contact__card'
                            data-aos='zoom-out-up'
                        >
                            <i className='bx bxl-whatsapp contact__card-icon'></i>
                            <h3 className='contact__card-title'>WhatsApp</h3>
                            <span className='contact__card-data'>+91 8987519442</span>

                            <a
                                href='https://api.whatsapp.com/send?phone=918987519442&text=Hi%20there,%20I%20want%20to%20talk%20to%20you'
                                className='contact__button'
                            >
                                Write me{" "}
                                <i className='bx bx-right-arrow-alt contact__button-icon'></i>
                            </a>
                        </div>
                        <div
                            className='contact__card'
                            data-aos='zoom-out-up'
                        >
                            <i className='bx bxl-messenger contact__card-icon'></i>
                            <h3 className='contact__card-title'>Messenger</h3>
                            <span className='contact__card-data'>Satyamkumar9980.fb123</span>

                            <a
                                href='htttps://m.me/Satyamkumar9980'
                                className='contact__button'
                            >
                                Write me{" "}
                                <i className='bx bx-right-arrow-alt contact__button-icon'></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='contact__content'>
                    <h3
                        className='contact__title'
                        data-aos='zoom-out-up'
                    >
                        Write me your Idea
                    </h3>

                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className='contact__form'
                    >
                        <div
                            className='contact__form-div'
                            data-aos='zoom-out-up'
                        >
                            <label className='contact__form-tag'>Name</label>
                            <input
                                type='text'
                                name='name'
                                className='contact__form-input'
                                placeholder='Type your name'
                            />
                        </div>

                        <div
                            className='contact__form-div'
                            data-aos='zoom-out-up'
                        >
                            <label className='contact__form-tag'>Email</label>
                            <input
                                type='email'
                                name='email'
                                className='contact__form-input'
                                placeholder='Type your email'
                            />
                        </div>

                        <div
                            className='contact__form-div contact__form-area'
                            data-aos='zoom-out-up'
                        >
                            <label className='contact__form-tag'>Message</label>
                            <textarea
                                name='idea'
                                cols='30'
                                rows='10'
                                className='contact__form-input'
                                placeholder='Write your idea here'
                            ></textarea>
                        </div>
                        <button
                            class='bt'
                            id='bt'
                            data-aos='zoom-out-up'
                        >
                            <span
                                class='msg'
                                id='msg'
                            ></span>
                            SEND
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
