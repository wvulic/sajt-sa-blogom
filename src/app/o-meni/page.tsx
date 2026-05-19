import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "O meni",
};

export default function AboutPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 pt-32 pb-16">
      <h1 className="text-3xl font-bold tracking-tight mb-10">O meni</h1>
      <div className="prose">
        <p>
          Zdravo, ja sam Vanja Palić. Ovo je moj lični blog gde pišem o temama
          koje me interesuju.
        </p>
        <p>
          Ovaj odeljak možeš urediti po volji — dodaj informacije o sebi,
          svom poslu, hobijima ili čemu god želiš da posetioci znaju o tebi.
        </p>
        <h2>Kontakt</h2>
        <p>
          Možeš me pronaći na internetu ili mi pisati direktno.
        </p>
      </div>
    </main>
  );
}
