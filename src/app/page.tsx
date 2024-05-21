import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/015f052d-4718-4242-afc1-0f815de1edf6-87uj8k.jpg",
  "https://utfs.io/f/296bf3bf-da3c-49b7-8b65-c33759110555-2fq3hw.jpg",
  "https://utfs.io/f/2c224916-b824-4251-aafd-92fc8e2c0f8e-87uj8l.jpg",
  "https://utfs.io/f/3957ce5b-9f56-42f6-909e-7d6d1806295f-87uj8m.jpg",
  "https://utfs.io/f/36629d79-3ab4-4f54-a045-c568a799fd23-2fq3hx.jpg",
  "https://utfs.io/f/3b366a2c-2779-4b06-b4de-a916438b3626-422nuv.jpg",
  "https://utfs.io/f/971efcb6-dbac-47e0-8f7c-4dbdf7f8bc03-ficabj.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index +1,
  url
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log("DB POSTS: ", posts);
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
