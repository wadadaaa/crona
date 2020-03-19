// import React from "react"
// import { graphql } from "gatsby"
// import Layout from "../components/layout"
// export const query = graphql`
//   query HomePageQuery {
//     allContentfulConclusion {
//       edges {
//         node {
//           childContentfulConclusionDescriptionRichTextNode {
//             description
//           }
//         }
//       }
//     }
//   }
// `
// const IndexPage = ({ data }) => (
//   <Layout>
//     {/* <h1>{data.site.siteMetadata.title}</h1> */}
//     <p>{JSON.stringify(data)}</p>
//   </Layout>
// )
// export default IndexPage

import { createGlobalStyle } from 'styled-components';
import React from 'react';
import useStats from '../utils/useStats';
import Stats from '../components/Stats';
import CountrySelector from '../components/CountrySelector';
import img from '../images/cdc.jpg';

const GlobalStyle = createGlobalStyle`
  html { 
    font-family: nunito,roboto,proxima-nova,proxima nova,sans-serif;  
    background-image: url(${img});
  }
`;

export default function IndexPage() {
  return (
    <div>
      <GlobalStyle />
      <Stats url="https://covid19.mathdro.id/api"></Stats>
      <CountrySelector></CountrySelector>
    </div>
  );
}