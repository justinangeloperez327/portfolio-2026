type SectionMarkerProps = {
  index: string;
  label: string;
};

export function SectionMarker({ index, label }: SectionMarkerProps) {
  return (
    <div className="section-marker" aria-label={`Section ${index}: ${label}`}>
      <span aria-hidden="true">{index}</span>
      <span>{label}</span>
    </div>
  );
}
