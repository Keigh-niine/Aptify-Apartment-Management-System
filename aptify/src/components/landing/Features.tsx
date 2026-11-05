import Card from "@/components/Card";

const features = [
  {
    title: "Rent tracking",
    text: "Due reminders, online and cash payments, confirmed by your landlord, with receipts.",
  },
  {
    title: "Maintenance tickets",
    text: "Report issues with photos and follow every update from New to Assigned to Resolved.",
  },
  {
    title: "Announcements",
    text: "Post notices to a whole property or a single unit, so nobody misses what matters.",
  },
  {
    title: "Properties and units",
    text: "Landlords create properties. Tenants join their unit with a code, like joining a class.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="flex flex-col items-center gap-12 px-6 py-16 md:px-[120px] md:py-24"
    >
      <div className="flex flex-col items-center gap-3 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">
          Everything you need to run an apartment
        </h2>
        <p className="text-lg text-muted">
          Built from what tenants and landlords told us they need.
        </p>
      </div>

      <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <Card key={f.title} className="flex flex-col gap-3.5 p-7">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-tint">
              <div className="h-5 w-5 rounded-md bg-primary" />
            </div>
            <h3 className="text-lg font-semibold">{f.title}</h3>
            <p className="text-[15px] leading-[22px] text-muted">{f.text}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}