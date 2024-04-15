"use client"

import Image from "next/image";
import Link from "next/link";

export default function Error() {
  return (
    <section className="flex flex-col container">
      <h1 className="text-5xl text-center font-bold text-gray-800 my-16">
        Ошибка! Что-то пошло не так...
      </h1>
      <Link href='/' className="flex items-center py-2 gap-1">
            <Image 
                src="/arrow.svg"
                alt="назад" 
                width={24} 
                height={24}
            />
            <h1>Назад</h1>
        </Link>
    </section>
  )
}