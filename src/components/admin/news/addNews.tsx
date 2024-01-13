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
import PrivatePage from "./upload";
import Image from "next/image";

type Props = {
  setNews: any;
  isDialogOpen: boolean;
  setIsDialogOpen: any;
};

export default function NewsAddTab({
  setNews,
  isDialogOpen,
  setIsDialogOpen,
}: Props) {
  const [title, setNewsTitle] = useState("");
  const [text, setNewsText] = useState("");
  const [error, setError] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const closeDialog = () => {
    setIsDialogOpen(false);
    setError("");
    setImage(null);
    setCreateObjectURL(null);
  };

  const handleSave = async () => {
    if (!title || !text) {
      setError("Title or text is empty");
      return;
    }

    let imageResult: any;
    if (image) {
      imageResult = await uploadToServer();
    }

    const response: any = await NewsService.createNews({
      title,
      text,
      fileId: imageResult?.file?.data.id,
      language: selectedLanguage,
    });

    if (!response.ok) {
      setError("Something went wrong.");
      return;
    }

    const newsResponse: any = await NewsService.getNews();

    setNews(newsResponse.data);

    closeDialog();
  };

  const [image, setImage] = useState<any>(null);
  const [createObjectURL, setCreateObjectURL] = useState<any>(null);

  const uploadToClient = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  const uploadToServer = async () => {
    const body = new FormData();
    body.append("file", image);

    const response = await fetch("/api/file", {
      method: "POST",
      body,
    });

    setImage(null);
    setCreateObjectURL(null);

    return response.json();
  };

  return (
    <>
      <Dialog
        open={isDialogOpen}
        handler={closeDialog}
        placeholder={undefined}
        size="xl"
      >
        <DialogHeader placeholder={undefined}>Add News</DialogHeader>
        <DialogBody placeholder={undefined}>
          <div className="flex flex-col items-end gap-6 w-100">
            <div className="relative w-full min-w-[200px]">
              <Textarea
                onChange={(e) => setNewsTitle(e.target.value)}
                className="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
                label="Title"
              />
            </div>
            <div className="relative w-full min-w-[200px]">
              <Textarea
                onChange={(e) => setNewsText(e.target.value)}
                className="peer h-full min-h-[150px] w-full resize-none rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
                label="Text"
              />
            </div>

            <div>
              <label>
                Select Language:
                <select
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                >
                  <option value="en">English</option>
                  <option value="am">Հայերեն</option>
                </select>
              </label>
            </div>

            <div>
              <div>
                <Image
                  src={createObjectURL ?? "/"}
                  width={100}
                  height={100}
                  alt="#"
                />
                <h4>Select Image</h4>
                <input type="file" name="myImage" onChange={uploadToClient} />
              </div>
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
