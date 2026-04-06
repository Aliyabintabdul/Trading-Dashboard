export async function fetchAssetPrice(coinId) {
  const response = await fetch(`/api/price?symbol=${coinId}`)

  if (!response.ok) {
    throw new Error("Failed to fetch price data")
  }

  const data = await response.json()

  return {
    price: data.price,
    change: data.change,
  }
}

export async function fetchMockChartData(coinId) {
  const response = await fetch(`/api/chart?symbol=${coinId}`)

  if (!response.ok) {
    throw new Error("Failed to fetch chart data")
  }

  return await response.json()
}