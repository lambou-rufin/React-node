import moment from 'moment-timezone';

export const formatDateTimeWithTimeZoneUser = (date: string) => {
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const localDate = moment(date).tz(timeZone).format('YYYY-MM-DD HH:mm:ss');
  return localDate;
}
