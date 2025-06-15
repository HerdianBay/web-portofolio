export default function Button({ id, children, style, onClick }) {
  return (
    <a
      href={id}
      className={`${style} rounded-full px-6 py-2.5 text-base xl:px-10 xl:py-3`}
      onClick={onClick}
    >
      {children}
    </a>
  );
}
