"use client";
import { ContactService } from "@/services/api/contact";
import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import { useState } from "react";
import DialogAlert from "../dialog";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // some validation for inputs
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
    <div className="container mx-auto mt-16 p-6 bg-white rounded-md shadow-md text-left">
      <DialogAlert
        open={open}
        setOpen={setOpen}
        message="Your message has been sent successfully!"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left side - Contact Form */}
        <div>
          <div className="text-center">
            <Typography
              placeholder={undefined}
              variant="h1"
              color="blue-gray"
              className="mb-4"
            >
              Keep in touch with us!
            </Typography>
            <Typography
              placeholder={undefined}
              variant="lead"
              className="mx-auto mb-8 lg:w-2/3 !text-gray-500"
            >
              Have questions or want to get in touch? Fill out the form below,
              and we wll get back to you as soon as possible.
            </Typography>
          </div>

          <form onSubmit={handleSubmit} className="mx-auto lg:max-w-screen-md">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <Input
                  placeholder="Your Name"
                  crossOrigin={undefined}
                  onChange={(e: any) => setName(e.target.value)}
                  value={name}
                />
              </div>
              <div>
                <Input
                  placeholder="Your Email"
                  type="email"
                  required
                  crossOrigin={undefined}
                  value={email}
                  onChange={(e: any) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-4">
              <Textarea
                placeholder="Your Message"
                required
                value={text}
                onChange={(e: any) => setText(e.target.value)}
              />
            </div>
            <div className="mt-6">
              <Button placeholder={undefined} type="submit" color="blue">
                Send Message
              </Button>
            </div>
          </form>
        </div>

        {/* Right side - Contact Details */}
        <div className="text-center">
          <Typography
            placeholder={undefined}
            variant="h2"
            color="blue-gray"
            className="mb-4"
          >
            Contact Details
          </Typography>
          <Typography
            placeholder={undefined}
            variant="paragraph"
            color="blue-gray"
            className="mx-auto lg:w-2/3 !text-gray-500"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            finibus libero sit amet est consectetur, vel fermentum lorem
            fermentum. Nullam a mauris et sapien fringilla semper.
          </Typography>
        </div>
      </div>
    </div>
  );
}
