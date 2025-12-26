const homeSections = [
  {
    id: 1,
    productId: 1,
    desc: "Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.",
    imgMobile: "/assets/home/mobile/image-speaker-zx9.png",
    imgTablet: "/assets/home/tablet/image-speaker-zx9.png",
    imgDesktop: "/assets/home/desktop/image-speaker-zx9.png",
    component: "ProductSectionOne",
  },
  {
    id: 2,
    productId: 2,
    desc: "",
    imgMobile: "/assets/home/mobile/image-speaker-zx7.jpg",
    imgTablet: "/assets/home/tablet/image-speaker-zx7.jpg",
    imgDesktop: "/assets/home/desktop/image-speaker-zx7.jpg",
    component: "ProductSectionTwo",
  },
  {
    id: 3,
    productId: 3,
    desc: "",
    imgMobile: "/assets/home/mobile/image-earphones-yx1.jpg",
    imgTablet: "/assets/home/tablet/image-earphones-yx1.jpg",
    imgDesktop: "/assets/home/desktop/image-earphones-yx1.jpg",
    component: "ProductSectionThree",
  },
];

export default async function getHomeSections() {
  return homeSections;
}
