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

export default function AdminAMAbout() {
  const [formData, setFormData] = useState({
    key1: "value1",
    key2: "value2",
    key3: "value3",
    // Add more key-value pairs as needed
  });

  const [hideFields, setHideFields] = useState<any>({});

  const handleChange = (key: any, value: any) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleHideToggle = (key: any) => {
    setHideFields({
      ...hideFields,
      [key]: !hideFields[key],
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
          {Object.entries(formData).map(([key, value]) => (
            <div key={key} className="mb-4 w-full flex items-center">
              <Textarea
                value={value}
                onChange={(e) => handleChange(key, e.target.value)}
                placeholder={`Enter ${key}`}
                disabled={hideFields[key]}
                className="mt-1 w-full"
              />
              <Checkbox
                checked={hideFields[key]}
                onChange={() => handleHideToggle(key)}
                label={`Hide ${key}`}
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
