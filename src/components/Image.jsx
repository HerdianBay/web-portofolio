export default function Image({ source, alt }) {
  return (
    <img
      src={source}
      alt={alt}
      className="h-10 mx-6 mb-6 md:h-14 lg:mx-16 lg:h-16"
    />
  );
}
