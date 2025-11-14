import type { Field, RichTextField } from '@sitecore-content-sdk/nextjs';
import type { ComponentRendering } from '@sitecore-content-sdk/nextjs';
import type { JSX } from 'react/jsx-runtime'; // Import JSX to fix the undeclared variable error

interface EshebaSpecialistCardFields {
  icon: Field<string>;
  title: Field<string>;
  description: RichTextField;
  isHighlighted: Field<boolean>;
}

interface EshebaSpecialistCardProps {
  rendering: ComponentRendering;
  fields: EshebaSpecialistCardFields;
}

const EshebaSpecialistCard = ({ fields }: EshebaSpecialistCardProps): JSX.Element => {
  const isHighlighted = fields.isHighlighted.value;

  return (
    <div
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
          <span className="text-2xl">{fields.icon.value}</span>
        </div>
      </div>
      <h3 className={`text-xl font-bold mb-2 ${isHighlighted ? 'text-white' : 'text-gray-900'}`}>
        {fields.title.value}
      </h3>
      <div className={isHighlighted ? 'text-blue-100' : 'text-gray-600'} />
    </div>
  );
};

export default EshebaSpecialistCard;
