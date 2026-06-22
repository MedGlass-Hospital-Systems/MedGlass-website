import { useState } from "react";
import { motion } from "framer-motion";
import { GlassPanel } from "../components/ui/GlassPanel";
import { Button } from "../components/ui/Button";
import { Icon } from "../components/layout/Icon";
import Field from "../components/ui/Field";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    hospital: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");
    setIsSuccess(false);

    const combinedMessage = `
Nom: ${formData.name}
Établissement: ${formData.hospital}
Téléphone: ${formData.phone || "Non renseigné"}

Message:
${formData.message}
    `.trim();

    try {
      const response = await fetch("https://medglass-backend.onrender.com/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          visitorEmail: formData.email,
          subject: formData.subject,
          message: combinedMessage,
        }),
      });

      if (!response.ok) {
        throw new Error("Erreur réseau");
      }

      setIsSuccess(true);
      setFormData({ name: "", hospital: "", email: "", phone: "", subject: "", message: "" });
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("Erreur d'envoi:", error);
      setErrorMsg("Une erreur est survenue lors de l'envoi. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden font-sans">
      

      <div className="fixed inset-0 z-0 pointer-events-none bg-background">
        {/* L'image de fond (Plan fixe) */}
        <img 
          src="/night.webp" // Assure-toi que le chemin est correct
          alt="Fond spatial MedGlass" 
          className="object-cover"
        />

      </div>

      {/* ====================================================
        CONTENU PRINCIPAL DE LA PAGE
        ==================================================== 
      */}
      <div className="relative z-10 text-on-background">
        
        {/* HEADER */}
        <section className="relative max-w-4xl mx-auto px-4 md:px-8 pt-32 md:pt-40 pb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >

            
            <h1 className="text-[44px] md:text-[60px] text-on-surface font-extrabold tracking-tight leading-[1.05]">
              Parlons de votre{" "}
              <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-secondary drop-shadow-[0_0_20px_rgba(140,143,240,0.3)]">
                organisation
              </span>
            </h1>
            <p className="text-on-surface-variant text-[18px] md:text-[20px] max-w-2xl mx-auto leading-relaxed">
              Démo, support technique, partenariats : notre équipe vous répond sous 24h ouvrées.
            </p>
          </motion.div>
        </section>

        {/* FORMULAIRE */}
        <section className="relative max-w-4xl mx-auto px-4 md:px-8 pb-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Design Glassmorphism adapté au thème MedGlass */}
            <GlassPanel 
              variant="elevated" 
              className="p-8 md:p-12 relative overflow-hidden bg-surface-container/60 border border-outline/50 shadow-2xl  backdrop-blur-lg"
            >
              {/* Lueur d'accentuation en haut à droite du formulaire */}
              
              <div className="relative z-10">
                <h2 className="text-[28px] font-bold mb-2 text-on-surface">Envoyez-nous un message</h2>
                <p className="text-on-surface-variant text-[16px] mb-8">
                  Toutes les demandes sont envoyées à l'adresse{" "}
                  <a href="mailto:contact@medglass.fr" className="text-secondary hover:underline font-medium">contact@medglass.fr</a>
                </p>

                {/* Messages de succès / erreur */}
                {isSuccess && (
                  <div className="mb-8 p-4 bg-success/10 text-success rounded-xl border border-success/30 flex items-center gap-3 font-medium">
                    <Icon name="check_circle" className="text-[20px]" filled />
                    Votre message a été envoyé avec succès !
                  </div>
                )}
                {errorMsg && (
                  <div className="mb-8 p-4 bg-error/10 text-error rounded-xl border border-error/30 flex items-center gap-3 font-medium">
                    <Icon name="error" className="text-[20px]" filled />
                    {errorMsg}
                  </div>
                )}

                {/* Début du Formulaire */}
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Field
                      label="Nom complet"
                      placeholder="Dr. Jeanne Dupont"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <Field
                      label="Établissement"
                      placeholder="CHU de Bordeaux"
                      name="hospital"
                      value={formData.hospital}
                      onChange={handleChange}
                      required
                    />
                    <Field
                      label="Email professionnel"
                      type="email"
                      placeholder="jeanne.dupont@hopital.fr"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <Field
                      label="Téléphone"
                      type="tel"
                      placeholder="+33 6 12 34 56 78"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      optional
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[12px] font-semibold tracking-wider uppercase text-on-surface-variant pl-1">
                      Sujet
                    </label>
                    <div className="relative">
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full bg-surface-container-high/50 border border-outline/40 rounded-xl px-4 py-4 text-[15px] text-on-surface appearance-none cursor-pointer focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                      >
                        <option value="" disabled className="bg-surface-container text-on-surface-variant">Sélectionnez un sujet…</option>
                        <option value="demo" className="bg-surface-container">Démonstration / commercial</option>
                        <option value="support" className="bg-surface-container">Support technique</option>
                        <option value="partnership" className="bg-surface-container">Partenariat</option>
                        <option value="other" className="bg-surface-container">Autre</option>
                      </select>
                      <Icon name="expand_more" className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[12px] font-semibold tracking-wider uppercase text-on-surface-variant pl-1">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Décrivez votre service, vos enjeux, votre calendrier…"
                      className="w-full bg-surface-container-high/50 border border-outline/40 rounded-xl px-4 py-4 text-[15px] text-on-surface placeholder:text-on-surface-variant/40 resize-none focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                    />
                  </div>

                  {/* Checkbox de consentement */}
                  <div className="flex items-start gap-3 text-[14px] text-on-surface-variant pt-2">
                    <input
                      type="checkbox"
                      defaultChecked
                      required
                      className="mt-1 min-w-4 w-4 h-4 rounded border-outline bg-surface-container-high accent-primary"
                    />
                    <span className="leading-relaxed">
                      J'accepte que MedGlass utilise mes informations pour me recontacter. Aucune donnée n'est partagée avec un tiers.{" "}
                      <a href="/legal/privacy" className="text-secondary hover:underline font-medium">Politique de confidentialité</a>.
                    </span>
                  </div>

                  <div className="pt-6 flex justify-end border-t border-outline/30 mt-8">
                    <Button
                      type="submit"
                      size="lg"
                      icon="send"
                      iconPosition="right"
                      disabled={isSubmitting}
                      className="bg-primary text-on-primary hover:bg-primary-container shadow-[0_4px_20px_rgba(118,208,151,0.3)] w-full md:w-auto px-10"
                    >
                      {isSubmitting ? "Envoi en cours..." : "Envoyer la demande"}
                    </Button>
                  </div>
                </form>
              </div>
            </GlassPanel>
          </motion.div>
        </section>
      </div>
    </div>
  );
}

