import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let body: { name?: string; email?: string; note?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const note = body.note?.trim() ?? "";

  if (!name || !email || !note) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }
  if (name.length > 200 || email.length > 200 || note.length > 4000) {
    return NextResponse.json({ error: "Too long" }, { status: 400 });
  }

  return NextResponse.json({ ok: true });
}
