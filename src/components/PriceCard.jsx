export default function PriceCard({ asset, price, change, loading, error }) {
  if (loading && price === null) {
    return (
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
        <p className="text-slate-300">Loading price...</p>
      </div>
    )
  }

  if (error && price === null) {
    return (
      <div className="rounded-3xl border border-red-500/30 bg-red-500/10 p-6 shadow-2xl backdrop-blur">
        <p className="text-red-300">{error}</p>
      </div>
    )
  }

  const isPositive = change >= 0

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
            Selected Asset
          </p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight">
            {asset.symbol}
          </h2>
          <p className="mt-1 text-slate-400">{asset.name}</p>
        </div>

        <div className="flex flex-wrap gap-3">
          <div className="rounded-2xl border border-white/10 bg-slate-900/50 px-4 py-3">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Current Price
            </p>
            <p className="mt-2 text-4xl font-bold tracking-tight">
              ${price?.toLocaleString()}
            </p>
          </div>

          <div
            className={`rounded-2xl border px-4 py-3 ${
              isPositive
                ? "border-emerald-500/30 bg-emerald-500/10"
                : "border-rose-500/30 bg-rose-500/10"
            }`}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-slate-300">
              24h Change
            </p>
            <p
              className={`mt-2 text-2xl font-bold ${
                isPositive ? "text-emerald-400" : "text-rose-400"
              }`}
            >
              {change?.toFixed(2)}%
            </p>
          </div>
        </div>
      </div>

      {error && (
        <p className="mt-4 text-sm text-red-400">
          Last refresh failed. Showing previous data.
        </p>
      )}
    </div>
  )
}