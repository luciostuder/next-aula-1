import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <header className="flex flex-col items-center">
            <h1>React ❤️ Next.js</h1>
            <nav className="flex gap-4">
                <Link href="/" className="hover:underline">Intro</Link>
                <Link href="/sobre" className="hover:underline">Sobre</Link>
                <Link href="/caracteristicas" className="hover:underline">Caracteristicas</Link>
            </nav>
        </header>
    )
}
