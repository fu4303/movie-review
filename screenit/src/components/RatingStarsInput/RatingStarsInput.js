import React, { useRef } from 'react';
import './style.css';
import { useSeenItContext } from '../../utils/SeenItContext';
import { TweenMax, Power3 } from 'gsap';

const RatingStarsInput = () => {

    // Imports states from context
    const { rating, setRating, starHover, setStarHover } = useSeenItContext();

    let starRef = useRef();



    return (

        // Ref grabs the parent div that holds all stars
        <div className="ratings" ref={el => starRef = el}>

            {/* Creates an array of 5 to duplicate the stars */}
            {[...Array(5)].map((star, index) => {

                // Makes the values start at "1" instead of "0"
                const ratingValue = index + 1;

                // Function for when stars are clicked
                const starClick = () => {

                    // Sets the global raiting state the current star's value
                    setRating(ratingValue);

                    // If the 5th star is selected, the animation runs on all 5 stars.
                    if (ratingValue === 5) {
                        TweenMax.to(starRef.children, .2,
                            {
                                y: -5,
                                autoAlpha: 0.8,
                                scale: 1.3,
                                rotation: 360,

                                stagger: {
                                    amount: 0.2,
                                    yoyo: true,
                                    repeat: 1
                                },
                                ease: Power3.easeOut

                            });
                    }
                }

                return (
                    <label key={index} >
                        <input
                            type="radio"
                            name="rating"
                            className="rating__input-radio"
                            value={ratingValue}

                            // Controls which item is being selected
                            // onClick={() => setRating(ratingValue)}
                            onClick={starClick}

                        />

                        <svg
                            width="26"
                            height="25"
                            viewBox="0 0 26 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"

                            // Changes classes based on the rating value value being less than or equal to the rating state
                            className={`rating__star 
                                        ${ratingValue <= (starHover || rating) ? "rating__star--active" : "rating__star--inactive"}
                                        `}

                            // If the star is not disabled then the hover class will be added on mouse over
                            onMouseEnter={() => setStarHover(ratingValue)}

                            // Removes hover class
                            onMouseLeave={() => setStarHover(null)}
                        >

                            <path d="M11.1745 2.07813C11.8805 0.500952 14.1195 0.500953 14.8255 2.07813L16.8673 6.63967C17.1624 7.29881 17.7898 7.7477 18.5089 7.81408L23.5042 8.2752C25.2648 8.43773 25.964 10.6373 24.6204 11.7866L20.9508 14.9255C20.3849 15.4095 20.1348 16.1678 20.3016 16.8934L21.3809 21.5874C21.7716 23.2866 19.9523 24.6373 18.4388 23.7716L13.9929 21.2289C13.3777 20.877 12.6223 20.877 12.0071 21.2289L7.56121 23.7716C6.04766 24.6373 4.22844 23.2866 4.61913 21.5874L5.69835 16.8934C5.8652 16.1678 5.61509 15.4095 5.04923 14.9255L1.37961 11.7866C0.0359914 10.6373 0.735185 8.43773 2.4958 8.2752L7.49107 7.81408C8.21017 7.7477 8.83764 7.29881 9.13269 6.63967L11.1745 2.07813Z" />
                        </svg>
                    </label>
                );
            })}
        </div>
    )
}

export default RatingStarsInput;