"use server";

export async function submitContact(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  console.log("Form submitted:", { name, email, message });
}