import Gallery from "../components/section/Gallery";
import banners from "../data/banners.json";
import { BRAND } from "@/data/shopdata";
import Slider from "@/components/section/Slider";
import ShowCase from "@/components/section/ShowCase";

export const metadata = {
  title: `${BRAND} | Online Store`,
};

export default function Home() {
  return (
    <div>
      <ShowCase
        item={banners.filter((item) => item.type === "feature-hero")[0]?.item}
      />

      <Gallery
        items={
          banners.filter((item) => item.type === "top-categories")[0]?.banners
        }
        twoColumn={true}
      />

      <Slider
        slides={
          banners.filter((item) => item.type === "latest-collection")[0]
            ?.banners
        }
        heading={"latest collection"}
      />

      <ShowCase
        item={{
          title: "Top wears",
          image: "/images/mens_wear.avif",
          path: "/#",
        }}
      />

      <Slider
        slides={
          banners.filter((item) => item.type === "top-essensials")[0]?.banners
        }
        heading={"Top Essensials"}
      />

      <Gallery
        items={
          banners.filter((item) => item.type === "shop-by-category")[0]?.banners
        }
        twoColumn={true}
      />

      <ShowCase
        item={banners.filter((item) => item.type === "feature-bottom")[0]?.item}
      />
    </div>
  );
}
