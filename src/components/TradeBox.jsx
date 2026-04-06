import { useState } from "react"

export default function TradeBox({ asset, price, onTrade }) {
  const [amount, setAmount] = useState("")

  const handleTrade = (type) => {
    if (!amount || Number(amount) <= 0) {
      onTrade("Please enter a valid amount", "error")
      return
    }

    const total = Number(amount) * price

    onTrade(
      `${type} order placed for ${amount} ${asset.symbol} (~$${total.toFixed(2)})`,
      "success"
    )
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
            Order Entry
          </p>
          <h2 className="text-3xl font-bold">Trade</h2>
        </div>

        <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300">
          {asset.symbol}/USD
        </div>
      </div>

      <div className="mb-5">
        <label className="mb-2 block text-sm text-slate-300">Amount</label>
        <input
          type="number"
          placeholder={`Enter ${asset.symbol} amount`}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full rounded-2xl border border-white/10 bg-slate-800/70 px-4 py-4 text-lg text-white outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20"
        />
      </div>

      <div className="mb-5 rounded-2xl border border-white/10 bg-slate-900/50 p-4">
        <p className="text-sm text-slate-400">Estimated Price</p>
        <p className="mt-2 text-2xl font-bold">${price?.toLocaleString()}</p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <button
          onClick={() => handleTrade("Buy")}
          className="rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-4 text-lg font-bold text-white shadow-lg shadow-emerald-900/30 transition hover:scale-[1.01] hover:from-emerald-400 hover:to-emerald-500"
        >
          Buy
        </button>

        <button
          onClick={() => handleTrade("Sell")}
          className="rounded-2xl bg-gradient-to-r from-rose-500 to-red-600 px-6 py-4 text-lg font-bold text-white shadow-lg shadow-red-900/30 transition hover:scale-[1.01] hover:from-rose-400 hover:to-red-500"
        >
          Sell
        </button>
      </div>
    </div>
  )
}