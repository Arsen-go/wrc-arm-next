"use client";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import AdminAboutContents from "./adminAboutContents";
import { LanguagesEnum } from "@/enums/languages.enum";

const data = [
  {
    label: "am",
    value: "am",
  },
  {
    label: "en",
    value: "en",
  },
  {
    label: "ru",
    value: "ru",
  },
];

export default function AdminAboutPage() {
  return (
    <div className="container mx-auto mt-16 p-6 bg-white rounded-md shadow-md text-left">
      <Tabs value={data[0].value}>
        <TabsHeader placeholder={undefined}>
          {data.map(({ label, value }) => (
            <Tab placeholder={undefined} key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody placeholder={undefined}>
          {data.map(({ value }) => {
            return (
              <TabPanel key={value} value={value}>
                {value === "am" ? (
                  <AdminAboutContents language={LanguagesEnum.AM} />
                ) : value === "en" ? (
                  <AdminAboutContents language={LanguagesEnum.EN} />
                ) : value === "ru" ? (
                  <AdminAboutContents language={LanguagesEnum.RU} />
                ) : (
                  ""
                )}
              </TabPanel>
            );
          })}
        </TabsBody>
      </Tabs>
    </div>
  );
}
