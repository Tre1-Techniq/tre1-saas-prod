import { getImage } from "~/server/db/queries";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id");

  const image = await getImage(idAsNumber);

  // const userInfo = await clerkClient.users.getUser(image.userId);

  return (
    <div>
      <img src={image.url} className="w-96" />
    </div>
  );
}