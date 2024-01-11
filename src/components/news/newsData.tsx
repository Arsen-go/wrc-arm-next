import React, { useEffect, useState } from "react";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  IconButton,
  Tooltip,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  CardFooter,
  Textarea,
} from "@material-tailwind/react";
import { NewsService } from "@/services/api/news";
import ArticleCard from "../article-card";

const ITEMS_PER_PAGE = 5;

export default function NewsData({ lang }: any) {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await NewsService.getNews();

        setNews(response.data);
      } catch (error) {
        console.error("Error fetching donations:", error);
      }
    };

    fetchNews();
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

  const indexOfLastNews = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstNews = indexOfLastNews - ITEMS_PER_PAGE;
  const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
      {news.map((props: any, idx: any) => (
        <ArticleCard key={idx} {...props} lang={lang} />
      ))}
    </div>
  );
}
