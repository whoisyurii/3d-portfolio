/* HeroSkeleton.tsx – improved centering for Hero 3D placeholder */
export const HeroSkeleton = () => (
  <div
    className="absolute inset-0 flex items-center justify-center"
    style={{ zIndex: 2 }}
  >
    <div
      className="
        relative w-50 h-50          
        md:w-[32rem] md:h-[32rem]    
        rounded-full overflow-hidden
        bg-[#0b0d33]                  
        shadow-[inset_0_0_40px_#000]  
        animate-pulse
      "
    >
      {/* faint blue spotlight in centre */}
      <div
        className="
        absolute inset-0
        bg-[radial-gradient(circle_at_50%_70%,rgba(80,100,255,0.35),transparent_75%)]
      "
      />
    </div>
  </div>
);
