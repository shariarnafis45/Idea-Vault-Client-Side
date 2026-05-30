
import { Triangle } from "react-loader-spinner";

const loading = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      {/* Glow background */}
      <div className="relative flex items-center justify-center">
        {/* Soft glow blob */}
        <div
          className="
            absolute
            h-24 w-24
            rounded-full
            bg-[#7C5CFF]/20
            blur-2xl
            animate-pulse
          "
        />

        {/* Floating card */}
        <div
          className="
            relative
            flex items-center justify-center
            px-8 py-7
            rounded-2xl

            bg-white/60 dark:bg-white/5
            backdrop-blur-xl

            border border-black/5 dark:border-white/10

            shadow-[0_20px_80px_rgba(124,92,255,0.15)]

            animate-[float_3s_ease-in-out_infinite]
          "
        >
          <Triangle
            visible={true}
            height="60"
            width="60"
            color="#7C5CFF"
            ariaLabel="loading"
          />
        </div>
      </div>

  
      
    </div>
  );
};

export default loading;
