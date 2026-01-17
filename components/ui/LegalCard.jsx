export default function LegalCard({ title, image }) {
  return (
    <div className="relative rounded-xl overflow-hidden group cursor-pointer">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />

      <div className="absolute inset-0 bg-black/40 flex items-end p-4">
        <h3 className="text-white font-semibold text-lg">
          {title}
        </h3>
      </div>
    </div>
  );
}
