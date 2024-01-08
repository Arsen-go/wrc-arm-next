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
  Textarea,
} from "@material-tailwind/react";
import { DonateService } from "@/services/api/donate";
import { useEffect, useState } from "react";
import {
  ChevronUpDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

const TABS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Monitored",
    value: "monitored",
  },
  {
    label: "Unmonitored",
    value: "unmonitored",
  },
];

const TABLE_HEAD = [
  "Email",
  "Date/Amount(selected/custom)",
  "Payment method",
  "Message",
  "Address",
  "",
];

const ITEMS_PER_PAGE = 5;

export default function DonationTab() {
  const [donations, setDonations] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await DonateService.getDonations({});
        setDonations(response.data);
      } catch (error) {
        console.error("Error fetching donations:", error);
      }
    };

    fetchDonations();
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

  const indexOfLastDonation = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstDonation = indexOfLastDonation - ITEMS_PER_PAGE;
  const currentDonations = donations.slice(
    indexOfFirstDonation,
    indexOfLastDonation
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <Card className="h-full w-full" placeholder={undefined}>
      <CardHeader className="rounded-none" placeholder={undefined}>
        <div className="mb-8 flex items-center justify-between gap-8">
          {/* <div>
            <Typography variant="h5" color="blue-gray" placeholder={undefined}>
              Members list
            </Typography>
            <Typography
              color="gray"
              className="mt-1 font-normal"
              placeholder={undefined}
            >
              See information about all members
            </Typography>
          </div> */}
          {/* <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Button variant="outlined" size="sm" placeholder={undefined}>
              view all
            </Button>
            <Button
              className="flex items-center gap-3"
              size="sm"
              placeholder={undefined}
            >
              <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add member
            </Button>
          </div> */}
        </div>
        {/* <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Tabs value="all" className="w-full md:w-max">
            <TabsHeader placeholder={undefined}>
              {TABS.map(({ label, value }) => (
                <Tab key={value} value={value} placeholder={undefined}>
                  &nbsp;&nbsp;{label}&nbsp;&nbsp;
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
          <div className="w-full md:w-72">
            <Input
              label="Search"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              crossOrigin={undefined}
            />
          </div>
        </div> */}
      </CardHeader>
      <CardBody className="overflow-scroll px-0" placeholder={undefined}>
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={head}
                  className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                    placeholder={undefined}
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
            {currentDonations.map((donation: any) => (
              <tr key={donation.id}>
                <td className="p-4 border-b border-blue-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="flex flex-col">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                        placeholder={undefined}
                      >
                        {donation.firstName + " " + donation.lastName}
                      </Typography>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal opacity-70"
                        placeholder={undefined}
                      >
                        {donation.email}
                      </Typography>
                    </div>
                  </div>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <div className="flex flex-col">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                      placeholder={undefined}
                    >
                      {donation.createdAt}
                    </Typography>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal opacity-70"
                      placeholder={undefined}
                    >
                      {donation.donationAmount + "/" + donation.customAmount}
                    </Typography>
                  </div>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <div className="w-max">
                    <Chip
                      variant="ghost"
                      size="sm"
                      value={donation.paymentMethod ? "online" : "offline"}
                      color={donation.paymentMethod ? "green" : "blue-gray"}
                    />
                  </div>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <Textarea disabled value={donation.message} />
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <div className="flex flex-col">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                      placeholder={undefined}
                    >
                      {donation.address +
                        "--" +
                        donation.zipCode +
                        "--" +
                        donation.recurrence}
                    </Typography>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal opacity-70"
                      placeholder={undefined}
                    >
                      {donation.anonymous ? "Anonymous" : ""}
                    </Typography>
                  </div>
                </td>
                {/* <td className="p-4 border-b border-blue-gray-50">
                  <Tooltip content="Edit User">
                    <IconButton variant="text" placeholder={undefined}>
                      <PencilIcon className="h-4 w-4" />
                    </IconButton>
                  </Tooltip>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </CardBody>
      <CardFooter
        className="flex items-center justify-between border-t border-blue-gray-50 p-4"
        placeholder={undefined}
      >
        <Typography
          variant="small"
          color="blue-gray"
          className="font-normal"
          placeholder={undefined}
        >
          Page {currentPage} of {Math.ceil(donations.length / ITEMS_PER_PAGE)}
        </Typography>
        <div className="flex gap-2">
          <Button
            variant="outlined"
            size="sm"
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            placeholder={undefined}
          >
            Previous
          </Button>
          {Array.from({
            length: Math.ceil(donations.length / ITEMS_PER_PAGE),
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
          <Button
            variant="outlined"
            size="sm"
            onClick={() => paginate(currentPage + 1)}
            disabled={
              currentPage === Math.ceil(donations.length / ITEMS_PER_PAGE)
            }
            placeholder={undefined}
          >
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
