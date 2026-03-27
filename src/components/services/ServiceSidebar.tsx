import Link from "next/link";
import { serviceMenu } from "@/data/serviceMenu";

type Props = {
  activeHref?: string;
};

export default function ServiceSidebar({ activeHref = "" }: Props) {
  return (
    <aside className="w-full">
      <ul className="overflow-hidden rounded-lg border border-gray-200 bg-white">
        {serviceMenu.map((item) => {
          const isActive = !item.external && item.href === activeHref;

          const className = `block px-6 py-4 text-[16px] transition border-b border-gray-200 last:border-b-0 ${
            isActive
              ? "bg-[#eaf3ff] font-medium text-[#2f80ed]"
              : "text-[#2f80ed] hover:bg-gray-50"
          }`;

          if (item.external) {
            return (
              <li key={item.label}>
                <a href={item.href} className={className}>
                  {item.label}
                </a>
              </li>
            );
          }

          return (
            <li key={item.label}>
              <Link href={item.href} className={className}>
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}