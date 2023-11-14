import {format} from "date-fns";
import {IPost} from "@/types";

interface TimeProps {
  post: IPost
}

export const Time = ({ post }: TimeProps) => {
  return (
    <div className="flex items-center gap-x-4 order-first relative z-10 mb-3 text-sm text-zinc-400">
      <span className="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
        <span className="h-4 w-0.5 rounded-full bg-zinc-200"/>
      </span>
      <time className="text-zinc-400 pl-3.5" dateTime={post.date}>
        {format(new Date(post.date), "dd.MM.yyyy, HH:mm")}
      </time>
      <a className="relative z-10 rounded-full bg-gray-50 text-gray-600 px-3 py-1" href="#">
        {post.category}
      </a>
    </div>
  );
};

// export const Time = ({ post }: TimeProps) => {
//   return (
//     <time className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 pl-3.5" dateTime={post.date}>
//         <span className="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
//           <span className="h-4 w-0.5 rounded-full bg-zinc-200"/>
//         </span>
//       {format(new Date(post.date), "dd.MM.yyyy, HH:mm")}
//     </time>
//   );
// };
