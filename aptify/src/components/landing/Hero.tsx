import Badge from "@/components/Badge";
import Button from "@/components/Button";
import Card from "@/components/Card";

function PreviewCard() {
  return (
    <Card className="flex flex-col gap-5 p-7">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xl font-bold">My Home</p>
          <p className="text-[13px] text-muted">Unit 2C · Mabini Residences</p>
        </div>
        <Badge tone="green">Tenant</Badge>
      </div>

      <div className="flex flex-col gap-3 rounded-[14px] bg-amber-100 p-5">
        <p className="text-[15px] font-semibold text-amber-800">
          Rent is due in 3 days
        </p>
        <p className="text-4xl font-bold">₱6,760</p>
        <div className="flex flex-wrap gap-2.5">
          <span className="rounded-[10px] bg-primary px-5 py-[11px] text-sm font-semibold text-white">
            Online Payment
          </span>
          <span className="rounded-[10px] border border-slate-300 bg-white px-5 py-[11px] text-sm font-semibold">
            Pay with cash
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">
        <div>
          <p className="text-sm font-semibold">Leaking kitchen faucet</p>
          <p className="text-xs text-muted">Plumbing · Medium urgency</p>
        </div>
        <Badge>Assigned</Badge>
      </div>

      <div className="rounded-xl bg-slate-50 p-4">
        <p className="mb-1 text-xs font-semibold text-primary">
          Announcement from your landlord
        </p>
        <p className="text-sm">
          Water interruption this Saturday, 9:00 AM to 12:00 PM.
        </p>
      </div>
    </Card>
  );
}

export default function Hero() {
  return (
    <section className="grid items-center gap-12 bg-[#f0f9ff] px-6 py-16 md:grid-cols-2 md:px-[120px] md:py-[88px]">
      <div className="flex flex-col items-start gap-6">
        <Badge>Apartment management, simplified</Badge>
        <h1 className="text-4xl font-bold leading-tight md:text-[56px] md:leading-[64px]">
          Rent, repairs, and announcements in one place.
        </h1>
        <p className="max-w-[560px] text-lg leading-7 text-muted">
          Aptify helps landlords and tenants track rent, handle maintenance
          requests, and share updates without paper trails or lost messages.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button href="/signup" size="lg">
            Create a property
          </Button>
          <Button href="/login" variant="outline" size="lg">
            Join a unit with a code
          </Button>
        </div>
      </div>
      <PreviewCard />
    </section>
  );
}