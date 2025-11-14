import type { Field, RichTextField, ImageField } from '@sitecore-content-sdk/nextjs';
import type { ComponentRendering } from '@sitecore-content-sdk/nextjs';

interface StatItem {
  id: string;
  fields: {
    value: Field<string>;
    label: Field<string>;
  };
}

interface EshebaHeroFields {
  heading: Field<string>;
  highlightedText: Field<string>;
  description: RichTextField;
  ownerNamePlaceholder: Field<string>;
  locationPlaceholder: Field<string>;
  searchButtonText: Field<string>;
  heroImage: ImageField;
  stats: StatItem[];
}

interface EshebaHeroProps {
  rendering: ComponentRendering;
  fields: EshebaHeroFields;
}

const EshebaHero = ({ fields }: EshebaHeroProps) => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              {fields.heading.value}{' '}
              <span className="text-blue-600 underline decoration-4 decoration-blue-600">
                {fields.highlightedText.value}
              </span>
            </h1>
            <div className="text-gray-600 mb-8" />

            <div className="flex gap-4 mb-8">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder={fields.ownerNamePlaceholder.value}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600"
                />
              </div>
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder={fields.locationPlaceholder.value}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600"
                />
              </div>
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                {fields.searchButtonText.value}
              </button>
            </div>
          </div>

          <div className="relative">
            <img
              src={fields.heroImage.value?.src || '/placeholder.svg'}
              alt={fields.heroImage.value?.alt as string}
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="bg-blue-600 rounded-lg py-8 px-4 mt-12">
          <div className="grid grid-cols-3 gap-8 text-center text-white">
            {fields.stats?.map((stat) => (
              <div key={stat.id}>
                <div className="text-4xl font-bold mb-2">{stat.fields.value.value}</div>
                <div className="text-blue-100">{stat.fields.label.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EshebaHero;
