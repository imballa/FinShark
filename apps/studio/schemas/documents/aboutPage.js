export default {
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    { title: "Title", name: "title", type: "string" },
    { title: "Description", name: "description", type: "string" },
    { title: "Image", name: "image", type: "image" },
    {
      title: "Content",
      name: "content",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            { type: "aboutHero" },
            { type: "homepageProductList" },
            { type: "homepageFeature" },
            { type: "homepageFeatureList" },
            { type: "aboutStatList" },
            { type: "aboutLeadership" },
            { type: "homepageBenefitList" },
            { type: "aboutLogoList" },
            { type: "homepageCta" },
          ],
        },
      ],
    },
  ],
};
