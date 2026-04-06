const mockPrices = {
  bitcoin: { symbol: "BTC", price: 65000, change: -2.3 },
  ethereum: { symbol: "ETH", price: 3200, change: 1.8 },
  solana: { symbol: "SOL", price: 145, change: 4.2 },
  ripple: { symbol: "XRP", price: 0.55, change: -0.9 },
  cardano: { symbol: "ADA", price: 0.45, change: 1.2 },
  dogecoin: { symbol: "DOGE", price: 0.12, change: 3.1 },
  polkadot: { symbol: "DOT", price: 6.5, change: -1.5 },
  "matic-network": { symbol: "MATIC", price: 0.9, change: 2.4 },
  litecoin: { symbol: "LTC", price: 85, change: -0.7 },
  "avalanche-2": { symbol: "AVAX", price: 32, change: 1.9 },
  binancecoin: { symbol: "BNB", price: 580, change: 0.8 },
  chainlink: { symbol: "LINK", price: 18, change: 2.7 },
}

export async function fetchAssetPrice(coinId) {
  await new Promise((resolve) => setTimeout(resolve, 500))

  const asset = mockPrices[coinId]

  if (!asset) {
    throw new Error("Asset not found")
  }

  const randomMove = (Math.random() * 2 - 1).toFixed(2)
  const updatedPrice = Number((asset.price + Math.random() * 10 - 5).toFixed(2))
  const updatedChange = Number((asset.change + Number(randomMove) / 5).toFixed(2))

  return {
    price: updatedPrice,
    change: updatedChange,
  }
}

export async function fetchMockChartData(coinId) {
  await new Promise((resolve) => setTimeout(resolve, 300))

  const basePriceMap = {
    bitcoin: 65000,
    ethereum: 3200,
    solana: 145,
    ripple: 0.55,
  }

  const base = basePriceMap[coinId] || 100

  return Array.from({ length: 12 }, (_, index) => ({
    time: `${index + 1}`,
    price: Number((base + (Math.random() * 20 - 10)).toFixed(2)),
  }))
}