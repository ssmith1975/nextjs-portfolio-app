import { parseISO, format, parse } from 'date-fns';

type Props = {
  date: Date;
};

const DateFormatter = ({ date }: Props) => {

  const isoDate = parseISO((new Date(date)).toISOString().substring(0, 10));
  const formattedDate = format(isoDate, 'LLLL	d, yyyy')

  return <time dateTime={date.toString()}>{formattedDate}</time>;
  
};

export default DateFormatter;
