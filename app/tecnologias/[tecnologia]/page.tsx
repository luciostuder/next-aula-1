'use client'

import { tecnologias } from '@/data/tecnologias'
import { useParams } from 'next/navigation';
import Link from 'next/link'

export default function CaracteristicaPage() {
    const params = useParams();
    const id = Number(params.tecnologia)

    return (
        <>
            <h2>{tecnologias[id].titulo}</h2>
            <p>{tecnologias[id].descricao}</p>
            <Link className="mt-4 bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" href="/tecnologias">Voltar {'>'}</Link>
        </>
    )
}
