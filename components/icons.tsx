type IconProps = {
  className?: string;
};

export function WebIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className={className}
      aria-hidden="true"
    >
      <rect x="2.5" y="4" width="19" height="14" rx="2" />
      <path d="M2.5 8.5h19" />
      <circle cx="5.5" cy="6.25" r="0.6" fill="currentColor" stroke="none" />
      <path d="M7 13l2.5 2.5L7 18M12 18h5" />
    </svg>
  );
}

export function AutomationIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v3M12 18v3M21 12h-3M6 12H3M18.36 5.64l-2.12 2.12M7.76 16.24l-2.12 2.12M18.36 18.36l-2.12-2.12M7.76 7.76 5.64 5.64" />
    </svg>
  );
}

export function DataIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className={className}
      aria-hidden="true"
    >
      <path d="M4 20V10M11 20V4M18 20v-7" />
      <path d="M2.5 20h19" />
    </svg>
  );
}

export function ConsultingIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9.5" />
      <path d="M15.5 8.5 13 13l-4.5 2.5L11 11z" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
      <path d="M8 12.5l2.5 2.5L16 9.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function QuoteIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 32 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M13 0C6.4 2.3 2 7.6 2 13.5 2 18.9 5.1 22 9.2 22c3.2 0 5.5-2.3 5.5-5.4 0-2.9-2-5-4.7-5-.5 0-1 .1-1.2.1C9.4 7.6 12 4 16.5 1.9L13 0zM28 0c-6.6 2.3-11 7.6-11 13.5 0 5.4 3.1 8.5 7.2 8.5 3.2 0 5.5-2.3 5.5-5.4 0-2.9-2-5-4.7-5-.5 0-1 .1-1.2.1C24.4 7.6 27 4 31.5 1.9L28 0z" />
    </svg>
  );
}
