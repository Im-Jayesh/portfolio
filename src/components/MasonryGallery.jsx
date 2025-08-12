export default function MasonryGallery({ imageNames }) {
  return (
    <div className="columns-2 md:columns-2 lg:columns-3 gap-4 space-y-4">
      {imageNames.map((name) => (
        <img
          key={name}
          src={`/images/${name}`}
          alt=""
          className="w-full mb-4 rounded-lg transform transition duration-300 hover:scale-105 hover:brightness-110"
        />
      ))}
    </div>
  );
}
