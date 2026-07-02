import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/HomePage";

export const Route = createFileRoute("/")(({
  head: () => ({
    meta: [
      { title: "مدارات التنفيذ — الشركة الصناعية الرائدة" },
      {
        name: "description",
        content:
          "مدارات التنفيذ — شركة صناعية رائدة في مجال الإنشاءات الصناعية والمقاولات والتجهيزات، بخبرة تمتد لأكثر من 20 عاماً في خدمة كبرى الشركات الوطنية.",
      },
      { name: "keywords", content: "مدارات التنفيذ, شركة صناعية, إنشاءات, مقاولات, EPC, السعودية" },
      { property: "og:title", content: "مدارات التنفيذ — الشركة الصناعية الرائدة" },
      {
        property: "og:description",
        content:
          "حلول صناعية متكاملة في الإنشاءات والكهرباء والميكانيكا وإدارة مشاريع EPC.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
} as any));

function Index() {
  return <HomePage />;
}
