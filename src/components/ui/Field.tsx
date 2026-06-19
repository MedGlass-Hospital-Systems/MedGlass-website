/* ============================================================
   SOUS-COMPOSANT CHAMP DE FORMULAIRE (FIELD)
   ============================================================ */
interface FieldProps {
  label: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  optional?: boolean;
  required?: boolean;
}

export default function Field({ label, placeholder, name, value, onChange, type = "text", optional, required }: FieldProps) {
  return (
    <div className="space-y-2">
      <label className="text-[12px] font-semibold tracking-wider uppercase text-on-surface-variant pl-1 flex justify-between">
        <span>{label}</span>
        {optional && <span className="text-on-surface-variant/50 normal-case tracking-normal">facultatif</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full bg-surface-container-high/50 border border-outline/40 rounded-xl px-4 py-4 text-[15px] text-on-surface placeholder:text-on-surface-variant/40 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
      />
    </div>
  );
}