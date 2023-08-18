export default function Footer() {
  return (
    <p className="flex items-center justify-center w-full h-[40px] text-sm text-gray-700 mt-10 sticky bottom-0 bg-white z-40 dark:bg-normal-black dark:text-gray-400">
      {`© ${new Date().getFullYear()} Yeji Kim | All Rights Reserved.`}
    </p>
  );
}
