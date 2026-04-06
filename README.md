## Setup Instructions
### 1. Clone the repository

```bash
git clone <your-repo-link>
cd mini-trading-dashboard

### 2. dependencies 

```bash
npm install


# Trading Dashboard

A simple React-based trading dashboard that shows live (simulated) crypto prices, updates automatically, and allows basic buy/sell interactions.



## What this project does

This dashboard lets you:

- Select an asset (BTC, ETH, SOL, XRP)
- View current price and 24h change
- See a simple price trend chart
- Enter an amount and simulate Buy/Sell
- Get instant feedback via a toast notification
- Watch prices update automatically every 5 seconds



## Tech Used

- React (Vite)
- Tailwind CSS (for styling)
- Recharts (for chart)
- Mock API (for stable real-time simulation)



## Mock API

I used a mock service to:
- avoid CORS and rate limit issues from public APIs
- ensure consistent real-time updates
- keep the UI stable during review



## How real-time updates work

The app uses polling:

- Every 5 seconds, data is refreshed using `setInterval`
- No page reload — React state updates the UI smoothly
- Previous data stays visible while new data loads




