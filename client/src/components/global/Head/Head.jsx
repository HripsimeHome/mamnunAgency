import { Helmet } from "react-helmet";

const Head = ({ keyword, title, ogTitle, description, ogDescription }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:title" content={ogTitle} />
      <meta name="description" content={description} />
      <meta property="og:description" content={ogDescription} />
      <meta name="keywords" content={keyword} />
    </Helmet>
  );
};

export default Head;
