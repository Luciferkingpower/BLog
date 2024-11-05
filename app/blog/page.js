import Image from 'next/image';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import fs,{readFileSync} from "fs"
import matter from 'gray-matter';
const dataPage = () => {
    const dirContent = fs.readdirSync("content","utf-8")
    const blogs = dirContent.map(file=>{
    const fileContent = fs.readFileSync(`content/${file}`,"utf-8")
    const {data} = matter(fileContent)
    return data
   })
  // Sample data data array
//   const datas = [
//     {
//       title: "Understanding React Hooks",
//       description: "A deep dive into the power of React hooks and how to use them effectively.",
//       slug: "understanding-react-hooks",
//       author: "John Doe",
//       image: "/Assets/src/data.jpg",
//       date: "2024-01-15",
//     },
//     {
//       title: "Mastering Tailwind CSS",
//       description: "Tips and tricks to get the most out of Tailwind CSS in your projects.",
//       slug: "mastering-tailwind-css",
//       author: "Jane Smith",
//       image: "/Assets/src/data.jpg",
//       date: "2024-02-05",
//     },
//     {
//       title: "Next.js for Beginners",
//       description: "An introduction to building server-rendered applications with Next.js.",
//       slug: "nextjs-for-beginners",
//       author: "Alex Johnson",
//       image: "/Assets/src/data.jpg",
//       date: "2024-03-10",
//     },
//   ];
  

  return (
    <main className="py-2 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-200 mb-12">Blog Posts</h1>
        <div className="flex flex-wrap justify-center">
          {blogs.map((data) => (
            <div key={data.slug} className="max-w-xs mx-4 my-4 p-6 bg-white dark:bg-gray-700 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105">
              <Image src={data.image} alt={data.title} className="w-full h-48 object-cover rounded-t-lg" width={500} height={200} />
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-4">{data.title}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">{new Date(data.date).toLocaleDateString()}</p>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{data.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">{data.author}</span>
                <Button  className="text-blue-600 dark:text-blue-400 hover:underline" variant="outline"  ><Link href={`/blogpost/${data.slug}`}>Read More</Link></Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default dataPage;
