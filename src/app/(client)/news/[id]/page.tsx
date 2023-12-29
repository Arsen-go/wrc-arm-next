export default async function News(param: any) {
const list = await fetch('http://localhost:3000/news/tt')
  console.log("🚀 ~ file: page.tsx:2 ~ News ~ param:", list)
  
  return <div>About</div>
}