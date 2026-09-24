type InkMarkProps = {
  className?: string;
};

export function InkMark({ className = "" }: InkMarkProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      focusable="false"
      viewBox="0 0 640 180"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 103c61-31 121-42 181-34 44 6 85 5 127-5 57-14 111-13 164 4 41 13 83 16 127 8-45 19-89 30-133 32-55 3-108-7-159-3-57 5-110 28-165 30-50 2-98-9-142-32Z"
        fill="currentColor"
        opacity=".9"
      />
      <path
        d="M72 119c75 7 137-3 197-16 68-14 128-10 190 4 38 9 74 11 108 7-55 23-115 30-179 20-63-10-119-8-177 3-54 10-101 5-139-18Z"
        fill="currentColor"
        opacity=".22"
      />
    </svg>
  );
}
