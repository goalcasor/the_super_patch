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
        event.preventDefault();

        try {
            
            await addContact(contact);
            alert('¡Gracias! Tu información ha sido enviada correctamente.');
            setContact({
                name: '',
                phone: '',
                email: '',
                owenerId: selectedOwner.id
            }); 
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
                        <h1>¡Regales lo que regales, haz que sea único!</h1>
                        <p>
                            Descarga la guía exlusiva: <strong>El arte de Regalar Bienestar.</strong>
                            <br/>
                            <br/>
                            <strong> 10 ideas top para que tu regalo sea único</strong>
                        </p>
                    </div>
                </div>
                <div className={styles.form_container}>
                    <div className={styles.form}>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.input_container}>
                                <input 
                                    type="text" 
                                    name="name" 
                                    id="name" 
                                    required 
                                    placeholder="Nombre" 
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
                                    placeholder="Email" 
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
                                    placeholder="Teléfono" 
                                    value={contact.phone} 
                                    onChange={handleChange} 
                                />
                            </div>
                            <div className={styles.input_container}>
                                <button type="submit">Descarga tu guía gratis</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FormSection;
