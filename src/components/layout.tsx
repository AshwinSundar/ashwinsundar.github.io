import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import * as Styles from "./layout.module.scss";
import Sidebar from "./sidebar";
import Content from "./content";
import Navbar from "./navbar";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
          siteUrl
          title
        }
      }
    }
  `);

  return (
    <div className={Styles.container}>
      <title className={Styles.siteTitle}>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>

      <header className={Styles.siteTitle}>
        <Link to="/">{data.site.siteMetadata.title}</Link>
      </header>
      <Navbar />
      <main className={Styles.main}>
        <div className={Styles.sidebar}>
          <Sidebar />
        </div>
        <div className={Styles.content}>
          <h1 className={Styles.heading}>{pageTitle}</h1>
          <Content />

          {children}
        </div>
      </main>
    </div>
  );
};

//   return (
//     <div className={Styles.container}>
//       <title className={Styles.siteTitle}>
//         {pageTitle} | {data.site.siteMetadata.title}
//       </title>
//       <header className={Styles.siteTitle}>
//         <Link to="/">{data.site.siteMetadata.title}</Link>
//       </header>
//       <h2>(Under Construction)</h2>

//       <nav>
//         <ul className={Styles.navLinks}>
//           <li className={Styles.navLinkItem}>
//             <Link to="/about" className={Styles.navLinkText}>
//               About
//             </Link>
//           </li>
//           <li className={Styles.navLinkItem}>
//             <Link to="/blog" className={Styles.navLinkText}>
//               Blog
//             </Link>
//           </li>
//         </ul>
//       </nav>
//       <main>
//         <h1 className={Styles.heading}>{pageTitle}</h1>

//         {children}
//       </main>
//     </div>
//   );
// };

export default Layout;
