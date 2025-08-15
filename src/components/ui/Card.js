export default function Card({ children, className = "" }) {
  return (
    <div className={"p-6 rounded-xl shadow bg-white " + className}>
      {children}
    </div>
  );
}
