"use client"

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useOwner } from '@/context/OwnersContext'
import PrincipalLoader from "@/componets/loaders/PrincipalLoader";


// Tipo mínimo para el contexto de Owners
interface OwnerContextValue {
  selectedOwner: { phone?: string | number; name?: string } | null
  loading: boolean
  selectedOwnerValid: boolean
}

export default function Home() {

  // Obtenemos datos del contexto de propietario seleccionado
  const { selectedOwner, loading, selectedOwnerValid } = useOwner() as OwnerContextValue
  const router = useRouter()

  useEffect(() => {
    if (!loading && selectedOwnerValid && selectedOwner) {
      // Coerce phone a string para limpiar caracteres
      const phoneStr = selectedOwner.phone != null ? String(selectedOwner.phone) : ''
      const rawPhone = phoneStr.replace(/[^\d]/g, '')
      const ccPhone = rawPhone ? `34${rawPhone}` : null

      if (ccPhone) {
        const name = selectedOwner.name || ''
        const text = encodeURIComponent(`¡Hola ${name}! He visto el anuncio y me gustaría recibir más información.`)
        // Redirige a WhatsApp con el número formateado
        window.location.href = `https://wa.me/${ccPhone}?text=${text}`
      } else {
        // Fallback si no hay número válido
        router.replace('/no-whatsapp')
      }
    }
  }, [loading, selectedOwnerValid, selectedOwner, router])

  return (
    <div>
      {loading && <PrincipalLoader />}
      {!loading && !selectedOwnerValid && <p>No se encontró un propietario válido.</p>}
    </div>
  )
}
