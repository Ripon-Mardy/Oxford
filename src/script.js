// navbar
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  const sticky = navbar.offsetTop;

  if (window.pageYOffset > sticky) {
      navbar.classList.add('fixed', 'top-0', 'left-0', 'right-0', 'shadow-md', 'z-50');
  } else {
      navbar.classList.remove('fixed', 'top-0', 'left-0', 'right-0', 'shadow-md', 'z-50');
  }
});

// ===== navigation menu ====
const menuToggle = document.getElementById('menu-toggle')
const mobileMenu = document.getElementById('mobile-menu')
const closeMenu = document.getElementById('close-menu')

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('open')
})

closeMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('open')
})

// Close the menu when clicking outside
window.addEventListener('click', e => {
  if (
    e.target !== mobileMenu &&
    !mobileMenu.contains(e.target) &&
    e.target !== menuToggle
  ) {
    mobileMenu.classList.remove('open')
  }
})

const mobileMenu1Button = document.getElementById('mobile-menu-1')
const mobileDropdown1 = document.getElementById('mobile-dropdown-1')
const mobileMenu2Button = document.getElementById('mobile-menu-2')
const mobileDropdown2 = document.getElementById('mobile-dropdown-2')

mobileMenu1Button.addEventListener('click', () => {
  mobileDropdown1.classList.toggle('hidden')
})

mobileMenu2Button.addEventListener('click', () => {
  mobileDropdown2.classList.toggle('hidden')
})

// asked question section
const faqData = [
  {
    question: 'How do I book my exam?',
    answer: 'To schedule an exam please visit the PSI Test Takers website.'
  },
  {
    question: 'What should I bring to my exam?',
    answer:
      'Many of our exams have requirements set by the exam sponsor, so please carefully check their instructions before attending our exam centre. These will often includeBringing two or more forms of ID. At least one must be a photo ID (passport, driving licence or student card) which you will be asked to produce to the invigilator prior to the start of your exam.Proof of booking for your examination.'
  },
  {
    question: 'What should I bring to my exam?',
    answer:
      'Many of our exams have requirements set by the exam sponsor, so please carefully check their instructions before attending our exam centre. These will often include Bringing two or more forms of ID. At least one must be a photo ID (passport, driving licence or student card) which you will be asked to produce to the invigilator prior to the start of your exam.Proof of booking for your examination.'
  },
  {
    question: 'How long does the check-in process take ?',
    answer:
      'The check in process will take approximately 10-15 minutes. Your organization’s testing rules will provide guidance on being late.'
  },
  {
    question: 'What actions are Prohibited during my test ?',
    answer:
      'Test rules provide guidance for what is acceptable during your test. The proctor will use your webcam and on-screen chat to communicate with you during your test. Your test may be paused by the proctor or automatically by the testing platform to investigate suspicious actions or events during the test. Examples of prohibited behavior may include, but are not limited to:Looking off the screenMumbling or speaking aloud Using unauthorized materials as listed in the section below Interacting with third parties intentionally or unintentionally Leaving the circle of view of the webcam The proctor will investigate the event and then release your test so that you may continue after re-accepting the terms and conditions. If you have any questions about the pause or release of your test, you can chat with your proctor directly.'
  }
]

let activeFaq = null // Track the currently open FAQ

// Function to dynamically render FAQ data into the DOM
function renderFaq() {
  const faqContainer = document.getElementById('faqContainer')

  faqData.forEach((faq, index) => {
    const faqElement = document.createElement('div')
    faqElement.classList.add(
      'border',
      'border-gray-200',
      'rounded-lg',
      'shadow-sm',
      'overflow-hidden'
    )

    faqElement.innerHTML = `
      <button
        class="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-100 focus:outline-none transition-all duration-300"
        onclick="toggleFaq(${index})"
        id="faqBtn-${index}"
      >
        <span class="text-base font-semibold">${faq.question}</span>
        <span id="arrow-${index}" class="h-6 w-6 text-gray-500 transition-transform duration-300">+</span>
      </button>
      <div id="answer-${index}" class="overflow-hidden max-h-0 transition-max-height duration-500 bg-gray-50 text-gray-700">
        <p class="p-4 text-base">${faq.answer}</p>
      </div>
    `

    faqContainer.appendChild(faqElement)
  })
}

// Function to toggle the visibility of the FAQ answer
function toggleFaq(index) {
  const answerElement = document.getElementById(`answer-${index}`)
  const arrowElement = document.getElementById(`arrow-${index}`)
  const faqBtn = document.getElementById(`faqBtn-${index}`)

  // Close currently active FAQ (if any) before opening the new one
  if (activeFaq !== null && activeFaq !== index) {
    const activeAnswerElement = document.getElementById(`answer-${activeFaq}`)
    const activeArrowElement = document.getElementById(`arrow-${activeFaq}`)
    const activeBtn = document.getElementById(`faqBtn-${activeFaq}`)

    activeAnswerElement.style.maxHeight = '0'
    activeArrowElement.textContent = '+'
    activeBtn.classList.remove('bg-active')
  }

  // Toggle the clicked FAQ
  if (
    answerElement.style.maxHeight === '0px' ||
    answerElement.style.maxHeight === ''
  ) {
    answerElement.style.maxHeight = answerElement.scrollHeight + 'px' // Expand
    arrowElement.textContent = '-'
    faqBtn.classList.add('bg-active') // Change background color when active
    activeFaq = index // Set this FAQ as active
  } else {
    answerElement.style.maxHeight = '0' // Collapse
    arrowElement.textContent = '+'
    faqBtn.classList.remove('bg-active')
    activeFaq = null // Reset activeFaq
  }
}

// Render the FAQ on page load
document.addEventListener('DOMContentLoaded', () => {
  renderFaq()
})

// ======= testimonials section ----

    const testimonials = [
        {
          image : './images/client-1.jpg',
            quote: "My name is Hajar Agagdi, I am from Morocco, I completed diploma level 4 and 5 in Business Management. The leadership team makes this place excellent and I've received excellent support, the staff was helpful and in all a great experience. I learned a lot and continuously received support for my assignments; I had very good feedback from the teachers. I highly recommend City College Oxford",
            author: "John Doe",
        },
        {
          image : './images/client-1.jpg',
            quote: "My name is Hajar Agagdi, I am from Morocco, I completed diploma level 4 and 5 in Business Management. The leadership team makes this place excellent and I've received excellent support, the staff was helpful and in all a great experience. I learned a lot and continuously received support for my assignments; I had very good feedback from the teachers. I highly recommend City College Oxford",
            author: "John Doe",
        },
        {
          image : './images/client-1.jpg',
            quote: "My name is Hajar Agagdi, I am from Morocco, I completed diploma level 4 and 5 in Business Management. The leadership team makes this place excellent and I've received excellent support, the staff was helpful and in all a great experience. I learned a lot and continuously received support for my assignments; I had very good feedback from the teachers. I highly recommend City College Oxford",
            author: "John Doe",
        },
        {
          image : './images/client-1.jpg',
            quote: "My name is Hajar Agagdi, I am from Morocco, I completed diploma level 4 and 5 in Business Management. The leadership team makes this place excellent and I've received excellent support, the staff was helpful and in all a great experience. I learned a lot and continuously received support for my assignments; I had very good feedback from the teachers. I highly recommend City College Oxford",
            author: "John Doe",
        },
        {
          image : './images/client-1.jpg',
            quote: "My name is Hajar Agagdi, I am from Morocco, I completed diploma level 4 and 5 in Business Management. The leadership team makes this place excellent and I've received excellent support, the staff was helpful and in all a great experience. I learned a lot and continuously received support for my assignments; I had very good feedback from the teachers. I highly recommend City College Oxford",
            author: "John Doe",
        },
        {
          image : './images/client-1.jpg',
            quote: "My name is Hajar Agagdi, I am from Morocco, I completed diploma level 4 and 5 in Business Management. The leadership team makes this place excellent and I've received excellent support, the staff was helpful and in all a great experience. I learned a lot and continuously received support for my assignments; I had very good feedback from the teachers. I highly recommend City College Oxford",
            author: "John Doe",
        },
    ];

    let currentIndex = 0;
    let itemsPerView = 1; // Default for mobile view
    let totalSlides = testimonials.length;

    // Update the number of items per view based on the screen size
    function updateItemsPerView() {
        const screenWidth = window.innerWidth;

        if (screenWidth >= 1024) {
            itemsPerView = 2; // Show 2 testimonials on desktop
        } else {
            itemsPerView = 1; // Show 1 testimonial on mobile
        }

        // Adjust slider width after screen size change
        updateSliderWidth();
    }

    // Set the width for each testimonial based on the number of visible items
    function updateSliderWidth() {
        const sliderItems = document.querySelectorAll('.testimonial-item');
        sliderItems.forEach(item => {
            item.style.minWidth = `${100 / itemsPerView}%`; // Dynamically set width
        });
    }

    // Render testimonials into the slider
    function renderTestimonials() {
        const slider = document.getElementById('testimonial-slider');
        slider.innerHTML = ''; // Clear previous items

        testimonials.forEach(testimonial => {
            const testimonialItem = document.createElement('div');
            testimonialItem.classList.add('testimonial-item', 'p-6', 'text-center', 'bg-white', 'shadow-md', 'rounded-lg', 'mx-3');
            testimonialItem.innerHTML = `
           <div class=" px-5 flex flex-col gap-4">
            <img src=${testimonial.image} class="rounded-full w-24 mx-auto"  alt="testimonial" />
                <p class="text-base"> <span class="text-3xl text-text_hover_color"><i class="fa-solid fa-quote-left"></i></span> "${testimonial.quote}" <span class="text-3xl text-text_hover_color"><i class="fa-solid fa-quote-right"></i></span> </p>
                <div class="flex items-center justify-center gap-1 text-yellow-400">
                <span><i class="fa-solid fa-star"></i></span>
                <span><i class="fa-solid fa-star"></i></span>
                <span><i class="fa-solid fa-star"></i></span>
                <span><i class="fa-solid fa-star"></i></span>
                <span><i class="fa-solid fa-star"></i></span>
                </div>
                <p class=" font-bold text-xl">${testimonial.author}</p>
           </div>
            `;
            slider.appendChild(testimonialItem);
        });

        updateSliderWidth(); // Adjust width after rendering
    }

    // Slide testimonials left or right
    function slideTestimonials() {
        const slider = document.getElementById('testimonial-slider');
        const offset = -(currentIndex * (100 / itemsPerView)); // Calculate offset for sliding
        slider.style.transform = `translateX(${offset}%)`;
    }

    // Handle next button click
    function nextTestimonial() {
        currentIndex = (currentIndex + 1) % Math.ceil(testimonials.length / itemsPerView); // Move to next slide
        slideTestimonials();
    }

    // Handle previous button click
    function prevTestimonial() {
        currentIndex = (currentIndex - 1 + Math.ceil(testimonials.length / itemsPerView)) % Math.ceil(testimonials.length / itemsPerView); // Move to previous slide
        slideTestimonials();
    }

    // Initial render and setup
    renderTestimonials();
    updateItemsPerView(); // Set initial items per view
    slideTestimonials();

    // Auto slide every 3 seconds
    const autoSlide = setInterval(nextTestimonial, 3000);

    // Add click event listeners for manual navigation
    document.getElementById('nextBtn').addEventListener('click', () => {
        clearInterval(autoSlide); // Stop auto sliding on manual action
        nextTestimonial();
    });

    document.getElementById('prevBtn').addEventListener('click', () => {
        clearInterval(autoSlide); // Stop auto sliding on manual action
        prevTestimonial();
    });

    // Listen for window resize to adjust items per view
    window.addEventListener('resize', () => {
        updateItemsPerView(); // Recalculate items per view on resize
        slideTestimonials();  // Recalculate slide position after resize
    });




