import { Card } from "flowbite-react";

export function CardComponent() {
  return (
    <Card
      className="max-w-72 mt-2"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="https://flowbite-react.com/_next/image?url=%2Fimages%2Fblog%2Fimage-1.jpg&w=1080&q=75"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </Card>
  );
}
