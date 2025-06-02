// File: src/app/leads.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { db } from '@/firebase/config';
import {
  collection,
  query,
  onSnapshot,
  updateDoc,
  doc,
  Timestamp
} from 'firebase/firestore';
import styles from '@/styles/Leads.module.scss';

interface Lead {
  id: string;
  interest: 'consumer' | 'distributor';
  name: string;
  email: string;
  phone: string;
  createdAt?: Timestamp;
  contacted?: boolean;
}

const LeadsPage: React.FC = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const q = query(collection(db, 'leads'));
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const leadsData: Lead[] = snapshot.docs.map((docSnap) => {
          const data = docSnap.data() as Omit<Lead, 'id'>;
          return {
            id: docSnap.id,
            interest: data.interest,
            name: data.name,
            email: data.email,
            phone: data.phone,
            createdAt: data.createdAt,
            contacted: data.contacted ?? false,
          };
        });

        // Ordenamos por fecha creación descendente
        leadsData.sort((a, b) => {
          const ta = a.createdAt ? a.createdAt.toMillis() : 0;
          const tb = b.createdAt ? b.createdAt.toMillis() : 0;
          return tb - ta;
        });

        setLeads(leadsData);
        setLoading(false);
      },
      (err) => {
        console.error('Error fetching leads:', err);
        setError('No se pudieron cargar los leads.');
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const toggleContacted = async (leadId: string, currentStatus: boolean) => {
    try {
      const leadRef = doc(db, 'leads', leadId);
      await updateDoc(leadRef, {
        contacted: !currentStatus,
      });
    } catch (err) {
      console.error('Error updating lead:', err);
    }
  };

  if (loading) {
    return <p className={styles.message}>Cargando leads…</p>;
  }
  if (error) {
    return <p className={styles.message}>{error}</p>;
  }

  return (
    <div className={styles.container}>
      <h1>Listado de Leads</h1>

      {leads.length === 0 ? (
        <p className={styles.message}>No hay leads registrados.</p>
      ) : (
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead className={styles.thead}>
              <tr>
                <th className={styles.th}>Interés</th>
                <th className={styles.th}>Nombre</th>
                <th className={styles.th}>Correo</th>
                <th className={styles.th}>Teléfono</th>
                <th className={styles.th}>Fecha Creación</th>
                <th className={styles.th}>Contactado</th>
                <th className={styles.th}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead, index) => (
                <tr
                  key={lead.id}
                  className={index % 2 === 1 ? styles.trEven : undefined}
                >
                  <td className={styles.td}>
                    {lead.interest === 'consumer' ? 'Probar' : 'Distribuir'}
                  </td>
                  <td className={styles.td}>{lead.name}</td>
                  <td className={styles.td}>{lead.email}</td>
                  <td className={styles.td}>{lead.phone}</td>
                  <td className={styles.td}>
                    {lead.createdAt
                      ? new Date(lead.createdAt.toMillis()).toLocaleString(
                          'es-ES',
                          {
                            year: 'numeric',
                            month: '2-digit',
                            day: '2-digit',
                            hour: '2-digit',
                            minute: '2-digit',
                          }
                        )
                      : '—'}
                  </td>
                  <td className={styles.td}>
                    <span className={styles.statusText}>
                      {lead.contacted ? 'Sí' : 'No'}
                    </span>
                  </td>
                  <td className={styles.td}>
                    <button
                      className={`${styles.actionBtn} ${
                        lead.contacted
                          ? styles.contacted
                          : styles.notContacted
                      }`}
                      onClick={() =>
                        toggleContacted(lead.id, !!lead.contacted)
                      }
                    >
                      {lead.contacted
                        ? 'Marcar no contactado'
                        : 'Marcar contactado'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default LeadsPage;
