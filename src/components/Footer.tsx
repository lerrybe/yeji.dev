export default function Footer() {
  return (
    <p className="flex items-center justify-center w-full h-[40px] text-sm text-gray-700 mt-10 fixed bottom-0 bg-white">
      {`© ${new Date().getFullYear()} Yeji Kim | All Rights Reserved.`}
    </p>
  );
}
