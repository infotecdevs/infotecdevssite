import {
  Body,
  Container,
  Head,
  Html,
  Heading,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

type Email = {
  name: string;
  email: string;
  message: string;
};

export const EmailTemplate = ({ name, email, message }: Email) => {
  return (
    <Html>
      <Head />
      <Preview>InfotecDevs</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>InfotecDevs</Heading>
          <Section>
            <Text style={text}>Olá meu nome é: {name}</Text>
            <Text style={text}>E-mail: {email}</Text>
            <Text style={text}>Mensagem: {message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default EmailTemplate;

const main = {
  backgroundColor: "#f6f9fc",
  padding: "10px 0",
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #f0f0f0",
  padding: "45px",
};

const text = {
  fontSize: "16px",
  fontFamily:
    "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
  fontWeight: "300",
  color: "#404040",
  lineHeight: "26px",
};

const h1 = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0",
  padding: "0",
};
