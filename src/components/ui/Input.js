"use client";
export default function Input(props) {
  return (
    <input
      {...props}
      className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-pepper focus:outline-none focus:ring-2 focus:ring-accent"
    />
  );
}
