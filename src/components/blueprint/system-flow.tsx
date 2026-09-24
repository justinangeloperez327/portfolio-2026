import { BlueprintFrame } from "./blueprint-frame";
import type { Blueprint } from "@/types/blueprint";

type SystemFlowProps = {
  blueprint: Blueprint;
};

export function SystemFlow({ blueprint }: SystemFlowProps) {
  return (
    <BlueprintFrame
      title={blueprint.title}
      {...(blueprint.description ? { description: blueprint.description } : {})}
      className="system-flow"
    >
      <ol className="system-flow__nodes">
        {blueprint.nodes.map((node, index) => (
          <li className="system-flow__node" key={node.id}>
            <span className="system-flow__index" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <strong>{node.label}</strong>
              {node.detail ? <span>{node.detail}</span> : null}
            </div>
            {index < blueprint.nodes.length - 1 ? (
              <span className="system-flow__connector" aria-hidden="true">
                ↓
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </BlueprintFrame>
  );
}
