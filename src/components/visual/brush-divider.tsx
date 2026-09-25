type BrushDividerProps = {
  className?: string;
};

export function BrushDivider({ className = "" }: BrushDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={`brush-divider ${className}`.trim()}
    >
      <svg viewBox="0 0 720 32" role="presentation">
        <path
          d="M8 18c87-9 168-10 244-5 71 5 133 5 190 0 61-6 151-5 270 3-84 2-162 5-234 8-68 3-132 1-192-4-74-6-166-7-278-2Z"
          fill="currentColor"
          opacity=".9"
        />
        <path
          d="M42 23c96 2 174 1 235-4 84-6 163-4 237 3 55 5 103 5 144 2-57 7-119 9-186 5-74-5-140-6-199-1-78 6-155 4-231-5Z"
          fill="currentColor"
          opacity=".24"
        />
      </svg>
    </div>
  );
}
