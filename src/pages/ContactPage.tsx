import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassPanel } from "../components/ui/GlassPanel";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { Icon } from "../components/layout/Icon";
// 1. Importer EmailJS
import emailjs from '@emailjs/browser';

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

    try {
      // 2. Appel à EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          hospital: formData.hospital,
          email: formData.email,
          phone: formData.phone || "Non renseigné",
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      setIsSuccess(true);
      setFormData({ name: "", hospital: "", email: "", phone: "", subject: "", message: "" });
      
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("Erreur EmailJS:", error);
      setErrorMsg("Une erreur est survenue lors de l'envoi. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* ... Le header reste identique ... */}

      <section className="relative max-w-7xl mx-auto px-4 md:px-8 pb-20">
        <div className="mx-44 lg:grid-cols-5 gap-6 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <GlassPanel variant="elevated" className="p-8 md:p-10 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-primary/15 blur-3xl" />
              <div className="relative z-10">
                <h2 className="text-[26px] font-bold mb-2">Envoyez-nous un message</h2>
                <p className="text-on-surface-variant text-[18px] mb-8">Réponse sous 24h ouvrées garantie.</p>

                {/* ALERTE DE SUCCÈS */}
                <AnimatePresence>
                  {isSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mb-6 bg-green-500/10 border border-green-500/30 text-green-700 dark:text-green-400 p-4 rounded-xl flex items-center gap-3 overflow-hidden"
                    >
                      <Icon name="check_circle" className="text-[24px]" />
                      <p className="text-[15px] font-medium">Votre message a bien été envoyé. Nous vous recontactons vite !</p>
                    </motion.div>
                  )}
                  
                  {/* ALERTE D'ERREUR */}
                  {errorMsg && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mb-6 bg-red-500/10 border border-red-500/30 text-red-700 dark:text-red-400 p-4 rounded-xl flex items-center gap-3 overflow-hidden"
                    >
                      <Icon name="error" className="text-[24px]" />
                      <p className="text-[15px] font-medium">{errorMsg}</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Le reste du formulaire est identique au code précédent, avec onSubmit={handleSubmit} sur la balise <form> */}
                
// ... la suite du composant ...