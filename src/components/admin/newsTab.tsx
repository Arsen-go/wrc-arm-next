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

const TABLE_HEAD = ["Title", "Text", "Created Date", ""];

const ITEMS_PER_PAGE = 5;

type Props = {};

export default function NewsTab(props: Props) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [title, setNewsTitle] = useState("");
  const [text, setNewsText] = useState("");
  const [error, setError] = useState("");

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

  const openDialog = () => {
    setIsDialogOpen(true);
    setError("");
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setError("");
  };

  const handleSave = async () => {
    if (!title || !text) {
      setError("Title or text is empty");
      return;
    }

    const response: any = await NewsService.createNews({ title, text });
    if (!response.ok) {
      setError("Something went wrong.");
      return;
    }

    const newsResponse: any = await NewsService.getNews();

    setNews(newsResponse.data);

    closeDialog();
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
                {currentNews.map(({ title, text, createdAt }, index) => {
                  const isLast = index === news.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={title}>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <div className="flex flex-col">
                            <Typography
                              placeholder={undefined}
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {title}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={classes}>
                        <Textarea
                          placeholder={undefined}
                          className="font-normal"
                          disabled
                          value={text}
                        />
                      </td>
                      <td className={classes}>
                        <Typography
                          placeholder={undefined}
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {createdAt}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Tooltip content="Edit Article">
                          <IconButton placeholder={undefined} variant="text">
                            <PencilIcon className="h-4 w-4" />
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
      <Dialog open={isDialogOpen} handler={closeDialog} placeholder={undefined}>
        <DialogHeader placeholder={undefined}>Add News</DialogHeader>
        <DialogBody placeholder={undefined}>
          <div className="flex flex-col items-end gap-6 w-100">
            <div className="relative w-full min-w-[200px]">
              <textarea
                onChange={(e) => setNewsTitle(e.target.value)}
                className="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
              ></textarea>
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Title
              </label>
            </div>
            <div className="relative w-full min-w-[200px]">
              <textarea
                onChange={(e) => setNewsText(e.target.value)}
                className="peer h-full min-h-[150px] w-full resize-none rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
              ></textarea>
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Text
              </label>
            </div>
            <p style={{ color: "red" }}>{error}</p>
          </div>
        </DialogBody>
        <DialogFooter placeholder={undefined}>
          <Button
            variant="text"
            color="red"
            onClick={closeDialog}
            className="mr-1"
            placeholder={undefined}
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={handleSave}
            placeholder={undefined}
          >
            <span>Save</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
