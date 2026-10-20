export default function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <header className="inner-page-intro"><p className="section-eyebrow">{eyebrow}</p><h1>{title}</h1><p className="inner-page-lead">{description}</p></header>;
}
