import { resendClient, sender } from "../lib/resend.js";
import { createWelcomeEmailTemplate } from "./emailTemplates.js";

export const sendWelcomeEmail = async (email, name, clientURL) => {
  // In development, send email only to your own email
  const toEmail =
    process.env.NODE_ENV === "development"
      ? "milankoradiya.work@gmail.com"
      : email;

  try {
    const { data, error } = await resendClient.emails.send({
      from: `${sender.name} <${sender.email}>`,
      to: toEmail,
      subject: "Welcome to Chatify!",
      html: createWelcomeEmailTemplate(name, clientURL),
    });

    if (error) {
      console.error("Resend error:", error);
      return false; // ⛔ DO NOT THROW
    }

    console.log("Welcome email sent:", data);
    return true;
  } catch (err) {
    console.error("Email service failed:", err.message);
    return false;
  }
};
