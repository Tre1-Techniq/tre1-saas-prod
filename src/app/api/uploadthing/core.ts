import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { db } from "~/server/db";
import { images } from "~/server/db/schema";
 
const f = createUploadthing();

interface UploadMetadata {
    userId: string;
  }
  
  interface UploadedFile {
    name: string;
    url: string;
    // Add any other properties that the `file` object contains
  }
 
// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({ image: { maxFileSize: "4MB", maxFileCount: 40 } })
    // Set permissions and file types for this FileRoute
    .middleware(async ({ req }) => {
      // This code runs on your server before upload
      const user = auth();
 
      // If you throw, the user will not be able to upload
      if (!user.userId) throw new UploadThingError("Unauthorized");
 
      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      return { userId: user.userId };
    })
    .onUploadComplete(async ({ metadata, file }: { metadata: UploadMetadata; file: UploadedFile }) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log("Upload complete for userId:", metadata.userId);
 
      await db.insert(images).values({
        name: file.name,
        url: file.url,
        userId: metadata.userId,
      });

      return { uploadedBy: metadata.userId };
    }),
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;