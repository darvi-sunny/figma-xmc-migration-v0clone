import type { Field, ImageField, LinkField } from '@sitecore-content-sdk/nextjs';
import type { ComponentRendering } from '@sitecore-content-sdk/nextjs';

interface BenefitItem {
  id: string;
  fields: {
    text: Field<string>;
  };
}

interface EshebaWhyChooseUsFields {
  sectionTitle: Field<string>;
  image: ImageField;
  benefits: BenefitItem[];
  ctaText: Field<string>;
  ctaLink: LinkField;
}

interface EshebaWhyChooseUsProps {
  rendering: ComponentRendering;
  fields: EshebaWhyChooseUsFields;
}

const EshebaWhyChooseUs = ({ fields }: EshebaWhyChooseUsProps) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={fields.image.value?.src || '/placeholder.svg'}
              alt={fields.image.value?.alt as string}
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{fields.sectionTitle.value}</h2>

            <ul className="space-y-4 mb-8">
              {fields.benefits?.map((benefit) => (
                <li key={benefit.id} className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span className="text-gray-600">{benefit.fields.text.value}</span>
                </li>
              ))}
            </ul>

            <a
              href={fields.ctaLink.value?.href}
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
            >
              {fields.ctaText.value}
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EshebaWhyChooseUs;
