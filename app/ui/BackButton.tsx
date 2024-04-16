"use client"

import { useRouter } from 'next/navigation'
import Image from 'next/image';

export const BackButton: React.FC = () => {
    const router = useRouter();

    const handleGoBack = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        router.back();
    };
  
    return (
        <button onClick={(e) => handleGoBack(e)} className="flex items-center py-2 gap-1 mt-2">
            <Image src="/arrow.svg" alt="назад" width={24} height={24}/>
            Назад       
        </button>
    );
}