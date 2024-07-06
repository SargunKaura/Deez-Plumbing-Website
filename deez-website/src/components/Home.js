import '../App.css';
import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../AppContext.js';

function Home() {

    const { contactUsButtonClicked , setcontactUsButtonClicked } = useContext(AppContext);

    const scrollToContact = () => {// function for making the contact us button scroll to the contact section

        const contactSection = document.getElementById('contact-section');

        if (contactSection) {

            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    if(contactUsButtonClicked) {
        scrollToContact();
        setcontactUsButtonClicked(false);
    }
    const images = [

        '/images/before-after/before-image-one.jpg', //images for before and after carousel
        '/images/before-after/after-image-one.jpg',
        '/images/before-after/before-image-two.jpg',
        '/images/before-after/after-image-two.jpg',
        '/images/before-after/before-image-three.jpg',
        '/images/before-after/after-image-three.jpg'
    ];

    const hoursImages = [

        '/images/hours-image1.jpg', // test images for hours of operation carousel
        '/images/hours-image2.jpg',
        '/images/hours-image3.jpg',
        '/images/hours-image4.jpg',
    ];

    const Carousel = ({ images }) => {

        const [currentIndex, setCurrentIndex] = useState(0);
        const [transition, setTransition] = useState(true);
        const [isManual, setIsManual] = useState(false); // Track user interaction
        const totalSlides = Math.ceil(images.length / 2);

        const handleTransition = (newIndex) => {

            setTransition(true);

            setTimeout(() => {
                setCurrentIndex(newIndex);
            }, 500);
        };

        const nextSlide = () => {

            setIsManual(true); // User interaction detected
            handleTransition((currentIndex + 1) % totalSlides);
        };

        const prevSlide = () => {

            setIsManual(true); // User interaction detected
            handleTransition(currentIndex === 0 ? totalSlides - 1 : currentIndex - 1);
        };

        // function that automaticaly animates the carosel, will stop animating once the user interacts with the carousel
        useEffect(() => {
            if (!isManual) {
                const interval = setInterval(() => {
                    handleTransition((currentIndex + 1) % totalSlides);
                }, 3000); // Change slide every 3 seconds
    
                return () => clearInterval(interval); // Cleanup interval on component unmount
            }
        }, [currentIndex, isManual]);
        return (

            <div className="carousel-div">

                <button className="carousel-button" onClick={prevSlide}>
                &#x2190; {/* Left arrow character code */}
                </button>

                <div className="carousel">

                    <div className="carousel-slide" 
                    style={{ transform: `translateX(-${currentIndex * 100}%)`, 
                    transition: transition ? 'transform 0.3s ease-in-out' : 'none', width: `100%`
                    }}>

                        {images.map((image, index) => (
                            <img key={index} src={image} alt={`Slide ${index}`} />
                        ))}

                    </div>

                </div>

                <button className="carousel-button" onClick={nextSlide}>
                &#x2192; {/* Right arrow character code */}
                </button>

            </div>
        );
    };

    return (

        <div className="App">
            <header className="header">

                <div className="DPL-header">

                    <Link to="/">
                        <button className="DPL-header-button">DPL</button>
                    </Link>

                </div>

                <div className="buttons-header-DIV">

                    <Link to="/BookAppointment">
                        <button className="header-button">Book an Appointment</button>
                    </Link>

                    <button className="header-button" onClick={() => setcontactUsButtonClicked(true)}>Contact Us</button>

                    <Link to="/OurMission">
                        <button className="header-button">Our Mission</button>
                    </Link>

                </div>

            </header>

            <main>

                <section className="title">

                    <h2>Deez Plumbing LTD</h2>
                    <p>Local Plumbers for Local People.</p>

                    <Link to="/BookAppointment">
                        <button className = "main-button" id = "appointment-button">Book an Appointment</button>
                    </Link>

                </section>

                <section className="hours-operation">

                    <div className="hours-content">

                        <h3>Hours of Operation</h3>
                        <p>Weekdays: 4:00 PM - 11:00 PM</p>
                        <p>Weekends: 5:30 AM - 11:00 PM</p>
                        <p>Holidays: CLOSED</p>

                    </div>
                    
                    <Carousel images={hoursImages} />

                </section>

                <section className="mission">

                    <div className="mission-text">

                        <h3>Our Mission</h3>
                        <p>Two apprentice plumbers pursuing their dreams, founding their own
                        company with a vision for excellence in plumbing services and
                        customer satisfaction.</p>

                    </div>

                    <div className="mission-elements">

                        <Link to="/OurMission">

                            <button className = "main-button" id ="mission-button">Meet the Crew</button>
                            
                        </Link>

                    </div>

                </section>

                <section className="reviews">

                    <div className="reviews-text">

                        <h3>Reviews and Testimonials</h3>
                        <p>Our work and reviews.</p>

                    </div>

                    <Carousel images={images} />

                    <div className="testimonials">

                        <div className="testimonial">

                            <p>"A heroic piece of praise!"</p>
                            <p>- Name</p>

                        </div>

                        <div className="testimonial">

                            <p>"A fantastic bit of feedback!"</p>
                            <p>- Name</p>

                        </div>

                        <div className="testimonial">

                            <p>"A genuinely glowing review!"</p>
                            <p>- Name</p>

                        </div>

                    </div>

                    <div className="review-button-Div">

                        <button className = "main-button" id = "review-button">Read more Reviews</button>

                    </div>

                </section>

                <section id="contact-section" className="contact">

                    <h3>Contact Us</h3>
                    <p>Email: Deezplumbers@gmail.com</p>
                    <p>Business phone: TBD</p>

                </section>

            </main>

            <footer className="footer">

                <div className="DPL-footer">

                  <p>Deez Plumbing LTD</p>

                </div>

                <nav>

                    <div className="footer-links">
                        <a href="#our-mission">Our Mission</a>
                        <a href="#book-appointment">Book an Appointment</a>
                    </div>

                </nav>

            </footer>

        </div>
    );
}

export default Home;
