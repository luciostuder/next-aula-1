'use client'

import { useState, useEffect } from "react"

export default function page() {

    const caracteristicas = [
        'JSX, sintaxe que mistura HTML e JS.',
        'Componentes, funções que retornam JSX.',
        'Componentes Reutilizáveis e Modulares.',
        'Roteamento Automático e APIs.',
        'Hooks: useState, useEffect e useSWR.',
        'Renderização Rápida e SEO Friendly.',
        'TypeScript Seguro e Escalável.',
        'Comunidade Ativa e Popularidade.'
    ]

    const [likes, setLikes] = useState(0)

    useEffect(() => {
        console.log("Numero de likes: ", likes)
        localStorage.setItem('likes', String(likes))
    }, [likes])

    useEffect(()=> {
        console.log("DOM loaded")

        const likesLocalStorage = localStorage.getItem('likes') || 0
        localStorage.setItem('likes', String(likesLocalStorage))

    }, [])


    return (
        <div>
            <h2>Características</h2>
            <ul>
                {caracteristicas.map((caracteristica, i) => {
                    return <li key={i}>{caracteristica}</li>
                })}
            </ul>
            <section className="mt-8">
                Likes: <button onClick={() => setLikes(likes+1)}>
                    {likes} ❤️
                </button>

            </section>
        </div>
    )
}
