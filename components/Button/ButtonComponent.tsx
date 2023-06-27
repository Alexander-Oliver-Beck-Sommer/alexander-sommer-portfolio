import Link from "next/link";

export default function HomeButton({ text, page, aria, tip }) {
  return (
    <>
      <Link
        href={page}
        aria-label={aria}
        title={tip}
        className="bold block w-full border-2 border-solid border-red bg-red px-25 py-8 text-center text-white md:w-fit"
      >
        <h4 className="md:text-18">{text}</h4>
      </Link>
    </>
  );
}
