<h1>User Management Dashboard</h1>
A simple web application for managing user data with basic CRUD (Create, Read, Update, Delete) operations. This project uses vanilla JavaScript and interacts with JSONPlaceholder 
API for demonstrating backend interactions. <br>
<hr/>
<h3>Features views list of users with their details.</h3>
<ul>
<li>Add new users</li>
<li>Edit existing users</li>
<li>Delete users</li>
<li>Form validation</li>
<li>Error handling</li>
<li>Responsive design</li>
<li>RESTful API integration</li>
</ul>
<hr/>
<h3>Technologies Used</h3>
<ul>
<li>HTML5</li>
<li>CSS3</li>
<li>Vanilla JavaScript (ES6+)</li>
<li>JSONPlaceholder API for mock backend</li>
</ul>
<hr/>
<h3>Project Structure</h3>

### Files

- `index.html` - The main HTML file that contains the structure of the web application.
- `styles.css` - This file includes the CSS styling for the application.
- `script.js` - JavaScript functionality is implemented here.
- `README.md` - The project documentation file.
<hr/>

<h3>Setup Instructions</h3>
<ol>
<li>Clone the repository:
<code>git clone https://github.com/Jadaunshiv/Ajackus-User-Management-Dashboard-Task.git</code><br>
<code>cd user-management-dashboard</code>
</li>
<li>No build process or dependencies are required as this is a vanilla JavaScript project.</li>
<li>Open <code>index.html</code> in a web browser to run the application.</li>
<li>For local development, you can use a simple HTTP server.</li>
</ol>
<hr/>

<h3>Usage</h3>
<h4>Viewing Users</h4>
<ol>
<li>The dashboard displays a table of users with their details</li>
<li>Each user entry shows ID, First Name, Last Name, Email, and Department</li>
</ol>

<h4>Adding a New User</h4>
<ol>

<li>Click the "Add New User" button</li>
<li>Fill in the required fields:</li>
<ul>
<li>First Name</li>
<li>Last Name</li>
<li>Email</li>
<li>Department</li>
</ul>
<li>Click "Submit" to save the new user</li>
<li>Click "Cancel" to discard changes</li>
</ol>

<h4>Editing a User</h4>
<ol>
<li>Click the "Edit" button next to the user you want to modify</li>
<li>Update the desired fields</li>
<li>Click "Submit" to save changes</li>
<li>Click "Cancel" to discard changes</li>
</ol>

<h4>Deleting a User</h4>
<ol>
<li>Click the "Delete" button next to the user you want to remove</li>
<li>Confirm the deletion in the popup dialog</li>
</ol>

<h4>API Integration</h4>
The application uses JSONPlaceholder's free REST API:

Base URL: https://jsonplaceholder.typicode.com/users <br>
Endpoints:
<ul>
<li>GET /users - Fetch all users</li>
<li>POST /users - Create new user</li>
<li>PUT /users/:id - Update user</li>
<li>DELETE /users/:id - Delete user</li>
</ul>
<i>Note: JSONPlaceholder is a mock API, so while it accepts requests, it doesn't actually modify any data.</i><br>

<h4>Form Validation</h4>
The application includes client-side validation for:
<ul>
<li>Required fields (all fields must be filled)</li>
<li>Email format validation</li>
<li>Display of error messages for invalid inputs</li>
</ul>

<h4>Error Handling</h4>
The application handles various error scenarios:
<ul>
<li>Failed API requests</li>
<li>Form validation errors</li>
<li>User feedback for all operations</li>
</ul>

<h4>Browser Compatibility</h4>
The application works in all modern browsers:
<ul>
<li>Chrome (latest)</li>
<li>Firefox (latest)</li>
<li>Safari (latest)</li>
<li>Edge (latest)</li>
</ul>
<hr/>

<h3>Known Limitations</h3>
<ol>
<li>Data persistence: Since this uses JSONPlaceholder, data changes are not actually saved</li>
<li>No authentication/authorization implemented</li>
<li>Limited to basic CRUD operations</li>
</ol>
<hr/>
<h3>Future Improvements</h3>
Potential enhancements that could be added:
<ol>
<li>Implement real backend integration</li>
<li>Add user authentication</li>
<li>Add sorting and filtering capabilities</li>
<li>Add more complex form validation</li>
<li>Add unit tests</li>
<li>Implement search functionality</li>
</ol>

