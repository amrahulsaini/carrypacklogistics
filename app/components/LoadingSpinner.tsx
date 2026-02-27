export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
      {/* Brand mark */}
      <div className="mb-8">
        <span className="text-[#1a365d] font-bold text-xl tracking-tight" style={{ fontFamily: 'var(--font-poppins), sans-serif' }}>
          Carry Pack
        </span>
        <span className="text-gray-400 font-light text-xl tracking-tight ml-1">Logistics</span>
      </div>

      {/* Three bouncing dots */}
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-[#1a365d] loading-dot" style={{ animationDelay: '0ms' }} />
        <span className="w-2.5 h-2.5 rounded-full bg-[#c8a951] loading-dot" style={{ animationDelay: '150ms' }} />
        <span className="w-2.5 h-2.5 rounded-full bg-[#1a365d] loading-dot" style={{ animationDelay: '300ms' }} />
      </div>
    </div>
  );
}
