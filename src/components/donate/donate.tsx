// DonatePage.js
"use client";
import React, { useState } from "react";
import {
  Button,
  Input,
  Option,
  Select,
  Textarea,
  Typography,
} from "@material-tailwind/react";

const content = {
  pageSubtitle:
    "Your support makes a difference! Choose your donation amount, payment method, and provide your details below.",
  donationAmountLabel: "Donation Amount *",
  selectAmountPlaceholder: "Select amount",
  enterAmountLabel: "or enter your own donation amount",
  paymentMethodLabel: "Payment Method *",
  selectPaymentMethodPlaceholder: "Select payment method",
  recurrenceLabel: "Recurrence *",
  selectRecurrencePlaceholder: "Select recurrence",
  messageLabel: "Message",
  messagePlaceholder: "Your custom message text...",
  anonymousLabel: "Anonymous donation?",
  donatorDetailsLabel: "Donator details",
  firstNameLabel: "First name *",
  lastNameLabel: "Last name *",
  emailLabel: "Email *",
  addressLabel: "Address",
  postalCodeLabel: "Postal / Zip code",
  submitButton: "Donate Now",
};

function DonatePage() {
  const [donationAmount, setDonationAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [recurrence, setRecurrence] = useState("");
  const [message, setMessage] = useState("");
  const [anonymous, setAnonymous] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState("");

  // State variables for errors
  const [amountError, setAmountError] = useState("");
  const [paymentMethodError, setPaymentMethodError] = useState("");
  // Add more error states as needed

  // Validation function
  const validateForm = () => {
    let isValid = true;

    // Validate donation amount
    if (!donationAmount && !customAmount) {
      setAmountError("Please enter a donation amount");
      isValid = false;
    } else {
      setAmountError("");
    }

    // Validate payment method
    if (!paymentMethod) {
      setPaymentMethodError("Please select a payment method");
      isValid = false;
    } else {
      setPaymentMethodError("");
    }

    // Add more validations as needed

    return isValid;
  };

  // Submit handler
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (validateForm()) {
      // Add your donation submission logic here
      const formData = {
        donationAmount,
        customAmount,
        paymentMethod,
        recurrence,
        message,
        anonymous,
        firstName,
        lastName,
        email,
        address,
        zipCode,
      };
      console.log("Donation data:", formData);

      try {
        const response = await fetch("/api/donate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          console.log("Donation submitted successfully!");
        } else {
          console.error("Error submitting donation:", response.statusText);
        }
      } catch (error) {
        console.error("Error submitting donation:", error);
      }
    }
  };

  return (
    <div className="container mx-auto mt-16 p-6 bg-white rounded-md shadow-md text-left">
      <div className="text-center">
        <Typography
          placeholder={undefined}
          variant="lead"
          className="mx-auto mb-8 lg:w-2/3 !text-gray-500"
        >
          {content.pageSubtitle}
        </Typography>
      </div>

      <form onSubmit={handleSubmit} className="mx-auto lg:max-w-screen-md">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <Typography
              placeholder={undefined}
              variant="paragraph"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              {content.donationAmountLabel}
            </Typography>
            <Select label="Select Version" placeholder={undefined}>
              <Option>5</Option>
              <Option>10</Option>
              <Option>20</Option>
              <Option>50</Option>
              <Option>100</Option>
            </Select>
          </div>
          <div>
            <Typography
              placeholder={undefined}
              variant="paragraph"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              {content.enterAmountLabel}
            </Typography>
            <Input
              type="number"
              placeholder="Enter amount"
              crossOrigin={undefined}
            />
          </div>
        </div>

        <div className="mt-4">
          <Typography
            placeholder={undefined}
            variant="paragraph"
            color="blue-gray"
            className="mb-2 font-medium"
          >
            {content.paymentMethodLabel}
          </Typography>
          <Select
            placeholder={content.selectPaymentMethodPlaceholder}
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
          >
            <Option value="online">Online payment</Option>
            <Option value="offline">Offline payment</Option>
          </Select>
        </div>

        <div className="mt-4">
          <Typography
            placeholder={undefined}
            variant="paragraph"
            color="blue-gray"
            className="mb-2 font-medium"
          >
            {content.recurrenceLabel}
          </Typography>
          <Select
            placeholder={content.selectRecurrencePlaceholder}
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
          >
            <Option value="one-time">One-time</Option>
            <Option value="offline">Offline payment</Option>
            <Option value="offline">Offline payment</Option>
          </Select>
        </div>

        <div className="mt-4">
          <Typography
            placeholder={undefined}
            variant="paragraph"
            color="blue-gray"
            className="mb-2 font-medium"
          >
            {content.messageLabel}
          </Typography>
          <Textarea placeholder={content.messagePlaceholder} />
        </div>

        <div className="mt-4">
          <Input
            type="checkbox"
            label={content.anonymousLabel}
            crossOrigin={undefined}
          />
        </div>

        <div className="mt-4">
          <Typography
            placeholder={undefined}
            variant="paragraph"
            color="blue-gray"
            className="mb-2 font-medium"
          >
            {content.donatorDetailsLabel}
          </Typography>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <Typography
                placeholder={undefined}
                variant="paragraph"
                color="blue-gray"
                className="mb-2 font-medium"
              >
                {content.firstNameLabel}
              </Typography>
              <Input placeholder="First name" crossOrigin={undefined} />
            </div>
            <div>
              <Typography
                placeholder={undefined}
                variant="paragraph"
                color="blue-gray"
                className="mb-2 font-medium"
              >
                {content.lastNameLabel}
              </Typography>
              <Input placeholder="Last name" crossOrigin={undefined} />
            </div>
          </div>

          <div className="mt-4">
            <Typography
              placeholder={undefined}
              variant="paragraph"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              {content.emailLabel}
            </Typography>
            <Input
              type="email"
              placeholder="email@website.com"
              crossOrigin={undefined}
            />
          </div>

          <div className="mt-4">
            <Typography
              placeholder={undefined}
              variant="paragraph"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              {content.addressLabel}
            </Typography>
            <Input placeholder="Street address" crossOrigin={undefined} />
          </div>

          <div className="mt-4">
            <Typography
              placeholder={undefined}
              variant="paragraph"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              {content.postalCodeLabel}
            </Typography>
            <Input placeholder="Postal / Zip code" crossOrigin={undefined} />
          </div>
        </div>

        <div className="mt-6">
          <Button placeholder={undefined} type="submit" color="blue">
            {content.submitButton}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default DonatePage;
