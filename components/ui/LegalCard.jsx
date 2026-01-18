import Image from "next/image";

export default function LegalCard({ title, image }) {
  if (!image) return null;

  return (
    <div className="group relative h-[280px] overflow-hidden rounded-2xl">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        unoptimized
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

      <div className="absolute bottom-4 left-4 right-4 text-white font-semibold">
        {title}
      </div>

      <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 text-blue-900">
        →
      </div>
    </div>
  );
}
