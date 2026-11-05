import Card from "@/components/Card";

const groups = [
  {
    title: "For landlords",
    steps: [
      "Create a property and add its units",
      "Add a tenant to a unit and share the invite code",
      "Track rent, confirm cash, and resolve tickets",
    ],
  },
  {
    title: "For tenants",
    steps: [
      "Sign up and enter your unit code",
      "Pay online or notify a cash payment",
      "Report repairs with photos and follow progress",
    ],
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="flex flex-col items-center gap-12 bg-slate-50 px-6 py-16 md:px-[120px] md:py-24"
    >
      <h2 className="text-3xl font-bold md:text-4xl">How it works</h2>
      <div className="grid w-full gap-8 md:grid-cols-2">
        {groups.map((g) => (
          <Card key={g.title} className="flex flex-col gap-6 p-9">
            <h3 className="text-[22px] font-bold">{g.title}</h3>
            {g.steps.map((s, i) => (
              <div key={s} className="flex items-center gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  {i + 1}
                </div>
                <p className="font-medium">{s}</p>
              </div>
            ))}
          </Card>
        ))}
      </div>
    </section>
  );
}