export default interface DonateInterface {
  address: string;
  anonymous: boolean;
  customAmount: number | undefined;
  donationAmount: number | undefined;
  email: string;
  firstName: string;
  lastName: string;
  message: string;
  paymentMethod: string;
  recurrence: string;
  zipCode: string;
}
