import { BlueprintFrame } from "./blueprint-frame";
import type { BlueprintConnection, BlueprintNode } from "@/types/blueprint";

type RelationshipDiagramProps = {
  title: string;
  description?: string;
  nodes: readonly BlueprintNode[];
  connections: readonly BlueprintConnection[];
};

export function RelationshipDiagram({
  title,
  description,
  nodes,
  connections,
}: RelationshipDiagramProps) {
  const labels = new Map(nodes.map((node) => [node.id, node.label]));

  return (
    <BlueprintFrame title={title} {...(description ? { description } : {})}>
      <div className="relationship-diagram">
        <ul className="relationship-diagram__nodes">
          {nodes.map((node) => (
            <li key={node.id}>
              <strong>{node.label}</strong>
              {node.detail ? <span>{node.detail}</span> : null}
            </li>
          ))}
        </ul>
        <ul className="relationship-diagram__connections" aria-label="Relationships">
          {connections.map((connection) => (
            <li key={`${connection.from}-${connection.to}-${connection.label ?? ""}`}>
              <span>{labels.get(connection.from) ?? connection.from}</span>
              <span aria-hidden="true">→</span>
              <span>{labels.get(connection.to) ?? connection.to}</span>
              {connection.label ? <em>{connection.label}</em> : null}
            </li>
          ))}
        </ul>
      </div>
    </BlueprintFrame>
  );
}
