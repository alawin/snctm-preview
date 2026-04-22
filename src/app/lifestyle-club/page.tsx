import type { Metadata } from "next";
import LifestyleClubContent from "./LifestyleClubContent";

export const metadata: Metadata = {
  title: "Sanctum — Training Environment",
  description:
    "Not a gym. A sovereign training environment. Performance gym, movement studio, and recovery — daily ritual as membership.",
};

export default function LifestyleClubPage() {
  return (
    <main>
      <LifestyleClubContent />
    </main>
  );
}
