export default {
  widgets: [
    {
      name: "vercel",
      layout: {
        width: "full", // full width is recommended!
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent Pages",
        order: "_updatedAt desc",
        types: ["page"],
      },
    },
    {
      name: "project-info",
      options: {
        data: [
          {
            title: "GitHub repo",
            value: "https://github.com/imballa/FinShark",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://fini-shark.vercel.app/",
            category: "apps",
          },
        ],
      },
    },
  ],
};
