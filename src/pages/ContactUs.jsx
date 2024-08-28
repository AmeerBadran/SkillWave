import ContactInfo from "../components/organism/ContactInfo";
import ContactForm from "../components/organism/ContactSection";
import PageHeader from "../components/molecule/PageHeader";

const ContactUs = () => {
  return (
    <div>
      <PageHeader
        title="Contact Us"
        breadcrumbText="Contact Us"
        bgClass=""
        overlayColor="bg-gray-900 bg-opacity-20"
        titleColor="text-base-color"
        breadcrumbColor="text-second-color"
        arrowColor="text-base-color"
        customTitleClasses="text-5xl 2xmobile:text-7xl"
      />
      <div className="max-w-[1400px] mx-auto pt-10 mb-24">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactUs;