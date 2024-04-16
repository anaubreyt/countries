"use client"

import Image from "next/image";
import Link from "next/link";

import { BackButton } from "@/app/ui/BackButton";

export default function Error() {
  return (
    <section className="flex flex-col container">
      <h1 className="text-5xl text-center font-bold text-gray-800 my-16">
        Ошибка! Что-то пошло не так...
      </h1>
    <BackButton />
    </section>
  )
}