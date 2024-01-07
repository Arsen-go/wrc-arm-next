import { PencilIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  IconButton,
  Tooltip,
  Textarea,
} from "@material-tailwind/react";
import { ContactService } from "@/services/api/contact";
import { SetStateAction, useEffect, useState } from "react";

const TABLE_HEAD = ["Name", "Email", "Date", "Text", ""];
const ITEMS_PER_PAGE = 5; // Number of items to display per page

export default function ContactsTab() {
  const [contacts, setContacts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await ContactService.getContactMessages({});
        setContacts(response.data);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };

    fetchContacts();
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

  const indexOfLastContact = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstContact = indexOfLastContact - ITEMS_PER_PAGE;
  const currentContacts = contacts.slice(
    indexOfFirstContact,
    indexOfLastContact
  );

  const paginate = (pageNumber: SetStateAction<number>) =>
    setCurrentPage(pageNumber);

  return (
    <Card className="h-full w-full" placeholder={undefined}>
      <CardHeader className="rounded-none" placeholder={undefined}>
        <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center"></div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0" placeholder={undefined}>
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                    placeholder={undefined}
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentContacts.map(({ name, email, createdAt, text }, index) => {
              const isLast = index === contacts.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={index}>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-bold"
                        placeholder={undefined}
                      >
                        {name}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                      placeholder={undefined}
                    >
                      {email}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                      placeholder={undefined}
                    >
                      {createdAt}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <div className="w-max">
                      <Textarea disabled value={text} />
                    </div>
                  </td>
                  <td className={classes}>
                    <Tooltip content="Edit User">
                      <IconButton variant="text" placeholder={undefined}>
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
            length: Math.ceil(contacts.length / ITEMS_PER_PAGE),
          }).map((_, index) => (
            <Button
              key={index + 1}
              variant="text"
              size="sm"
              onClick={() => paginate(index + 1)}
              className={currentPage === index + 1 ? "bg-blue-gray-100" : ""}
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
          disabled={currentPage === Math.ceil(contacts.length / ITEMS_PER_PAGE)}
          placeholder={undefined}
        >
          Next
        </Button>
      </CardFooter>
    </Card>
  );
}
