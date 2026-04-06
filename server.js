import express from "express"
import cors from "cors"

const app = express()
const PORT = process.env.PORT || 3001
const HOST = "0.0.0.0"

// ✅ FIXED CORS (IMPORTANT)
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://trading-dashboard-19xg.onrender.com",
    ],
    methods: ["GET"],
  })
)

const assets = [
  { symbol: "BTC", name: "Bitcoin", id: "bitcoin" },
  { symbol: "ETH", name: "Ethereum", id: "ethereum" },
  { symbol: "SOL", name: "Solana", id: "solana" },
  { symbol: "XRP", name: "Ripple", id: "ripple" },
  { symbol: "ADA", name: "Cardano", id: "cardano" },
  { symbol: "DOGE", name: "Dogecoin", id: "dogecoin" },
  { symbol: "DOT", name: "Polkadot", id: "polkadot" },
]

const baseData = {
  bitcoin: { price: 65000, change: -2.3 },
  ethereum: { price: 3200, change: 1.8 },
  solana: { price: 145, change: 4.2 },
  ripple: { price: 0.55, change: -0.9 },
  cardano: { price: 0.45, change: 1.2 },
  dogecoin: { price: 0.12, change: 3.1 },
  polkadot: { price: 6.5, change: -1.5 },
}

function getAssetById(id) {
  return assets.find((asset) => asset.id === id)
}

function generatePrice(id) {
  const asset = getAssetById(id)
  const base = baseData[id]

  if (!asset || !base) {
    return null
  }

  const randomPriceShift = (Math.random() * 20 - 10) / 2
  const randomChangeShift = (Math.random() * 1.2 - 0.6) / 2

  const price = Number((base.price + randomPriceShift).toFixed(2))
  const change = Number((base.change + randomChangeShift).toFixed(2))

  return {
    symbol: asset.symbol,
    name: asset.name,
    id: asset.id,
    price,
    change,
  }
}

function generateChart(id) {
  const base = baseData[id]

  if (!base) {
    return []
  }

  return Array.from({ length: 12 }, (_, index) => ({
    time: `${index + 1}`,
    price: Number((base.price + (Math.random() * 16 - 8)).toFixed(2)),
  }))
}

app.get("/", (req, res) => {
  res.send("Trading Dashboard Mock API is running.")
})

app.get("/api/assets", (req, res) => {
  res.json(assets)
})

app.get("/api/price", (req, res) => {
  const { symbol } = req.query

  if (!symbol) {
    return res.status(400).json({ error: "Missing symbol query parameter" })
  }

  const priceData = generatePrice(symbol)

  if (!priceData) {
    return res.status(404).json({ error: "Asset not found" })
  }

  res.json(priceData)
})

app.get("/api/chart", (req, res) => {
  const { symbol } = req.query

  if (!symbol) {
    return res.status(400).json({ error: "Missing symbol query parameter" })
  }

  const asset = getAssetById(symbol)

  if (!asset) {
    return res.status(404).json({ error: "Asset not found" })
  }

  res.json(generateChart(symbol))
})

app.listen(PORT, HOST, () => {
  console.log(`Mock API running on http://${HOST}:${PORT}`)
})