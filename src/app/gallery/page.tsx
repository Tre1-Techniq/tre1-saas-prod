import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { getMyImages } from "~/server/db/queries";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();

  return (
    <div className="gallery-thumb-wrapper">
      {images.map((image) => (
        <div key={image.id} className="gallery-thumb-div">
          <Link href={`/img/${image.id}`}>
            <Image
              src={image.url}
              className="gallery-thumb-img"
              width={300}
              height={300}
              alt={image.name}
            />
          </Link>
          <div className="gallery-thumb-label">{image.name}</div>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Please sign in above
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}