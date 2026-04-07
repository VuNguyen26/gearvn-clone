export default function Robot3D() {
  return (
    <div className="relative w-full h-full min-h-[300px] md:min-h-[360px] lg:min-h-[420px]">
      <div className="absolute inset-0 rounded-3xl bg-white" />
      <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-100/60 blur-3xl" />

      <iframe
        src="https://my.spline.design/genkubgreetingrobot-cYUIXfKUPa61oDFOJQTkpTbY/"
        title="GearVN robot 3D"
        frameBorder="0"
        loading="lazy"
        allowFullScreen
        className="relative z-10 h-full w-full rounded-3xl border-0"
      />

      <div className="pointer-events-none absolute bottom-3 left-1/2 z-20 h-4 w-28 -translate-x-1/2 rounded-full bg-black/10 blur-md" />
    </div>
  );
}