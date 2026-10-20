import { permanentRedirect } from "next/navigation";

export default function LegacyPortfolioRoute() {
  permanentRedirect("/portfolio");
}
