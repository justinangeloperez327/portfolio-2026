import { BlueprintFrame } from "./blueprint-frame";
import type { BlueprintNode } from "@/types/blueprint";

type LayerDiagramProps = {
  title: string;
  description?: string;
  layers: readonly BlueprintNode[];
};

export function LayerDiagram({
  title,
  description,
  layers,
}: LayerDiagramProps) {
  return (
    <BlueprintFrame title={title} {...(description ? { description } : {})}>
      <ol className="layer-diagram">
        {layers.map((layer, index) => (
          <li key={layer.id}>
            <span className="technical-label">
              Layer {String(index + 1).padStart(2, "0")}
            </span>
            <strong>{layer.label}</strong>
            {layer.detail ? <p>{layer.detail}</p> : null}
          </li>
        ))}
      </ol>
    </BlueprintFrame>
  );
}
