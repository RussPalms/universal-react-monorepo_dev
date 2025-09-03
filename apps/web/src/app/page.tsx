import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4">
            🚀
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            React Native Monorepo
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Cross-platform template with shared UI components
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center items-center gap-4 text-sm text-gray-500">
            <Link href="https://github.com/gurselcakar/universal-react-monorepo" target="_blank" rel="noopener" className="hover:text-blue-600 transition-colors">
              ⭐ Star on GitHub
            </Link>
            <span>•</span>
            <Link href="https://gurselcakar/writing/monorepo-guide" target="_blank" rel="noopener" className="hover:text-blue-600 transition-colors">
              📝 Read the guide
            </Link>
            <span>•</span>
            <Link href="https://twitter.com/gurselcakar" target="_blank" rel="noopener" className="hover:text-blue-600 transition-colors">
              🐦 Follow updates
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Tech Stack */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Tech Stack
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white text-lg">
                  📱
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Expo</h3>
                  <p className="text-sm text-gray-600">React Native</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center text-white text-lg font-bold">
                  N
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Next.js 15</h3>
                  <p className="text-sm text-gray-600">React framework</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center text-white text-lg">
                  🎨
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Tailwind v3</h3>
                  <p className="text-sm text-gray-600">NativeWind</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center text-white text-lg font-bold">
                  T
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Turborepo</h3>
                  <p className="text-sm text-gray-600">Monorepo</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4 text-center">
              What&apos;s Included
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span className="text-gray-700">Shared UI package</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span className="text-gray-700">TypeScript setup</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span className="text-gray-700">Cross-platform styling</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span className="text-gray-700">Development scripts</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span className="text-gray-700">Build configuration</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span className="text-gray-700">Clean architecture</span>
              </div>
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 text-center">
              Quick Start
            </h2>
            
            <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm mb-3">
              <div>pnpm install</div>
              <div>pnpm dev</div>
            </div>

            <p className="text-sm text-gray-600 text-center">
              Starts both web and mobile apps with hot reload
            </p>
          </div>
        </section>

        {/* Demo */}
        <section className="text-center">
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Demo
            </h2>
            <p className="text-gray-600 mb-6 text-sm">
              Shared components working across platforms
            </p>
            
            <Link
              href="/nativewind"
              className="bg-blue-600 hover:bg-blue-700 transition-colors text-white rounded-lg px-6 py-2 font-medium inline-flex items-center gap-2 text-sm"
            >
              <span>🎨</span>
              <span>View Components</span>
              <span>→</span>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-gray-600 text-sm">
          Built with Turborepo • Next.js • Expo • NativeWind
        </div>
      </footer>
    </div>
  );
}
