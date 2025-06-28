import { Link } from "react-router-dom";

import { homePagePath } from "../router/path";

function CookiePolicy() {
  return (
    <section className="wrapperWhite">
      <div className="container doc">
        <h1>Cookies Policy for MAMNUN Agency</h1>
        <p>
          This Cookies Policy outlines the principles for the use of cookies and
          similar technologies on the website{" "}
          <Link to={homePagePath}>www.mamnunagency.com,</Link> operated by MG
          Elektro LLC, registered at Farobiy Street 229, 100174 Tashkent,
          Uzbekistan, ИНН: 202399407. You can contact the company via email at{" "}
          <a href="mailto:info@mamnunagency.com">info@mamnunagency.com</a> or by
          phone at +998949181305.
        </p>

        <h2>1. What are cookies?</h2>
        <p>
          Cookies are small text files that are saved on the user's device while
          browsing websites. They may contain information about the user's
          activity on the site, preferences, and other data.
        </p>

        <h2>
          2. What types of cookies are used on&nbsp;
          <Link to={homePagePath}>www.mamnunagency.com?</Link>
        </h2>
        <h3>
          The following types of cookies are used on www.mamnunagency.com:
        </h3>
        <ul>
          <li>
            <strong>Essential cookies:</strong> These cookies are necessary for
            the proper functioning of the website. They enable navigation and
            the use of its features.
          </li>
          <li>
            <strong>Analytical cookies:</strong> These cookies allow the
            collection of anonymous information on how users interact with the
            website. They help us analyze website traffic and improve its
            functionality.
          </li>
          <li>
            <strong>Functional cookies:</strong> These cookies enable the
            website to remember user preferences, such as language or region,
            making it easier to use the service.
          </li>
        </ul>

        <h2>3. How to manage cookies?</h2>
        <p>
          Users can manage cookie settings in their web browser. They can block
          or limit the use of cookies through the browser's settings. However,
          please note that blocking cookies may affect the functionality of the
          website and limit access to some of its features.
        </p>

        <h2>4. Contact</h2>
        <p>
          If you have any questions regarding the Cookies Policy or other issues
          related to personal data, please contact us at{" "}
          <a href="mailto:info@mamnunagency.com">info@mamnunagency.com</a>
        </p>
        <p>
          This Cookies Policy may be updated periodically, so we recommend
          regularly reviewing its content.
        </p>
        <p>Last updated: July 1, 2025.</p>
      </div>
    </section>
  );
}

export default CookiePolicy;
