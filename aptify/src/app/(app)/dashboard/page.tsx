import Card from "@/components/Card";
import EmptyState from "@/components/EmptyState";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold">Welcome back</h1>
        <p className="text-[15px] text-muted">
          Create a property or join a unit to get started.
        </p>
      </div>

      <div className="grid items-stretch gap-5 md:grid-cols-2">
        <Card className="h-full">
          <EmptyState
            title="You do not have any properties yet"
            body="Create a property to add units and invite your tenants."
            actionLabel="Create property"
            actionHref="/properties/new"
          />
        </Card>
        <Card className="h-full">
          <EmptyState
            title="You are not in a unit yet"
            body="Have an invite code from your landlord? Join your unit with it."
            actionLabel="Join a unit"
            actionHref="/join"
          />
        </Card>
      </div>
    </div>
  );
}