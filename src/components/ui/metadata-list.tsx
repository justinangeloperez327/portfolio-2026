type MetadataItem = {
  label: string;
  value: string;
};

type MetadataListProps = {
  items: readonly MetadataItem[];
};

export function MetadataList({ items }: MetadataListProps) {
  return (
    <dl className="metadata-list">
      {items.map((item) => (
        <div className="metadata-list__item" key={item.label}>
          <dt>{item.label}</dt>
          <dd>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
