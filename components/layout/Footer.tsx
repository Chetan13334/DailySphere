import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#c4c6cd]/15 bg-[#f8f9fa]">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 px-12 py-12 md:flex-row">
        <p className="font-['Inter'] text-xs uppercase tracking-widest text-[#44474c]">
          {"\u00A9"} 2024 Zenith Editorial Dashboard. All rights reserved.
        </p>
        <div className="flex gap-8">
          <Link href="#" className="font-['Inter'] text-xs uppercase tracking-widest text-[#44474c] transition-colors hover:text-[#041627]">
            Privacy Policy
          </Link>
          <Link href="#" className="font-['Inter'] text-xs uppercase tracking-widest text-[#44474c] transition-colors hover:text-[#041627]">
            Terms of Service
          </Link>
          <Link href="#" className="font-['Inter'] text-xs uppercase tracking-widest text-[#44474c] transition-colors hover:text-[#041627]">
            Cookie Settings
          </Link>
          <Link href="#" className="font-['Inter'] text-xs uppercase tracking-widest text-[#44474c] transition-colors hover:text-[#041627]">
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
}
