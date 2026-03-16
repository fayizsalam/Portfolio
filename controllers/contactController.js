import Contact from "../models/contact.js";
import nodemailer from "nodemailer";

const index = (req, res) => {
  res.render("index");
};

const sendMessage = async (req, res) => {
  try {

    const { firstName, lastName, email, message } = req.body;

    const newMessage = new Contact({
      firstName,
      lastName,
      email,
      message
    });

    await newMessage.save();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: "New Portfolio Message",
      text: `
Name: ${firstName} ${lastName}
Email: ${email}
Message: ${message}
`
    });

    res.status(200).json({ success: true });

  } catch (error) {

    console.log(error);
    res.status(500).json({ error: "Message not sent" });

  }
};

export { sendMessage, index };