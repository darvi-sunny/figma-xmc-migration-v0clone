import type { Field, RichTextField, ImageField } from '@sitecore-content-sdk/nextjs';
import type { ComponentRendering } from '@sitecore-content-sdk/nextjs';

interface EshebaTestimonialFields {
  authorName: Field<string>;
  authorTitle: Field<string>;
  authorAvatar: ImageField;
  testimonialText: RichTextField;
  rating: Field<number>;
}

interface EshebaTestimonialProps {
  rendering: ComponentRendering;
  fields: EshebaTestimonialFields;
}

const EshebaTestimonial = ({ fields }: EshebaTestimonialProps) => {
  const rating = fields.rating.value || 5;

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center mb-4">
        <img
          src={fields.authorAvatar.value?.src || '/placeholder.svg'}
          alt={fields.authorAvatar.value?.alt as string}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h4 className="font-bold text-gray-900">{fields.authorName.value}</h4>
          <p className="text-sm text-gray-600">{fields.authorTitle.value}</p>
        </div>
        <div className="ml-auto flex">
          {[...Array(rating)].map((_, i) => (
            <span key={i} className="text-yellow-400">
              ★
            </span>
          ))}
        </div>
      </div>
      <div className="text-gray-600" />
    </div>
  );
};

export default EshebaTestimonial;
