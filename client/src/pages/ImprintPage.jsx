import Head from "../components/global/Head/Head";
function ImprintPage() {
  return (
    <>
      <Head
        keyword={""}
        title={""}
        ogTitle={""}
        description={""}
        ogDescription={""}
      />
      <section className="container doc wrapperPadding">
        <h1>Imprint</h1>

        <h2 className="mb10">MAMNUN Agency</h2>
        <p>Registered under: MG Elektro, LLC</p>

        <div className="gridContainer">
          <div>
            <h3>Office Address:</h3>
            <address>
              NestOne Block B<br />
              Botyr Zakirov Street 1A/1
              <br />
              100039 Tashkent, Uzbekistan
            </address>
          </div>

          <div>
            <h3>Business Registration Address:</h3>
            <address>
              Farobiy 229
              <br />
              100174 Tashkent, Uzbekistan
            </address>
          </div>

          <div>
            <h3>Contact Information:</h3>
            <p>
              Phone: +998 949 181 305
              <br />
              Phone: +998 774 222 882
              <br />
              Email:{" "}
              <a href="mailto:info@mamnunagency.com">info@mamnunagency.com</a>
            </p>
          </div>
        </div>

        <div className="gridContainer">
          <div>
            <h3>Legal Structure:</h3>
            <p>Limited Liability Company (LLC)</p>
          </div>

          <div>
            <h3>Tax Identification Number (TIN):</h3>
            <p>202399407</p>
          </div>
          <div className="empty"></div>
        </div>

        <h3>Disclaimer:</h3>
        <p>
          The information provided on this website is for general informational
          purposes only. While we strive to keep the information up to date and
          correct, we make no representations or warranties of any kind, express
          or implied, about the completeness, accuracy, reliability,
          suitability, or availability with respect to the website or the
          information, products, services, or related graphics contained on the
          website for any purpose.
        </p>
      </section>
    </>
  );
}

export default ImprintPage;
