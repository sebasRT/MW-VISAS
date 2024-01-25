interface EmailTemplateProps {
    clientName: string;
    email: string;
    phone: number; 
    procedure: {
        type: string; 
        sub?: string;
    }
    details?: string
  }
  
  export const NewClientTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    clientName, email, phone, procedure, details
  }) => (
    <div>
      <h3>Nuevo cliente interesado en tus servicios.</h3>
      <h4>{procedure.type} {procedure.sub}</h4>
      <br />
      <b>Datos del cliente:</b>
      <br />
      <p><b>Nombre:</b> {clientName}</p>
      <p><b>Correo:</b> {email}</p>
      <p><b>Teléfono: </b>{phone}</p>
      <p><b>Tramite: </b>{procedure.type} - {procedure.sub}</p>
      {
        details && <p><b>Detalles: </b>{details}</p>
      }
    </div>
  );