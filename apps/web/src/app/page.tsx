import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 items-center w-full max-w-xs flex flex-col">
        <h1 className="text-3xl font-extrabold mb-2 text-blue-600">Hello World</h1>
        <p className="text-base text-gray-600 mb-6 text-center">
          Welcome to the Next.js + NativeWind demo.
        </p>
        <Link
          href="/nativewind"
          className="bg-blue-600 hover:bg-blue-700 transition-colors rounded-full px-6 py-2 text-white font-semibold text-lg"
        >
          NativeWind
        </Link>
      </div>
    </div>
  );
}
