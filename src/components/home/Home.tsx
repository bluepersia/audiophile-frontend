import { useQuery } from "@tanstack/react-query";
import CategoriesList from "../shared/CategoriesList/CategoriesList";
import Hero from "./Hero/Hero";
import styles from "./home.module.scss";
import getHomeSections from "./services";
import ProductSectionOne from "./ProductSectionOne/ProductSectionOne";
import ProductSectionTwo from "./ProductSectionTwo/ProductSectionTwo";
import clsx from "clsx";

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
      <div className={clsx("u-container", styles.productSections)}>
        {sectionData?.map((item) => {
          if (item.component === "ProductSectionOne")
            return <ProductSectionOne key={item.id} {...item} />;
          else if (item.component === "ProductSectionTwo")
            return <ProductSectionTwo key={item.id} {...item} />;
        })}
      </div>
    </>
  );
}
