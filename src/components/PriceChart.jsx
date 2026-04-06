import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

export default function PriceChart({ data }) {
  return (
    <div className="bg-slate-900 rounded-2xl p-5 h-[300px]">
      <h2 className="text-xl font-bold mb-4">Price Trend</h2>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="time" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" domain={["auto", "auto"]} />
          <Tooltip />
          <Line type="monotone" dataKey="price" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}