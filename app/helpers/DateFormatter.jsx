import moment from 'moment';

export default function formatDate(date) {
  if (date) {
    return moment(date).format('ddd, MMM Do YYYY, h:mm:ss a');
  }
  return '';
}
