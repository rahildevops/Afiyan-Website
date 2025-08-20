import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

export default function Home() {
  // Services data - exactly from your HTML
  const services = [
    {
      title: "Customer Identity & Access Management",
      description: "We engineer secure, scalable customer identity platforms with a focus on automation and advanced deployment strategies.",
      features: [
        { name: "Advanced CI/CD Pipelines with Automated Product Deployment" },
        { name: "Comprehensive React and Flutter SDK Framework Development" },
        { name: "Proactive Security Integration with Fraud Prevention Tools" },
        { name: "Seamless On-Premise to Cloud Migration Services" },
        { name: "Extensible Custom Code Library for Unique Use Cases" }
      ],
      iconGradient: "from-indigo-500 to-blue-600",
      iconSvg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 715.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>`
    },
    {
      title: "Workforce IAM",
      description: "Streamline identity and access management for your employees, contractors, and partners while bolstering security and ensuring regulatory compliance.",
      features: [
        { name: "Automated Zero-Touch Employee Onboarding and Offboarding" },
        { name: "Role-Based Access Control with SOX GDPR Compliance" },
        { name: "Centralized Identity Store with Lifecycle Management Automation" }
      ],
      iconGradient: "from-cyan-500 to-blue-600",
      iconSvg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>`
    },
    {
      title: "API Security",
      description: "Protect your digital ecosystem with a robust API security framework, providing real-time threat detection and intelligent response capabilities.",
      features: [
        { name: "AI-Powered Machine Learning for Real-Time Threat Detection" },
        { name: "Comprehensive API Discovery and Vulnerability Assessment Services" },
        { name: "Dynamic Risk Scoring with Adaptive Security Policies" }
      ],
      iconGradient: "from-purple-500 to-indigo-600",
      iconSvg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>`
    },
    {
      title: "Privileged Access Management",
      description: "Protect your most critical assets and data by securing, managing, and monitoring all privileged accounts and administrative sessions.",
      features: [
        { name: "Automated Privileged Account Discovery and Secure Vault Management" },
        { name: "Full Session Recording with Real-Time Monitoring and Analysis" },
        { name: "Just-in-Time Access with Zero Standing Privilege Implementation" }
      ],
      iconGradient: "from-red-500 to-orange-600",
      iconSvg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1721 9z"></path>`
    },
    {
      title: "Fraud Prevention",
      description: "Advanced fraud detection and prevention solutions using AI-powered behavioral analytics to protect against sophisticated threats and fraudulent activities.",
      features: [
        { name: "AI-Powered Behavioral Analytics for User Pattern Recognition" },
        { name: "Real-Time Risk Assessment with Instant Fraud Alert Systems" },
        { name: "Adaptive Authentication Systems that Adjust to Risk Levels" }
      ],
      iconGradient: "from-emerald-500 to-teal-600",
      iconSvg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>`
    },
    {
      title: "Prompt Engineering",
      description: "Specialized AI prompt engineering services to optimize large language models for security, identity management, and enterprise automation solutions.",
      features: [
        { name: "Custom AI Model Training and Optimization for Security" },
        { name: "Security-Focused AI Automation for Threat Response Workflows" },
        { name: "Enterprise AI Integration with Existing Security Infrastructure" }
      ],
      iconGradient: "from-yellow-500 to-amber-600",
      iconSvg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>`
    }
  ];

  // Platform categories data - exactly from your HTML
  const platformCategories = [
    {
      platforms: [
        { name: "ForgeRock", logo: "/images/ping.png" },
        { name: "Okta", logo: "/images/okta.png" },
        { name: "Entra ID", logo: "/images/Microsoft-entraid.png" },
        { name: "IBM Security Verify", logo: "/images/IBM.png" }
      ]
    },
    {
      platforms: [
        { name: "SailPoint", logo: "/images/sailpoint.png" },
        { name: "Saviynt", logo: "/images/saviynt.jpeg" },
        { name: "One Identity", logo: "/images/one-ideneity.png" },
        { name: "Keycloak", logo: "/images/keycloak.png" }
      ]
    },
    {
      platforms: [
        { name: "CyberArk", logo: "/images/cyberark.png" },
        { name: "BeyondTrust", logo: "/images/beyondtrust.png" },
        { name: "Delinea", logo: "/images/delinea.jpeg" },
        { name: "Arcon", logo: "/images/arcon.png" }
      ]
    }
  ];

  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [currentPlatformIndex, setCurrentPlatformIndex] = useState(0);
  const serviceAutoScrollRef = useRef(null);
  const platformAutoScrollRef = useRef(null);

  const startServiceAutoScroll = () => {
    if (serviceAutoScrollRef.current) {
      clearInterval(serviceAutoScrollRef.current);
    }
    serviceAutoScrollRef.current = setInterval(() => {
      setCurrentServiceIndex(prev => (prev + 1) % services.length);
    }, 20000);
  };

  const startPlatformAutoScroll = () => {
    if (platformAutoScrollRef.current) {
      clearInterval(platformAutoScrollRef.current);
    }
    platformAutoScrollRef.current = setInterval(() => {
      setCurrentPlatformIndex(prev => (prev + 1) % platformCategories.length);
    }, 25000);
  };

  const nextService = () => {
    setCurrentServiceIndex(prev => (prev + 1) % services.length);
    startServiceAutoScroll();
  };

  const prevService = () => {
    setCurrentServiceIndex(prev => (prev - 1 + services.length) % services.length);
    startServiceAutoScroll();
  };

  const nextPlatform = () => {
    setCurrentPlatformIndex(prev => (prev + 1) % platformCategories.length);
    startPlatformAutoScroll();
  };

  const prevPlatform = () => {
    setCurrentPlatformIndex(prev => (prev - 1 + platformCategories.length) % platformCategories.length);
    startPlatformAutoScroll();
  };

  useEffect(() => {
    startServiceAutoScroll();
    startPlatformAutoScroll();
    
    return () => {
      if (serviceAutoScrollRef.current) clearInterval(serviceAutoScrollRef.current);
      if (platformAutoScrollRef.current) clearInterval(platformAutoScrollRef.current);
    };
  }, []);

  const currentService = services[currentServiceIndex];
  const currentPlatformCategory = platformCategories[currentPlatformIndex];

  return (
    <>
      <Head>
        <title>AFIYAN IT Consulting</title>
        <meta name="description" content="Leading Implementation Partner for CIAM, IAM & API Security Solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap" rel="stylesheet" />
      </Head>

      <div className="text-gray-800 pt-20" style={{ fontFamily: 'Inter, sans-serif', background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' }}>
        
        {/* Navigation Bar */}
        <nav className="bg-gradient-to-r from-white via-blue-50 to-cyan-50 shadow-xl sticky top-0 z-50 backdrop-blur-sm border-b border-cyan-100">
          <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center">
            <a href="/" className="text-gray-800 text-xl md:text-2xl font-bold mb-2 md:mb-0 group">
              <div className="flex items-center">
                <Image 
                  src="/images/Afiyan_07122023-02.png" 
                  alt="AFIYAN IT Logo" 
                  width={120} 
                  height={60}
                  className="h-12 md:h-16 w-auto object-contain rounded-lg shadow-lg group-hover:shadow-xl transition-shadow"
                  priority
                />
              </div>
            </a>
            
            <div className="flex space-x-6">
              <a href="/" className="relative px-4 py-2 text-cyan-600 transition-all font-medium group border-b-2 border-cyan-500">
                <span className="relative z-10">Home</span>
              </a>
              
              <div className="dropdown">
                <a href="#solutions" className="relative px-4 py-2 text-gray-700 hover:text-cyan-600 transition-all font-medium group flex items-center">
                  <span className="relative z-10">Solutions</span>
                  <svg className="w-4 h-4 ml-1 relative z-10 transition-transform group-hover:rotate-180 duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity -z-0"></div>
                </a>
                <div className="dropdown-content-professional">
                  <a href="#deployment" className="dropdown-item-professional">
                    <span className="text-blue-600 mr-3">⚡</span>
                    <div className="font-medium">Deployment Accelerator</div>
                  </a>
                  <a href="#sdks" className="dropdown-item-professional">
                    <span className="text-cyan-600 mr-3">📚</span>
                    <div className="font-medium">Custom SDK's</div>
                  </a>
                  <a href="#ai-generator" className="dropdown-item-professional">
                    <span className="text-purple-600 mr-3">🤖</span>
                    <div className="font-medium">AI Code Generator</div>
                  </a>
                  <a href="#migration" className="dropdown-item-professional">
                    <span className="text-green-600 mr-3">🔄</span>
                    <div className="font-medium">Migration Automation Kit</div>
                  </a>
                </div>
              </div>
              
              <div className="dropdown">
                <a href="#services" className="relative px-4 py-2 text-gray-700 hover:text-cyan-600 transition-all font-medium group flex items-center">
                  <span className="relative z-10">Services</span>
                  <svg className="w-4 h-4 ml-1 relative z-10 transition-transform group-hover:rotate-180 duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity -z-0"></div>
                </a>
                <div className="dropdown-content-professional">
                  <a href="#consulting" className="dropdown-item-professional">
                    <span className="text-emerald-600 mr-3">🎯</span>
                    <div className="font-medium">Strategic Consulting</div>
                  </a>
                  <a href="#implementation" className="dropdown-item-professional">
                    <span className="text-blue-600 mr-3">⚙️</span>
                    <div className="font-medium">Implementation Services</div>
                  </a>
                  <a href="#training" className="dropdown-item-professional">
                    <span className="text-amber-600 mr-3">📖</span>
                    <div className="font-medium">Training & Enablement</div>
                  </a>
                  <a href="#support" className="dropdown-item-professional">
                    <span className="text-red-600 mr-3">🛠️</span>
                    <div className="font-medium">Managed Services</div>
                  </a>
                </div>
              </div>
              
              <a href="#about" className="relative px-4 py-2 text-gray-700 hover:text-cyan-600 transition-all font-medium group">
                <span className="relative z-10">About</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity -z-0"></div>
              </a>
              
              <a href="#contact" className="relative px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all shadow-md hover:shadow-lg">
                Contact Us
              </a>
            </div>
          </div>
        </nav>

        {/* Header & Hero Section */}
        <header className="bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-600 text-white shadow-2xl relative mb-8">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <div className="container mx-auto px-6 py-16 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-2xl mb-4">
                  AFIYAN IT Consulting
                </h1>
                <p className="text-lg md:text-xl text-cyan-100 drop-shadow-lg font-medium mb-4">
                  Leading Implementation Partner for CIAM, IAM & API Security Solutions
                </p>
                <p className="text-base text-white leading-relaxed mb-6">
                  Trusted implementation experts specializing in enterprise-grade security solutions across CIAM, IAM, and API Security platforms worldwide.
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <a href="#contact" className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    Get Started
                  </a>
                  <a href="#offerings" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-white hover:text-blue-600 transition-all shadow-lg">
                    Our Services
                  </a>
                </div>
              </div>
              
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="w-80 h-80 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-2xl overflow-hidden">
                    <Image src="/images/premium_photo-1674506653774-6f51d6ebe799.avif" alt="Cyber Security Solutions" width={320} height={320} className="w-full h-full object-cover rounded-2xl opacity-90 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-cyan-400/30 rounded-full backdrop-blur-sm animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-400/30 rounded-full backdrop-blur-sm animate-pulse delay-700"></div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="container mx-auto p-4 md:p-8">
          {/* Quick Stats Section */}
          <section className="mb-16 grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="bg-gradient-to-br from-white to-cyan-50 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all border border-cyan-200 group">
              <p className="text-4xl font-extrabold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform">50+</p>
              <p className="mt-2 text-sm font-medium text-gray-700">Successful Projects</p>
            </div>
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all border border-blue-200 group">
              <p className="text-4xl font-extrabold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform">24/7</p>
              <p className="mt-2 text-sm font-medium text-gray-700">Global Support</p>
            </div>
            <div className="bg-gradient-to-br from-white to-purple-50 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all border border-purple-200 group">
              <p className="text-4xl font-extrabold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform">10+</p>
              <p className="mt-2 text-sm font-medium text-gray-700">Years Experience</p>
            </div>
            <div className="bg-gradient-to-br from-white to-emerald-50 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all border border-emerald-200 group">
              <p className="text-4xl font-extrabold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform">100%</p>
              <p className="mt-2 text-sm font-medium text-gray-700">Client Satisfaction</p>
            </div>
          </section>

          {/* Our Services Section */}
          <section id="offerings" className="py-6 px-4 bg-gradient-to-br from-white via-blue-50/40 to-cyan-50/50 rounded-2xl shadow-xl mb-10 border border-gray-300/50">
            <div className="container mx-auto px-2">
              <div className="text-center mb-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight mb-3">Our Services</h2>
                <div className="w-20 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-3"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
                <div className="col-span-full max-w-4xl mx-auto">
                  <div className="group relative bg-gradient-to-br from-white/95 via-blue-50/30 to-cyan-50/40 rounded-xl shadow-xl hover:shadow-2xl border border-gray-300/60 p-4 transform transition-all duration-500 hover:scale-[1.01] cursor-pointer overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 via-cyan-50/30 to-indigo-100/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-2 right-2 w-16 h-16 bg-gradient-to-br from-blue-200/50 to-cyan-200/50 rounded-full blur-xl opacity-60"></div>
                    <div className="absolute bottom-2 left-2 w-12 h-12 bg-gradient-to-br from-purple-200/50 to-pink-200/50 rounded-full blur-xl opacity-60"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-indigo-100/25 to-blue-100/25 rounded-full blur-2xl opacity-50"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-50/20 via-transparent to-white/10 opacity-80"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50/10 via-transparent to-cyan-50/10 opacity-60"></div>
                    
                    <div className="absolute inset-0 z-20 pointer-events-none">
                      <button onClick={(e) => { e.stopPropagation(); prevService(); }} className="absolute left-2 top-1/2 transform -translate-y-1/2 group flex items-center justify-center w-10 h-10 bg-white/95 hover:bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 border border-gray-300 hover:border-blue-400 pointer-events-auto">
                        <svg className="w-4 h-4 text-gray-600 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                        </svg>
                      </button>
                      <button onClick={(e) => { e.stopPropagation(); nextService(); }} className="absolute right-2 top-1/2 transform -translate-y-1/2 group flex items-center justify-center w-10 h-10 bg-white/95 hover:bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 border border-gray-300 hover:border-blue-400 pointer-events-auto">
                        <svg className="w-4 h-4 text-gray-600 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                      </button>
                    </div>
                    
                    <div className="relative z-10 px-8">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className={`flex-shrink-0 p-2 rounded-lg bg-gradient-to-br ${currentService.iconGradient} text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105`}>
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" dangerouslySetInnerHTML={{ __html: currentService.iconSvg }} />
                        </div>
                        <div className="bg-gradient-to-r from-white/80 to-blue-50/80 p-2 rounded-lg backdrop-blur-sm shadow-sm border border-gray-200/50">
                          <h3 className="text-xl font-semibold text-gray-800 mb-1">{currentService.title}</h3>
                        </div>
                      </div>

                      <div className="mb-3">
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {currentService.features.map((feature, index) => {
                            const colorGradients = [
                              'from-white to-blue-50/50 hover:from-blue-50/50 hover:to-cyan-50/50',
                              'from-white to-cyan-50/50 hover:from-cyan-50/50 hover:to-blue-50/50',
                              'from-white to-indigo-50/50 hover:from-indigo-50/50 hover:to-purple-50/50',
                              'from-white to-emerald-50/50 hover:from-emerald-50/50 hover:to-teal-50/50',
                              'from-white to-purple-50/50 hover:from-purple-50/50 hover:to-pink-50/50',
                              'from-white to-amber-50/50 hover:from-amber-50/50 hover:to-yellow-50/50'
                            ];
                            
                            return (
                              <li key={index} className={`flex items-start space-x-3 p-3 bg-gradient-to-br ${colorGradients[index % colorGradients.length]} rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all`}>
                                <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <div>
                                  <span className="font-medium text-gray-800 text-sm">{feature.name}</span>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Technology Partners Section */}
          <section id="platforms" className="py-6 px-4 bg-gradient-to-br from-white via-blue-50/40 to-cyan-50/50 rounded-2xl shadow-xl mb-10 border border-gray-300/50">
            <div className="container mx-auto px-2">
              <div className="text-center mb-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight mb-3">Technology Partners</h2>
                <div className="w-20 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full mb-3"></div>
                <p className="text-gray-600 text-base max-w-2xl mx-auto leading-relaxed">
                  We are certified implementation partners for industry-leading identity platforms
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
                <div className="col-span-full max-w-6xl mx-auto">
                  <div className="group relative bg-gradient-to-br from-white/95 via-blue-50/30 to-cyan-50/40 rounded-xl shadow-xl hover:shadow-2xl border border-gray-300/60 p-4 transform transition-all duration-500 hover:scale-[1.01] cursor-pointer overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 via-cyan-50/30 to-indigo-100/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="absolute inset-0 z-20 pointer-events-none">
                      <button onClick={(e) => { e.stopPropagation(); prevPlatform(); }} className="absolute left-2 top-1/2 transform -translate-y-1/2 group flex items-center justify-center w-10 h-10 bg-white/95 hover:bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 border border-gray-300 hover:border-blue-400 pointer-events-auto">
                        <svg className="w-4 h-4 text-gray-600 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                        </svg>
                      </button>
                      <button onClick={(e) => { e.stopPropagation(); nextPlatform(); }} className="absolute right-2 top-1/2 transform -translate-y-1/2 group flex items-center justify-center w-10 h-10 bg-white/95 hover:bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 border border-gray-300 hover:border-blue-400 pointer-events-auto">
                        <svg className="w-4 h-4 text-gray-600 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                      </button>
                    </div>
                    
                    <div className="relative z-10 px-8">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3">
                        {currentPlatformCategory.platforms.map((platform, index) => (
                          <div key={index} className="bg-gradient-to-br from-white to-blue-50/50 hover:from-blue-50/50 hover:to-cyan-50/50 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all p-4 h-36 w-full">
                            <div className="flex items-center justify-center flex-col text-center h-full">
                              <div className="h-20 w-full flex items-center justify-center mb-3">
                                <div className="h-16 w-40 flex items-center justify-center">
                                  <Image src={platform.logo} alt={platform.name} width={160} height={64} className="h-16 w-40 object-contain hover:scale-105 transition-transform" />
                                </div>
                              </div>
                              <div className="text-center h-8 flex items-center justify-center">
                                <h4 className="text-sm font-semibold text-gray-800 leading-tight">{platform.name}</h4>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="text-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white rounded-2xl shadow-2xl p-12 border border-blue-200/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_50%)]"></div>
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-blue-400/20 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/15 transition-all">
                  <h3 className="text-lg font-semibold text-white mb-2">Free Security Review</h3>
                  <p className="text-blue-200 text-sm">Comprehensive analysis of your current identity infrastructure</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/15 transition-all">
                  <div className="flex items-center justify-center mb-2">
                    <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Expert Recommendations</h3>
                  <p className="text-blue-200 text-sm">Actionable insights to improve security and efficiency</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/15 transition-all">
                  <div className="flex items-center justify-center mb-2">
                    <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">No Obligation</h3>
                  <p className="text-blue-200 text-sm">Complete assessment with no strings attached</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 hover:bg-white/15 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.893 5.421a2 2 0 002.214 0L21 8" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 8v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8" />
                  </svg>
                  <a href="mailto:info@afiyan.com" className="text-blue-100 hover:text-cyan-200 transition-colors font-medium">info@afiyan.com</a>
                </div>
                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 hover:bg-white/15 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg> 
                  <span className="text-blue-100 font-medium">+91-9910339578 / +966-541045831</span>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-gray-900 text-white text-center p-4 mt-8">
          <p>&copy; 2024 AFIYAN IT Consulting. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}