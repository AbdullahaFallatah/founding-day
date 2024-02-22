document.addEventListener('DOMContentLoaded', function () {
    let currentPage = 1;
    const totalPages = 20;
    const pagesContainer = document.querySelector('.pages');
    const turnForwardBtn = document.getElementById('turnForward');
    const turnBackwardBtn = document.getElementById('turnBackward');


    turnForwardBtn.addEventListener('click', function () {
        if (currentPage < totalPages) {
            currentPage += 2;
            updatePages();
        }
    });

    turnBackwardBtn.addEventListener('click', function () {
        if (currentPage > 1) {
            currentPage -= 2;
			
						turnF.classList.add('fadeInMoveUp');
			 turnF.classList.remove('fadeOutMoveUp');
			turnF.classList.remove('hidden');
			turnF.classList.remove('pointeroff');
            updatePages();
			clickCount = clickCount-1;
        }
    });

    function updatePages() {
        let translateValue;
        if (currentPage % 6 === 0) {
            // Display a double-sized page before pages 6, 12, 18, etc.
            translateValue = -100;
        } else {
            translateValue = (currentPage - 1) * -50;
        }
        pagesContainer.style.transform = `translateX(${translateValue}vw)`;
    }
});
var turnF = document.getElementById('turnForward');
var turnB = document.getElementById('turnBackward');
var down = document.getElementById('animateButton')
var clickCount = 0;

document.addEventListener("DOMContentLoaded", function() {
    // Get the logo element
    var logo3 = document.querySelector('.logo3');
    // Set a timeout to start the animation after a delay
    setTimeout(function() {
        // Remove the 'hidden' class to trigger the fade-in effect
        logo3.classList.remove('hidden');


    }, 500); // Adjust the delay (in milliseconds) as needed
});
function handleClick() {
	clickCount++;
    // Get the image element
    var image1 = document.querySelector('.p2img1');
    var image2 = document.querySelector('.p3img1');
	var image3 = document.querySelector('.p3img2');

    // Remove the 'hidden' class and add the class with transition after a delay
    setTimeout(function() {
        image1.classList.remove('hidden');
        image1.classList.add('fadeIn');
    }, 500);
	// Adjust the delay (in milliseconds) as needed
	 setTimeout(function() {
        image2.classList.remove('hidden');
        image2.classList.add('fadeIn');
    }, 500);
		 setTimeout(function() {
        image3.classList.remove('hidden');
        image3.classList.add('fadeIn');
    }, 500);

	var image4 = document.querySelector('.p4img1');
	var image5 = document.querySelector('.p4img2');
	var image6 = document.querySelector('.p4img3');

	var down2 = document.querySelector('.p1img1ph');
	var conten = document.querySelector('.cont');

    if (clickCount === 2) {
        // Remove the 'hidden' class and add the class with transition after the second click
					turnF.classList.add('pointeroff');
        setTimeout(function() {
            image4.classList.remove('hidden');
            image4.classList.add('fadeIn');
			
				 turnF.classList.remove('fadeInMoveUp');
			 turnF.classList.add('fadeOutMoveUp');

			 
			turnF.classList.add('hidden');

        }, 500); // Adjust the delay (in milliseconds) as needed
		 setTimeout(function() {
            image5.classList.remove('hidden');
            image5.classList.add('fadeIn');
        }, 2000);
		 setTimeout(function() {
            image6.classList.remove('hidden');
            image6.classList.add('fadeIn');
        }, 2700);
		 setTimeout(function() {
            conten.classList.remove('hidden');
            conten.classList.add('fadeIn');
        }, 3600);
        // Reset click count after applying the transition
       
    }	
	const log = document.getElementById('logo1');
	const logt = document.getElementById('logo1t');
	const log2 = document.getElementById('logo2');
down.addEventListener('click', function() {
  image4.classList.remove('fadeInMoveUp');
  image4.classList.add('fadeOutMoveUp');
  image5.classList.remove('fadeInMoveUp');
  image5.classList.add('fadeOutMoveUp');
  image6.classList.remove('fadeInMoveUp');
  image6.classList.add('fadeOutMoveUp');
  down.classList.remove('fadeInMoveUp');
  down.classList.add('fadeOutMoveUp');
	turnB.classList.add('pointeroff');
	
				 turnB.classList.remove('fadeInMoveUp');
			 turnB.classList.add('fadeOutMoveUp');
			turnB.classList.add('hidden');
	
	        setTimeout(function() {
				
            image4.classList.add('hidden');
            image5.classList.add('hidden');
            image6.classList.add('hidden');
            down.classList.add('hidden');
			down.classList.add('hidden');
			down.classList.add('pointeroff');	
			log.classList.remove('hidden');	
			logt.classList.remove('hidden');	
			log2.classList.remove('hidden');	
			log.classList.remove('pointeroff');
			log2.classList.remove('pointeroff');

				
				
        }, 3000);

});
	
}

