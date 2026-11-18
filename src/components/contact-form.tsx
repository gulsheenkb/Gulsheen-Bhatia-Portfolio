"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Status = "idle" | "sending" | "success" | "error";

const fieldClass =
  "h-10 rounded-md border-0 bg-neutral-100 px-3 text-sm shadow-none focus-visible:ring-1 focus-visible:ring-neutral-400";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");
    const form = event.currentTarget;
    const data = {
      name: String(new FormData(form).get("name") ?? "").trim(),
      email: String(new FormData(form).get("email") ?? "").trim(),
      note: String(new FormData(form).get("message") ?? "").trim(),
    };

    if (!data.name || !data.email || !data.note) {
      setStatus("error");
      setMessage("Please fill in your name, email, and a short message.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      setStatus("error");
      setMessage("That email doesn’t look quite right.");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <p role="status" className="text-sm">
        Thank you.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3" noValidate>
      <label className="sr-only" htmlFor="name">
        Name
      </label>
      <Input
        id="name"
        name="name"
        placeholder="Name"
        autoComplete="name"
        className={fieldClass}
      />
      <label className="sr-only" htmlFor="email">
        Email
      </label>
      <Input
        id="email"
        name="email"
        type="email"
        placeholder="Email"
        autoComplete="email"
        className={fieldClass}
      />
      <label className="sr-only" htmlFor="message">
        Message
      </label>
      <Textarea
        id="message"
        name="message"
        placeholder="Type your Message"
        className="min-h-[72px] rounded-md border-0 bg-neutral-100 px-3 py-2 text-sm shadow-none focus-visible:ring-1 focus-visible:ring-neutral-400"
      />
      {status === "error" ? (
        <p role="alert" className="text-sm text-destructive">
          {message}
        </p>
      ) : null}
      <Button
        type="submit"
        disabled={status === "sending"}
        className="h-9 w-full rounded-md bg-neutral-900 text-white hover:bg-neutral-800"
      >
        {status === "sending" ? "Sending…" : "Submit"}
      </Button>
    </form>
  );
}
