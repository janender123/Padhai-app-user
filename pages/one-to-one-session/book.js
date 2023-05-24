// import node module libraries
import { Fragment } from "react";
import FooterWithLinks from "layouts/marketing/footers/FooterWithLinks";
import OneToOneSessionSubjects from "sub-components/landings/landing-sass/OneToOneSessionSubjects";

const BookOneToOneSession = () => {
  return (
    <Fragment>
      {/*  Page Content  */}
      <section name="Classes-by-subject" className="bg-light">
        <OneToOneSessionSubjects />
      </section>
      <section name="footer-links" className="bg-white">
        <FooterWithLinks />
      </section>
    </Fragment>
  );
};

export default BookOneToOneSession;
