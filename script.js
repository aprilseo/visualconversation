document.addEventListener("DOMContentLoaded", function() {
    const initialDelay = 3500; // 3 seconds
    const bellaDelay = 800; // 1 second
    const baxterDelay = 7500; // 7 seconds
    const diedDelay = 3000; // 3 seconds
    const bellaDelay2 = 1500; // 1.5 seconds after "died" message
    const baxterDelay2 = 800; // 0.8 seconds after second Bella message
    const baxterDelay3 = 1000; // 1 second after "No" message
    const bellaDelay3 = 8500; // 2 seconds after fourth Baxter message
    const baxterDelay4 = 2000; // 1.5 seconds after third Bella message

    function createText() {
        const textContainer = document.getElementById('text-container');

        // Create and append the first message by Baxter
        const baxterText1 = document.createElement('p');
        baxterText1.innerHTML = '<span class="baxter">BAXTER</span> <span class="baxter-message">I am...um...</span>';
        textContainer.appendChild(baxterText1);

        // Show the text after initial delay
        textContainer.style.display = 'block';

        // Delay the appearance of the "BELLA" text
        setTimeout(function() {
            const bellaText = document.createElement('p');
            bellaText.innerHTML = '<span class="bella">BELLA</span> <span class="bella-message">Prim say you not be? Who is?</span>';
            textContainer.appendChild(bellaText);

            // Add a space between Bella's message and Baxter's second message
            const space = document.createElement('p');
            space.innerHTML = '&nbsp;'; // Add a non-breaking space
            textContainer.appendChild(space);

            // Delay the appearance of the additional message by Baxter
            setTimeout(function() {
                const baxterText2 = document.createElement('p');
                baxterText2.innerHTML = '<span class="baxter">BAXTER</span> <span class="baxter-message">You are an orphan. </span>';
                textContainer.appendChild(baxterText2);

                // Delay the appearance of the "died" message
                setTimeout(function() {
                    const diedText = document.createElement('p');
                    diedText.innerHTML = '<span class="baxter">BAXTER</span> <span class="baxter-message">Your parents died.</span>';
                    textContainer.appendChild(diedText);

                    // Add a space after the "died" message
                    const space = document.createElement('p');
                    space.innerHTML = '&nbsp;'; // Add a non-breaking space
                    textContainer.appendChild(space);

                    // Delay the appearance of the second Bella message
                    setTimeout(function() {
                        const bellaText2 = document.createElement('p');
                        bellaText2.innerHTML = '<span class="bella">BELLA</span> <span class="bella-message">Then you cut parents up God?</span>';
                        textContainer.appendChild(bellaText2);

                        // Delay the appearance of the second message by Baxter
                        setTimeout(function() {
                            const baxterText3 = document.createElement('p');
                            baxterText3.innerHTML = '<span class="baxter">BAXTER</span> <span class="baxter-message">No. </span>';
                            textContainer.appendChild(baxterText3);

                            // Delay the appearance of the third message by Baxter
                            setTimeout(function() {
                                const baxterText4 = document.createElement('p');
                                baxterText4.classList.add('special-baxter-message'); // Add a class to the element
                                baxterText4.innerHTML = '<span class="baxter">BAXTER</span> <span class="baxter-message">They were... my friends, they were brave explorers and were killed in a landslide in South America. They pushed the boundaries of what was known and paid a price. But there is no other way to live Bella. They sent you to me to care for you. </span>';
                                textContainer.appendChild(baxterText4);

                                // Add a space after the fourth Baxter message
                                const space2 = document.createElement('p');
                                space2.innerHTML = '&nbsp;'; // Add a non-breaking space
                                textContainer.appendChild(space2);

                                // Delay the appearance of the third Bella message
                                setTimeout(function() {
                                    const bellaText3 = document.createElement('p');
                                    bellaText3.innerHTML = '<span class="bella">BELLA</span> <span class="bella-message">Dead. </span>';
                                    textContainer.appendChild(bellaText3);

                                    // Add a space after the fourth Baxter message
                                    const space2 = document.createElement('p');
                                    space2.innerHTML = '&nbsp;'; // Add a non-breaking space
                                    textContainer.appendChild(space2);

                                    // Delay the appearance of the fifth message by Baxter
                                    setTimeout(function() {
                                        const baxterText5 = document.createElement('p');
                                        baxterText5.innerHTML = '<span class="baxter">BAXTER</span> <span class="baxter-message">Afraid so my darling. </span>';
                                        textContainer.appendChild(baxterText5);
                                    }, baxterDelay4);
                                }, bellaDelay3);
                            }, baxterDelay3);
                        }, baxterDelay2);
                    }, bellaDelay2);
                }, diedDelay);
            }, baxterDelay);
            
        }, bellaDelay);

        // Create and append the overlay
        const overlay = document.createElement('div');
        overlay.setAttribute('id', 'overlay');
        document.body.appendChild(overlay);
    }

    // Call the createText function after initial delay
    setTimeout(createText, initialDelay);
});