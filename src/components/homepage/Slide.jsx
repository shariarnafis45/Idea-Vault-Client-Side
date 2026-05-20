import Image from "next/image";
import Link from "next/link";

const Slide = ({ slide }) => {
  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {/* Background Image */}
      <Image
        src={slide.img}
        alt={slide.title}
        fill
        priority
        className="object-cover scale-105"
      />

      {/* Brand Gradient Overlay (Idea-Vault style) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 via-[#111827]/70 to-[#6D5EF5]/30" />

      {/* Soft glow accent */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#6D5EF5]/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#4FD1C5]/10 blur-3xl rounded-full" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-20">
          <div className="max-w-2xl text-white space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF8A4C] animate-pulse"></span>
              <span className="text-xs md:text-sm tracking-widest uppercase text-white/70">
                Idea Vault • Featured
              </span>
            </div>

           
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
              {slide.title}
            </h1>

          
            <p className="text-sm md:text-lg text-white/70 leading-relaxed">
              {slide.desc}
            </p>

            
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* Primary CTA */}
              <Link href={'/ideas'} className="cursor-pointer">
                <button className="px-6 py-3 rounded-full bg-[#6D5EF5] text-white font-medium hover:scale-105 active:scale-95 transition shadow-[0_0_25px_rgba(109,94,245,0.4)]">
                  Explore Ideas
                </button>
              </Link>

          
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/60 to-transparent" />
    </div>
  );
};

export default Slide;
