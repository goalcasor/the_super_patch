// context/OwnersContext.tsx

'use client'

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { db } from "@/firebase/config";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { Owner } from '@/types/OwnerType';
import Cookies from 'js-cookie';

export const OwnersContext = createContext<{
  owners: Owner[];
  selectedOwner: Owner | null;
  loading: boolean;
  ownersValid: boolean;
  selectedOwnerValid: boolean;
  showConfite: boolean;
  updateOwnerLeads: (ownerID: string, leads: number) => void;
}>( {
  owners: [],
  selectedOwner: null,
  loading: true,
  ownersValid: false,
  selectedOwnerValid: false,
  showConfite: false,
  updateOwnerLeads: () => {}
});

export const OwnersProvider = ({ children }) => {
  const [owners, setOwners] = useState<Owner[]>([]);
  const [selectedOwner, setSelectedOwner] = useState<Owner | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [ownersValid, setOwnersValid] = useState<boolean>(false);
  const [selectedOwnerValid, setSelectedOwnerValid] = useState<boolean>(false);
  const [showConfite, setShowConfite] = useState<boolean>(false);

  useEffect(() => {
    const q = query(collection(db, "owners"), orderBy("createdAt"));
    const unsub = onSnapshot(q, (snapshot) => {
      let ownersData: Owner[] = [];
  
      snapshot.forEach((doc) => {
        const data = doc.data();
        const owner: Owner = {
          id: doc.id,
          name: data.name ?? '', 
          lastName: data.lastName ?? '',
          phone: data.phone ?? 0, 
          email: data.email ?? '',
          leads: data.leads ?? 0, 
          shopId: data.shopId ?? 0, 
          shopLink: data.shopLink ?? '',
          wpContact: data.wpContact ?? false,
          createdAt: data.createdAt ? new Date(data.createdAt) : undefined, 
        };
  
        ownersData.push(owner);
      });
  
      setOwners(ownersData);
      setLoading(false);
      setOwnersValid(ownersData.length > 0); 
    });
  
    return () => unsub();
  }, []);

  useEffect(() => {
    if (!owners || owners.length === 0) return;

    const ownerIDFromCookies = Cookies.get('ownerID');
    const foundOwner = ownerIDFromCookies
      ? owners.find(owner => owner.id === ownerIDFromCookies)
      : null;

    if (foundOwner) {
      setSelectedOwner(foundOwner);
      setSelectedOwnerValid(true);
    } else {
      const selected = selectOwner(owners);
      updateOwnerLeads(selected.id, selected.leads);
      setSelectedOwner(selected);
      setSelectedOwnerValid(true);
      Cookies.set('ownerID', selected.id); 
    }
  }, [owners]);

  const selectOwner = (owners: Owner[]): Owner => {
    if (owners.every(owner => owner.leads === 0)) {
      let owner = owners[Math.floor(Math.random() * owners.length)];
      return owner;
    }
    const minLeads = Math.min(...owners.map(owner => owner.leads));
    const ownersWithMinLeads = owners.filter(owner => owner.leads === minLeads);
    setShowConfite(true);

    return ownersWithMinLeads[Math.floor(Math.random() * ownersWithMinLeads.length)];
  };

  const updateOwnerLeads = useCallback(async (ownerID: string, leads: number) => {
    await db.collection('owners').doc(ownerID).update({
      leads: leads + 1
    });

    setShowConfite(true); // Muestra Confite cuando se actualiza el lead
    setTimeout(() => setShowConfite(false), 5000); // Lo oculta después de 5 segundos
  }, []);

  const value = {
    owners,
    selectedOwner,
    loading,
    ownersValid,
    selectedOwnerValid,
    showConfite,
    updateOwnerLeads
  };

  return (
    <OwnersContext.Provider value={value}>
      {children}
    </OwnersContext.Provider>
  );
};

const useOwner = () => useContext(OwnersContext);

export { useOwner };
