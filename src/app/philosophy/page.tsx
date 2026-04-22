import type { Metadata } from "next";
import PhilosophyContent from "./PhilosophyContent";

export const metadata: Metadata = {
  title: "Philosophy — Sanctum Lombok",
  description:
    "Sovereignty, ritual, material language, longevity. The founding principles behind Sanctum — an architecturally led wellness ecosystem in Lombok.",
};

export default function PhilosophyPage() {
  return (
    <main>
      <PhilosophyContent />
    </main>
  );
}
