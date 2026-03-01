import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">

          {/* Left Column - Content */}
          <div className="space-y-10 z-10 lg:pr-10">
            <h1 className="text-6xl sm:text-7xl lg:text-[5.5rem] font-semibold text-gray-900 leading-[1.1] tracking-tight">
              Software <br />
              <span className="relative inline-block pb-1">
                engineer
                <svg className="absolute w-[105%] h-5 -bottom-2 -left-1 text-black" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                </svg>
              </span> <br />
              & developer
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 font-medium leading-relaxed max-w-lg">
              Building scalable, modern web & mobile applications — transforming complex logic into intuitive products.
            </p>

            <div className="flex items-center bg-white border border-gray-200 rounded-xl p-1.5 shadow-sm max-w-md focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all">
              <input
                type="email"
                placeholder="Enter work email"
                className="flex-1 bg-transparent border-none outline-none px-4 text-gray-800 placeholder:text-gray-400 font-medium"
              />
              <button
                onClick={() => window.location.href = "#contact"}
                className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Hire me
              </button>
            </div>

            {/* Stats Row */}
            <div className="pt-8">
              <div className="flex items-center gap-10 sm:gap-16 border-b border-gray-100 pb-8">
                <div>
                  <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-1">99.9%</div>
                  <div className="text-sm text-gray-500 font-medium">Average system uptime</div>
                </div>
                <div className="w-px h-12 bg-gray-200 hidden sm:block"></div>
                <div>
                  <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-1">~12ms</div>
                  <div className="text-sm text-gray-500 font-medium">Average request latency</div>
                </div>
              </div>

              <div className="pt-6 flex items-center gap-4">
                <div className="flex gap-1 text-black">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <div className="text-sm font-bold text-gray-900">4.9 <span className="text-gray-500 font-medium ml-1">Average client rating</span></div>
              </div>
            </div>
          </div>

          {/* Right Column - Abstract Illustration */}
          <div className="relative w-full h-[600px] hidden lg:block -translate-y-16">

            {/* Main Phone Frame */}
            <div className="absolute top-1/2 left-1/2 -translate-x-[35%] -translate-y-[45%] w-[270px] h-[550px] bg-white rounded-[3rem] border-8 border-gray-100 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.08)] z-10 flex flex-col">
              <div className="flex justify-between items-center p-6 border-b border-gray-50">
                <div className="w-16 h-3 bg-gray-200 rounded-full"></div>
                <div className="w-6 h-3 bg-primary/20 rounded-full"></div>
              </div>
              <div className="p-4 space-y-4 pt-10">
                <div className="w-[85%] h-14 bg-gray-50 border border-gray-100/50 rounded-2xl rounded-tl-md shadow-sm"></div>
                <div className="w-[75%] h-14 bg-[#E8F5E9] border border-primary/20 rounded-2xl rounded-tr-md shadow-sm ml-auto mt-6"></div>
                <div className="w-[60%] h-12 bg-gray-50 border border-gray-100/50 rounded-2xl rounded-tl-md shadow-sm mt-6"></div>
              </div>
            </div>

            {/* Top Left Floating Chat Card */}
            <div className="absolute top-[18%] left-[8%] bg-white p-5 rounded-3xl shadow-[0_15px_40px_-10px_rgba(0,0,0,0.08)] border border-gray-100 w-56 z-20 animate-float" style={{ animationDuration: '7s' }}>
              <div className="flex justify-between items-center mb-4 text-[11px] text-gray-400 font-semibold">
                <span className="text-gray-800">Oslo Chat</span>
                <span>10:00</span>
              </div>
              <div className="space-y-2">
                <div className="w-full h-8 border border-gray-200 rounded-lg rounded-tl-sm flex items-center px-2">
                  <div className="w-10 h-1.5 bg-gray-200 rounded-full"></div>
                </div>
                <div className="w-[80%] ml-auto h-8 border border-primary/30 bg-primary/5 rounded-lg rounded-tr-sm flex items-center px-2">
                  <div className="w-10 h-1.5 bg-primary/40 rounded-full"></div>
                </div>
              </div>
              {/* Floating tool tip attached to it */}
              <div className="absolute -left-4 -bottom-2 bg-gray-900 text-white text-[10px] px-4 py-2 rounded-full font-bold tracking-wider shadow-lg">
                TUE, 12
              </div>
            </div>

            {/* Bottom Left To-Do Card */}
            <div className="absolute bottom-[22%] left-[2%] bg-white p-6 rounded-3xl shadow-[0_15px_40px_-10px_rgba(0,0,0,0.08)] border border-gray-100 w-52 z-20 animate-float" style={{ animationDuration: '6s', animationDelay: '1s' }}>
              <div className="text-sm font-bold text-gray-800 mb-5">To-do list</div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-md bg-gray-900 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div className="flex-1 flex gap-1">
                    <div className="h-2 w-4 bg-gray-900 rounded-full"></div>
                    <div className="h-2 w-4 bg-gray-900 rounded-full"></div>
                    <div className="h-2 w-8 bg-gray-900 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-md border-2 border-gray-200"></div>
                  <div className="flex-1 h-2 bg-gray-100 rounded-full"></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-md border-2 border-gray-200"></div>
                  <div className="w-[60%] h-2 bg-gray-100 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Right Performance Card */}
            <div className="absolute bottom-[28%] -right-[2%] bg-white p-6 rounded-3xl shadow-[0_15px_50px_-15px_rgba(0,0,0,0.1)] border border-gray-100 w-64 z-30 animate-float" style={{ animationDuration: '8s', animationDelay: '2s' }}>
              <div className="flex items-end justify-between h-16 mb-6 border-b border-gray-100 pb-3 gap-2">
                <div className="flex-1 h-6 bg-gray-800 rounded-t-sm"></div>
                <div className="flex-1 h-10 bg-gray-800 rounded-t-sm"></div>
                <div className="flex-1 h-12 bg-gray-800 rounded-t-sm"></div>
                <div className="flex-1 h-8 bg-gray-800 rounded-t-sm"></div>
                <div className="flex-1 h-16 bg-primary/20 border-b-2 border-primary rounded-t-sm relative">
                  <div className="absolute -top-6 -right-2 text-[10px] font-bold text-gray-800 bg-white shadow-sm px-1.5 rounded">85.3%</div>
                </div>
              </div>
              <div className="flex justify-between items-end">
                <div className="text-xs text-gray-500 font-medium leading-relaxed">Overall tasks<br />performance</div>
                <div className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center">
                  <svg className="w-3 h-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" /></svg>
                </div>
              </div>
            </div>

            {/* Decorative Isometric Lines Background */}
            <div className="absolute top-[20%] right-0 w-48 h-px bg-gray-200 -rotate-[30deg] z-0 opacity-50"></div>
            <div className="absolute top-[40%] -right-[15%] w-64 h-px bg-gray-200 -rotate-[30deg] z-0 opacity-50"></div>
            <div className="absolute bottom-[30%] left-[10%] w-64 h-px bg-gray-200 -rotate-[30deg] z-0 opacity-50"></div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
