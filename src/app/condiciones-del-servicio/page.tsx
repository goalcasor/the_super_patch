'use client'

const CondicionesServicioPage: React.FC = () => {

  return (
    <div style={{
        margin: '0 auto',
        maxWidth: '800px',
        padding: '20px'
    }}>
      <h1 className="text-3xl font-bold mb-4">Condiciones de Servicio</h1>
      
      <h2 className="text-xl font-bold mb-2">Términos Generales:</h2>
      <p className="mb-4">
        Al acceder y utilizar nuestro sitio web, usted acepta cumplir con estos términos y condiciones. Nos reservamos el derecho de modificar estos términos en cualquier momento, por lo que le recomendamos revisarlos periódicamente.
      </p>
      
      <h2 className="text-xl font-bold mb-2">Compras y Pagos:</h2>
      <p className="mb-4">
        Todas las compras realizadas en nuestro sitio están sujetas a la disponibilidad del producto y a la confirmación del precio del pedido. Aceptamos diversas formas de pago y todos los pagos deben completarse antes de la entrega del producto.
      </p>
      
      <h2 className="text-xl font-bold mb-2">Envíos y Entregas:</h2>
      <p className="mb-4">
        Nos esforzamos por procesar y enviar todos los pedidos lo más rápido posible. Los tiempos de entrega pueden variar según su ubicación y la disponibilidad del producto. No somos responsables por retrasos causados por terceros.
      </p>
      
      <h2 className="text-xl font-bold mb-2">Devoluciones y Reembolsos:</h2>
      <p className="mb-4">
        Si no está satisfecho con su compra, puede devolver el producto dentro de los 30 días posteriores a la recepción para obtener un reembolso completo. El producto debe estar en su estado original y sin usar. Consulte nuestra política de devoluciones para obtener más detalles.
      </p>
      
      <h2 className="text-xl font-bold mb-2">Privacidad:</h2>
      <p className="mb-4">
        Nos comprometemos a proteger su privacidad y a utilizar su información personal únicamente según lo descrito en nuestra política de privacidad. No compartiremos su información con terceros sin su consentimiento.
      </p>
    </div>
  );
}

export default CondicionesServicioPage;
