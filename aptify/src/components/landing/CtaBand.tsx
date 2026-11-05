import Button from "@/components/Button";

export default function CtaBand() {
  return (
    <section className="flex flex-col items-center gap-6 bg-primary px-6 py-16 text-center md:px-[120px] md:py-20">
      <h2 className="text-3xl font-bold text-white md:text-[40px]">
        Ready to simplify your apartment?
      </h2>
      <p className="text-lg text-sky-100">
        Create your property in minutes, or join your unit with a code.
      </p>
      <Button href="/signup" variant="outline" size="lg">
        Get started
      </Button>
    </section>
  );
}