"use client"

import {useRouter} from "next/navigation";

export const BackButton = () => {
  const router = useRouter()

  return (
    <button
      type="button"
      aria-label="Назад"
      className="group mb-8 flex items-center justify-center transition lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0"
      onClick={() => router.back()}
    >
      ← Назад
    </button>
  );
};
