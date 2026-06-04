import { plans, comparisonRows } from "../data/pricingData";
import { cn } from "../lib/utils/cn";
import { Icon } from "./layout/Icon";
import { Badge } from "./ui/Badge";
import { GlassPanel } from "./ui/GlassPanel";

export default function PricingTable(){

    return(
              <section className="relative max-w-6xl mx-auto px-4 md:px-8 pb-24">
        <div className="text-center mb-10 space-y-3">
          <Badge tone="secondary">Comparaison</Badge>
          <h2 className="text-[28px] md:text-[36px] font-bold tracking-tight">
            Qu'est-ce qui change entre les offres ?
          </h2>
        </div>
        <GlassPanel className="p-2 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-outline-variant/30">
                  <th className="text-left p-4 text-[12px] font-label-caps tracking-[0.08em] uppercase text-on-surface-variant">Fonctionnalité</th>
                  {plans.map((p) => (
                    <th key={p.name} className={cn("p-4 text-[13px] font-bold", p.highlighted ? "text-primary" : "text-on-surface")}>
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, idx) => (
                  <tr
                    key={row.label}
                    className={cn(
                      "border-b border-outline-variant/20 last:border-0",
                      idx % 2 === 1 && "bg-white/[0.015]",
                    )}
                  >
                    <td className="p-4 text-[14px] text-on-surface-variant">{row.label}</td>
                    {row.values.map((v, j) => (
                      <td key={j} className="p-4 text-center">
                        {typeof v === "boolean" ? (
                          v ? (
                            <Icon name="check_circle" className="text-success text-[20px]" filled />
                          ) : (
                            <Icon name="remove" className="text-on-surface-variant/40 text-[20px]" />
                          )
                        ) : (
                          <span className="text-[14px] font-semibold text-on-surface">{v}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassPanel>
      </section>
    )
}