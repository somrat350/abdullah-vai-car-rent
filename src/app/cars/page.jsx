import Cars from "@/component/HomePageSections/Cars";
import PageBanner from "@/component/PageTopBanner/PageBanner";

const page = async () => {
  return (
    <div className="min-h-screen font-sans dark:bg-black">
      <PageBanner />
      <Cars />
    </div>
  );
};

export default page;
