import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js
import { Typography, Card, CardBody } from "@material-tailwind/react";

interface ArticleCardProps {
  img: string;
  title: string;
  text: string;
  readMoreLink: string;
}

export function ArticleCard({
  img,
  title,
  text,
  readMoreLink,
}: ArticleCardProps) {
  return (
    <Card
      placeholder={undefined}
      className="relative grid min-h-[30rem] items-end overflow-hidden rounded-xl"
      color="transparent"
    >
      <Image
        width={768}
        height={768}
        src={img ?? "/image/blogs/blog-3.png"}
        alt="bg"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/60" />
      <CardBody
        placeholder={undefined}
        className="relative flex flex-col justify-end"
      >
        <Typography placeholder={undefined} variant="h4" color="white">
          {title}
        </Typography>
        <Typography
          placeholder={undefined}
          variant="paragraph"
          color="white"
          className="my-2 font-normal"
        >
          {text}
        </Typography>
        {/* Read More Link */}
        <Typography
          as="a"
          href={readMoreLink}
          target="_blank"
          color="blue-gray"
          className="text-lg font-bold"
          placeholder={undefined}
        >
          <p className="text-blue-500">Read More</p>
        </Typography>
      </CardBody>
    </Card>
  );
}

export default ArticleCard;
