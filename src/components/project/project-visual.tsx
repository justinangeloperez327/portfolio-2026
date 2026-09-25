import Image from "next/image";

type ProjectVisualProps = {
  slug: string;
  compact?: boolean;
};

const projectImages = {
  berserk: {
    src: "/project-berserk.png",
    alt: "Berserk project artwork",
  },
  gungnir: {
    src: "/project-gungnir.png",
    alt: "Gungnir project artwork",
  },
  densleaf: {
    src: "/project-densleaf.png",
    alt: "Densleaf project artwork",
  },
  quagmire: {
    src: "/project-quagmire.png",
    alt: "Quagmire project artwork",
  },
} as const;

export function ProjectVisual({ slug, compact = false }: ProjectVisualProps) {
  const image = projectImages[slug as keyof typeof projectImages] ?? projectImages.berserk;

  return (
    <div
      className={`project-visual project-visual--image project-visual--${slug} ${compact ? "project-visual--compact" : ""}`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={compact ? "(max-width: 768px) 100vw, 55vw" : "(max-width: 768px) 100vw, 80vw"}
        className="project-visual__image"
      />
    </div>
  );
}
