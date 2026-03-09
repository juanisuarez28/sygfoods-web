import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/atencionalcliente@sygfoods.com.ar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          Nombre: form.name,
          Email: form.email,
          Teléfono: form.phone,
          Mensaje: form.message,
          _subject: "Nuevo contacto desde la web de SyG Foods"
        })
      });

      if (response.ok) {
        toast({ title: "Mensaje enviado", description: "Nos pondremos en contacto pronto." });
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        toast({ title: "Error", description: "Hubo un problema al enviar el mensaje. Intentá nuevamente.", variant: "destructive" });
      }
    } catch (error) {
      toast({ title: "Error", description: "Hubo un problema de conexión. Intentá nuevamente.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
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
            disabled={isSubmitting}
            className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-full text-base transition-all"
          >
            {isSubmitting ? "Enviando..." : "Enviar mensaje"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
