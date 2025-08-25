import React, { useEffect, useRef } from "react";

export default function VideoAutoPlay({
  src,
  poster,
  controls = false,
  loop = true,
  className = "vid",
  containerClass = "media-frame",
  onReadyClass = "video-ready",
  preload = "auto",
}) {
  const wrapRef = useRef(null);
  const vidRef = useRef(null);

  const tryPlay = () => {
    const v = vidRef.current;
    if (!v) return;
    v.muted = true;
    v.setAttribute("muted", "");
    v.setAttribute("playsinline", "");
    (v).webkitPlaysInline = true;
    v.setAttribute("webkit-playsinline", "true");
    const p = v.play();
    if (p && typeof p.then === "function") {
      p.catch(() => {
        setTimeout(() => v.play().catch(() => {}), 250);
      });
    }
  };

  useEffect(() => {
    const v = vidRef.current;
    const w = wrapRef.current;
    if (!v || !w) return;

    const onCanPlay = () => {
      w.classList.add(onReadyClass);
      tryPlay();
    };
    v.addEventListener("canplay", onCanPlay);

    const io = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        if (!v) return;
        if (e.isIntersecting && e.intersectionRatio >= 0.3) {
          tryPlay();
        } else {
          v.pause();
        }
      },
      { threshold: [0, 0.3] }
    );
    io.observe(v);

    const onVis = () => {
      if (!document.hidden) tryPlay();
    };
    document.addEventListener("visibilitychange", onVis);

    const onLoadedMeta = () => tryPlay();
    v.addEventListener("loadedmetadata", onLoadedMeta);

    const onErr = () => {
      v.style.display = "none";
    };
    v.addEventListener("error", onErr);

    return () => {
      v.removeEventListener("canplay", onCanPlay);
      v.removeEventListener("loadedmetadata", onLoadedMeta);
      v.removeEventListener("error", onErr);
      document.removeEventListener("visibilitychange", onVis);
      io.disconnect();
    };
  }, [onReadyClass]);

  return (
    <div ref={wrapRef} className={containerClass}>
      {poster && (
        <div
          className="poster"
          style={{ backgroundImage: `url('${poster}')` }}
          aria-hidden
        />
      )}
      <video
        ref={vidRef}
        className={className}
        src={src}
        poster={poster}
        autoPlay
        muted
        loop={loop}
        playsInline
        preload={preload}
        controls={controls}
      />
    </div>
  );
}
