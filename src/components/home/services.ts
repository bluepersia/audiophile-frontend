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
];

export default async function getHomeSections() {
  return homeSections;
}
