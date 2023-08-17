export default function Footer() {
  return (
    <p className="flex items-center justify-center w-full h-[60px] text-sm text-gray-700 mt-10">
      {`© ${new Date().getFullYear()} Yeji Kim | All Rights Reserved.`}
    </p>
  );
}
