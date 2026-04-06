import { useEffect, useState } from "react"
import AssetList from "./components/AssetList"
import PriceCard from "./components/PriceCard"
import PriceChart from "./components/PriceChart"
import TradeBox from "./components/TradeBox"
import Toast from "./components/Toast"
import { fetchAssetPrice, fetchMockChartData } from "./services/cryptoApi"

const defaultAsset = { symbol: "BTC", name: "Bitcoin", id: "bitcoin" }

export default function App() {
  const [selectedAsset, setSelectedAsset] = useState(defaultAsset)
  const [price, setPrice] = useState(null)
  const [change, setChange] = useState(null)
  const [chartData, setChartData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [toast, setToast] = useState(null)

  const loadData = async (asset, showLoader = false) => {
    try {
      if (showLoader) setLoading(true)

      setError("")

      const priceData = await fetchAssetPrice(asset.id)
      const chart = await fetchMockChartData(asset.id)

      setPrice(priceData.price)
      setChange(priceData.change)
      setChartData(chart)
    } catch (err) {
      setError(err.message || "Something went wrong")
    } finally {
      if (showLoader) setLoading(false)
    }
  }

  const handleTrade = (message, type) => {
    setToast({ message, type })

    setTimeout(() => {
      setToast(null)
    }, 3000)
  }

  useEffect(() => {
    loadData(selectedAsset, true)

    const interval = setInterval(() => {
      loadData(selectedAsset, false)
    }, 5000)

    return () => clearInterval(interval)
  }, [selectedAsset])

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#0f1b3d_0%,_#050b1a_45%,_#020617_100%)] text-white">
      <div className="mx-auto max-w-7xl p-4 md:p-6">
        <div className="mb-8 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
      
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
               Trading Dashboard
            </h1>
          </div>

       
        </div>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[320px_minmax(0,1fr)]">
          <AssetList
            selectedAsset={selectedAsset}
            onSelectAsset={setSelectedAsset}
          />

          <div className="space-y-6">
            <PriceCard
              asset={selectedAsset}
              price={price}
              change={change}
              loading={loading}
              error={error}
            />

            {!error && chartData.length > 0 && <PriceChart data={chartData} />}

            {!error && price !== null && (
              <TradeBox
                asset={selectedAsset}
                price={price}
                onTrade={handleTrade}
              />
            )}
          </div>
        </div>

        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}
      </div>
    </div>
  )
}