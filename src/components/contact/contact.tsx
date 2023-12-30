import { Button, Input, Textarea, Typography } from "@material-tailwind/react";

export function ContactUs() {
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Add your contact form submission logic here
  };

  return (
    <div className="container mx-auto mt-16 p-6 bg-white rounded-md shadow-md text-left">
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
                <Input placeholder="Your Name" crossOrigin={undefined} />
              </div>
              <div>
                <Input
                  placeholder="Your Email"
                  type="email"
                  crossOrigin={undefined}
                />
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

export default ContactUs;
