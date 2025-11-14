import type { Field, RichTextField, ImageField, LinkField } from '@sitecore-content-sdk/nextjs';
import type { ComponentRendering } from '@sitecore-content-sdk/nextjs';

interface FooterLink {
  id: string;
  fields: {
    title: Field<string>;
    link: LinkField;
  };
}

interface SocialLink {
  id: string;
  fields: {
    icon: Field<string>;
    link: LinkField;
  };
}

interface EshebaFooterFields {
  logo: ImageField;
  description: RichTextField;
  socialLinks: SocialLink[];
  usefulLinksTitle: Field<string>;
  usefulLinks: FooterLink[];
  addressTitle: Field<string>;
  addressMap: ImageField;
  copyrightText: Field<string>;
}

interface EshebaFooterProps {
  rendering: ComponentRendering;
  fields: EshebaFooterFields;
}

const EshebaFooter = ({ fields }: EshebaFooterProps) => {
  return (
    <footer className="bg-blue-600 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          <div>
            <img
              src={fields.logo.value?.src || '/placeholder.svg'}
              alt={fields.logo.value?.alt as string}
              className="h-8 mb-4"
            />
            <div className="text-blue-100 mb-4" />
            <div className="flex gap-4">
              {fields.socialLinks?.map((social) => (
                <a
                  key={social.id}
                  href={social.fields.link.value?.href}
                  className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors"
                >
                  {social.fields.icon.value}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">{fields.usefulLinksTitle.value}</h3>
            <ul className="space-y-2">
              {fields.usefulLinks?.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.fields.link.value?.href}
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    {link.fields.title.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">{fields.addressTitle.value}</h3>
            <img
              src={fields.addressMap.value?.src || '/placeholder.svg'}
              alt={fields.addressMap.value?.alt as string}
              className="w-full h-32 rounded-lg object-cover"
            />
          </div>
        </div>

        <div className="border-t border-blue-500 pt-6 text-center text-blue-100">
          {fields.copyrightText.value}
        </div>
      </div>
    </footer>
  );
};

export default EshebaFooter;
