import type { Field, RichTextField, ImageField, LinkField } from '@sitecore-content-sdk/nextjs';
import type { ComponentRendering } from '@sitecore-content-sdk/nextjs';

interface EshebaQualityHealthFields {
  sectionTitle: Field<string>;
  highlightedText: Field<string>;
  description: RichTextField;
  ctaText: Field<string>;
  ctaLink: LinkField;
  image: ImageField;
}

interface EshebaQualityHealthProps {
  rendering: ComponentRendering;
  fields: EshebaQualityHealthFields;
}

const EshebaQualityHealth = ({ fields }: EshebaQualityHealthProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {fields.sectionTitle.value}{' '}
              <span className="text-blue-600">{fields.highlightedText.value}</span>
            </h2>
            <div className="text-gray-600 mb-8" />
            <a
              href={fields.ctaLink.value?.href}
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
            >
              {fields.ctaText.value}
              <span className="ml-2">→</span>
            </a>
          </div>

          <div>
            <img
              src={fields.image.value?.src || '/placeholder.svg'}
              alt={fields.image.value?.alt as string}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EshebaQualityHealth;
