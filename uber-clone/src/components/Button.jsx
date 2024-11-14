export default function Button({ label, style }) {
  return (
    <button
      type="button"
      className={style}
    >
      {label}
    </button>
  );
}
