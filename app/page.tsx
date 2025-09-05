import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
      </div>
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24 relative z-10">
          <div className="text-center">
            <div className="relative inline-block mb-4 sm:mb-6">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-gray-900 relative z-10">
                School Management
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient bg-300 animate-gradient-x">
                  Made Simple
                </span>
              </h1>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-2xl animate-pulse opacity-50"></div>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-6 sm:mb-8 max-w-3xl mx-auto px-4 leading-relaxed">
              A comprehensive platform to manage and showcase educational institutions. 
              <span className="block mt-2 text-blue-600 font-medium">Built with modern technologies for the best user experience.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
              <Link
                href="/addSchool"
                className="group relative inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 text-white font-semibold rounded-2xl text-base sm:text-lg transition-all duration-500 transform hover:scale-110 hover:rotate-1 shadow-2xl hover:shadow-blue-500/50 animate-bounce-subtle"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
                <svg className="w-5 sm:w-6 h-5 sm:h-6 mr-3 relative z-10 group-hover:animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <span className="relative z-10">Add New School</span>
              </Link>
              <Link
                href="/showSchools"
                className="group relative inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 bg-white/80 backdrop-blur-sm text-gray-800 font-semibold rounded-2xl text-base sm:text-lg transition-all duration-500 transform hover:scale-110 hover:-rotate-1 shadow-2xl hover:shadow-purple-500/30 border border-gray-200/50"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-100 to-blue-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <svg className="w-5 sm:w-6 h-5 sm:h-6 mr-3 relative z-10 group-hover:animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span className="relative z-10">View Schools</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 sm:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 relative">
                Why Choose Our Platform?
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transform origin-left animate-pulse"></div>
              </h2>
            </div>
            <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto px-4 mt-6">
              Built with modern technologies and best practices for optimal performance and user experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {/* Feature 1 */}
            <div className="group relative text-center p-8 bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-white/20">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:animate-bounce">
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">Lightning Fast</h3>
                <p className="text-gray-600 leading-relaxed">
                  Built with Next.js 15 and optimized for performance with SSG and SSR support.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative text-center p-8 bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-white/20">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:animate-bounce animation-delay-200">
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">User Friendly</h3>
                <p className="text-gray-600 leading-relaxed">
                  Intuitive interface designed with Tailwind CSS for a beautiful and responsive experience.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative text-center p-8 bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-white/20">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:animate-bounce animation-delay-400">
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">Secure & Reliable</h3>
                <p className="text-gray-600 leading-relaxed">
                  Powered by Prisma ORM and MySQL for robust data management and security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-12 sm:py-24 bg-gradient-to-br from-indigo-600 via-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Cpath d=%22M0 0h20v20H0z%22/%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
          <div className="absolute top-20 left-1/4 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-1/4 w-24 h-24 bg-white/10 rounded-full animate-float animation-delay-2000"></div>
          <div className="absolute top-1/2 right-10 w-16 h-16 bg-white/10 rounded-full animate-float animation-delay-4000"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="relative inline-block mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 relative z-10">
              Ready to Get Started?
            </h2>
            <div className="absolute -inset-4 bg-white/10 rounded-2xl blur-xl animate-pulse"></div>
          </div>
          <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of schools already using our platform to showcase their institutions and connect with students worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Link
              href="/addSchool"
              className="group relative inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 bg-white text-blue-600 font-bold rounded-2xl text-base sm:text-lg transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-white/30"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white to-blue-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative z-10 group-hover:animate-pulse">Start Adding Schools</span>
            </Link>
            <Link
              href="/showSchools"
              className="group relative inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 border-2 border-white/80 text-white font-bold rounded-2xl text-base sm:text-lg transition-all duration-500 transform hover:scale-110 backdrop-blur-sm hover:bg-white/10"
            >
              <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative z-10 group-hover:animate-pulse">Explore Schools</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
