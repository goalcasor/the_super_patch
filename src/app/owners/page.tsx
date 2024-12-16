'use client'

import { useOwner } from "@/context/OwnersContext";
import styles from '@/styles/owners.module.scss';
export default function OwnersPage(){

    const { owners } = useOwner()

    return(
        <section>
            <div className={styles.owner_container}>

                <h1>Owners: <span> {owners.length} </span></h1>

                {owners.map((owner) => (
                    <div
                        key={owner.id}
                        className={styles.owner}
                    >
                        <p>
                            {owner.id}
                        </p>
                        <h1>
                           
                            <br/>
                            {owner.name} : <span>{owner.leads}</span>
                        </h1>
                    </div>
                ))}
            </div>
        </section>
    )
}