import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";


export default async function HomePage() {
  const images = await db.query.images.findMany({
    // where: (model, { eq }) => eq(model.userId, user.userId),
    orderBy: (model, { desc }) => desc(model.id),
  });

  console.log("DB POSTS: ", images);
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {images.map((image) => (
          <div key={image.id} className="flex flex-col w-48">
            <img src={image.url} alt="image" />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
