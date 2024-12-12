'use client'
import { useOwner } from '@/context/OwnersContext';
import styles from '@/styles/home_sections/FormSection.module.scss'
import { ContactType } from '@/types/ContactType';
import { useState } from 'react'
import addContact from '@/firebase/addContact'; // Importa la función addOwner

function FormSection() {

    const { selectedOwner } = useOwner();
    const [contact, setContact] = useState<ContactType>({
        name: '',
        phone: '',
        email: '',
        owenerId: selectedOwner ? selectedOwner.id : '111208386'
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setContact(prevContact => ({
            ...prevContact,
            [name]: value
        }));
    }

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevenir la recarga de la página al enviar el formulario

        try {
            // Llamar a la función addOwner con el objeto contact
            await addContact(contact);
            alert('¡Gracias! Tu información ha sido enviada correctamente.');
            setContact({
                name: '',
                phone: '',
                email: '',
                owenerId: selectedOwner.id
            }); // Opcional: Limpiar los campos del formulario después de enviar
        } catch (error) {
            console.error("Error al enviar los datos:", error);
            alert("Hubo un error al enviar tus datos. Intenta de nuevo.");
        }
    }

    return (
        <section className={styles.form_section}>
            <div className={styles.form_section_container}>
                <div className={styles.form_section_content}>
                    <div className={styles.text_container}>
                        <h1>Oferta Especial:</h1>
                        <p>
                            Solo por tiempo limitado: 25% de descuento en tu primer pedido y guía exclusiva para empaquetar con estilo tus Superpatch.
                        </p>
                    </div>
                </div>
                <div className={styles.form_container}>
                    <div className={styles.form}>
                        <h1>Recibe tu descuento y la guía de regalos gratis.</h1>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.input_container}>
                                <input 
                                    type="text" 
                                    name="name" 
                                    id="name" 
                                    required 
                                    placeholder="Tu nombre" 
                                    value={contact.name} 
                                    onChange={handleChange} 
                                />
                            </div>
                            <div className={styles.input_container}>
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    required 
                                    placeholder="Tu mejor email" 
                                    value={contact.email} 
                                    onChange={handleChange} 
                                />
                            </div>
                            <div className={styles.input_container}>
                                <input 
                                    type="tel" 
                                    name="phone" 
                                    id="phone" 
                                    required 
                                    placeholder="Tu número WhatsApp" 
                                    value={contact.phone} 
                                    onChange={handleChange} 
                                />
                            </div>
                            <div className={styles.input_container}>
                                <button type="submit">Quiero mi descuento</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FormSection;
