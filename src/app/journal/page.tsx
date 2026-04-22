import type { Metadata } from "next";
import JournalContent from "./JournalContent";

export const metadata: Metadata = {
  title: "Journal — Sanctum Lombok",
  description:
    "Long-form perspectives on architecture, movement, ritual, and the philosophy behind Sanctum Lombok. No hot takes — considered writing for considered people.",
};

export default function JournalPage() {
  return <JournalContent />;
}
