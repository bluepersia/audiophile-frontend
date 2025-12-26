import { useQuery } from "@tanstack/react-query";
import CategoriesList from "../shared/CategoriesList/CategoriesList";
import Hero from "./Hero/Hero";
import styles from "./home.module.scss";
import getHomeSections from "./services";
import ProductSectionOne from "./ProductSectionOne/ProductSectionOne";

export default function Home() {
  const { data: sectionData } = useQuery({
    queryKey: ["home-sections"],
    queryFn: getHomeSections,
  });

  return (
    <>
      <Hero />
      <section>
        <h2 className="sr-only">Categories</h2>
        <CategoriesList className={styles.categoriesList} />
      </section>
      <div className="u-container">
        {sectionData?.map((item) => {
          if (item.component === "ProductSectionOne")
            return <ProductSectionOne key={item.id} {...item} />;
        })}
      </div>
    </>
  );
}
