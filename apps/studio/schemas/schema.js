// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import homepage from "./documents/homepage";
import homepageLink from "./documents/homepageLink";
import homepageHero from "./documents/homepageHero";
import homepageFeature from "./documents/homepageFeature";
import homepageFeatureList from "./documents/homepageFeatureList";
import homepageCta from "./documents/homepageCta";
import homepageLogo from "./documents/homepageLogo";
import homepageLogoList from "./documents/homepageLogoList";
import homepageTestimonial from "./documents/homepageTestimonial";
import homepageTestimonialList from "./documents/homepageTestimonialList";
import homepageBenefit from "./documents/homepageBenefit";
import homepageBenefitList from "./documents/homepageBenefitList";
import homepageStat from "./documents/homepageStat";
import homepageStatList from "./documents/homepageStatList";
import homepageProduct from "./documents/homepageProduct";
import homepageProductList from "./documents/homepageProductList";

import navItem from "./documents/navItem";
import navItemGroup from "./documents/navItemGroup";
import socialLink from "./documents/socialLink";
import layoutHeader from "./documents/layoutHeader";
import layoutFooter from "./documents/layoutFooter";
import layout from "./documents/layout";

import page from "./documents/page";

import aboutPage from "./documents/aboutPage";
import aboutHero from "./documents/aboutHero";
import aboutStat from "./documents/aboutStat";
import aboutStatList from "./documents/aboutStatList";
import aboutProfile from "./documents/aboutProfile";
import aboutLeadership from "./documents/aboutLeadership";
import aboutLogoList from "./documents/aboutLogoList";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    homepage,
    homepageLink,
    homepageHero,
    homepageFeature,
    homepageFeatureList,
    homepageCta,
    homepageLogo,
    homepageLogoList,
    homepageTestimonial,
    homepageTestimonialList,
    homepageBenefit,
    homepageBenefitList,
    homepageStat,
    homepageStatList,
    homepageProduct,
    homepageProductList,
    // layout
    navItem,
    navItemGroup,
    socialLink,
    layoutHeader,
    layoutFooter,
    layout,
    // HTML page
    page,
    // about page
    aboutPage,
    aboutHero,
    aboutStat,
    aboutStatList,
    aboutProfile,
    aboutLeadership,
    aboutLogoList,
  ]),
});
