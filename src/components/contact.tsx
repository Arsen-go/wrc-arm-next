"use client";
import { Button, Input, Textarea, Typography } from "@material-tailwind/react";

export function ContactUs({ locales }: any) {
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Add your contact form submission logic here
  };

  return (
    <section className="py-8 px-8 lg:py-20">
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
              <Input placeholder={locales.yourName} crossOrigin={undefined} />
            </div>
            <div>
              <Input
                placeholder={locales.yourEmail}
                type="email"
                crossOrigin={undefined}
              />
            </div>
          </div>
          <div className="mt-4">
            <Textarea placeholder={locales.yourMessage} />
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

export default ContactUs;
