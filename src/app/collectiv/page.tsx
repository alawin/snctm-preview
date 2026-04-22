import type { Metadata } from "next";
import CollectivContent from "./CollectivContent";

export const metadata: Metadata = {
  title: "Collectiv — Sanctum Lombok",
  description:
    "The Collectiv is Sanctum Lombok's residency model — a curated community of people who train, build, and live with intention. Applications considered on alignment, not urgency.",
};

export default function CollectivPage() {
  return <CollectivContent />;
}
