import React, { useEffect, useState } from "react";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { PencilIcon, TrashIcon, UserPlusIcon } from "@heroicons/react/24/solid";
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
import NewsEditDialog from "./editNews";
import NewsAddTab from "./addNews";

const TABLE_HEAD = ["Title", "Text", "Created Date", ""];

const ITEMS_PER_PAGE = 5;

export default function NewsTab() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [selectedNews, setNewsForDialog] = useState(false);
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await NewsService.getAdminNews();

        setNews(response.data);
      } catch (error) {
        console.error("Error fetching donations:", error);
      }
    };

    fetchNews();
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

  const openDialog = () => {
    setIsDialogOpen(true);
    setError("");
  };

  const handleDelete = async (id: number) => {
    const response: any = await NewsService.deleteNews(id);

    if (!response.ok) {
      setError("Something went wrong.");
      return;
    }

    const newsResponse: any = await NewsService.getNews();

    setNews(newsResponse.data);
  };

  const indexOfLastNews = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstNews = indexOfLastNews - ITEMS_PER_PAGE;
  const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <section className="grid min-h-screen place-items-center p-8">
        <Card placeholder={undefined} className="h-full w-full">
          {/* ... (rest of the code remains the same) */}
          <CardHeader
            placeholder={undefined}
            floated={false}
            shadow={false}
            className="rounded-none"
          >
            <div className="mb-8 flex items-center justify-between gap-8">
              <div>
                <Typography
                  placeholder={undefined}
                  variant="h5"
                  color="blue-gray"
                >
                  News
                </Typography>
              </div>
              <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                {/* <Button placeholder={undefined} variant="outlined" size="sm">
                  View All
                </Button> */}
                <Button
                  placeholder={undefined}
                  className="flex items-center gap-3"
                  size="sm"
                  onClick={openDialog}
                >
                  <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add News
                </Button>
              </div>
            </div>
            {/* ... (rest of the code remains the same) */}
          </CardHeader>
          <CardBody placeholder={undefined} className="overflow-scroll px-0">
            <table className="mt-4 w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head, index) => (
                    <th
                      key={head}
                      className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                    >
                      <Typography
                        placeholder={undefined}
                        variant="small"
                        color="blue-gray"
                        className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                      >
                        {head}{" "}
                        {index !== TABLE_HEAD.length - 1 && (
                          <ChevronUpDownIcon
                            strokeWidth={2}
                            className="h-4 w-4"
                          />
                        )}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {currentNews.map((n: any, index: number) => {
                  const isLast = index === news.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={n.title}>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <div className="flex flex-col">
                            <Typography
                              placeholder={undefined}
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {n?.title.length > 30
                                ? n.title.slice(0, 30) + "..."
                                : n.title}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={classes}>
                        <Textarea
                          placeholder={undefined}
                          className="font-normal"
                          disabled
                          value={n.text}
                        />
                      </td>
                      <td className={classes}>
                        <Typography
                          placeholder={undefined}
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {n.formattedDate}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Tooltip content="Edit news">
                          <IconButton
                            placeholder={undefined}
                            variant="text"
                            onClick={() => {
                              setIsEditDialogOpen(true);
                              setNewsForDialog(n);
                            }}
                          >
                            <PencilIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip content="Delete news">
                          <IconButton
                            placeholder={undefined}
                            variant="text"
                            color="red" // Adjust the color as needed
                            onClick={() => {
                              handleDelete(n.id);
                            }}
                          >
                            <TrashIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </CardBody>
          <CardFooter
            className="flex items-center justify-between border-t border-blue-gray-50 p-4"
            placeholder={undefined}
          >
            <Button
              variant="outlined"
              size="sm"
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              placeholder={undefined}
            >
              Previous
            </Button>
            <div className="flex items-center gap-2">
              {/* Pagination buttons */}
              {Array.from({
                length: Math.ceil(news.length / ITEMS_PER_PAGE),
              }).map((_, index) => (
                <Button
                  key={index + 1}
                  variant="text"
                  size="sm"
                  onClick={() => paginate(index + 1)}
                  className={
                    currentPage === index + 1 ? "bg-blue-gray-100" : ""
                  }
                  placeholder={undefined}
                >
                  {index + 1}
                </Button>
              ))}
            </div>
            <Button
              variant="outlined"
              size="sm"
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === Math.ceil(news.length / ITEMS_PER_PAGE)}
              placeholder={undefined}
            >
              Next
            </Button>
          </CardFooter>
        </Card>
      </section>
      <NewsAddTab
        setNews={setNews}
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
      />
      <NewsEditDialog
        setNews={setNews}
        news={selectedNews}
        isEditDialogOpen={isEditDialogOpen}
        setIsEditDialogOpen={setIsEditDialogOpen}
      />
    </>
  );
}
