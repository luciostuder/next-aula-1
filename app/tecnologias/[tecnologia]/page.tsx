'use client'

import { tecnologias } from '@/data/tecnologias'
import { useParams } from 'next/navigation';

export default function CaracteristicaPage() {
    const params = useParams();
    const id = Number(params.tecnologia)

    return (
        <>
            <h2>{tecnologias[id].titulo}</h2>
            <p>{tecnologias[id].descricao}</p>
        </>
    )
}
