export default function Toast({ message, onClose }) {
  return (
    <div className="fixed top-6 right-6 z-50">
      <div className="bg-white text-black px-5 py-3 rounded-xl shadow-lg flex items-center gap-4 min-w-[280px]">
        
        <span className="text-sm font-medium flex-1">
          {message}
        </span>

        <button
          onClick={onClose}
          className="text-gray-500 hover:text-black text-lg font-bold"
        >
          ✕
        </button>

      </div>
    </div>
  )
}