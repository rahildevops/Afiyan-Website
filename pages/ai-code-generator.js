
import Head from 'next/head';
import Navigation from '../components/layout/Navigation';
import { useEffect } from 'react';

export default function AICodeGenerator() {
  useEffect(() => {
    let chartInstance;
    let Chart;
    async function loadChart() {
      Chart = (await import('chart.js/auto')).default;
      function wrapLabels(label, maxWidth) {
        if (typeof label !== 'string' || label.length <= maxWidth) {
          return label;
        }
        const words = label.split(' ');
        let lines = [];
        let currentLine = '';
        words.forEach(word => {
          if ((currentLine + ' ' + word).length > maxWidth) {
            lines.push(currentLine.trim());
            currentLine = '';
          }
          currentLine += word + ' ';
        });
        lines.push(currentLine.trim());
        return lines;
      }
      const tooltipTitleCallback = (tooltipItems) => {
        const item = tooltipItems[0];
        let label = item.chart.data.labels[item.dataIndex];
        if (Array.isArray(label)) {
          return label.join(' ');
        } else {
          return label;
        }
      };
      const sailpointData = {
        labels: ['Rule Development', 'Template Setup', 'Testing & Debug'].map(l => wrapLabels(l, 12)),
        datasets: [
          {
            label: 'Traditional Method (Hours)',
            data: [25, 15, 12],
            backgroundColor: 'rgba(100, 116, 139, 0.8)',
            borderColor: 'rgba(100, 116, 139, 1)',
            borderWidth: 1,
            borderRadius: 8
          },
          {
            label: 'AI-Powered Method (Hours)',
            data: [8, 6, 4],
            backgroundColor: 'rgba(6, 182, 212, 0.8)',
            borderColor: 'rgba(6, 182, 212, 1)',
            borderWidth: 1,
            borderRadius: 8
          }
        ]
      };
      const ctx = document.getElementById('sailpointChart');
      if (ctx) {
        // Destroy any existing chart instance on this canvas
        if (Chart && Chart.getChart && Chart.getChart(ctx)) {
          Chart.getChart(ctx).destroy();
        } else if (ctx.chart) {
          ctx.chart.destroy();
        }
        chartInstance = new Chart(ctx, {
          type: 'bar',
          data: sailpointData,
          options: {
            maintainAspectRatio: false,
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
                labels: {
                  usePointStyle: true,
                  font: {
                    size: 12,
                    family: 'Inter'
                  }
                }
              },
              tooltip: {
                backgroundColor: 'rgba(15, 23, 42, 0.9)',
                titleColor: '#fff',
                bodyColor: '#fff',
                borderColor: 'rgba(6, 182, 212, 0.5)',
                borderWidth: 1,
                callbacks: {
                  title: tooltipTitleCallback
                }
              }
            },
            scales: {
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: 'Development Time (Hours)',
                  font: {
                    size: 12,
                    family: 'Inter'
                  }
                },
                ticks: {
                  font: {
                    size: 11,
                    family: 'Inter'
                  }
                },
                grid: {
                  color: 'rgba(148, 163, 184, 0.2)'
                }
              },
              x: {
                ticks: {
                  font: {
                    size: 11,
                    family: 'Inter'
                  }
                },
                grid: {
                  display: false
                }
              }
            }
          }
        });
        // Attach chart instance to canvas for future reference
        ctx.chart = chartInstance;
      }
    }
    loadChart();
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  return (
    <>
      <Head>
        <title>SailPoint AI Code Generator: The Future of IGA Development</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="text-gray-800 pt-20" style={{ fontFamily: 'Inter, sans-serif', background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' }}>
        <Navigation />
        <main className="min-h-screen py-12 bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/30">
          <div className="container mx-auto px-6 space-y-16">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text leading-tight">
                SailPoint AI Code Generator
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                The Future of IGA Development - Accelerate your SailPoint implementations with intelligent automation
              </p>
            </div>
          </section>

          {/* Problem Statement Section */}
          <section className="section-card rounded-2xl shadow-xl p-8 md:p-12 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">The Developer&apos;s Challenge</h2>
              <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
                SailPoint is a powerful platform, but its full potential is unlocked only with expert, efficient implementation. Our solution eliminates manual bottlenecks, reduces errors, and accelerates your time-to-value.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="feature-card rounded-xl p-8 text-center border border-gray-200/50 hover:border-blue-300/50">
                <div className="text-5xl font-bold gradient-text mb-4">80%</div>
                <p className="text-gray-700 font-medium">Of development time spent on repetitive, boilerplate code</p>
              </div>
              <div className="feature-card rounded-xl p-8 text-center border border-gray-200/50 hover:border-blue-300/50">
                <div className="text-5xl font-bold gradient-text mb-4">45%</div>
                <p className="text-gray-700 font-medium">Increase in project timelines due to coding errors and debugging</p>
              </div>
              <div className="feature-card rounded-xl p-8 text-center border border-gray-200/50 hover:border-blue-300/50">
                <div className="text-5xl font-bold gradient-text mb-4">100s</div>
                <p className="text-gray-700 font-medium">Of documentation pages developers must constantly reference</p>
              </div>
            </div>
          </section>

          {/* Workflow Comparison Section */}
          <section className="section-card rounded-2xl shadow-xl p-6 md:p-8 mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-4">Transform Your Development Workflow</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">Move from time-consuming manual processes to intelligent automation</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Traditional Workflow Column */}
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6 border border-slate-200">
                <div className="text-center mb-6">
                  <div className="bg-gradient-to-r from-slate-600 to-gray-600 text-white px-4 py-2 rounded-full font-medium text-sm inline-block">
                    Traditional Manual Process
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-slate-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-xs">1</span>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 text-sm">Requirements Analysis</h5>
                        <p className="text-gray-600 text-xs">Manual interpretation and planning</p>
                        <span className="text-xs text-slate-600 bg-slate-100 px-2 py-1 rounded-full">2-4 hrs</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-xs">2</span>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 text-sm">Documentation Research</h5>
                        <p className="text-gray-600 text-xs">API documentation and guides</p>
                        <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full">3-6 hrs</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-xs">3</span>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 text-sm">Manual Development</h5>
                        <p className="text-gray-600 text-xs">Write and implement code</p>
                        <span className="text-xs text-indigo-600 bg-indigo-100 px-2 py-1 rounded-full">8-16 hrs</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-slate-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-xs">4</span>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 text-sm">Testing & Debugging</h5>
                        <p className="text-gray-600 text-xs">Fix errors and validate</p>
                        <span className="text-xs text-slate-600 bg-slate-100 px-2 py-1 rounded-full">4-8 hrs</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <div className="bg-slate-100 text-slate-700 px-4 py-2 rounded-xl font-semibold text-sm">
                    Total: 17-34 Hours
                  </div>
                </div>
              </div>
              {/* Automated Workflow Column */}
              <div className="bg-gradient-to-br from-cyan-50 to-blue-100 rounded-2xl p-6 border border-cyan-200">
                <div className="text-center mb-6">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full font-medium text-sm inline-block">
                    AI-Powered Automation
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-4 border border-cyan-200">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-xs">1</span>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 text-sm">AI Code Generation</h5>
                        <p className="text-gray-600 text-xs">Automated code creation</p>
                        <span className="text-xs text-cyan-600 bg-cyan-100 px-2 py-1 rounded-full">1-2 hrs</span>
                      </div>
                    </div>
                  </div>
                  {/* ...rest of the steps, see HTML for details... */}
                </div>
                <div className="mt-6 text-center">
                  <div className="bg-cyan-100 text-cyan-700 px-4 py-2 rounded-xl font-semibold text-sm">
                    Total: 8-15 Hours
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <div className="text-center mt-8">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-2xl font-bold text-lg shadow-lg inline-block">
              40-50% Time Reduction
            </div>
            <div className="grid grid-cols-3 gap-4 mt-6 max-w-2xl mx-auto">
              <div className="text-center p-3 bg-white/50 rounded-lg border border-blue-100">
                <div className="text-xl font-bold text-blue-600">75%</div>
                <div className="text-xs text-gray-600">Less Errors</div>
              </div>
              <div className="text-center p-3 bg-white/50 rounded-lg border border-cyan-100">
                <div className="text-xl font-bold text-cyan-600">45%</div>
                <div className="text-xs text-gray-600">Cost Savings</div>
              </div>
              <div className="text-center p-3 bg-white/50 rounded-lg border border-indigo-100">
                <div className="text-xl font-bold text-indigo-600">2-3x</div>
                <div className="text-xs text-gray-600">Faster</div>
              </div>
            </div>
          </div>

          {/* SailPoint Focus Section */}
          <section className="section-card rounded-2xl shadow-xl p-8 md:p-12 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold gradient-text mb-6">Streamlining SailPoint Development</h3>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  Our tool provides targeted solutions to common SailPoint pain points, significantly reducing time spent on manual coding and debugging while delivering projects faster with greater confidence.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
                    <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800">Accelerated Development</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Reduce development time from weeks to days with automated code generation and intelligent templates.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
                    <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800">Enhanced Accuracy</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Minimize errors and rework with AI-driven code suggestions and real-time validation.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
                    <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800">Seamless Integration</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Effortlessly integrate with existing SailPoint environments and third-party systems.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="feature-card rounded-xl p-6 border border-gray-200">
                <h4 className="text-xl font-bold gradient-text mb-4 text-center">Development Time Comparison</h4>
                <div className="chart-container" style={{ minHeight: 320, height: 320 }}>
                  <canvas id="sailpointChart" style={{ width: '100%', height: 320 }}></canvas>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      {/* Chart.js is now loaded and rendered via useEffect */}
    </div>
  </>
  );
}
