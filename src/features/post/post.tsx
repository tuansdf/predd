import { Link } from "react-router-dom";
import { IPost } from "/src/features/post/post.type";
import DisplayHtml from "/src/features/shared/display-html";

interface IProps extends IPost {}

export default function Post({
  subreddit,
  author,
  created,
  bodyText,
  score,
  numComments,
  mediaSrc,
  postUrl,
  title,
  postHint,
}: IProps) {
  return (
    <Link to={postUrl} className="block hover:no-underline">
      <div className="flex gap-1 rounded border border-neutral-700 bg-neutral-800 py-2 hover:cursor-pointer hover:border-neutral-600">
        <div className="w-8 flex-none text-center text-xs font-bold sm:w-10 sm:text-sm">
          {score}
        </div>

        <div className="flex flex-col gap-2 pr-2">
          {/* header */}
          <div className="flex items-baseline gap-1 text-xs sm:gap-2 sm:text-sm">
            {/* subreddit */}
            <Link to={`/r/${subreddit}`} className="z-10 font-bold">
              r/{subreddit}
            </Link>
            {/* author */}
            <span className="text-neutral-400">
              <Link to={`/user/${author}`} className="z-10">
                u/{author}
              </Link>
            </span>
            {/* time */}
            <span className="text-neutral-400">{created}</span>
          </div>
          {/* title */}
          {title ? (
            <div className="pr-2 font-medium sm:text-lg">{title}</div>
          ) : null}
          {/* body text */}
          {bodyText ? (
            <DisplayHtml className="prose-invert pr-2 text-sm sm:text-base">
              {bodyText || ""}
            </DisplayHtml>
          ) : null}
          {/* media */}
          {mediaSrc && postHint === "image" ? (
            <div>
              <img src={mediaSrc} alt="" />
            </div>
          ) : null}
          {/* footer */}
          <div className="pr-2 text-xs text-neutral-400 sm:text-sm">
            <span>{numComments} comments</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
