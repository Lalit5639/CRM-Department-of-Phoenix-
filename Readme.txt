┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│  Dealers    │────<│   Orders    │>────│  Products   │
└─────────────┘     └─────────────┘     └─────────────┘
       │                  │                    │
       │                  │                    │
       ▼                  ▼                    ▼
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│ Employees   │     │  Dispatch   │     │Stock Ledger │
└─────────────┘     └─────────────┘     └─────────────┘
       │                  │
       │                  ▼
       │            ┌─────────────┐
       └───────────>│  Payments   │
                    └─────────────┘

---

HOW TO RUN THE CRM WITH NODE.JS

1. Open a terminal in this folder:
   cd "d:\A-Raj Folder\crm"

2. Install dependencies:
   npm install

3. Start the server:
   npm start

4. Open the app in your browser:
   http://localhost:5501/

NOTES
- `server.js` serves `index.html` and all files in this folder.
- The backend API is available under `/api/*` routes.
- If MySQL is not configured, the page will still load but data save may fail.
- For DB config, update `.env` or copy from `.env.example`.
                           │
                           ▼
                    ┌─────────────┐
                    │Delivery Proof│
                    └─────────────┘
