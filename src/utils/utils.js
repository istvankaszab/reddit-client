export const numberToText = (num) => {
  let numText = '';

  if (num < 1000) {
    numText = String(num);
  } else if (num < 1000000) {
    numText = String((Math.round(num / 100) / 10) + 'k');
  } else {
    numText = String((Math.round(num / 100000) / 10) + 'M');
  }
  return numText;
}

export const timeAgo = (utcTime) => { // utcTime in milliseconds
  const d = new Date();
  const now = d.getTime();
  const difference = now - utcTime;

  // at least a day
  const days = Math.floor(difference / 86400000); // 1000 * 60 * 60 * 24
  if (days > 1) return String(days) + ' days ago';
  if (days === 1) return 'a day ago';

  // less than a day
  const hours = Math.floor(difference / 3600000); // 1000 * 60 * 60
  if (hours > 1) return String(hours) + ' hours ago';
  if (hours === 1) return 'an hour ago';

  // less than an hour
  const minutes = Math.floor(difference / 60000); // 1000 * 60
  if (minutes > 1) return String(minutes) + ' minutes ago';

  // in a minute
  return 'just now';
}