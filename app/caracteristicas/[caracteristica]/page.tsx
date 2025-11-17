'use client'

import {caracteristicas} from '@/data/caracteristicas'
import { useParams } from 'next/navigation';


export default function CaracteristicaPage() {
    const params = useParams(); 
    const id = Number(params.caracteristica)

    return (
        <h2>{caracteristicas[id]}</h2>
    )
}
