var _a;
// Add an event listener to the form with the ID 'resumeForm'
(_a = document.querySelector('#resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    // Prevent the default form submission behavior
    event.preventDefault();
    // Get references to form elements and cast them to the appropriate types
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var addressElement = document.getElementById('address');
    var skillsElement = document.getElementById('skills');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var profilePictureElement = document.getElementById('profile-Picture');
    var usernameElement = document.getElementById('username');
    // Check if all form elements are available
    if (nameElement && emailElement && phoneElement && addressElement && skillsElement && educationElement && experienceElement && profilePictureElement && usernameElement) {
        // Retrieve values from the form elements
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var address = addressElement.value;
        var skills = skillsElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var username = usernameElement.value;
        // Generate unique path for the resume
        var uniquePath = "resumes/".concat(username.replace(/\s+/g, '_'), "_cv.html");
        // profile-image
        var profilePictureFile = (_a = profilePictureElement.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
        // Create a string with the formatted resume data
        var output = "\n    <h2>Personal Information</h2>\n    ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"profile-Picture\" class=\"profile-Picture\">") : "", "\n\n    <div><strong>Name:</strong> <span id=\"edit-name\" class=\"editable\"> ").concat(name_1, " </span> </div>\n    <div><strong>Email:</strong> <span id=\"edit-email\" class=\"editable\"> ").concat(email, " </span> </div>\n    <div><strong>Phone:</strong> <span id=\"edit-phone\" class=\"editable\">").concat(phone, " </span> </div>\n    <div><strong>Address:</strong> <span id=\"edit-address\" class=\"editable\">").concat(address, " </span> </div>\n    <div><strong>Skills:</strong>  <span id=\"edit-skills\" class=\"editable\">").concat(skills, " </span> </div>\n    <div><strong>Education:</strong> <span id=\"edit-education\" class=\"editable\">").concat(education, " </span> </div>\n    <div><strong>Experience:</strong> <span id=\"edit-experience\" class=\"editable\">").concat(experience, " </span> </div>");
        // Create download link
        var downloadLink = document.createElement('a');
        downloadLink.href = "data:text/html;charset=utf-8," + encodeURIComponent(output);
        downloadLink.download = uniquePath;
        //  downloadLink.click();
        downloadLink.textContent = 'Download Resume Path';
        // Add CSS class for button styling
        downloadLink.classList.add('download-resume-button');
        // Get the element where the resume will be displayed
        var outputElement = document.getElementById('output');
        if (outputElement) {
            // Set the inner HTML of the output element to display the resume
            outputElement.innerHTML = output;
            outputElement.appendChild(downloadLink);
            outputElement.style.display = 'block'; // Show the output div after form submission
        }
    }
    else {
        // Log an error if one or more input fields are missing
        console.log('One or more input fields are missing');
    }
});
// // Function to make the fields editable when clicked
// function makeEditable() {
//    // Select all elements with the 'editable' class
//   const editableElements = document.querySelectorAll('.editable');
//   // Add a click event listener to each editable element
//   editableElements.forEach(element => {
//     element.addEventListener('click' , function() {
//       const currentElement = element as HTMLElement;
//       const currentValue = currentElement.textContent || "";
//       // If the element is a paragraph or span, allow editing
//       if (currentElement.tagName === 'P' || currentElement.tagName === 'SPAN') {
//         // Create an input element to replace the text content
//         const input = document.createElement('input');
//         input.type = 'text';
//         input.value = currentValue;
//         input.classList.add('editing-input');
//         // When the input loses focus, update the text content
//         input.addEventListener('blur', function() {
//           currentElement.textContent = input.value;
//           currentElement.style.display = 'inline';
//           input.remove();
//         });
//         // Hide the current element and insert the input for editing
//         currentElement.style.display = 'none';
//         currentElement.parentNode?.insertBefore(input, currentElement);
//         input.focus();
//       }
//     });
//   });
// }
