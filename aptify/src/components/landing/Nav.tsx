import Logo from "@/components/Logo";
import Button from "@/components/Button";

const links = [
  ["Features", "#features"],
  ["How it works", "#how-it-works"],
  ["For landlords", "#how-it-works"],
  ["For tenants", "#how-it-works"],
];

export default function Nav() {
  return (
    <header className="flex items-center justify-between px-6 py-5 md:px-[120px]">
      <Logo />
      <nav className="hidden gap-9 md:flex">
        {links.map(([label, href]) => (
          <a
            key={label}
            href={href}
            className="text-[15px] font-medium text-muted hover:text-ink"
          >
            {label}
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-3">
        <Button href="/login" variant="outline">
          Log in
        </Button>
        <Button href="/signup">Get started</Button>
      </div>
    </header>
  );
}