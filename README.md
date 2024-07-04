<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo Web App</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            padding: 20px;
            max-width: 800px;
            margin: 0 auto;
        }

 h1 {
            background-color: #007bff;
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
        }

h2 {
            margin-top: 20px;
            font-size: 1.2em;
        }
 p {
            margin-bottom: 10px;
        }
        pre {
            background-color: #f8f9fa;
            padding: 10px;
            border-radius: 5px;
            overflow-x: auto;
        }
        ul {
            list-style-type: disc;
            margin-bottom: 20px;
            padding-left: 20px;
        }
        li {
            margin-bottom: 10px;
        }
        a {
            color: #007bff;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
        .code-block {
            margin-bottom: 20px;
        }
        .code-title {
            background-color: #343a40;
            color: white;
            padding: 5px 10px;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            font-size: 0.9em;
        }
        .code-content {
            background-color: #f8f9fa;
            padding: 10px;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
            overflow-x: auto;
            font-size: 0.9em;
        }
    </style>
</head>


<h1>Todo Web App</h1>
<section>
        <h2>Technologies Used</h2>
        <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>EJS (Embedded JavaScript)</li>
            <li>MongoDB</li>
        </ul>
</section>
 <section>
        <h2>Getting Started</h2>
        <p>These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.</p>

 <h3>Prerequisites</h3>
        <ul>
            <li>Node.js (version 12 or above)</li>
            <li>npm (Node Package Manager)</li>
            <li>MongoDB (Make sure MongoDB server is running locally or provide connection string to a remote MongoDB instance)</li>
        </ul>

<h3>Installing</h3>
 <div class="code-block">
            <div class="code-title">Clone the repository:</div>
            <div class="code-content">
                <pre>git clone https://github.com/your_username/todo-app.git</pre>
            </div>
</div>
 <div class="code-block">
            <div class="code-title">Navigate into the project directory:</div>
            <div class="code-content">
                <pre>cd todo-app</pre>
            </div>
        </div>

<div class="code-block">
            <div class="code-title">Install dependencies:</div>
            <div class="code-content">
                <pre>npm install</pre>
            </div>
        </div>
<div class="code-block">
            <div class="code-title">Set up MongoDB:</div>
            <div class="code-content">
                <p>Make sure MongoDB server is running locally.</p>
                <p>Update the MongoDB connection string in app.js if necessary.</p>
            </div>
        </div>

<div class="code-block">
            <div class="code-title">Start the server:</div>
            <div class="code-content">
                <pre>node app.js</pre>
            </div>
        </div>

<p>Open your web browser and navigate to <a href="http://localhost:3000">http://localhost:3000</a> to view the app.</p>
</section>
 <section>
        <h2>Usage</h2>
        <h3>Adding a Todo</h3>
        <ol>
            <li>Enter a task in the input field under "Add new todo".</li>
            <li>Click the "Add Todo" button to add the task to the list.</li>
        </ol>

<h3>Deleting a Todo</h3>
<p>Each todo item has a "Delete" button. Clicking this button will remove the task from the list.</p>
    </section>
 <section>
        <h2>Features</h2>
        <ul>
            <li>Add new todos.</li>
            <li>Delete existing todos.</li>
            <li>Simple and intuitive user interface.</li>
        </ul>
    </section>

<section>
        <h2>Roadmap</h2>
        <ul>
            <li>Implement user authentication.</li>
            <li>Add due dates and priority levels to todos.</li>
            <li>Improve UI/UX with animations and responsiveness.</li>
        </ul>
    </section>

<section>
        <h2>Contributing</h2>
        <p>Contributions are welcome! Follow these steps to contribute:</p>
        <ol>
            <li>Fork the project.</li>
            <li>Create your feature branch (<code>git checkout -b feature/AmazingFeature</code>).</li>
            <li>Commit your changes (<code>git commit -m 'Add some amazing feature'</code>).</li>
            <li>Push to the branch (<code>git push origin feature/AmazingFeature</code>).</li>
            <li>Open a pull request.</li>
        </ol>
    </section>
<section>
        <h2>Authors</h2>
        <p>Aryan Sharma</p>
    </section>

