import DonateInterface from "@/interface/donate.interface";
import axios from "axios";

class DonateService {
  async sendEmail({ emailData }: { emailData: any }) {
    let config = {
      method: "post",
      url: process.env.BREVO_EMAIL_URL + "/smtp/email",
      headers: {
        "api-key": process.env.BREVO_EMAIL_SECRET_KEY,
        "Content-Type": "application/json",
      },
      data: emailData,
    };

    axios
      .request(config)
      .then((response: any) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error: any) => {
        console.log(error);
      });
  }

  getRequestorMailContent({ donateInput }: { donateInput: DonateInterface }) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Donation Confirmation</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
    }

    .container {
      max-width: 600px;
      margin: 20px auto;
      padding: 20px;
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    h1 {
      color: #333;
    }

    p {
      color: #555;
    }

    .details {
      margin-top: 20px;
      padding: 15px;
      background-color: #f0f0f0;
      border-radius: 4px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Donation Confirmation</h1>
    <p>Dear ${donateInput.firstName} ${donateInput.lastName},</p>
    <p>Thank you for your generous donation. We appreciate your support!</p>

    <div class="details">
      <p><strong>Donation Details:</strong></p>
      <p><strong>Donation Amount:</strong> ${
        donateInput.donationAmount || donateInput.customAmount
      }</p>
      <p><strong>Payment Method:</strong> ${donateInput.paymentMethod}</p>
      <p><strong>Recurrence:</strong> ${donateInput.recurrence}</p>
      <p><strong>Message:</strong> ${donateInput.message}</p>
      <p><strong>Anonymous Donation:</strong> ${
        donateInput.anonymous ? "Yes" : "No"
      }</p>

      <p><strong>Donator Details:</strong></p>
      <p><strong>Name:</strong> ${donateInput.firstName} ${
        donateInput.lastName
      }</p>
      <p><strong>Email:</strong> ${donateInput.email}</p>
      <p><strong>Address:</strong> ${donateInput.address}</p>
      <p><strong>Zip Code:</strong> ${donateInput.zipCode}</p>
    </div>

    <p>Thank you again for your contribution. If you have any questions, feel free to contact us.</p>
    <p>Best regards,</p>
    <p>WRC</p>
  </div>
</body>
</html>
`;
  }

  getReceiverMailContent({ donateInput }: { donateInput: DonateInterface }) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Donation Confirmation</title>
    <style>
        body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f4f4f4;
        }

        .container {
        max-width: 600px;
        margin: 20px auto;
        padding: 20px;
        background-color: #ffffff;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        h1 {
        color: #333;
        }

        p {
        color: #555;
        }

        .details {
        margin-top: 20px;
        padding: 15px;
        background-color: #f0f0f0;
        border-radius: 4px;
        }
    </style>
    </head>
    <body>
    <div class="container">
        <p>Dear WRC Armenia,</p>
        <p>You have received a new donation request. Here are the details:</p>
        <ul>
            <li><strong>Name:</strong> ${donateInput.firstName} ${
              donateInput.lastName
            }</li>
            <li><strong>Email:</strong> ${donateInput.email}</li>
            <li><strong>Donation Amount:</strong> ${
              donateInput.donationAmount
            }</li>
            <li><strong>Payment Method:</strong> ${
              donateInput.paymentMethod
            }</li>
            <li><strong>Recurrence:</strong> ${donateInput.recurrence}</li>
            <li><strong>Message:</strong> ${donateInput.message}</li>
            <li><strong>Anonymous Donation:</strong> ${
              donateInput.anonymous ? "Yes" : "No"
            }</li>
            <li><strong>Custom Amount:</strong> ${
              donateInput.customAmount || "N/A"
            }</li>
            <li><strong>Address:</strong> ${donateInput.address || "N/A"}</li>
            <li><strong>Postal / Zip Code:</strong> ${
              donateInput.zipCode || "N/A"
            }</li>
        </ul>

        <p>Please take appropriate action and respond to the donor accordingly.</p>

        <p>Thank you!</p>

        </div>
    </body>
    </html>
`;
  }
}

export const donateService = new DonateService();
