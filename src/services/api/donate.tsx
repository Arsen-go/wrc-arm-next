import DonateInterface from "@/interface/donate.interface";
import $apiClient from "../axios";

export class DonateService {
  static sendDonate({
    donate: {
      address,
      anonymous,
      customAmount,
      donationAmount,
      email,
      firstName,
      lastName,
      message,
      paymentMethod,
      recurrence,
      zipCode,
    },
  }: {
    donate: DonateInterface;
  }) {
    return $apiClient.post("/donate", {
      donateInput: {
        address,
        anonymous,
        customAmount,
        donationAmount,
        email,
        firstName,
        lastName,
        message,
        paymentMethod,
        recurrence,
        zipCode,
      },
    });
  }
}
