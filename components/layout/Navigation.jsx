import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
  return (
    <nav className="bg-gradient-to-r from-white via-blue-50 to-cyan-50 shadow-xl sticky top-0 z-50 backdrop-blur-sm border-b border-cyan-100">
      <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center">
        {/* Company Logo */}
        <Link href="/" legacyBehavior>
          <a className="text-gray-800 text-xl md:text-2xl font-bold md:mb-0 group flex items-center space-x-3">
            <Image 
              src="/images/Afiyan_07122023-02.png" 
              alt="AFIYAN IT Logo" 
              width={40} 
              height={40}
              className="h-8 md:h-10 rounded-lg shadow-lg group-hover:shadow-xl transition-shadow"
            />
          </a>
        </Link>
        
        {/* Navigation Links */}
  <div className="flex space-x-6 items-center h-12">
          <Link href="/" legacyBehavior>
            <a
              className="relative px-4 pb-0 pt-0 text-cyan-600 transition-all font-medium group flex items-center h-12 leading-none after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-cyan-500 after:content-[''] after:rounded after:translate-y-5 after:-mb-2"
              style={{ lineHeight: '1', marginBottom: '-6px' }}
            >
              <span className="relative z-10">Home</span>
            </a>
          </Link>
          
          <div className="dropdown">
            <a href="#solutions" className="relative px-4 py-2 text-gray-700 hover:text-cyan-600 transition-all font-medium group flex items-center">
              <span className="relative z-10">Solutions</span>
              <svg className="w-4 h-4 ml-1 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity -z-0"></div>
            </a>
            <div className="dropdown-content">
              <Link href="/sailpoint" className="dropdown-item">
                <div className="flex items-center">
                  <span className="text-lg mr-2">🚀</span>
                  <div>
                    <div className="font-medium">SailPoint AI Generator</div>
                    <div className="text-sm text-gray-500">Identity Governance Automation</div>
                  </div>
                </div>
              </Link>
              <Link href="#azure-ad" className="dropdown-item">
                <div className="flex items-center">
                  <span className="text-lg mr-2">☁️</span>
                  <div>
                    <div className="font-medium">Azure AD Accelerator</div>
                    <div className="text-sm text-gray-500">Cloud Identity Management</div>
                  </div>
                </div>
              </Link>
              <Link href="#okta" className="dropdown-item">
                <div className="flex items-center">
                  <span className="text-lg mr-2">🔐</span>
                  <div>
                    <div className="font-medium">Okta Integration Suite</div>
                    <div className="text-sm text-gray-500">SSO & Access Management</div>
                  </div>
                </div>
              </Link>
              <Link href="#forgerock" className="dropdown-item">
                <div className="flex items-center">
                  <span className="text-lg mr-2">🔧</span>
                  <div>
                    <div className="font-medium">ForgeRock Accelerator</div>
                    <div className="text-sm text-gray-500">CIAM & Identity Platform</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          
          <div className="dropdown">
            <a href="#services" className="relative px-4 py-2 text-gray-700 hover:text-cyan-600 transition-all font-medium group flex items-center">
              <span className="relative z-10">Services</span>
              <svg className="w-4 h-4 ml-1 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity -z-0"></div>
            </a>
            <div className="dropdown-content">
              <Link href="#consulting" className="dropdown-item">
                <div className="flex items-center">
                  <span className="text-lg mr-2">🎯</span>
                  <div>
                    <div className="font-medium">Strategic Consulting</div>
                    <div className="text-sm text-gray-500">Identity Architecture & Planning</div>
                  </div>
                </div>
              </Link>
              <Link href="#implementation" className="dropdown-item">
                <div className="flex items-center">
                  <span className="text-lg mr-2">⚙️</span>
                  <div>
                    <div className="font-medium">Implementation Services</div>
                    <div className="text-sm text-gray-500">End-to-End Deployment</div>
                  </div>
                </div>
              </Link>
              <Link href="#training" className="dropdown-item">
                <div className="flex items-center">
                  <span className="text-lg mr-2">📚</span>
                  <div>
                    <div className="font-medium">Training & Enablement</div>
                    <div className="text-sm text-gray-500">Team Skill Development</div>
                  </div>
                </div>
              </Link>
              <Link href="#support" className="dropdown-item">
                <div className="flex items-center">
                  <span className="text-lg mr-2">🛠️</span>
                  <div>
                    <div className="font-medium">Managed Services</div>
                    <div className="text-sm text-gray-500">24/7 Technical Support</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          
          <Link href="#about" className="relative px-4 py-2 text-gray-700 hover:text-cyan-600 transition-all font-medium group">
            <span className="relative z-10">About</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity -z-0"></div>
          </Link>
          
          <Link href="#contact" className="relative px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all shadow-md hover:shadow-lg">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}