import moment from 'moment';
import * as momentTz from 'moment-timezone';
import 'moment/locale/fr';
moment.locale('fr');

export const addTimeToDate = (date: string, time: string) => {
  const momentDate = moment(date);
  const momentTime = moment(time, 'HH:mm');
  const combinedDateTime = momentDate.set({
    hour: momentTime.hour(),
    minute: momentTime.minute(),
    millisecond: momentTime.millisecond(),
  });
  return combinedDateTime.toISOString();
};

export const isDateBetween = (dateToCheck: string, startDate: string, endDate: string) => {
  const momentDateToCheck = moment(dateToCheck);
  const momentStartDate = moment(startDate);
  const momentEndDate = moment(endDate);

  return momentDateToCheck.isBetween(momentStartDate, momentEndDate, null, '[]');
};

export const extractDateWithoutTimezone = (dateString: string) => {
  const momentDate = moment(dateString);
  const extractedDate = momentDate.format('DD-MM-YYYY');
  return extractedDate;
};

export const extractDateWithoutTimezoneYMD = (dateString: string) => {
  const momentDate = moment(dateString);
  const extractedDate = momentDate.format('YYYY-MM-DD');
  return extractedDate;
};

export const formatDate = (date: string) => {
  const formattedDate = moment.utc(date).format('D MMMM [à] HH:mm');
  return formattedDate;
};

export const formatDateDDTime = (date: string, separator: string = '/') => {
  console.log("🚀 ~ date:", date)
  const timezone = getUserGMT()
  const formattedDate = moment(date).add(timezone, 'hours').format(`DD${separator}MM${separator}YYYY [à] HH:mm`);
  return formattedDate;
};

export const extraxtHours = (date: string) => {
  console.log("🚀 ~ date:", date)
  const formattedDate = moment(date).format(`[A] HH:mm`);
}

export const formatDateDDTimeWithTimezone = (date: string, separator: string = '/') => {
  const userTimeZone = momentTz.tz.guess();
  const originalDateTime = moment(date);
  const convertedDateTime = originalDateTime.tz(userTimeZone);
  const formattedDate = convertedDateTime.format(`DD${separator}MM${separator}YYYY [à] HH:mm`);
  return formattedDate;
};

export const formatDateJMA = (date: string) => {
  const formattedDate = moment.utc(date).format('dddd  D MMMM');
  return formattedDate;
};

export const formatDateDMA = (date: string) => {
  const formattedDate = moment.utc(date).format('D MMMM YYYY');
  const splitWithSpace = formattedDate.split(' ');
  const capitalizedDate = splitWithSpace.map(capitalizeFirstLetter).join(' ');
  return capitalizedDate;
};

export const capitalizeFirstLetter = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const isDateAfter = (date1: string, date2: string) => {
  const momentDate1 = moment.utc(date1);
  const momentDate2 = moment.utc(date2);
  return momentDate1.isAfter(momentDate2);
};

export const extractTime = (time: string) => {
  const heureBaseMoment = moment(time, 'HH:mm:ss');
  return heureBaseMoment.format('HH:mm');
};

export const addTime = (heureDeBase: string, heureToAdd: string) => {
  const heureBaseMoment = moment(heureDeBase, 'HH:mm:ss');
  const heureToAddMoment = moment(heureToAdd, 'HH:mm:ss');
  const tempsAjoute = moment.duration({
    hours: heureToAddMoment.hours(),
    minutes: heureToAddMoment.minute(),
    seconds: heureToAddMoment.seconds(),
  });

  const heureResultatMoment = heureBaseMoment.add(tempsAjoute);

  if (heureResultatMoment.seconds() > 0) {
    heureResultatMoment.add(1, 'minute');
  }

  return heureResultatMoment.format('HH:mm');
};

export const prepareDuration = (minutes: string, secondes: string): string => {
  const heures = Math.floor(parseInt(minutes) / 60);
  const minutesCalcul = parseInt(minutes) % 60;
  return `${heures < 10 ? `0${heures}` : heures}:${minutesCalcul < 10 ? `0${minutesCalcul}` : minutesCalcul
    }:${secondes}`;
};

export const parseDuration = (timeString: string): { minutes: string; secondes: string } => {
  const [hours, minutes, seconds] = timeString.split(':').map((part) => parseInt(part, 10));

  const totalMinutes = hours * 60 + minutes;

  return {
    minutes: totalMinutes.toString().padStart(2, '0'),
    secondes: seconds.toString().padStart(2, '0'),
  };
};

export const getDateWithUtc = (date: string, heure: string) => {
  // console.log(heure);
  console.log("🚀 ~ Date with GMT 0 ", addTimeToDate(date, heure))
  console.log("🚀 ~ Local Date", new Date(addTimeToDate(date, heure)).toLocaleString())

  // const newDateWithUTc = new Date().toUTCString()
  // // console.log("🚀 ~ newDateWithUTc:", newDateWithUTc)
  // const dateWithUtc = new Date(date)
  // console.log("🚀 ~ dateWithUtc:", dateWithUtc)
  // console.log(new Date().toUTCString());
  // Test de la fonction
  // console.log("🚀 ~ getUserGMT():", getUserGMT())

  return addTimeToDate(date, heure)
}

const getUserGMT = () => {
  const userOffset = new Date().getTimezoneOffset();

  const userOffsetHours = userOffset / 60;
  if (userOffsetHours === -1 || userOffsetHours === -2) {
    return "GMT+1";
  } else if (userOffsetHours === 0 || userOffsetHours === -3) {
    return "GMT+2";
  } else {
    return "Impossible de déterminer le fuseau horaire avec précision.";
  }
}

export const getUserTimeZone = () => {
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return userTimeZone;
};
