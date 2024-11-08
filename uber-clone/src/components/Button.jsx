export default function Button({ label, className }) {
  return (
    <button
      type="button"
      className={className}
    >
      {label}
    </button>
  );
}
