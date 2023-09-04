import { DateTime } from 'luxon';

export const formatISODatetime = (datetimeISO: string) => {
  const dateTime = DateTime.fromISO(datetimeISO);

  const duration = dateTime.diffNow(['seconds', 'minutes', 'hours']);

  const hours = Math.abs(duration.hours);
  const minutes = Math.abs(duration.minutes);
  const seconds = Math.abs(duration.seconds);

  if (hours && hours > 23) {
    return dateTime.toLocaleString(DateTime.DATETIME_MED);
  } else if (hours) {
    return `${hours}h`;
  } else if (minutes) {
    return `${minutes}m`;
  } else if (seconds) {
    return `${seconds >= 1 ? Math.floor(seconds) : 0}s`;
  }

  return dateTime.toLocaleString(DateTime.DATETIME_MED);
};
