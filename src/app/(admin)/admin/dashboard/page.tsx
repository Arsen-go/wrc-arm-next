'use client'
import React from 'react';
import {
  MagnifyingGlassIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import AdminNavbar from '@/components/admin/navbar';

const TABS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Politics",
    value: "politics",
  },
  {
    label: "Technology",
    value: "technology",
  },
  // Add more categories as needed
];

const TABLE_HEAD = ["Title", "Category", "Date", "Author", ""];

const TABLE_ROWS = [
  {
    title: "Breaking News: Major Political Event",
    category: "Politics",
    date: "2023-01-15",
    author: "John Doe",
  },
  {
    title: "Advancements in Artificial Intelligence",
    category: "Technology",
    date: "2023-02-20",
    author: "Jane Smith",
  },
  // Add more news articles as needed
];

export default function Dashboard() {
  return (
    <>
    <AdminNavbar/>
    <section className="grid min-h-screen place-items-center p-8">    
    <Card placeholder={undefined} className="h-full w-full">
      {/* ... (rest of the code remains the same) */}
      <CardHeader placeholder={undefined} floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography placeholder={undefined} variant="h5" color="blue-gray">
              News
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Button placeholder={undefined} variant="outlined" size="sm">
              View All
            </Button>
            <Button placeholder={undefined} className="flex items-center gap-3" size="sm">
              <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add Article
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
                  <Typography placeholder={undefined}
                    variant="small"
                    color="blue-gray"
                    className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                  >
                    {head}{" "}
                    {index !== TABLE_HEAD.length - 1 && (
                      <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                    )}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(({ title, category, date, author }, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={title}>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <div className="flex flex-col">
                        <Typography placeholder={undefined} variant="small" color="blue-gray" className="font-normal">
                          {title}
                        </Typography>
                        <Typography placeholder={undefined} variant="small" color="blue-gray" className="font-normal opacity-70">
                          {author}
                        </Typography>
                      </div>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="w-max">
                      <Chip
                        variant="ghost"
                        size="sm"
                        value={category}
                        color="blue-gray"
                      />
                    </div>
                  </td>
                  <td className={classes}>
                    <Typography placeholder={undefined} variant="small" color="blue-gray" className="font-normal">
                      {date}
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
      {/* ... (rest of the code remains the same) */}
    </Card>
    </section></>
    

  );
}
