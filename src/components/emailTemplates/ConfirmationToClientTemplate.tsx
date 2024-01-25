import React from 'react'
import { Html, Body, Container, Img, Heading, Hr, Font, Head, Text } from '@react-email/components'

interface EmailTemplateProps {
    clientName: string;
}

export const ConfirmationToClientTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    clientName
}) => (
    <Html>
        <Head>
            {/* <title>Confirmación</title> */}
            <Font fontFamily='Georgia' fallbackFontFamily="Times New Roman" />
        </Head>
        <Body>

            <Container>
                <Img src='https://www.mwvisas.co/mw-visasLogo.webp' width="150" height="150" style={{ margin: "0 auto", borderRadius: "50%" }} />
                <br />
                <Hr />
                <Heading as="h2">Hola! {clientName}</Heading>
                <p className='text-xl'></p>
                <Text style={{ fontSize: "1.25rem" }}>Hemos recibido tus datos exitosamente y pronto un consultor experto en tu tramite se contactará contigo.</Text>
                <Text style={{ fontSize: "1.25rem" }}>saludos cordiales.</Text>
                <br />
                <Hr />
                <div style={{ margin: "0 auto", textAlign: "center" }}>
                    <h3>MW VISAS S.A.S</h3>
                    <p>INFO@MWVISAS.CO</p>
                    <p>Bogotá, Colombia </p>
                    <p>6019157539</p>
                </div>
            </Container>
        </Body>
    </Html>
);