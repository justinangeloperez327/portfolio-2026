import {
  ContactCallout,
  EngineeringPrinciples,
  Hero,
  ProfileSummary,
  SelectedWork,
} from "@/components/home";

export default function HomePage() {
  return (
    <main id="home">
      <Hero />
      <div className="container-page">
        <SelectedWork />
        <EngineeringPrinciples />
        <ProfileSummary />
        <ContactCallout />
      </div>
    </main>
  );
}
