import { NewsService } from "@/services/api/news";

export default async function News(param: any) {
  const data: any = await NewsService.getNews();

  return <div>{data.name}</div>;
}
