'use client'

const PrivacidadPage: React.FC = () => {
  return (
    <div style={{
      margin: '0 auto',
      maxWidth: '800px',
      padding: '20px'
  }}>
      <h1 className="text-3xl font-bold mb-4">Política de Privacidad</h1>
      <p className="mb-4">Nos tomamos muy en serio la privacidad de nuestros usuarios. Esta política de privacidad describe cómo recopilamos, utilizamos y protegemos la información personal que usted proporciona en nuestro sitio web.</p>
      <h2 className="text-xl font-bold mb-2">Recopilación de información:</h2>
      <p className="mb-4">Recopilamos información personal como nombres, direcciones de correo electrónico y números de teléfono solo cuando usted la proporciona voluntariamente al registrarse en nuestro sitio o completar formularios en línea.</p>
      <h2 className="text-xl font-bold mb-2">Uso de la información:</h2>
      <p className="mb-4">Utilizamos la información proporcionada para procesar sus pedidos, brindarle soporte al cliente y enviarle actualizaciones sobre nuestros productos y servicios.</p>
      <h2 className="text-xl font-bold mb-2">Protección de la información:</h2>
      <p className="mb-4">Nos comprometemos a proteger la seguridad de su información personal y utilizamos medidas de seguridad físicas, electrónicas y administrativas para protegerla contra el acceso no autorizado.</p>
      <h2 className="text-xl font-bold mb-2">Divulgación a terceros:</h2>
      <p className="mb-4">No vendemos, intercambiamos ni transferimos su información personal a terceros sin su consentimiento explícito, excepto cuando sea necesario para cumplir con la ley o proteger nuestros derechos legales.</p>
      <h2 className="text-xl font-bold mb-2">Consentimiento:</h2>
      <p>Al utilizar nuestro sitio, usted acepta nuestra política de privacidad y el procesamiento de su información personal de acuerdo con los términos descritos aquí.</p>
    </div>
  );
}

export default PrivacidadPage;
