import CategoriesList from "../shared/CategoriesList/CategoriesList";
import Hero from "./Hero/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <section>
        <h2 className="sr-only">Categories</h2>
        <CategoriesList />
      </section>
    </>
  );
}
