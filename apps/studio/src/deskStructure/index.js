import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Manage Pages")
        .schemaType("page")
        .child(
          S.list()
            .title("Pages")
            .items([
              S.listItem()
                .title("Home Page")
                .schemaType("homepage")
                .child(S.documentTypeList("homepage").title("Home Page")),
              S.listItem()
                .title("Other Pages")
                .schemaType("page")
                .child(S.documentTypeList("page").title("Other Pages")),
            ])
        ),
      S.listItem()
        .title("Manage Blocks")
        .child(
          S.list()
            .title("Manage blocks")
            .items([
              S.listItem()
                .title("Home Page Blocks")
                .child(
                  S.list()
                    .title("Home Page Blocks")
                    .items([
                      S.listItem()
                        .title("Hero Block")
                        .schemaType("homepageHero")
                        .child(
                          S.documentTypeList("homepageHero").title("Hero Block")
                        ),
                      S.listItem()
                        .title("Client List Block")
                        .schemaType("homepageLogoList")
                        .child(
                          S.documentTypeList("homepageLogoList").title(
                            "Client List Block"
                          )
                        ),
                      S.listItem()
                        .title("Mission Block")
                        .schemaType("homepageProductList")
                        .child(
                          S.documentTypeList("homepageProductList").title(
                            "Mission Block"
                          )
                        ),
                      S.listItem()
                        .title("Feature List Block")
                        .schemaType("homepageFeatureList")
                        .child(
                          S.documentTypeList("homepageFeatureList").title(
                            "Feature List Block"
                          )
                        ),
                      S.listItem()
                        .title("Benefit List Block")
                        .schemaType("homepageBenefitList")
                        .child(
                          S.documentTypeList("homepageBenefitList").title(
                            "Benefit List Block"
                          )
                        ),
                      S.listItem()
                        .title("Testimonial List Block")
                        .schemaType("homepageTestimonialList")
                        .child(
                          S.documentTypeList("homepageTestimonialList").title(
                            "Testimonial List Block"
                          )
                        ),
                      S.listItem()
                        .title("CTA Block")
                        .schemaType("homepageCta")
                        .child(
                          S.documentTypeList("homepageCta").title("CTA Block")
                        ),
                    ])
                ),
            ])
        ),
      S.divider(),
      S.listItem()
        .title("Settings")
        .child(
          S.list()
            .title("Settings")
            .items([
              //   S.listItem()
              //     .title("Site settings")
              //     .schemaType("siteSettings")
              //     .child(
              //       S.documentTypeList("siteSettings").title("Site Settings")
              //     ),
              S.listItem()
                .title("Header")
                .schemaType("layoutHeader")
                .child(S.documentTypeList("layoutHeader").title("Header")),
              S.listItem()
                .title("Footer")
                .schemaType("layoutFooter")
                .child(S.documentTypeList("layoutFooter").title("Footer")),
              //   S.listItem()
              //     .title("Social Media Information")
              //     .child(
              //       S.document()
              //         .schemaType("socialMediaInformation")
              //         .documentId("socialMediaInformation")
              //     ),
              S.listItem()
                .title("Social Media Channels")
                .child(
                  S.documentTypeList("socialLink").title(
                    "Social media channels"
                  )
                ),
              //   S.listItem()
              //     .title("Labels")
              //     .schemaType("labels")
              //     .child(S.documentTypeList("labels").title("Labels")),
              //   S.listItem()
              //     .title("Manage Block Types")
              //     .child(
              //       S.list()
              //         .title("Manage blocks types")
              //         .items([
              //           S.listItem()
              //             .title("Text Block Type")
              //             .schemaType("textBlockType")
              //             .child(
              //               S.documentTypeList("textBlockType").title(
              //                 "Text Block Type"
              //               )
              //             ),
              //           S.listItem()
              //             .title("Image Block Type")
              //             .schemaType("imageType")
              //             .child(
              //               S.documentTypeList("imageType").title(
              //                 "Image Block Types"
              //               )
              //             ),
              //           S.listItem()
              //             .title("Slider Type")
              //             .schemaType("sliderType")
              //             .child(
              //               S.documentTypeList("sliderType").title("Slider type")
              //             ),
              //           S.listItem()
              //             .title("Hero Type")
              //             .schemaType("heroType")
              //             .child(
              //               S.documentTypeList("heroType").title("Hero type")
              //             ),
              //         ])
              //     ),
            ])
        ),
    ]);
