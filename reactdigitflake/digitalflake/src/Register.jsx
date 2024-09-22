import React, { useState } from 'react';
import './Register.css'



const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Dummy admin credentials
  const adminEmail = "admin@gmail.com";
  const adminPassword = "admin123";

  // Handle login
  const handleLogin = (e) => {
    e.preventDefault();
    if (email === adminEmail && password === adminPassword) {
      alert("Login Successful!");
      localStorage.setItem("isAdminLoggedIn", true); // Store login status
    } else {
      alert("Invalid email or password");
    }
  };

  // Handle forget password (for simplicity, this will just alert, but you can link to an actual reset page)
  const handleForgotPassword = () => {
    alert("Password reset link has been sent to your email!");
    // You can add actual logic here to send a password reset email or redirect to a password reset page.
  };

  return (
    <>
      <div id='bhushan'>
      <h1>DigitalFlake</h1>
      <p>Welcome to Digitalflake admin</p>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <br />
        
        <button type="button" onClick={handleForgotPassword}>
          Forgot Password
    
        </button>
        <button type="submit" id="login">Login</button>
        <br />
        <br />
      </form>
      </div>
    </>
  );
};

export default Register;





















// const express = require('express');
// const nodemailer = require('nodemailer');
// const crypto = require('crypto');

// const app = express();
// app.use(express.json());

// // Simulating a user database
// const users = [
//   { email: 'user1@example.com', password: 'password1' },
//   // Add other users
// ];

// // POST request to login
// app.post('/login', (req, res) => {
//   const { email, password } = req.body;
//   const user = users.find((user) => user.email === email && user.password === password);
  
//   if (user) {
//     res.status(200).json({ message: 'Login successful' });
//   } else {
//     res.status(400).json({ message: 'Invalid credentials' });
//   }
// });

// // POST request to send password reset email
// app.post('/forgot-password', async (req, res) => {
//   const { email } = req.body;
//   const user = users.find((user) => user.email === email);

//   if (!user) {
//     return res.status(400).json({ message: 'User not found' });
//   }

//   // Generate a reset token (for simplicity, using a random string)
//   const resetToken = crypto.randomBytes(32).toString('hex');
  
//   // Set up Nodemailer transporter
//   const transporter = nodemailer.createTransport({
//     service: 'Gmail',
//     auth: {
//       user: 'your-email@gmail.com', // Your email
//       pass: 'your-email-password',  // Your email password
//     },
//   });

//   const resetLink = `http://localhost:3000/reset-password?token=${resetToken}`;
  
//   const mailOptions = {
//     from: 'your-email@gmail.com',
//     to: email,
//     subject: 'Password Reset',
//     html: `<p>You requested a password reset. Click <a href="${resetLink}">here</a> to reset your password.</p>`,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     res.status(200).json({ message: 'Password reset link sent to your email' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error sending email' });
//   }
// });

// app.listen(5000, () => {
//   console.log('Server is running on port 5000');
// });