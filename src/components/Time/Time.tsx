import {format} from "date-fns";

interface TimeProps {
  date: string
}

export const Time = ({ date }: TimeProps) => {
  return (
    <time className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 pl-3.5" dateTime={date}>
        <span className="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
          <span className="h-4 w-0.5 rounded-full bg-zinc-200"/>
        </span>
      {format(new Date(date), "dd.MM.yyyy, HH:mm")}
    </time>
  );
};
