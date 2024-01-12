import { Typography, Card } from "@material-tailwind/react";
interface StatsCardProps {
  count: string;
  title: string;
  k: string;
  locales: any;
}

export function StatsCard({ count, title, k, locales }: StatsCardProps) {
  return (
    <Card placeholder={undefined} color="transparent" shadow={false}>
      <Typography
        placeholder={undefined}
        variant="h1"
        className="font-bold"
        color="blue-gray"
      >
        {count}
      </Typography>
      <Typography
        placeholder={undefined}
        variant="h6"
        color="blue-gray"
        className="mt-1 font-medium"
      >
        {locales[k]}
      </Typography>
    </Card>
  );
}

export default StatsCard;
