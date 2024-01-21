type Props = {
  date: string;
  author: string;
};

const PostHeader = ({ date, author }: Props) => {
  return (
    <>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <div className="flex items-center">
            {/* <img src={picture} className="w-12 h-12 rounded-full mr-4" alt={name} /> */}
            <div className="text-xl font-bold">{author}</div>
          </div>
        </div>
        <div className="mb-6 text-sm">{date}</div>
      </div>
    </>
  );
};

export default PostHeader;
