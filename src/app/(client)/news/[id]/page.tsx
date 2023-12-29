import { NewsService } from "@/services/api/news";

export default async function News(param: any) {
  const data: any = await NewsService.getNews();
  const newData: any = await NewsService.sendNews();

  console.log(newData);

  return <div>{data.name}</div>;
}
