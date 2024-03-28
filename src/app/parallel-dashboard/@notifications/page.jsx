import wait from "@/app/lib/wait";

export default async function Notification() {
  await wait(6000);
  return (
    <div
      className="text-xl p-4 row-span-2 border border-gray-200 rounded
      h-[745px] flex items-center justify-center"
    >
      NOTIFICATIONS
    </div>
  );
}
