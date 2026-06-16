import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { EVENT_INFO } from "../config/event";
import ConfirmationModal from "./ConfirmationModal";
import FormBenefitCard from "./FormBenefitCard";
import SectionLabel from "./SectionLabel";

type FormState = {
  nome: string;
  telefone: string;
  email: string;
  cidade: string;
  bairro: string;
  origem: string;
  convidadoPor: string;
};

const initialForm: FormState = {
  nome: "",
  telefone: "",
  email: "",
  cidade: "Angra dos Reis",
  bairro: "",
  origem: "",
  convidadoPor: "",
};

const requiredFields: Array<keyof FormState> = [
  "nome",
  "telefone",
  "cidade",
  "bairro",
];

const cityOptions = [
  "Angra dos Reis",
  "Mangaratiba",
  "Paraty",
  "Itaguaí",
  "Rio Claro",
  "Rio de Janeiro",
];

const originOptions = ["Internet", "Rádio", "Televisão", "Rua"];

function isGoogleFormConfigured() {
  const entries = Object.values(EVENT_INFO.googleFormEntries);

  return (
    EVENT_INFO.googleFormAction.includes("docs.google.com/forms") &&
    !EVENT_INFO.googleFormAction.includes("SEU_FORM_ID") &&
    entries.every((entry) => /^entry\.\d+$/.test(entry))
  );
}

export default function RegistrationForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormState, string>>
  >({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formError, setFormError] = useState("");

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: "" }));
    setFormError("");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: Partial<Record<keyof FormState, string>> = {};

    requiredFields.forEach((field) => {
      if (!form[field].trim()) {
        nextErrors[field] = "Campo obrigatório.";
      }
    });

    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Informe um e-mail válido.";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    if (!isGoogleFormConfigured()) {
      setFormError(
        "Formulario ainda nao configurado. Preencha a URL formResponse e as entries do Google Forms em src/config/event.ts.",
      );
      return;
    }

    const formData = new FormData();
    const entries = EVENT_INFO.googleFormEntries;

    formData.append(entries.nome, form.nome);
    formData.append(entries.telefone, form.telefone);
    formData.append(entries.email, form.email);
    formData.append(entries.cidade, form.cidade);
    formData.append(entries.bairro, form.bairro);
    formData.append(entries.origem, form.origem);
    formData.append(entries.convidadoPor, form.convidadoPor);
    formData.append("fvv", "1");
    formData.append("fbzx", "-6372066568266377856");
    formData.append("pageHistory", "0");

    setIsSubmitting(true);
    setFormError("");

    try {
      await fetch(EVENT_INFO.googleFormAction, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      setForm(initialForm);
      setErrors({});
      setIsModalOpen(true);
    } catch {
      setFormError(
        "Não foi possível enviar sua confirmação. Verifique sua conexão e tente novamente.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="inscricao" className="brasil-texture py-16 sm:py-20">
      <div className="section-shell">
        <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <FormBenefitCard />
          <div className="rounded-[28px] border border-yellow-900/10 bg-white p-5 shadow-lift sm:p-8 lg:p-10">
            <div className="max-w-2xl">
              <SectionLabel>Confirme sua presença</SectionLabel>
              <h2 className="mt-4 text-3xl font-black leading-tight text-ink sm:text-4xl">
                Faça seu credenciamento antecipado
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-700">
                Preencha seus dados para receber informações e facilitar seu
                acesso ao evento.
              </p>
            </div>

            <form
              className="mt-8 grid gap-5 sm:grid-cols-2"
              onSubmit={handleSubmit}
              noValidate
            >
              <Field
                label="Nome completo"
                value={form.nome}
                error={errors.nome}
                onChange={(value) => updateField("nome", value)}
                autoComplete="name"
              />
              <Field
                label="Telefone/WhatsApp"
                value={form.telefone}
                error={errors.telefone}
                onChange={(value) => updateField("telefone", value)}
                autoComplete="tel"
              />
              <Field
                label="E-mail"
                type="email"
                value={form.email}
                error={errors.email}
                onChange={(value) => updateField("email", value)}
                autoComplete="email"
              />
              <SelectField
                label="Cidade"
                value={form.cidade}
                options={cityOptions}
                error={errors.cidade}
                onChange={(value) => updateField("cidade", value)}
              />
              <Field
                label="Bairro"
                value={form.bairro}
                error={errors.bairro}
                onChange={(value) => updateField("bairro", value)}
              />
              <RadioGroup
                label="Como ficou sabendo do evento?"
                value={form.origem}
                options={originOptions}
                onChange={(value) => updateField("origem", value)}
              />
              <div className="sm:col-span-2">
                <Field
                  label="Quem o convidou? opcional"
                  value={form.convidadoPor}
                  onChange={(value) => updateField("convidadoPor", value)}
                />
              </div>

              {formError && (
                <p className="rounded-[18px] border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold leading-6 text-red-700 sm:col-span-2">
                  {formError}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-brasilYellow px-6 py-4 text-sm font-black uppercase text-deepNavy shadow-warm transition hover:-translate-y-0.5 hover:bg-gold disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 sm:col-span-2"
              >
                <Send size={20} />
                {isSubmitting ? "Enviando..." : "Quero participar"}
              </button>
            </form>
          </div>
        </div>
      </div>

      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        whatsappGroupLink={EVENT_INFO.whatsappGroupLink}
      />
    </section>
  );
}

type FieldProps = {
  label: string;
  value: string;
  error?: string;
  type?: string;
  autoComplete?: string;
  onChange: (value: string) => void;
};

function Field({
  label,
  value,
  error,
  type = "text",
  autoComplete,
  onChange,
}: FieldProps) {
  const id = getFieldId(label);

  return (
    <label className="block text-sm font-bold text-ink" htmlFor={id}>
      {label}
      <input
        id={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(event) => onChange(event.target.value)}
        className="focus-ring mt-2 w-full rounded-2xl border border-yellow-900/15 bg-warmWhite px-4 py-3 text-base font-normal text-ink outline-none transition focus:border-brasilGreen focus:bg-white"
      />
      {error && (
        <span
          id={`${id}-error`}
          className="mt-2 block text-xs font-semibold text-red-700"
        >
          {error}
        </span>
      )}
    </label>
  );
}

type SelectFieldProps = {
  label: string;
  value: string;
  options: string[];
  error?: string;
  onChange: (value: string) => void;
};

function SelectField({
  label,
  value,
  options,
  error,
  onChange,
}: SelectFieldProps) {
  const id = getFieldId(label);

  return (
    <label className="block text-sm font-bold text-ink" htmlFor={id}>
      {label}
      <select
        id={id}
        value={value}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(event) => onChange(event.target.value)}
        className="focus-ring mt-2 w-full rounded-2xl border border-yellow-900/15 bg-warmWhite px-4 py-3 text-base font-normal text-ink outline-none transition focus:border-brasilGreen focus:bg-white"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && (
        <span
          id={`${id}-error`}
          className="mt-2 block text-xs font-semibold text-red-700"
        >
          {error}
        </span>
      )}
    </label>
  );
}

type RadioGroupProps = {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
};

function RadioGroup({ label, value, options, onChange }: RadioGroupProps) {
  const id = getFieldId(label);

  return (
    <fieldset className="block text-sm font-bold text-ink">
      <legend>{label}</legend>
      <div className="mt-2 grid gap-2 rounded-2xl border border-yellow-900/15 bg-warmWhite p-3 sm:grid-cols-2">
        {options.map((option) => {
          const optionId = `${id}-${getFieldId(option)}`;

          return (
            <label
              key={option}
              className="focus-within:ring-brasilGreen/40 flex cursor-pointer items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-white focus-within:ring-2"
              htmlFor={optionId}
            >
              <input
                id={optionId}
                type="radio"
                name={id}
                value={option}
                checked={value === option}
                onChange={(event) => onChange(event.target.value)}
                className="h-4 w-4 accent-brasilGreen"
              />
              {option}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

function getFieldId(label: string) {
  return label
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-");
}
