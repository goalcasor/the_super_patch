'use client'

import { useState } from 'react';
import styles from '@/styles/pages/EventoMallorca.module.scss'
import createBooking from '@/firebase/createBooking';

export default function EventoMallorca() {

    const [booking, setBooking] = useState({
        name: '',
        phone: '',
        email: '',
        isAssociated: false,
        invitedBy: '',
        guests: [],
    });

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        
        if (type === 'checkbox') {
            setBooking(prevBooking => ({
                ...prevBooking,
                [name]: checked
            }));
        } else {
            setBooking(prevBooking => ({
                ...prevBooking,
                [name]: value
            }));
        }
    };

    const handleGuestChange = (event, index) => {
        const { name, value } = event.target;
        const updatedGuests = [...booking.guests];
        updatedGuests[index] = { ...updatedGuests[index], [name]: value };
        setBooking(prevBooking => ({
            ...prevBooking,
            guests: updatedGuests
        }));
    };

    const addGuest = () => {
        setBooking(prevBooking => ({
            ...prevBooking,
            guests: [...prevBooking.guests, { name: '', phone: '' }]
        }));
    };

    const removeGuest = (index) => {
        const updatedGuests = booking.guests.filter((_, i) => i !== index);
        setBooking(prevBooking => ({
            ...prevBooking,
            guests: updatedGuests
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await createBooking(booking);
            alert('¡Gracias! Tu información ha sido enviada correctamente.');
            setBooking({
                name: '',
                phone: '',
                email: '',
                isAssociated: false,
                invitedBy: '',
                guests: [],
            });
        } catch (error) {
            console.error("Error al enviar los datos:", error);
            alert("Hubo un error al enviar tus datos. Intenta de nuevo.");
        }
    };

    return (
        <main className={styles.EventoMallorca}>
            
            <section className={styles.banner_section}>
                <div className={styles.video_container}>
                    <video src='https://firebasestorage.googleapis.com/v0/b/mdc-guide.appspot.com/o/sp-media%2Finvitacion.mp4?alt=media&token=db3e1484-6612-45db-8fa6-05d58936facd' controls poster='/images/poster_play.png'></video>
                </div>
            </section>

            <div className={styles.container}>
                <section className={styles.hero_section}>
                    <div className={styles.hero_content}>
                        <h1>¡ATENCIÓN MALLORCA!</h1>
                        <h2>Descubre una Oportunidad de Negocio Transformadora</h2>
                        <p>Te invitamos a una presentación exclusiva de Super Patch, donde conocerás una tecnología revolucionaria, historias de éxito y un modelo de negocio con gran potencial de crecimiento.</p>
                    </div>
                </section>

                <section className={styles.form_section}>
                    <div className={styles.form_section_container}>
                        <div className={styles.form_section_content}>
                            <div className={styles.text_container}>
                                <h3>Evento exclusivo:</h3>
                                <p><strong>📅 Viernes, 20 de Diciembre - 18:00 a 20:00</strong></p>
                                <p><strong>📍 MMR - Mallorca Meeting Room, C/ Gran Vía Asima, 20, Planta 2, Sala 12</strong></p>
                                <p>¡No pierdas esta oportunidad única para unirte a este evento exclusivo!</p>
                            </div>
                            <div className={styles.organizers_container}>
                                <h4>Organiza:</h4>
                                <p><strong>Alex Castells</strong><br />MD de Super Patch</p>
                                <h4>Ponentes:</h4>
                                <p><strong>Jose Piquer</strong><br />VP de Super Patch</p>
                                <p><strong>Reme Barbeera</strong><br />VP de Super Patch</p>
                            </div>
                            <div>
                                <h2>La aportación de 20€ es sólo para Asociados de SuperPatch.</h2>
                                <br/> 
                                <p> <br/> <strong>ES1715830001139384050452</strong> <br/>PROYECTOS ALCASOR SL.</p>
                            </div>
                        </div>

                        <div className={styles.form_container}>
                            <div className={styles.form}>
                                <h2>Regístrate y asegura tu entrada gratuita</h2>
                                <p>*La entrada gratuita es exclusiva para invitados.</p>
                                <br/>
                                <form onSubmit={handleSubmit}>
                                    <div className={styles.input_container}>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            required
                                            placeholder="Tu nombre"
                                            value={booking.name}
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
                                            value={booking.email}
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
                                            value={booking.phone}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className={styles.input_container}>
                                        <label>
                                            <input
                                                type="checkbox"
                                                name="isAssociated"
                                                checked={booking.isAssociated}
                                                onChange={handleChange}
                                            />
                                            Soy Asociado
                                        </label>
                                    </div>

                                    {booking.isAssociated ? (
                                        <div className={styles.guests_section}>
                                            <h3>Invitados</h3>
                                            {booking.guests.map((guest, index) => (
                                                <div key={index} className={styles.guest_container}>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        required
                                                        placeholder={`Nombre del invitado ${index + 1}`}
                                                        value={guest.name}
                                                        onChange={(event) => handleGuestChange(event, index)}
                                                    />
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        required
                                                        placeholder={`Teléfono del invitado ${index + 1}`}
                                                        value={guest.phone}
                                                        onChange={(event) => handleGuestChange(event, index)}
                                                    />
                                                    <button type="button" onClick={() => removeGuest(index)}>❌</button>
                                                </div>
                                            ))}
                                            <button type="button" onClick={addGuest} className={styles.add_guest}>Agregar invitado</button>
                                        </div>
                                    ) : (
                                        <div className={styles.input_container}>
                                            <input
                                                type="text"
                                                name="invitedBy"
                                                placeholder="¿Quién te invitó?"
                                                value={booking.invitedBy}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    )}

                                    <div className={styles.input_container}>
                                        <button type="submit">Confirmar mi asistencia</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.additional_info_section}>
                    <div className={styles.additional_info_content}>
                        <h3>🌟 No pierdas esta oportunidad 🌟</h3>
                        <p>Conoce una propuesta única que combina tecnología de vanguardia y un modelo de negocio con gran potencial de crecimiento. ¡Este evento puede ser el primer paso hacia algo grande!</p>
                        <p>Únete al siguiente enlace para más detalles.</p>
                    </div>
                </section>
            </div>
        </main>
    )
}
