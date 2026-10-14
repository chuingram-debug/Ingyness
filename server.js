const express = require("express");
const path = require("path");
const OpenAI = require("openai");

const app = express();
app.use(express.json({ limit: "1mb" }));
app.use(express.static(path.join(__dirname, "public")));

app.post("/api/assistant", async (req, res) => {
  const message = String(req.body?.message || "").trim();
  if (!message) return res.status(400).json({ error: "Please enter a message." });
  if (!process.env.OPENAI_API_KEY) {
    return res.status(503).json({
      error: "AI is not configured yet. Add your OpenAI API key as OPENAI_API_KEY on the server, then restart the app."
    });
  }
  try {
    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const response = await client.responses.create({
      model: process.env.OPENAI_MODEL || "gpt-4.1-mini",
      instructions: `You are HostelMate, a helpful assistant for a hostel attendant.
Help with room allocation checklists, guest communication, cleaning schedules, maintenance reports,
inventory, check-in/check-out procedures, and polite notices. Be concise and practical.
Do not claim to have changed bookings, contacted people, or updated records. Do not request or expose
sensitive personal data. For emergencies, advise contacting local emergency services or hostel management.`,
      input: message
    });
    res.json({ reply: response.output_text || "I couldn't prepare a response. Please try again." });
  } catch (err) {
    console.error("OpenAI API error:", err.message);
    res.status(500).json({ error: "The AI assistant could not respond right now. Check server configuration and try again." });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`HostelMate running at http://localhost:${port}`));
