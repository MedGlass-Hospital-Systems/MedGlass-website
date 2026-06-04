import { motion } from "framer-motion";
import { faqs } from "../data/pricingData";
import { Icon } from "./layout/Icon";
import { Badge } from "./ui/Badge";

export default function FaqTable(){

    return(
    
    <section className="relative max-w-3xl mx-auto px-4 md:px-8 pb-24">
        <div className="text-center mb-10 space-y-3">
          <Badge tone="tertiary">FAQ</Badge>
          <h2 className="text-[28px] md:text-[36px] font-bold tracking-tight">Questions fréquentes</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <motion.details
              key={f.q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group glass-card rounded-2xl px-6 py-5 cursor-pointer transition-colors hover:border-primary/30 [&[open]>summary>.icon]:rotate-45"
            >
              <summary className="flex justify-between items-center gap-4 list-none">
                <span className="font-semibold text-[16px] text-on-surface">{f.q}</span>
                <span className="icon shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary transition-transform duration-300">
                  <Icon name="add" className="text-[18px]" />
                </span>
              </summary>
              <p className="mt-4 text-[15px] text-on-surface-variant leading-relaxed">{f.a}</p>
            </motion.details>
          ))}
        </div>
      </section>
    )
}