const assets = [
  { symbol: "BTC", name: "Bitcoin", id: "bitcoin" },
  { symbol: "ETH", name: "Ethereum", id: "ethereum" },
  { symbol: "SOL", name: "Solana", id: "solana" },
  { symbol: "XRP", name: "Ripple", id: "ripple" },
]

export default function AssetList({ selectedAsset, onSelectAsset }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
            Markets
          </p>
          <h2 className="text-3xl font-bold">Assets</h2>
        </div>

        <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
          4 pairs
        </div>
      </div>

      <div className="space-y-3">
        {assets.map((asset) => {
          const isActive = selectedAsset.id === asset.id

          return (
            <button
              key={asset.id}
              onClick={() => onSelectAsset(asset)}
              className={`group w-full rounded-2xl border p-4 text-left transition-all duration-200 ${
                isActive
                  ? "border-blue-400/50 bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg shadow-blue-900/40"
                  : "border-white/10 bg-slate-800/60 hover:border-white/20 hover:bg-slate-700/60"
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold tracking-tight">
                    {asset.symbol}
                  </div>
                  <div
                    className={`mt-1 text-sm ${
                      isActive ? "text-blue-100" : "text-slate-300"
                    }`}
                  >
                    {asset.name}
                  </div>
                </div>

                <div
                  className={`h-3 w-3 rounded-full ${
                    isActive ? "bg-white" : "bg-slate-500"
                  }`}
                />
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}