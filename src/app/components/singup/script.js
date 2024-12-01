const signupForm = document.getElementById('signupForm');

signupForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  // Get form data
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Create a JSON object with the form data
  const formData = {
    name: firstName + ' ' + lastName, // Combine first and last
    job: 'Test User', // Example job title
    // Add other fields as needed based on the API
  };

  // Send the data to the API
  fetch('https://reqres.in/api/users', { // API endpoint
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Handle the API response (e.g., display success/error messages)
      console.log(data);
      if (data.success) {
        // Redirect to a success page or handle success
        alert('User created successfully!');
      } else {
        // Display error messages
        alert('Error creating user. Please try again.');
      }
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
      // Display error messages
      alert('An error occurred. Please try again later.');
    });
});
