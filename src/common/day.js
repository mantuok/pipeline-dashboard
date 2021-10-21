import dayjs from 'dayjs';
import RelativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(RelativeTime);

export const getHumanDateFormat = (date) => dayjs(date).fromNow();