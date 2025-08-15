"use client";
export default function Button({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={
        "px-4 py-2 rounded-md shadow-sm font-medium " +
        "bg-pepper text-salt hover:opacity-95 " +
        className
      }
    >
      {children}
    </button>
  );
}
