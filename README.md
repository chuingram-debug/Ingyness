# HostelMate — AI-enabled hostel attendant website

A responsive prototype dashboard for hostel attendants. It includes:
- Room status overview and a demo room manager
- Daily attendant checklist
- Maintenance issue logging and resolution status
- AI assistant for notices, cleaning rotas, check-in lists, and maintenance reports

## Run locally
1. Install Node.js (18 or newer).
2. Extract this folder and open a terminal in it.
3. Run `npm install`.
4. Set your OpenAI API key in the server environment:
   - macOS/Linux: `export OPENAI_API_KEY="your-key"`
   - Windows PowerShell: `$env:OPENAI_API_KEY="your-key"`
5. Optional: set `OPENAI_MODEL=gpt-4.1-mini`.
6. Run `npm start`.
7. Open http://localhost:3000 in your browser.

You can copy `.env.example` to `.env` for reference, but this starter does not load `.env` automatically. If you want `.env` loading, install `dotenv` and add `require("dotenv").config()` at the top of `server.js`, or set the environment variable directly in your hosting provider.

## Important prototype limitations
- Room records, checklist state, and maintenance requests are sample data held in browser memory. They reset when the page reloads.
- No sign-in, database, email/SMS, payments, or production audit trail is included.
- Add staff authentication, role-based permissions, persistent database storage, backups, and privacy/security review before using real resident data.
- Keep the OpenAI API key on the server only. Never embed it in frontend JavaScript or publish it in a repository.
- AI responses are drafts and can be wrong. Review notices, safety advice, and operational decisions before using them.
