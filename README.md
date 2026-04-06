# Trading Dashboard

A simple React-based trading dashboard that shows live (simulated) crypto prices, updates automatically, and allows basic buy/sell interactions.


##  Setup Instructions

### 1. Clone the repository

```bash
git clone <your-repo-link>
cd mini-trading-dashboard

## What this project does

- This dashboard lets you:

- Select an asset (BTC, ETH, SOL, XRP, etc.)
- View current price and 24h change
- See a price trend chart
- Enter an amount and simulate Buy/Sell
- Toast notifications
- Prices update automatically every 5 seconds

## Tech Used
- React (Vite)
- Tailwind CSS (UI styling)
- Recharts (chart visualization)
- Express (Mock API)

## Mock API Approach

- Instead of generating mock data directly inside the frontend, I created a small local mock API with endpoints like:
- GET /api/price
- GET /api/chart

## Why this approach?
- Avoids CORS and rate limit issues from public APIs
- Keeps frontend and data layer separated
- Makes the app closer to real-world architecture
- Easy to replace with a real backend later

## Real-time Updates

- The app uses polling:

- Data refreshes every 5 seconds using setInterval
- No full page reload
- UI updates smoothly using React state
- Previous data remains visible to avoid flicker

## Assets Handling
- For this project, I used a small hardcoded list of assets.
- Keeps the UI clean and focused
- Avoids unnecessary API calls on initial load
- Prevents rate limit issues
## Scalability (if extended):
- Fetch asset list dynamically from API
- Add search/filter for large datasets (100+ assets)
- Use dropdown or searchable selector for better UX
- Fetch detailed data only for selected asset

## Notes
- This project focuses on clean UI, performance, and architecture
- Polling is used for simplicity, but WebSockets can be used for real-time streaming in production
- The mock API simulates real market behavior with small random variations