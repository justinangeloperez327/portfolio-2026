"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type LayerOffsets = {
  background: [number, number];
  mid: [number, number];
  character: [number, number];
  foreground: [number, number];
};

const PARALLAX: LayerOffsets = {
  background: [2.5, 1.5],
  mid: [5, 3],
  character: [9, 5],
  foreground: [13, 7],
};

export function LayeredHeroArt() {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = sceneRef.current;

    if (!scene) {
      return;
    }

    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!finePointer.matches || reducedMotion.matches) {
      return;
    }

    let frame = 0;

    const setOffset = (
      name: keyof LayerOffsets,
      x: number,
      y: number,
    ) => {
      const [xStrength, yStrength] = PARALLAX[name];
      scene.style.setProperty(
        `--hero-${name}-x`,
        `${(x * xStrength).toFixed(2)}px`,
      );
      scene.style.setProperty(
        `--hero-${name}-y`,
        `${(y * yStrength).toFixed(2)}px`,
      );
    };

    const reset = () => {
      scene.style.setProperty("--hero-background-x", "0px");
      scene.style.setProperty("--hero-background-y", "0px");
      scene.style.setProperty("--hero-mid-x", "0px");
      scene.style.setProperty("--hero-mid-y", "0px");
      scene.style.setProperty("--hero-character-x", "0px");
      scene.style.setProperty("--hero-character-y", "0px");
      scene.style.setProperty("--hero-foreground-x", "0px");
      scene.style.setProperty("--hero-foreground-y", "0px");
    };

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = scene.getBoundingClientRect();
      const inside =
        event.clientX >= bounds.left &&
        event.clientX <= bounds.right &&
        event.clientY >= bounds.top &&
        event.clientY <= bounds.bottom;

      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        if (!inside) {
          reset();
          return;
        }

        const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
        const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;

        setOffset("background", x, y);
        setOffset("mid", x, y);
        setOffset("character", x, y);
        setOffset("foreground", x, y);
      });
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <div className="sumi-hero__layers" ref={sceneRef} aria-hidden="true">
      <div className="sumi-hero__layer sumi-hero__layer--background">
        <Image
          src="/home-hero-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="sumi-hero__layer-image"
        />
      </div>

      <div className="sumi-hero__layer sumi-hero__layer--mid">
        <Image
          src="/home-hero-mid.png"
          alt=""
          fill
          sizes="100vw"
          className="sumi-hero__layer-image"
        />
      </div>

      <div className="sumi-hero__layer sumi-hero__layer--character">
        <Image
          src="/home-hero-character.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="sumi-hero__layer-image"
        />
      </div>

      <div className="sumi-hero__layer sumi-hero__layer--foreground">
        <Image
          src="/home-hero-fg.png"
          alt=""
          fill
          sizes="100vw"
          className="sumi-hero__layer-image"
        />
      </div>
    </div>
  );
}
