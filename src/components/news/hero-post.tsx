import Image from "next/image";
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

const HeroPost = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  href,
}: Props) => {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        {coverImage ? (
          <Image
            src={coverImage}
            alt={``}
            className="h-85 w-full object-cover object-center"
            width={500}
            height={250}
          />
        ) : (
          ""
        )}
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
            <Link href={href} className="hover:underline">
              {title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">{date}</div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        </div>
      </div>
    </section>
  );
};

export default HeroPost;
