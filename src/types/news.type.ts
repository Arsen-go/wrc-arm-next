export type News = {
  id: number;
  title: string;
  text: string;
  fileId: number | null;
  language: string | null;
  createdAt: Date;
  updatedAt: Date;
} | null;
