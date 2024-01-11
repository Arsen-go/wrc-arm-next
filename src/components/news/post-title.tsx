import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const PostTitle = ({ children }: Props) => {
  return (
    <h4 className="text-1xl md:text-2xl lg:text-4xl font-bold tracking-tighter leading-tight md:leading-none mb-10 text-center md:text-left">
      {children}
    </h4>
  );
};

export default PostTitle;
