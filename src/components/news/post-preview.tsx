import Avatar from "./avatar";
import CoverImage from "./cover-image";
import Link from "next/link";

type Props = {
  title: string;
  coverImage?: string;
  date: string;
  excerpt: string;
  author: any;
  slug: string;
  href: string;
};

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  href,
}: Props) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-md transition duration-300 transform hover:shadow-lg hover:scale-105 flex flex-col justify-between h-full bg-white border border-gray-200 p-6">
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="mb-5">
            {coverImage ? <CoverImage title={title} src={coverImage} /> : ""}
          </div>
          <h3 className="text-3xl mb-3 leading-snug text-center">
            <Link href={href} className="hover:underline">
              {title}
            </Link>
          </h3>
          <div className="text-lg mb-4 text-center text-gray-600">{date}</div>
          <p className="text-lg leading-relaxed mb-4 text-center text-gray-800">
            {excerpt}
          </p>
        </div>
        <Avatar name={author.name} picture={author.picture} />
      </div>
    </div>
  );
};

export default PostPreview;
