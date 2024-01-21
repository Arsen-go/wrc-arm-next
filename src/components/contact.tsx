"use client";
import { ContactService } from "@/services/api/contact";
import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import { useState } from "react";
import DialogAlert from "./dialog";

export default function ContactUs({ locales }: any) {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const data: any = await ContactService.sendContactMessage({
      name,
      email,
      text,
    });

    if (data.ok) {
      setOpen(true);
      setName("");
      setEmail("");
      setText("");
    }
  };

  return (
    <section className="py-8 px-8 lg:py-20">
      <DialogAlert
        open={open}
        setOpen={setOpen}
        message="Your message has been sent successfully!"
      />

      <div className="container mx-auto">
        <div className="text-center">
          <Typography
            placeholder={undefined}
            variant="h1"
            color="blue-gray"
            className="mb-4"
          >
            {locales.contactUsMainPage}
          </Typography>
          <Typography
            placeholder={undefined}
            variant="lead"
            className="mx-auto mb-8 lg:w-2/3 !text-gray-500"
          >
            {locales["contact.description"]}
          </Typography>
        </div>

        <form onSubmit={handleSubmit} className="mx-auto lg:max-w-screen-md">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <Input
                placeholder={locales.yourName}
                onChange={(e: any) => setName(e.target.value)}
                crossOrigin={undefined}
                value={name}
              />
            </div>
            <div>
              <Input
                placeholder={locales.yourEmail}
                onChange={(e: any) => setEmail(e.target.value)}
                type="email"
                crossOrigin={undefined}
                value={email}
              />
            </div>
          </div>
          <div className="mt-4">
            <Textarea
              placeholder={locales.yourMessage}
              onChange={(e: any) => setText(e.target.value)}
              value={text}
            />
          </div>
          <div className="mt-6">
            <Button placeholder={undefined} type="submit" color="blue">
              {locales.contactButton}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
