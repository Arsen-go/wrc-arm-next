import { useState } from "react";
import { DictionaryType } from "@/locales";
import PostPreview from "./post-preview";

type Props = {
  posts: any[];
  lang: DictionaryType;
};

const MoreStories = ({ posts, lang }: Props) => {
  const postsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = posts.slice(startIndex, endIndex);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  const handlePagination = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {currentPosts.map((post: any) => (
          <PostPreview
            key={post.id}
            title={post.title}
            date={post.formattedDate}
            author={""}
            coverImage={post?.filePath}
            slug={""}
            href={"/" + lang + "/" + post.readMoreLink}
            excerpt={post.text}
          />
        ))}
      </div>
      {totalPages > 1 && (
        <div className="flex justify-center mt-8">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePagination(index + 1)}
              className={`mx-2 px-4 py-2 rounded-full ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </section>
  );
};

export default MoreStories;
