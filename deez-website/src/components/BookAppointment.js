import '../App.css';
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { AppContext } from '../AppContext.js';
import { useForm } from 'react-hook-form';

function BookAppointment() {
    // State to track form submission and store full name
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [fullName, setFullName] = useState(''); // State for full name

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { setcontactUsButtonClicked } = useContext(AppContext);

    // Handle form submission
    const onSubmit = (data) => {
        setFullName(data.fullName); // Store the full name from form data
        setIsSubmitted(true);       // Set the form as submitted

        // send email containing data, requres backend, to be implemented soon
    };

    return (
        <div className="App">
            <header className="header">
                <div className="DPL-header">
                    <Link to="/">
                        <button className="DPL-header-button">
                            <img src="/dpl-logo.png" alt="DPL" />
                        </button>
                    </Link>
                </div>
                <div className="buttons-header-DIV">
                    <Link to="/BookAppointment">
                        <button className="header-button">Book an Appointment</button>
                    </Link>
                    <Link to="/">
                        <button
                            className="header-button"
                            onClick={() => setTimeout(() => setcontactUsButtonClicked(true), 500)}
                        >
                            Contact Us
                        </button>
                    </Link>
                    <Link to="/OurMission">
                        <button className="header-button">Our Mission</button>
                    </Link>
                </div>
            </header>

            <main>
                {isSubmitted ? (
                    // Show Thank You message with full name upon form submission
                    <section className="title">
                        <h2>Thank you, {fullName}!</h2>
                        <p>Your form has been submitted successfully.</p>
                    </section>
                ) : (
                    // Display the form if not submitted
                    <div className="bookAppointmentForm">

                        <section className="title">
                            <h2>Book an Appointment</h2>
                            <p>Please fill out the form below to book an appointment with us.</p>
                        </section>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <p className="question">Let's start with your full name</p>
                            <input
                                {...register("fullName", { required: "This is required." })}
                                placeholder="Full Name"
                            />
                            <p className ="errors">{errors.fullName?.message}</p>

                            <p className="question">Address</p>
                            <input {...register("address")} placeholder="Address" />

                            <p className="question">What's the best phone number to reach you?</p>
                            <input
                                {...register("phoneNumber", { required: "This is required." })}
                                placeholder="Phone Number"
                            />
                            <p className ="errors">{errors.phoneNumber?.message}</p>

                            <p className="question">What's the best email for reaching you?</p>
                            <input
                                {...register("email", { required: "This is required." })}
                                placeholder="Email"
                            />
                            <p className ="errors">{errors.email?.message}</p>

                            <p className="question">What’s the problem?</p>
                            <section className="details">
                            <p>Please include a brief description of which fixture it is and what the problem is.</p>
                            </section>
                            <input
                                {...register("problem", { required: "This is required." })}
                                placeholder="Problem (e.g., Kitchen sink clogged, not draining)"
                            />
                            <p className ="errors">{errors.problem?.message}</p>

                            <p className="question">Please select your preferred service date</p>
                            <section className="details">
                            <p>Please note our hours of operation:</p>
                            <ul>
                                <li>Weekdays: 4:00 PM - 11:00 PM</li>
                                <li>Weekends: 5:30 AM - 11:00 PM</li>
                                <li>Holidays: CLOSED</li>
                            </ul>
                            </section>
                            <input {...register("serviceDate")} placeholder="Service Date" type="date" />

                            <p className="question">Please select your preferred service time</p>
                            <input {...register("serviceTime")} placeholder="Service Time (eg. 10:00 am, 3:00 pm, etc)" />

                            <input className="main-button"type="submit" />
                        </form>
                    </div>
                )}
            </main>

            <footer className="footer">
                <div className="DPL-footer">
                    <p>Deez Plumbing LTD</p>
                </div>
                <nav>
                    <div className="footer-links">
                        <Link to="/OurMission">Our Mission</Link>
                        <Link to="/BookAppointment">Book an Appointment</Link>
                    </div>
                </nav>
            </footer>
        </div>
    );
}

export default BookAppointment;
