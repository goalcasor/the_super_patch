'use client'

import { useOwner } from "@/context/OwnersContext";
import styles from '@/styles/owners.module.scss';
import Confite from "@/componets/congrats/CongratsComponent";

export default function OwnersPage() {

    const { owners, showConfite } = useOwner();
    const sortedOwners = owners.sort((a, b) => b.leads - a.leads);
    const totalLeads = sortedOwners.reduce((sum, owner) => sum + owner.leads, 0);

    console.log('SHOW CONFITE>', showConfite)

    return (
        <section>
            <div className={styles.owner_container}>
                <h1>Owners: <span> {sortedOwners.length} </span></h1>
                <h2>Total Leads: <span>{totalLeads}</span></h2>

                {sortedOwners.map((owner) => (
                    <div
                        key={owner.id}
                        className={styles.owner}
                    >
                        <p>
                            {owner.id}
                        </p>
                        <h1>
                            {owner.name} {owner.lastName} <span>{owner.leads}</span>
                        </h1>
                    </div>
                ))}
                {showConfite && <Confite />}
            </div>
        </section>
    );
}
