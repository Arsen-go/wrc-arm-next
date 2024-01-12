import React from "react";
import Image from "next/image";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  Avatar,
} from "@material-tailwind/react";
import { DictionaryType } from "@/locales";

interface BlogPostCardProps {
  img: string;
  tag: string;
  title: string;
  desc: string;
  lang: DictionaryType;
  readMoreLink: string;
}

export function BlogPostCard({
  img,
  tag,
  title,
  desc,
  lang,
  readMoreLink,
}: BlogPostCardProps) {
  return (
    <Card placeholder={undefined} shadow={true}>
      {/* <CardHeader placeholder={undefined}>
        <Image
          width={768}
          height={768}
          src={img}
          alt={title}
          className="h-full w-full scale-110 object-cover"
        />
      </CardHeader> */}
      <CardBody placeholder={undefined} className="p-6">
        <Typography
          placeholder={undefined}
          as="a"
          href={"/" + lang + "/" + readMoreLink}
          variant="h5"
          color="blue-gray"
          className="mb-2 normal-case transition-colors hover:text-gray-900"
        >
          {title}
        </Typography>
        <Typography
          placeholder={undefined}
          variant="small"
          color="blue"
          className="mb-2 !font-medium"
        >
          {tag}
        </Typography>
        <Typography
          placeholder={undefined}
          className="mb-6 font-normal !text-gray-500"
        >
          {desc}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default BlogPostCard;
