import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { NewsService } from "@/services/api/news";

type Props = {
  news: any;
  setNews: any;
  isEditDialogOpen: boolean;
  setIsEditDialogOpen: any;
};

export default function NewsEditDialog({
  news,
  setNews,
  setIsEditDialogOpen,
  isEditDialogOpen,
}: Props) {
  const [title, setNewsTitle] = useState<string>();
  const [text, setNewsText] = useState<string>();
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await NewsService.getOneNews(id);

        setNews(response.data);
      } catch (error) {
        console.error("Error fetching donations:", error);
      }
    };

    fetchNews();
  }, []);

  const closeEditDialog = () => {
    setIsEditDialogOpen(false);
    setError("");
  };

  const handleSave = async () => {
    const response: any = await NewsService.editNews({
      title: title ?? news.title,
      text: text ?? news.text,
      id: news.id,
    });

    if (!response.ok) {
      setError("Something went wrong.");
      return;
    }

    const newsResponse: any = await NewsService.getNews();

    setNews(newsResponse.data);

    closeEditDialog();
  };

  return (
    <>
      <Dialog
        open={isEditDialogOpen}
        handler={closeEditDialog}
        placeholder={undefined}
      >
        <DialogHeader placeholder={undefined}>Edit News</DialogHeader>
        <DialogBody placeholder={undefined}>
          <div className="flex flex-col items-end gap-6 w-100">
            <div className="relative w-full min-w-[200px]">
              <textarea
                onChange={(e) => setNewsTitle(e.target.value)}
                className="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
                value={title ?? news.title}
              ></textarea>
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Title
              </label>
            </div>
            <div className="relative w-full min-w-[200px]">
              <textarea
                onChange={(e) => setNewsText(e.target.value)}
                className="peer h-full min-h-[150px] w-full resize-vertical rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-vertical disabled:border-0 disabled:bg-blue-gray-50"
                // Other props...
                autoCorrect="true"
                placeholder=" "
                value={text ?? news.text}
              ></textarea>
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Text
              </label>
            </div>
            <p style={{ color: "red" }}>{error}</p>
          </div>
          <p style={{ color: "red" }}>{error}</p>
        </DialogBody>
        <DialogFooter placeholder={undefined}>
          <Button
            variant="text"
            color="red"
            onClick={closeEditDialog}
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
