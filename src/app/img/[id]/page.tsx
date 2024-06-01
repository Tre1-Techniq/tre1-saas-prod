// import { FullPageImageView } from "~/common/full-page-image-view";

export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: number };
}) {
  return (
    <div className="flex min-h-screen w-full min-w-0 overflow-y-hidden">
      <div><h2>Image Gallery Display Page</h2></div>
      {/* <FullPageImageView id={photoId} /> */}
    </div>
  );
}