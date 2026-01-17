export default function LegalCard({ title }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#1f3b8b] to-[#12245c] shadow-[0_18px_40px_rgba(0,0,0,0.25)]">

      {/* Image placeholder */}
      <div className="h-56 w-full bg-gradient-to-br from-blue-700 to-blue-900 opacity-90" />

      {/* Arrow button */}
      <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 text-[#1f3b8b] transition group-hover:scale-110">
        →
      </div>

      {/* Text overlay */}
      <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent px-4 py-3">
        <p className="text-sm font-semibold text-white">
          {title}
        </p>
      </div>
    </div>
  );
}
