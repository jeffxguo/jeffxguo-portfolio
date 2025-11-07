'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await response.json();

    if (response.ok) {
      toast({
        title: 'Success!',
        description: 'Your message has been sent.',
      });
      setName('');
      setEmail('');
      setMessage('');
    } else {
      toast({
        title: 'Error',
        description: data.error || 'Something went wrong.',
        variant: 'destructive',
      });
    }
  };

  return (
    <section id="contact" className="container py-24 sm:py-32">
      <Card>
        <CardHeader>
          <CardTitle className="text-4xl font-bold text-center">Contact Me</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <Input placeholder="Name" name="name" value={name} onChange={e => setName(e.target.value)} />
            <Input placeholder="Email" type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
            <Textarea placeholder="Message" name="message" value={message} onChange={e => setMessage(e.target.value)} />
            <Button>Send Message</Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
