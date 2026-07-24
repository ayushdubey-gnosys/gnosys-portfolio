import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Rocket, ShieldCheck } from 'lucide-react';
import contactImage from '../assets/contact us.png';

export default function Stats() {
  return (
    <section className="w-full bg-white border-y border-slate-200">
      <div className="w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 w-full overflow-hidden">

          {/* Right Top - Title Block (First on Mobile) */}
          <div className="bg-slate-50 text-slate-900 p-8 md:p-10 lg:p-12 lg:col-start-4 lg:col-span-2 lg:row-start-1 lg:row-span-1 flex flex-col justify-center items-start text-left border-b lg:border-b-0 border-slate-200">
            <h2 className="text-3xl sm:text-4xl lg:text-[36px] leading-[1.1] tracking-tight mb-5 flex flex-col items-start text-left">
              <span className="font-light text-slate-500 mb-1">Why</span>
              <span className="font-black text-slate-500"> Businesses Choose  </span>
              <img src="/logo.png" alt="Gnosys Digital" className="h-16 sm:h-20 lg:h-[72px] object-contain mt-4" />
            </h2>
            <p className="text-slate-500 font-medium max-w-[320px] text-sm leading-relaxed">
              Every day we work hard to build robust digital solutions that make the business lives of our clients better and more efficient.
            </p>
          </div>

          {/* Center Image */}
          <div className="relative min-h-[300px] md:min-h-[350px] lg:min-h-full lg:col-start-2 lg:col-span-2 lg:row-start-1 lg:row-span-2 border-b lg:border-b-0 border-slate-200 lg:border-x">
            <img
              src={contactImage}
              alt="Why Businesses Choose Gnosys Digital"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Left Top - Reason 1 */}
          <div className="bg-zinc-700 text-white p-6 md:p-8 flex flex-col justify-center lg:col-start-1 lg:col-span-1 lg:row-start-1 lg:row-span-1">
            <Award className="w-7 h-7 mb-4 text-zinc-300 stroke-[1.5]" />
            <h3 className="text-[12px] font-bold uppercase tracking-widest mb-2 leading-snug text-zinc-100">10+ Years of<br />Experience</h3>
            <p className="text-[12px] text-zinc-400 leading-relaxed font-medium pr-2">Delivering reliable digital solutions since 2014.</p>
          </div>

          {/* Left Bottom - Reason 2 */}
          <div className="bg-white text-slate-900 p-6 md:p-8 flex flex-col justify-center lg:col-start-1 lg:col-span-1 lg:row-start-2 lg:row-span-1 border-y md:border-t-0 lg:border-b-0 border-slate-200">
            <Users className="w-7 h-7 mb-4 text-slate-900 stroke-[1.5]" />
            <h3 className="text-[12px] font-bold uppercase tracking-widest mb-2 leading-snug text-slate-900">100% In-House<br />Team</h3>
            <p className="text-[12px] text-slate-500 leading-relaxed font-medium pr-2">No freelancers or outsourced development. Every project is managed by our experienced engineering team.</p>
          </div>

          {/* Right Bottom Left - Reason 3 */}
          <div className="bg-zinc-900 text-white p-6 md:p-8 flex flex-col justify-center lg:col-start-4 lg:col-span-1 lg:row-start-2 lg:row-span-1 border-b md:border-b-0 border-zinc-800">
            <Rocket className="w-7 h-7 mb-4 text-white stroke-[1.5]" />
            <h3 className="text-[12px] font-bold uppercase tracking-widest mb-2 leading-snug text-white">End-to-End<br />Delivery</h3>
            <p className="text-[12px] text-zinc-400 leading-relaxed font-medium pr-2">From strategy and UI/UX design to development, deployment, and ongoing support.</p>
          </div>

          {/* Right Bottom Right - Reason 4 */}
          <div className="bg-zinc-700 text-white p-6 md:p-8 flex flex-col justify-center lg:col-start-5 lg:col-span-1 lg:row-start-2 lg:row-span-1">
            <ShieldCheck className="w-7 h-7 mb-4 text-zinc-300 stroke-[1.5]" />
            <h3 className="text-[12px] font-bold uppercase tracking-widest mb-2 leading-snug text-zinc-100">Long-Term<br />Partnership</h3>
            <p className="text-[12px] text-zinc-400 leading-relaxed font-medium pr-2">We continue to support, optimize, and scale your digital products long after launch.</p>
          </div>

        </div>
      </div>
    </section>
  );
}
