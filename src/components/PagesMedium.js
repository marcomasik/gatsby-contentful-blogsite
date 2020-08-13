import React from "react";
import SEO from "../SEO";
import Hero from "../components/hero";
import Carousel from "../components/carousel";
import Newsletter from "../components/newsletter";

const PagesMedium = ({ data }) => {
  let components = [];
  const { seoTitle, seoDescription } = data.contentfulPage;
  const sections = data.contentfulPagesMedium.sectionss;
  sections.forEach((item, index) => {
    switch (item.type) {
      case "Hero Banner":
        components.push(<Hero key={index} data={sections[index]} />);
        break;
      case "Carousel":
        components.push(<Carousel key={index} data={sections[index]} />);
        break;
      case "Newsletter":
        components.push(<Newsletter key={index} data={sections[index]} />);
        break;
      default:
        break;
    }
  });
  return (
    <>
      {components.map(component => component)}
    </>
  );
};

export const query = graphql`{
   	contentfulPagesMedium(title: { eq: "Frontpage" }) {
    	sectionss {
			title 
    	}
  	}
}`

export default PagesMedium
