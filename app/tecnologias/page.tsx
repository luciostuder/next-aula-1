'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import {tecnologias} from '@/data/tecnologias'

export default function TecnologiasPage() {

    const [likes, setLikes] = useState<number>(() => {
        if (typeof window !== "undefined") {
            return Number(localStorage.getItem("likes")) || 0;
        }
        return 0;
    });

    useEffect(() => {
        console.log("Numero de likes: ", likes)
        localStorage.setItem('likes', String(likes))
    }, [likes])

    return (
        <div>

            <h2>Tecnologias</h2>

            <ul>
                {tecnologias.map((tecnologia, index) => {
                    return (
                        <li key={index}>
                            {tecnologia.titulo}
                            <Link href={`/tecnologias/${index}`}>
                                🔗    
                            </Link>
                        </li>
                    )
                })}
            </ul>

            {likes != null && (<section className="mt-8">
                Likes: <button onClick={() => setLikes(likes + 1)}>
                    {likes} ❤️
                </button>
            </section>)}

        </div>
    )
}
