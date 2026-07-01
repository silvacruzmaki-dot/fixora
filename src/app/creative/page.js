import CreativeHero from "@/components/organisms/CreativeHero";
import CreativeCategoriesSection from "@/components/organisms/CreativeCategoriesSection";
import CreativeLibrarySection from "@/components/organisms/CreativeLibrarySection";

export default function CreativePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-6">
        <CreativeHero />

        <CreativeCategoriesSection />

        <CreativeLibrarySection />
      </div>
    </main>
  );
}