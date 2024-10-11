"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Links() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex justify-center w-full gap-4">
        <li>
          <Link className={`link ${pathname === "/" ? "active" : ""}`} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === "/child" ? "active" : ""}`}
            href="/child"
          >
            Child
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === "/sibling" ? "active" : ""}`}
            href="/sibling"
          >
            Sibling
          </Link>
        </li>
      </ul>
    </nav>
  );
}
