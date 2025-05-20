/* File: components/video-gallery/TestimonialForm.tsx */
'use client';

import React, { useState, FormEvent } from 'react';
import styles from './TestimonialForm.module.scss';
import { db } from '@/firebase/config';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

interface Lead {
  interest: 'consumer' | 'distributor';
  name: string;
  email: string;
  countryCode: string;
  phone: string;
}

const countryCodes = [
  { code: '+34', label: 'España (+34)' },
  { code: '+44', label: 'Reino Unido (+44)' },
  { code: '+1', label: 'USA (+1)' },
  { code: '+52', label: 'México (+52)' },
];

const TestimonialForm: React.FC = () => {
  const [form, setForm] = useState<Lead>({
    interest: 'consumer',
    name: '',
    email: '',
    countryCode: countryCodes[0].code,
    phone: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [touched, setTouched] = useState<{ [K in keyof Lead]?: boolean }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
  };

  const validate = (): string | null => {
    if (!form.name.trim()) return 'El nombre es obligatorio';
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(form.email)) return 'Introduce un correo válido';
    if (!form.phone.trim() || form.phone.length < 7) return 'El teléfono debe tener al menos 7 dígitos';
    return null;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, phone: true });
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }
    setSubmitting(true);
    setError(null);
    try {
      await addDoc(collection(db, 'leads'), {
        interest: form.interest,
        name: form.name.trim(),
        email: form.email.trim(),
        phone: `${form.countryCode} ${form.phone.trim()}`,
        createdAt: serverTimestamp()
      });
      setSuccess(true);
    } catch (err) {
      console.error(err);
      setError('Hubo un problema al enviar. Intenta de nuevo.');
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className={styles.thankYou}>
        <h2>¡Gracias!</h2>
        <p>Pronto nos pondremos en contacto contigo.</p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <h2 className={styles.title}>
        Tanto si quieres comprar el producto y probarlo, como si deseas generar nuevos ingresos
      </h2>

      <div className={styles.radioGroup}>
        <label className={styles.radioLabel}>
          <input
            type="radio"
            name="interest"
            value="consumer"
            checked={form.interest === 'consumer'}
            onChange={handleChange}
            onBlur={handleBlur}
            className={styles.radioInput}
          />
          <span>Probar el producto</span>
        </label>
        <label className={styles.radioLabel}>
          <input
            type="radio"
            name="interest"
            value="distributor"
            checked={form.interest === 'distributor'}
            onChange={handleChange}
            onBlur={handleBlur}
            className={styles.radioInput}
          />
          <span>Producto y negocio</span>
        </label>
      </div>

      <label className={styles.label} htmlFor="name">
        Nombre completo
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          onBlur={handleBlur}
          className={styles.input}
          placeholder="Tu nombre"
        />
      </label>

      <label className={styles.label} htmlFor="email">
        Correo electrónico
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={styles.input}
          placeholder="tu@correo.com"
        />
      </label>

      <div className={styles.inputGroup}>
        <label htmlFor="countryCode" className={`${styles.labelSmall} ${styles.countryCode}`}>
          Indicativo
          <select
            id="countryCode"
            name="countryCode"
            value={form.countryCode}
            onChange={handleChange}
            onBlur={handleBlur}
            className={styles.select}
          >
            {countryCodes.map(cc => (
              <option key={cc.code} value={cc.code}>{cc.label}</option>
            ))}
          </select>
        </label>

        <label htmlFor="phone" className={`${styles.labelSmall} ${styles.phone}`}>
          Teléfono
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            className={styles.input}
            placeholder="123 456 789"
          />
        </label>
      </div>

      {error && <p className={styles.error}>{error}</p>}

      <button type="submit" className={styles.button} disabled={submitting}>
        {submitting ? 'Enviando...' : 'Sí, quiero más info gratis'}
      </button>
    </form>
  );
};

export default TestimonialForm;
