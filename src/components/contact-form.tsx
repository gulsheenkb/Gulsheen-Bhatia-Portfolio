"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Status = "idle" | "sending" | "success" | "error";

const fieldClass =
  "h-11 rounded-xl border-0 bg-[#f3f1ee] px-4 text-sm shadow-none placeholder:text-neutral-400 focus-visible:ring-2 focus-visible:ring-[#ffb8b9]";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
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

    setStatus("success");
    form.reset();
  }

  if (status === "success") {
    return (
      <p role="status" className="rounded-xl bg-[#fff1f1] px-4 py-6 text-sm">
        Thank you. I’ll get back to you soon.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3.5" noValidate>
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
        className="min-h-[88px] rounded-xl border-0 bg-[#f3f1ee] px-4 py-3 text-sm shadow-none placeholder:text-neutral-400 focus-visible:ring-2 focus-visible:ring-[#ffb8b9]"
      />
      {status === "error" ? (
        <p role="alert" className="text-sm text-destructive">
          {message}
        </p>
      ) : null}
      <Button
        type="submit"
        disabled={status === "sending"}
        className="h-11 w-full rounded-xl bg-neutral-900 text-sm font-medium text-white hover:bg-neutral-800"
      >
        {status === "sending" ? "Sending…" : "Submit"}
      </Button>
    </form>
  );
}
