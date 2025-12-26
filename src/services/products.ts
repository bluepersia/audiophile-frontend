const productsData = [
  {
    id: 0,
    title: "XX99 Mark II Headphones",
    isNew: true,
  },
  {
    id: 1,
    title: "ZX9 Speaker",
    isNew: true,
  },
];

export async function getProductById(id: number) {
  const product = productsData.find((product) => product.id === id);

  if (!product) throw Error(`There is no product with the Id ${id}`);

  return product;
}
