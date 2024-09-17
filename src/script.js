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


document.addEventListener("DOMContentLoaded", () => {
  const testimonials = [
    {
      name: "John Doe",
      imge : './images/client-1.jpg',
      review: "	I really enjoy the time spent learning English at OLC Ajman . I have a lot of help from the teachers and staff and that’s why I referred my friend to this course,	",
      company: "XYZ Corp."
    },
    {
      name: "Jane Smith",
      imge : './images/client-1.jpg',
      review: "Loved the experience. Will definitely come back!",
      company: "ABC Inc."
    },
    {
      name: "Michael Johnson",
      imge : './images/client-1.jpg',
      review: "Top-notch support and service.",
      company: "DEF Solutions"
    },
    {
      name: "Sarah Brown",
      imge : './images/client-1.jpg',
      review: "Professional and friendly. Excellent service.",
      company: "GHI Industries"
    },
    {
      name: "Emily White",
      imge : './images/client-1.jpg',
      review: "Fast and reliable. Great customer support!",
      company: "JKL Enterprises"
    },
    {
      name: "Tom Davis",
      imge : './images/client-1.jpg',
      review: "Very satisfied with the service.",
      company: "MNO Global"
    },
    {
      name: "Anna Lee",
      imge : './images/client-1.jpg',
      review: "Outstanding experience. Highly recommend.",
      company: "PQR Solutions"
    },
    {
      name: "Chris Taylor",
      imge : './images/client-1.jpg',
      review: "Exceptional quality and customer care.",
      company: "STU Tech"
    }
  ];

  const testimonialContainer = document.getElementById("testimonial-container");
  const toggleBtn = document.getElementById("toggle-btn");

  let showAll = false;

  function displayTestimonials() {
    // Initially show only 4 testimonials
    const testimonialsToShow = showAll ? testimonials : testimonials.slice(0, 4);

    testimonialContainer.innerHTML = testimonialsToShow
      .map(
        (testimonial, index) => `
      <div class="testimonial bg-white p-6 rounded-lg shadow-lg w-full transform transition-all duration-500 text-center min-h-fit w-full ${
        showAll ? "slide-down" : index > 3 ? "hidden" : ""
      }">
        <p class=" text-lg mb-4">" <span class='text-text_title_color text-xl'><i class="fa-solid fa-quote-left"></i></span> ${testimonial.review} <span class='text-text_title_color text-xl'><i class="fa-solid fa-quote-right"></i></span> "</p>
        <img src="${testimonial.imge}" class='w-14 rounded-full mx-auto' alt="client" />
        <h4 class="text-xl font-semibold">${testimonial.name}</h4>
        <span class="text-gray-500">${testimonial.company}</span>
      </div>
    `
      )
      .join("");
  }

  function toggleTestimonials() {
    showAll = !showAll;
    displayTestimonials();

    toggleBtn.innerText = showAll ? "Show Less" : "Show More";

    // Apply animations for testimonials
    document.querySelectorAll('.testimonial').forEach((testimonial, index) => {
      if (showAll && index > 3) {
        testimonial.classList.remove("hidden");
        testimonial.classList.add("slide-down");
      } else if (!showAll && index > 3) {
        testimonial.classList.remove("slide-down");
        testimonial.classList.add("slide-up");
        setTimeout(() => {
          testimonial.classList.add("hidden");
        }, 500); // Wait for animation to complete before hiding
      }
    });
  }

  toggleBtn.addEventListener("click", toggleTestimonials);

  // Initially display testimonials
  displayTestimonials();
});
