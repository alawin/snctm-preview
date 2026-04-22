import type { Metadata } from "next";
import PreBookContent from "./PreBookContent";

export const metadata: Metadata = {
  title: "Pre-Book — Sanctum Lombok",
  description:
    "Register your interest in Sanctum Lombok. No booking pressure, no urgency language — just a conversation about whether this is the right fit.",
};

export default function PreBookPage() {
  return <PreBookContent />;
}
