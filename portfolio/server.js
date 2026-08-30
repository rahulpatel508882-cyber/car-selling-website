import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const aiApiKey = process.env.OPENAI_API_KEY || "";

app.use(cors());
app.use(express.json());

const portfolioProfile = {
  name: "Rahul Patel",
  title: "Full Stack Developer",
  role: "MERN stack developer focused on responsive web apps, API integrations, and polished user experiences.",
  skills: [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "JavaScript",
    "SQL",
    "Testing",
    "Responsive UI Design",
  ],
  projects: [
    "Portfolio website",
    "MERN application builds",
    "Responsive web interfaces",
    "API and database integrations",
  ],
  contact: {
    email: "rahulpatel508882@gmail.com",
    location: "India",
  },
};

const buildPortfolioReply = (message) => {
  const lower = message.toLowerCase();

  if (lower.includes("project") || lower.includes("portfolio")) {
    return `${portfolioProfile.name} has worked on several ${portfolioProfile.projects.join(", ")}. He focuses on clean design, functional interfaces, and scalable MERN-based solutions.`;
  }

  if (lower.includes("skill") || lower.includes("tech") || lower.includes("stack")) {
    return `Rahul works with ${portfolioProfile.skills.join(", ")}. His primary focus is modern web development with React, Node.js, Express, and database-driven application design.`;
  }

  if (lower.includes("contact") || lower.includes("email") || lower.includes("hire") || lower.includes("reach")) {
    return `You can reach Rahul at ${portfolioProfile.contact.email}. He is open to project inquiries and collaboration opportunities.`;
  }

  if (lower.includes("who") || lower.includes("about")) {
    return `${portfolioProfile.name} is a ${portfolioProfile.title} building modern web experiences and full-stack solutions with a strong emphasis on usability and performance.`;
  }

  return `Rahul Patel is a full-stack developer specializing in ${portfolioProfile.skills.slice(0, 4).join(", ")}. He enjoys building polished, responsive applications and turning ideas into practical digital products.`;
};

app.get("/api/health", (_, res) => {
  res.json({ ok: true, message: "Portfolio email service is running." });
});

app.post("/api/chat", async (req, res) => {
  const { message } = req.body || {};

  if (!message || !String(message).trim()) {
    return res.status(400).json({ ok: false, reply: "Please type a message to start the conversation." });
  }

  try {
    if (!aiApiKey) {
      return res.json({
        ok: true,
        reply: buildPortfolioReply(String(message)),
        mode: "demo",
      });
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${aiApiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content:
              "You are Rahul Patel's portfolio assistant. Answer briefly, professionally, and in a helpful tone. Talk about his skills, projects, and how to contact him. Keep the answers grounded in this portfolio context.",
          },
          {
            role: "user",
            content: String(message),
          },
        ],
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      throw new Error(`AI request failed with status ${response.status}`);
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content?.trim();

    return res.json({
      ok: true,
      reply: reply || buildPortfolioReply(String(message)),
      mode: "live",
    });
  } catch (error) {
    console.error("Chat request failed:", error);
    return res.json({
      ok: true,
      reply: buildPortfolioReply(String(message)),
      mode: "fallback",
    });
  }
});

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, message: "Please fill in all fields." });
  }

  const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
  const smtpPort = Number(process.env.SMTP_PORT || 587);
  const senderEmail = process.env.EMAIL_USER || "rahulpatel508882@gmail.com";
  const senderPassword = process.env.EMAIL_PASS || "";
  const recipientEmail = process.env.TO_EMAIL || "rahulpatel508882@gmail.com";

  if (!senderPassword) {
    return res.status(500).json({
      ok: false,
      message:
        "Email is not configured yet. Add EMAIL_USER and EMAIL_PASS in your .env file to enable sending.",
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: senderEmail,
        pass: senderPassword,
      },
    });

    await transporter.sendMail({
      from: `Portfolio Contact <${senderEmail}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `Portfolio inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="margin-bottom: 12px;">New Portfolio Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    return res.json({ ok: true, message: "Your message has been sent successfully." });
  } catch (error) {
    console.error("Email send failed:", error);
    return res.status(500).json({
      ok: false,
      message: "Failed to send email. Please try again later or contact via email directly.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Portfolio email server running on http://localhost:${PORT}`);
});
