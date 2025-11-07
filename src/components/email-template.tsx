import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ name, email, message }) => (
  <div>
    <h1>New message from {name}</h1>
    <p>From: {email}</p>
    <p>{message}</p>
  </div>
);
