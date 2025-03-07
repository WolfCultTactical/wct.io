
document.querySelectorAll('.carved-title').forEach((title) => {
  const bgImage = title.getAttribute('data-bg');
  title.style.setProperty('--bg-url', `url(${bgImage})`);
});

// Button in 'We Fight' section to redirect to and open 'Enlist' subsection
const joinButton = document.getElementById("join-btn");

joinButton.addEventListener("click", () => {
  applicationContainer.style.display = "block";
  applicationContainer.scrollIntoView({
    behavior: "smooth"
  });
});

// Button in 'Our Heritage' section to display more content
const learnMoreBtn = document.getElementById("learn-more-btn");
const historyInfo = document.getElementById("history-info");

learnMoreBtn.addEventListener("click", () => {
  // Toggle the visibility of the history info
  if (historyInfo.classList.contains("hidden")) {
    // Show content
    historyInfo.classList.remove("hidden");
    historyInfo.classList.add("visible");
    learnMoreBtn.textContent = "Say Less";
    // Update button text
  } else {
    historyInfo.classList.remove("visible");
    // Hide content
    historyInfo.classList.add("hidden");
    learnMoreBtn.textContent = "Say More";
    // Update button text
  }
});


// CONTACT SECTION
// Button to open 'Contract Development' subsection
const contractDevButton = document.getElementById("contract-development-btn");
const formContainer = document.getElementById("contract-proposal-form");

contractDevButton.addEventListener("click", () => {
  if (formContainer.style.display === "block") {
    formContainer.style.display = "none";
  } else {
    formContainer.style.display = "block";
  }
});

// Button to open 'Enlist' subsection
const applicationButton = document.getElementById("application-btn");
const applicationContainer = document.getElementById("application-container");

applicationButton.addEventListener("click", () => {
  if (applicationContainer.style.display === "block") {
    applicationContainer.style.display = "none";
  } else {
    applicationContainer.style.display = "block";
  }
});

// CONTRIBUTE SECTION
// Button to open learn more content subsection
const contributeLearnMoreButton = document.getElementById("contribute-read-more-btn");
const contributeJoinReadMore = document.getElementById("contribute-read-more-content");

contributeLearnMoreButton.addEventListener("click", () => {
  if (contributeJoinReadMore.classList.contains("hidden")) {
    contributeJoinReadMore.classList.remove("hidden");
    contributeJoinReadMore.classList.add("visible");
    contributeLearnMoreButton.textContent = "Say Less";
  } else {
    contributeJoinReadMore.classList.remove("visible");
    contributeJoinReadMore.classList.add("hidden");
    contributeLearnMoreButton.textContent = "Say More";
  }
});

//Button to navigate to enlist subsection from contribute join
const contributeJoinButton = document.getElementById("contribute-join-btn");

contributeJoinButton.addEventListener("click", () => {
  applicationContainer.style.display = "block";
  applicationContainer.scrollIntoView({
    behavior: "smooth"
  });
});



// Button to open 'Connect' subsection
const connectButton = document.getElementById("connect-btn");
const connectContainer = document.getElementById("connect-container");

connectButton.addEventListener("click", () => {
  if (connectContainer.style.display === "flex") {
    connectContainer.style.display = "none";
  } else {
    connectContainer.style.display = "flex";
  }
});

// Contract Development Form
const form = document.getElementById("contract-form");
const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const dobInput = document.getElementById("age");
const ageError = document.getElementById("age-error");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const proposalInput = document.getElementById("proposal");
const charCount = document.getElementById("char-count");

// Validate input in name fields
function validateName(input) {
  const namePattern = /^[a-zA-Z]+$/;
  // Regular expression to allow only letters
  const errorSpan = document.getElementById(`${input.id}-error`);
  // Find the corresponding error message span
  if (!namePattern.test(input.value)) {
    // If input contains invalid characters, revert the input and highlight the field
    input.style.border = "1px solid red";
    input.setCustomValidity("Please use only letters in your name.");
    if (errorSpan) {
      errorSpan.style.display = "inline";
      // Show error message
    }
  } else {
    // If input is valid reset the border and custom validation
    input.style.boerder = "";
    input.setCustomValidity("");
    if (errorSpan) errorSpan.style.display = "none";
  }
}

// Check if input age is 18 or older
function validateAge() {
  const dob = new Date(dobInput.value);
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const monthDifference = today.getMonth() - dob.getMonth();

  // Adjust age if the birthday hasn't occurred yet this year
  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() <dob.getDate())) {
    age--;
  }

  // If age is less than 18, show error and highlight the field
  if (age < 18) {
    dobInput.style.border = "1px solid red";
    ageError.style.display = "inline";
    return false;
  } else {
    dobInput.style.border = "";
    ageError.style.display = "none";
    return true;
  }
}

// Check email input for valid formatting
function validateEmail() {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const emailError = document.getElementById("email-error");

  if (!emailPattern.test(emailInput.value)) {
    emailInput.style.border = "1px solid red";
    emailError.style.display = "inline";
    emailInput.setCustomValidity("Enter a valid email address (e.g., name@domain.com).");
  } else {
    emailInput.style.border = "";
    emailError.style.display = "none";
    emailInput.setCustomValidity("");
    // Clear error
  }
}

// Function to validate phone number using a regular expression
function validatePhone() {
  const phonePattern = /^[0-9()\-+]{10,15}$/;
  // Allow digits, space, parentheses, dashes, "+". Minimum 10, max 15 characters.
  const phoneError = document.getElementById("phone-error");

  if (!phonePattern.test(phoneInput.value)) {
    phoneInput.style.border = "1px solid red";
    phoneError.style.display = "inline";
    phoneInput.setCustomValidity("Enter a valid phone number (e.g., 123-456-7890 or (123) 456-7890)."
    );
  } else {
    phoneInput.style.border = "";
    phoneError.style.display = "none";
    phoneInput.setCustomValidity("");
    // Clear error
  }
}

// Function to update the character count for the textarea
function updateCharCount() {
  const maxLength = 1000;
  const currentLength = proposalInput.value.length;

  //Update character count text
  charCount.textContent = `${currentLength} / ${maxLength} characters`;

  // If text exceeds the limit, trim the excess
  if (currentLength > maxLength) {
    proposalInput.value = proposalInput.value.substr(0, maxLength);
    charCount.textContent = `${maxLength} / ${maxLength} characters`;
  }
}

// Attach event listeners
firstNameInput.addEventListener("input", () => validateName(firstNameInput));
lastNameInput.addEventListener("input", () => validateName(lastNameInput));
//Validate first and last names on input
dobInput.addEventListener("input", validateAge);
// Validate age on input
emailInput.addEventListener("input", validateEmail);
phoneInput.addEventListener("input", validatePhone);
// Validate email and phone input
proposalInput.addEventListener("input", updateCharCount);
// Update char count while typing

//Prevent form submission if validations fail
form.addEventListener("submit", async(event) => {
  event.preventDefault();
  validateName(firstNameInput);
  validateName(lastNameInput);
  validateAge();
  validateEmail();
  validatePhone();

  if (!firstNameInput.checkValidity() || !lastNameInput.checkValidity()) {
    event.preventDefault();
    // Stop form submission
    alert("Please correct the errors in the name field(s) before submitting.")
  }

  if (!validateAge()) {
    event.preventDefault();
    // Stop form submission
    alert("You must be at least 18 years or older to conduct business with us.");
  }

  if (!emailInput.checkValidity() || !phoneInput.checkValidity()) {
    event.preventDefault();
    alert("Please correct the errors in the contact method field(s) before submitting.");
  }

  // Serialize the form data into JSON
  const formData = new FormData(form);
  const jsonData = {};
  formData.forEach((value, key) => {
    jsonData[key] = value;
  })

  try {
    // Make the POST request to your backend
    const response = await fetch('http//localhost:8080/api/forms', {
      method: 'POST',
      headers: {

        'Content-Type': 'application/json', // Tell the server you're sending JSON
      }, body: JSON.stringify(jsonData), // Convert the object to a JSON string
    });

    if (response.ok) {
      alert('Form submitted successfully!');
    } else {
      console.error('Failed to submit the form', response);
      alert('Failed to submit the form. Please try again.');
    }
  } catch (error) {
    console.error('Error while submitting the form', error);
    alert('An error occurred. Please try again.');
  }
});

// Initial setup to ensure form areas are hidden by default
document.addEventListener("DOMContentLoaded", () => {
  updateCharCount();
  formContainer.style.display = "none";
});
