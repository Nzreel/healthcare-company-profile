"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      style={{
        background: pending ? "#93c5fd" : "#2563eb",
        color: "white",
        padding: "10px",
        border: "none",
        borderRadius: "6px",
        cursor: pending ? "not-allowed" : "pointer",
        width: "100%",
      }}
    >
      {pending ? "Mengirim..." : "Send Message"}
    </button>
  );
}