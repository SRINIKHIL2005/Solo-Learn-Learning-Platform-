// import express from 'express';
// import { createUser, getUserById, updateUser } from '../controllers/userController.js';

// const router = express.Router();

// // Route to create a new user
// router.post('/users', createUser);

// // Route to get user details by ID
// router.get('/users/:id', getUserById);

// // Route to update user information
// router.put('/users/:id', updateUser);

// export default router;

import express from "express";
import bcrypt from "bcrypt";
import User from "../models/userModel.js";
import {
  createUser,
  getUserById,
  updateUser,
  signIn,
} from "../controllers/userController.js";

const router = express.Router();

// Route to create a new user (from userController.js)
router.post("/users", createUser);

// Route to get user details by ID (from userController.js)
router.get("/users/:id", getUserById);

// Route to update user information (from userController.js)
router.put("/users/:id", updateUser);

// Signup route
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save the new user
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error registering user", error });
  }
});

// Login route (from userController.js)
router.post("/login", signIn); // Add the login route
export default router;
