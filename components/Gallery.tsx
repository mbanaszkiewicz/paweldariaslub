import Image from "next/image";

const images = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpg"
];

export default function Gallery() {
  return (
    <section className="py-20">
      <h2 className="text-center text-4xl mb-12">
        Galeria
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 px-4">
        {images.map((src) => (
          <Image
            key={src}
            src={src}
            alt=""
            width={500}
            height={500}
            className="rounded-xl object-cover aspect-square"
          />
        ))}
      </div>
    </section>
  );
}