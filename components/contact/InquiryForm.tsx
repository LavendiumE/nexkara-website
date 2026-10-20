"use client";

import { useRef, useState, type ChangeEvent, type FocusEvent, type FormEvent } from "react";

type InquiryField = "name" | "email" | "service" | "message";
type FieldErrors = Partial<Record<InquiryField, string>>;

const requiredFields: InquiryField[] = ["name", "email", "service", "message"];

function validateField(field: InquiryField, value: string, emailIsValid = true) {
  if (!value.trim()) {
    return field === "name" ? "Nama wajib diisi." : field === "email" ? "Email wajib diisi." : field === "service" ? "Pilih jenis kebutuhan." : "Deskripsi kebutuhan wajib diisi.";
  }
  if (field === "email" && !emailIsValid) {
    return "Masukkan alamat email dengan format yang benar.";
  }
  return "";
}

export default function InquiryForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState("");

  function handleBlur(event: FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = event.currentTarget;
    if (!requiredFields.includes(name as InquiryField)) return;
    const field = name as InquiryField;
    const emailIsValid = field !== "email" || (event.currentTarget as HTMLInputElement).validity.valid;
    setErrors((current) => ({ ...current, [field]: validateField(field, value, emailIsValid) }));
  }

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const field = event.currentTarget.name as InquiryField;
    const value = event.currentTarget.value;
    const emailIsValid = field !== "email" || (event.currentTarget as HTMLInputElement).validity.valid;
    if (!requiredFields.includes(field)) return;
    setErrors((current) => current[field] ? { ...current, [field]: validateField(field, value, emailIsValid) } : current);
    setStatus("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const nextErrors: FieldErrors = {};
    const emailControl = formRef.current?.elements.namedItem("email") as HTMLInputElement | null;
    for (const field of requiredFields) {
      const emailIsValid = field !== "email" || Boolean(emailControl?.validity.valid);
      const error = validateField(field, String(formData.get(field) ?? ""), emailIsValid);
      if (error) nextErrors[field] = error;
    }
    setErrors(nextErrors);
    const firstInvalid = requiredFields.find((field) => nextErrors[field]);
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      setStatus("Periksa kembali bagian yang ditandai.");
      return;
    }

    setStatus("Belum terkirim. Formulir ini belum terhubung ke tujuan pengiriman, jadi informasi yang kamu isi tidak dikirim atau disimpan.");
  }

  return (
    <form className="inquiry-form" ref={formRef} noValidate onSubmit={handleSubmit}>
      <p className="inquiry-form-notice">Formulir ini belum terhubung ke layanan pengiriman. Informasi yang diisi tidak akan dikirim atau disimpan.</p>

      <div className="inquiry-form-fields">
        <label className="inquiry-field">
          <span>Nama <b aria-hidden="true">*</b></span>
          <input id="inquiry-name" name="name" autoComplete="name" placeholder="Nama lengkap" required aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "inquiry-name-error" : undefined} onBlur={handleBlur} onChange={handleChange} />
          {errors.name && <span className="inquiry-field-error" id="inquiry-name-error">{errors.name}</span>}
        </label>
        <label className="inquiry-field">
          <span>Email <b aria-hidden="true">*</b></span>
          <input id="inquiry-email" name="email" type="email" autoComplete="email" placeholder="nama@email.com" required aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "inquiry-email-error" : undefined} onBlur={handleBlur} onChange={handleChange} />
          {errors.email && <span className="inquiry-field-error" id="inquiry-email-error">{errors.email}</span>}
        </label>
        <label className="inquiry-field">
          <span>Nama bisnis atau perusahaan <small>Opsional</small></span>
          <input id="inquiry-business" name="business" autoComplete="organization" placeholder="Nama bisnis atau organisasi" />
        </label>
        <label className="inquiry-field">
          <span>Jenis kebutuhan <b aria-hidden="true">*</b></span>
          <select id="inquiry-service" name="service" defaultValue="" required aria-invalid={Boolean(errors.service)} aria-describedby={errors.service ? "inquiry-service-error" : undefined} onBlur={handleBlur} onChange={handleChange}>
            <option value="" disabled>Pilih jenis kebutuhan</option>
            <option>Creative &amp; Branding</option>
            <option>IT &amp; Digital Solutions</option>
            <option>Printing &amp; Merchandise</option>
            <option>Kombinasi beberapa layanan</option>
            <option>Belum yakin</option>
          </select>
          {errors.service && <span className="inquiry-field-error" id="inquiry-service-error">{errors.service}</span>}
        </label>
        <label className="inquiry-field">
          <span>Perkiraan anggaran <small>Opsional</small></span>
          <select id="inquiry-budget" name="budget" defaultValue="">
            <option value="">Belum ditentukan</option>
            <option>Saya ingin mendiskusikannya</option>
          </select>
        </label>
        <label className="inquiry-field inquiry-field--wide">
          <span>Deskripsi kebutuhan proyek <b aria-hidden="true">*</b></span>
          <textarea id="inquiry-message" name="message" rows={6} placeholder="Ceritakan tujuan, kebutuhan, atau gambaran proyekmu." required aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "inquiry-message-error" : undefined} onBlur={handleBlur} onChange={handleChange} />
          {errors.message && <span className="inquiry-field-error" id="inquiry-message-error">{errors.message}</span>}
        </label>
      </div>

      {status && <p className="inquiry-form-status" role="status">{status}</p>}
      <button className="inquiry-form-submit" type="submit">Kirim Pertanyaan <span aria-hidden="true">↗</span></button>
    </form>
  );
}
