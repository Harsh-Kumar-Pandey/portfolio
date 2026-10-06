"use client";
import { useState } from "react";

export default function ContactForm() {
  const [state, setState] = useState({ status: "idle", msg: "" });
  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setState({ status: "sending", msg: "" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Could not send the message.");
      form.reset();
      setState({ status: "sent", msg: "Message sent. I'll reply within a day or two." });
    } catch (err) {
      setState({ status: "error", msg: err.message });
    }
  }
  return (
    <form className="form" onSubmit={onSubmit}>
      <label>Name<input name="name" required maxLength={80} placeholder="Your name" /></label>
      <label>Email<input name="email" type="email" required maxLength={120} placeholder="you@company.com" /></label>
      <label>Subject<input name="subject" required maxLength={120} placeholder="What is this about?" /></label>
      <label>Message<textarea name="message" required maxLength={3000} rows={5} placeholder="Write your message here" /></label>
      <input name="website" tabIndex={-1} autoComplete="off" className="hp" aria-hidden="true" />
      <button className="btn" disabled={state.status === "sending"}>{state.status === "sending" ? "Sending..." : "Send message"}</button>
      <p className={`note ${state.status}`} role="status">{state.msg}</p>
    </form>
  );
}
