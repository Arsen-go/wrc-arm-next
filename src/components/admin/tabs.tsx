"use client";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import NewsTab from "./newsTab";
import ContactsTab from "./contactsTab";
import DonationTab from "./donateTab";

const data = [
  {
    label: "News",
    value: "news",
    desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
  },
  {
    label: "Contacts",
    value: "contact",
    desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
  },
  {
    label: "Donations",
    value: "donate",
    desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
  },
  //   {
  //     label: "Angular",
  //     value: "angular",
  //     desc: `Because it's about motivating the doers. Because I'm here
  //       to follow my dreams and inspire other people to follow their dreams, too.`,
  //   },
  //   {
  //     label: "Svelte",
  //     value: "svelte",
  //     desc: `We're not always in the position that we want to be at.
  //       We're constantly growing. We're constantly making mistakes. We're
  //       constantly trying to express ourselves and actualize our dreams.`,
  //   },
];

export default function AdminTab() {
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
          {data.map(({ value, desc }) => {
            return (
              <TabPanel key={value} value={value}>
                {value === "news" ? (
                  <NewsTab />
                ) : value === "contact" ? (
                  <ContactsTab />
                ) : value === "donate" ? (
                  <DonationTab />
                ) : (
                  desc
                )}
              </TabPanel>
            );
          })}
        </TabsBody>
      </Tabs>
    </div>
  );
}
