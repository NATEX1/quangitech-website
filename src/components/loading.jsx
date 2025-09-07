"use client";

export default function Loading() {
  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200">
      <div className="h-1 bg-blue-500 animate-load"></div>
    </div>
  );
}
