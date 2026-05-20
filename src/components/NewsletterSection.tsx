"use client"

import { useState } from "react"

export default function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("loading")
    setMessage("")

    const res = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    })

    let data: { error?: string } = {}
    try {
      data = await res.json()
    } catch {
      // prazno telo odgovora
    }

    if (res.ok) {
      setStatus("success")
      setMessage("Uspešno si se prijavio! Vidimo se u inboxu.")
      setEmail("")
    } else {
      setStatus("error")
      setMessage(data.error || "Greška pri prijavi. Pokušaj ponovo.")
    }
  }

  return (
    <section className="relative overflow-hidden" style={{ minHeight: "500px" }}>
      {/* Video pozadina */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/newsletter.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Tamni overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Sadržaj */}
      <div className="relative flex items-center justify-center min-h-[500px] px-8 py-20">
        <div
          style={{
            background: "#ffffff",
            border: "1.5px solid #2d6a4f",
            borderRadius: "4px",
            padding: "48px 40px",
            maxWidth: "520px",
            width: "100%",
          }}
        >
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 600,
              color: "#111110",
              marginBottom: "12px",
              lineHeight: 1.3,
            }}
          >
            Prijavi se na newsletter
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "#4b5563",
              marginBottom: "28px",
              lineHeight: 1.6,
            }}
          >
            Novi tekstovi, zapažanja i teme — direktno u tvoj inbox.
          </p>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              disabled={status === "loading" || status === "success"}
              style={{
                display: "block",
                width: "100%",
                padding: "12px 16px",
                border: "1px solid #d1d5db",
                borderRadius: "2px",
                fontSize: "1rem",
                color: "#111110",
                outline: "none",
                marginBottom: "12px",
                boxSizing: "border-box",
                background: status === "success" ? "#f9fafb" : "#ffffff",
              }}
            />
            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              style={{
                display: "block",
                width: "100%",
                padding: "13px 16px",
                background: status === "success" ? "#4b5563" : "#2d6a4f",
                color: "#ffffff",
                border: "none",
                borderRadius: "2px",
                fontSize: "1rem",
                cursor: status === "loading" || status === "success" ? "default" : "pointer",
                transition: "opacity 0.2s",
                opacity: status === "loading" ? 0.7 : 1,
              }}
            >
              {status === "loading"
                ? "Prijavljujem..."
                : status === "success"
                ? "Prijavljen!"
                : "Prijavi se na newsletter"}
            </button>
          </form>

          {message && (
            <p
              style={{
                marginTop: "14px",
                fontSize: "0.875rem",
                color: status === "success" ? "#2d6a4f" : "#dc2626",
              }}
            >
              {message}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
