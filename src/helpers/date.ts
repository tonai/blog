const options: Intl.DateTimeFormatOptions = {
  month: "long",
  year: "numeric",
};
const dtf = new Intl.DateTimeFormat("en-US", options);
const now = new Date();

export function formatDate(date: Date | "now") {
  return date === "now" ? "Today" : dtf.format(date);
}

export enum DurationFormat {
  YEAR,
  YEAR_MONTH,
}

export function formatDuration(
  start: Date,
  end: Date | "now",
  format: DurationFormat = DurationFormat.YEAR_MONTH,
) {
  const diff = (end === "now" ? now : end).valueOf() - start.valueOf();
  // var days = Math.floor(diff / (1000 * 60 * 60 * 24));
  var months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.4));
  var years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  const duration = [];
  if (years > 0) {
    duration.push(`${years} years`);
  }
  if (months % 12 > 0 && format === DurationFormat.YEAR_MONTH) {
    duration.push(`${months % 12} months`);
  }
  return duration.join(" ");
}
