import React, { Suspense } from "react";

const TechIcon = React.lazy(() => import("./TechIcon"));

const Skeleton = () => (
  <div
    style={{
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <div className="animate-pulse bg-zinc-800 rounded-full w-24 h-24" />
  </div>
);

const LazyTechIcon = (props) => (
  <Suspense fallback={<Skeleton />}>
    <TechIcon {...props} />
  </Suspense>
);

export default LazyTechIcon;
