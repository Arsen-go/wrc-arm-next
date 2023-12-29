'use client'
import { Button, Input, Textarea, Typography } from "@material-tailwind/react";

export function ContactUs() {
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Add your contact form submission logic here
  };

  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto">
        <div className="text-center">
          <Typography placeholder={undefined} variant="h1" color="blue-gray" className="mb-4">
            Contact Us
          </Typography>
          <Typography placeholder={undefined}
            variant="lead"
            className="mx-auto mb-8 lg:w-2/3 !text-gray-500"
          >
            Have questions or want to get in touch? Fill out the form below, and we&apos;ll get back to you as soon as possible.
          </Typography>
        </div>

        <form onSubmit={handleSubmit} className="mx-auto lg:max-w-screen-md">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <Input placeholder="Your Name" crossOrigin={undefined} />
            </div>
            <div>
              <Input  placeholder="Your Email" type="email" crossOrigin={undefined} />
            </div>
          </div>
          <div className="mt-4">
            <Textarea placeholder="Your Message" />
          </div>
          <div className="mt-6">
            <Button placeholder={undefined} type="submit" color="blue">
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactUs;
