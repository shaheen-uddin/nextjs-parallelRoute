import wait from "@/app/lib/wait";
export default async function Assignments() {
  await wait(4000);
  return (
    <div className="text-xl p-4 border border-gray-200 rounded h-[360px] flex items-center justify-center">
      ASSIGNMENTS
    </div>
  );
}
