"use client";

import SubmitButton from "./SubmitButton";

// action ini nanti diisi dengan Server Action dari Anggota 3
// contoh: import { submitContact } from "@/app/actions/contact";

export default function ContactForm({ action }: { action: (formData: FormData) => Promise<void> }) {
  return (
    <form
      action={action}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        width: "100%",
        maxWidth: "500px",
        margin: "0 auto",
        padding: "0 16px", // responsive padding
      }}
    >
      <input
        name="name"
        type="text"
        placeholder="Nama Lengkap"
        required
        style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc", width: "100%", boxSizing: "border-box" }}
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        required
        style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc", width: "100%", boxSizing: "border-box" }}
      />
      <textarea
        name="message"
        placeholder="Pesan Anda..."
        required
        style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc", minHeight: "100px", width: "100%", boxSizing: "border-box" }}
      />
      <SubmitButton />
    </form>
  );
}