"use client";
import DialogAlert from "@/components/dialog";
import { LanguagesEnum } from "@/enums/languages.enum";
import { AdminService } from "@/services/api/admin";
import { AboutPageContentType } from "@/types/aboutPageContent.type";
import {
  CardBody,
  Card,
  Checkbox,
  Textarea,
  Button,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";

const contentTitles = {
  aboutInformation: "About Information",
  ourVision: "Our Vision",
  ourMission: "Our Mission",
  ourPurpose: "Our Purpose",
  areasOfFocus: "Areas of Focus",
};

const defaultContent = [
  {
    title: "About Information",
    value: "",
    hidden: false,
    key: "aboutInformation",
  },
  {
    title: "Our Vision",
    value: "",
    hidden: false,
    key: "ourVision",
  },
  {
    title: "Our Mission",
    value: "",
    hidden: false,
    key: "ourMission",
  },
  {
    title: "Our Purpose",
    value: "",
    hidden: false,
    key: "ourPurpose",
  },
  {
    title: "Areas of Focus",
    value: "",
    hidden: false,
    key: "areasOfFocus",
  },
];

export default function AdminAboutContents({
  language,
}: {
  language: LanguagesEnum;
}) {
  const [formData, setFormData] = useState<AboutPageContentType>({
    aboutInformation: "",
    ourVision: "",
    ourMission: "",
    ourPurpose: "",
    areasOfFocus: "",
  });
  const [hideFields, setHideFields] = useState<any>({});
  const [contents, setContents] = useState<any[]>([]);
  const [dialog, setDialogOpen] = useState<boolean>(false);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response: any = await AdminService.getAboutPageContent({
          language,
        });

        if (response.ok) {
          setContents(response.data);
        }
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };

    fetchContacts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = ({ value, key }: { value: any; key: string }) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleHideToggle = (key: any, hidden: boolean) => {
    setHideFields({
      ...hideFields,
      [key]: !hidden,
    });
  };

  const handleSubmit = async () => {
    const response: any = await AdminService.savePageContent(
      formData,
      hideFields,
      language
    );

    if (response.ok) {
      setDialogOpen(true);
    }
  };

  return (
    <Card placeholder={undefined}>
      <DialogAlert open={dialog} setOpen={setDialogOpen} message="Saved!" />

      <CardBody placeholder={undefined}>
        <form className="flex flex-col items-end">
          {(contents?.length ? contents : defaultContent).map(
            ({ value, key, hidden }: any) => {
              const specificFormData =
                formData[key as keyof AboutPageContentType];
              const title = contentTitles[key as keyof AboutPageContentType];

              return (
                <div key={title} className="mb-4 w-full flex items-center">
                  <div className="mb-4 w-full flex items-center">
                    <Textarea
                      value={specificFormData.length ? specificFormData : value}
                      label={title}
                      onChange={(e) =>
                        handleChange({ value: e.target.value, key })
                      }
                      disabled={hideFields[title]}
                      className="mt-1 w-full"
                    />
                    <Checkbox
                      checked={hideFields[key] ?? hidden}
                      onChange={() => handleHideToggle(key, hidden)}
                      label={`Hide`}
                      color="indigo"
                      className="ml-8"
                      crossOrigin={undefined}
                    />
                  </div>
                </div>
              );
            }
          )}
          <Button color="blue" onClick={handleSubmit} placeholder={undefined}>
            Save
          </Button>
        </form>
      </CardBody>
    </Card>
  );
}
