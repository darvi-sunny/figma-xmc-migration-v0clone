import type { Field } from '@sitecore-content-sdk/nextjs';
import type { ComponentRendering } from '@sitecore-content-sdk/nextjs';

interface SpecialistCard {
  id: string;
  fields: {
    icon: Field<string>;
    title: Field<string>;
    description: Field<string>;
    isHighlighted: Field<boolean>;
  };
}

interface EshebaSpecialistsFields {
  sectionTitle: Field<string>;
  cards: SpecialistCard[];
}

interface EshebaSpecialistsProps {
  rendering: ComponentRendering;
  fields: EshebaSpecialistsFields;
}

const EshebaSpecialists = ({ fields }: EshebaSpecialistsProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">{fields.sectionTitle.value}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fields.cards?.map((card) => {
            const isHighlighted = card.fields.isHighlighted.value;

            return (
              <div
                key={card.id}
                className={`p-6 rounded-lg border ${
                  isHighlighted
                    ? 'bg-blue-600 border-blue-600 text-white'
                    : 'bg-white border-gray-200 text-gray-900'
                }`}
              >
                <div className="mb-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      isHighlighted ? 'bg-white text-blue-600' : 'bg-blue-100 text-blue-600'
                    }`}
                  >
                    <span className="text-2xl">{card.fields.icon.value}</span>
                  </div>
                </div>
                <h3
                  className={`text-xl font-bold mb-2 ${isHighlighted ? 'text-white' : 'text-gray-900'}`}
                >
                  {card.fields.title.value}
                </h3>
                <p className={isHighlighted ? 'text-blue-100' : 'text-gray-600'}>
                  {card.fields.description.value}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EshebaSpecialists;
