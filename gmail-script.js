
//triggers when you click on an email from the inbox
//ensure Gmail page has loaded before you run script

window.onload = function () {
    //detect if we're inside an email, and send a signal every time 'reply' is pressed
    window.onhashchange = () => {
        if (window.location.hash.startsWith('#inbox/')) {
            const spans = document.querySelectorAll ('span');

            for (const span of spans){
                if (span.innerText === 'Reply'){
                    //do something with the element
                    span.addEventListener('click', function(){
                        console.log('Reply button pressed');
                        // when you click reply, scrape email thread history 
                        const  email = document.querySelector('.adn.ads');
                        console.log(email.textContent);

                        (async function)

                    });
                }
            }
        }   
    };
}