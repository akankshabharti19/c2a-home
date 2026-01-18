export default function AnnouncementBar() {
  return (
    <div className="bg-[#0b4da2] py-2">
      <div className="mx-auto flex max-w-[1200px] items-center justify-center gap-6 px-4 text-sm text-white">

        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-yellow-400" />
          Fast. Private Claim Assessments.
        </span>

        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-yellow-400" />
          Fast. Private Claim Assessments.
        </span>

        <span className="hidden items-center gap-2 md:flex">
          <span className="h-2 w-2 rounded-full bg-yellow-400" />
          Connect2Attorney Links People With Premier Lawyers
        </span>

      </div>
    </div>
  );
}
