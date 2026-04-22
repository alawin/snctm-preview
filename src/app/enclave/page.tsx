import type { Metadata } from "next";
import EnclaveContent from "./EnclaveContent";

export const metadata: Metadata = {
  title: "Enclave — Sanctum Lombok",
  description:
    "Architect-designed accommodation at Sanctum Lombok. Villas, suites, and rooms built for long stays — where every surface, sightline, and material has been considered.",
};

export default function EnclavePage() {
  return <EnclaveContent />;
}
