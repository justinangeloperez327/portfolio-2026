export type BlueprintNode = {
  id: string;
  label: string;
  detail?: string;
};

export type BlueprintConnection = {
  from: string;
  to: string;
  label?: string;
};

export type Blueprint = {
  title: string;
  description?: string;
  nodes: readonly BlueprintNode[];
  connections?: readonly BlueprintConnection[];
};
