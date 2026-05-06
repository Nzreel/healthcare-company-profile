"use client";

import { useState } from "react";
import ContactForm from "../components/ContactForm";
import { submitContact } from "../actions/contact";

export default function Contact() {
  const [success, setSuccess] = useState(false);

  async function handleSubmit(formData: FormData) {
    await submitContact(formData);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 4000); // notif hilang setelah 4 detik
  }

  return (
    <main
      style={{
        padding: "60px 20px",
        textAlign: "center",
        fontFamily: "sans-serif",
      }}
    >
      <h1 style={{ fontSize: "32px", marginBottom: "8px" }}>Contact Us</h1>
      <p style={{ color: "#6b7280", marginBottom: "30px" }}>
        Hubungi kami untuk informasi lebih lanjut.
      </p>

      {success && (
        <div
          style={{
            backgroundColor: "#d1fae5",
            color: "#065f46",
            padding: "12px 20px",
            borderRadius: "8px",
            marginBottom: "20px",
            maxWidth: "500px",
            margin: "0 auto 20px auto",
            fontWeight: "bold",
          }}
        >
          ✅ Pesan berhasil dikirim! Kami akan segera menghubungi Anda.
        </div>
      )}

      <ContactForm action={handleSubmit} />
    </main>
  );
}