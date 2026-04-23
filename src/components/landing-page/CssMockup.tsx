"use client";

import React from 'react';

export function CssMockup() {
  return (
    <div className="relative w-full max-w-[400px] aspect-[4/3] mx-auto kit-card-stack flex items-center justify-center">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full scale-110"></div>
      
      {/* Individual Section Cards */}
      <div className="relative w-full h-full">
        {/* Bonus Card (Back) */}
        <div className="absolute top-[10%] left-[55%] w-1/2 h-3/4 bg-white border-2 border-primary rounded-xl shadow-xl kit-card z-10 p-4 transform rotate-6 hover:rotate-2">
          <div className="h-4 w-12 bg-primary/20 rounded mb-2"></div>
          <div className="h-6 w-full bg-primary rounded mb-4 flex items-center justify-center">
             <span className="text-[10px] text-white font-bold">BÔNUS</span>
          </div>
          <div className="space-y-2">
            <div className="h-1.5 w-full bg-gray-100 rounded"></div>
            <div className="h-1.5 w-4/5 bg-gray-100 rounded"></div>
            <div className="h-1.5 w-full bg-gray-100 rounded"></div>
          </div>
        </div>

        {/* Na Rua Card */}
        <div className="absolute top-[15%] left-[30%] w-1/2 h-3/4 bg-white border-2 border-primary rounded-xl shadow-xl kit-card z-20 p-4 transform -rotate-3 hover:rotate-0">
          <div className="h-4 w-12 bg-gray-200 rounded mb-2"></div>
          <div className="h-6 w-full bg-secondary rounded mb-4 flex items-center justify-center">
             <span className="text-[10px] text-white font-bold">NA RUA</span>
          </div>
          <div className="space-y-2">
            <div className="h-1.5 w-full bg-gray-100 rounded"></div>
            <div className="h-1.5 w-full bg-gray-100 rounded"></div>
            <div className="h-1.5 w-3/4 bg-gray-100 rounded"></div>
          </div>
        </div>

        {/* No Carro Card */}
        <div className="absolute top-[20%] left-[10%] w-1/2 h-3/4 bg-white border-2 border-primary rounded-xl shadow-xl kit-card z-30 p-4 transform -rotate-12 hover:-rotate-5">
          <div className="h-4 w-12 bg-gray-200 rounded mb-2"></div>
          <div className="h-6 w-full bg-primary rounded mb-4 flex items-center justify-center">
             <span className="text-[10px] text-white font-bold">NO CARRO</span>
          </div>
          <div className="space-y-2">
            <div className="h-1.5 w-full bg-gray-100 rounded"></div>
            <div className="h-1.5 w-full bg-gray-100 rounded"></div>
            <div className="h-1.5 w-1/2 bg-gray-100 rounded"></div>
          </div>
        </div>

        {/* Main/Em Casa Card (Front) */}
        <div className="absolute top-[25%] left-[20%] w-1/2 h-3/4 bg-white border-4 border-primary rounded-xl shadow-2xl kit-card z-40 p-5 transform rotate-0 scale-105 hover:scale-110">
          <div className="flex justify-between items-start mb-4">
            <div className="h-6 w-6 bg-primary rounded-full"></div>
            <div className="h-3 w-16 bg-gray-200 rounded"></div>
          </div>
          <div className="text-center">
            <h4 className="text-[14px] font-bold text-gray-800 leading-tight mb-1">EM CASA</h4>
            <div className="h-1 w-8 bg-primary mx-auto mb-4"></div>
            <div className="space-y-2">
              <div className="h-2 w-full bg-gray-100 rounded"></div>
              <div className="h-2 w-full bg-gray-100 rounded"></div>
              <div className="h-2 w-full bg-gray-100 rounded"></div>
              <div className="h-2 w-4/5 bg-gray-100 rounded"></div>
            </div>
            <div className="mt-6 flex justify-center">
               <div className="h-8 w-8 rounded-full border-2 border-primary flex items-center justify-center">
                 <div className="h-4 w-4 bg-primary rounded-sm"></div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
