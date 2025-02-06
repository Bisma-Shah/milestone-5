// Add an event listener to the form with the ID 'resumeForm'
document.querySelector('#resumeForm')?.addEventListener('submit', function(event) {
     // Prevent the default form submission behavior
    event.preventDefault();

// Get references to form elements and cast them to the appropriate types
const nameElement = document.getElementById('name') as HTMLInputElement;
const emailElement = document.getElementById('email') as HTMLInputElement;
const phoneElement = document.getElementById('phone') as HTMLInputElement;
const addressElement = document.getElementById('address') as HTMLTextAreaElement;
const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;
const educationElement = document.getElementById('education') as HTMLTextAreaElement; 
const experienceElement = document.getElementById('experience') as HTMLTextAreaElement;
const profilePictureElement = document.getElementById('profile-Picture') as HTMLInputElement;
const usernameElement = document.getElementById('username') as HTMLInputElement;


// Check if all form elements are available
    if (nameElement && emailElement && phoneElement && addressElement && skillsElement && educationElement && experienceElement && profilePictureElement && usernameElement) {

    // Retrieve values from the form elements
      const name = nameElement.value;
      const email = emailElement.value;
      const phone = phoneElement.value;
      const address = addressElement.value;
      const skills = skillsElement.value;
      const education = educationElement.value;
      const experience = experienceElement.value;
      const username = usernameElement.value;

       // Generate unique path for the resume
      const uniquePath = `resumes/${username.replace(/\s+/g, '_')}_cv.html`; 


// profile-image
const profilePictureFile = profilePictureElement.files?.[0]
const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
   
  // Create a string with the formatted resume data
        const output = `
    <h2>Personal Information</h2>
    ${profilePictureURL ? `<img src="${profilePictureURL}" alt="profile-Picture" class="profile-Picture">` : ""}

    <div><strong>Name:</strong> <span id="edit-name" class="editable"> ${name} </span> </div>
    <div><strong>Email:</strong> <span id="edit-email" class="editable"> ${email} </span> </div>
    <div><strong>Phone:</strong> <span id="edit-phone" class="editable">${phone} </span> </div>
    <div><strong>Address:</strong> <span id="edit-address" class="editable">${address} </span> </div>
    <div><strong>Skills:</strong>  <span id="edit-skills" class="editable">${skills} </span> </div>
    <div><strong>Education:</strong> <span id="edit-education" class="editable">${education} </span> </div>
    <div><strong>Experience:</strong> <span id="edit-experience" class="editable">${experience} </span> </div>`;

    // Create download link
    const downloadLink = document.createElement('a')
    downloadLink.href = `data:text/html;charset=utf-8,` + encodeURIComponent(output);
    downloadLink.download = uniquePath;
   //  downloadLink.click();
   downloadLink.textContent = 'Download Resume Path'

   // Add CSS class for button styling
  downloadLink.classList.add('download-resume-button');
   
    
  // Get the element where the resume will be displayed
       const outputElement = document.getElementById('output');
       if (outputElement) {
         // Set the inner HTML of the output element to display the resume
          outputElement.innerHTML = output;

          outputElement.appendChild(downloadLink)
              outputElement.style.display = 'block'; // Show the output div after form submission
        }
      }else {
             // Log an error if one or more input fields are missing
        console.log('One or more input fields are missing');
    }
});

