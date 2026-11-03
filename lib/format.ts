const dateFormatter = new Intl.DateTimeFormat("en-IN", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

/** Formats an ISO date (YYYY-MM-DD) as e.g. "28 Nov 2026". */
export function formatDate(iso: string): string {
  return dateFormatter.format(new Date(`${iso}T00:00:00Z`));
}

export function getDay(iso: string): string {
  return String(new Date(`${iso}T00:00:00Z`).getUTCDate());
}

export function getMonthShort(iso: string): string {
  return new Intl.DateTimeFormat("en-IN", {
    month: "short",
    timeZone: "UTC",
  }).format(new Date(`${iso}T00:00:00Z`));
}
