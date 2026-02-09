import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Mensaje enviado", description: "Nos pondremos en contacto pronto." });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contacto" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          <span className="text-primary">Contacto</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          ¿Tenés consultas o querés trabajar con nosotros? Dejanos tu mensaje.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <Input
            placeholder="Nombre completo"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <div className="grid sm:grid-cols-2 gap-5">
            <Input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            <Input
              type="tel"
              placeholder="Teléfono"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
          </div>
          <Textarea
            placeholder="Tu mensaje..."
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
          />
          <Button
            type="submit"
            size="lg"
            className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-full text-base"
          >
            Enviar mensaje
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
