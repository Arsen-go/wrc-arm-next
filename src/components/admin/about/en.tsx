"use client";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  CardBody,
  Card,
  Checkbox,
  Textarea,
  Button,
} from "@material-tailwind/react";
import { useState } from "react";

const contents = [
  {
    title: "About Information",
    value: "",
    key: "aboutInformation",
  },
  {
    title: "Our Vision",
    value: "",
    key: "ourVision",
  },
  {
    title: "Our Mission",
    value: "",
    key: "ourMission",
  },
  {
    title: "Our Purpose",
    value: "",
    key: "ourPurpose",
  },
  {
    title: "Areas of Focus",
    value: "",
    key: "areasOfFocus",
  },
];

export default function AdminENAbout() {
  const [formData, setFormData] = useState({
    key1: "about information",
    key2: "value2",
    key3: "value3",
    // Add more title-value pairs as needed
  });

  const [hideFields, setHideFields] = useState<any>({});

  const handleChange = (title: any, value: any) => {
    setFormData({
      ...formData,
      [title]: value,
    });
  };

  const handleHideToggle = (title: any) => {
    setHideFields({
      ...hideFields,
      [title]: !hideFields[title],
    });
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <Card placeholder={undefined}>
      <CardBody placeholder={undefined}>
        <form className="flex flex-col items-end">
          {contents.map(({ title, value, key }) => (
            <div key={title} className="mb-4 w-full flex items-center">
              <Textarea
                value={value}
                label={title}
                onChange={(e) => handleChange(title, e.target.value)}
                disabled={hideFields[title]}
                className="mt-1 w-full"
              />
              <Checkbox
                checked={hideFields[title]}
                onChange={() => handleHideToggle(title)}
                label={`Hide`}
                color="indigo"
                className="ml-4"
                crossOrigin={undefined}
              />
            </div>
          ))}
          <Button color="blue" onClick={handleSubmit} placeholder={undefined}>
            Submit
          </Button>
        </form>
      </CardBody>
    </Card>
  );
}
