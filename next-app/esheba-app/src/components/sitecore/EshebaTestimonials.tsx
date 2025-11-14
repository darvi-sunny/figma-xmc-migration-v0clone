import type { Field, RichTextField, ImageField } from '@sitecore-content-sdk/nextjs';
import type { ComponentRendering } from '@sitecore-content-sdk/nextjs';

interface ReviewerAvatar {
  id: string;
  fields: {
    avatar: ImageField;
  };
}

interface TestimonialCard {
  id: string;
  fields: {
    authorName: Field<string>;
    authorTitle: Field<string>;
    authorAvatar: ImageField;
    testimonialText: RichTextField;
    rating: Field<number>;
  };
}

interface EshebaTestimonialsFields {
  sectionTitle: Field<string>;
  highlightedText: Field<string>;
  description: RichTextField;
  reviewCount: Field<string>;
  reviewerAvatars: ReviewerAvatar[];
  testimonials: TestimonialCard[];
}

interface EshebaTestimonialsProps {
  rendering: ComponentRendering;
  fields: EshebaTestimonialsFields;
}

const EshebaTestimonials = ({ fields }: EshebaTestimonialsProps) => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {fields.sectionTitle.value}{' '}
            <span className="text-blue-600">{fields.highlightedText.value}</span>
          </h2>
          <div className="text-gray-600 mb-6" />

          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              {fields.reviewerAvatars?.map((reviewer) => (
                <img
                  key={reviewer.id}
                  src={reviewer.fields.avatar.value?.src || '/placeholder.svg'}
                  alt={reviewer.fields.avatar.value?.alt as string}
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              ))}
            </div>
            <span className="text-gray-700 font-semibold">{fields.reviewCount.value}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {fields.testimonials?.map((testimonial) => {
            const rating = testimonial.fields.rating.value || 5;

            return (
              <div key={testimonial.id} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.fields.authorAvatar.value?.src || '/placeholder.svg'}
                    alt={testimonial.fields.authorAvatar.value?.alt as string}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">
                      {testimonial.fields.authorName.value}
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.fields.authorTitle.value}</p>
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
          })}
        </div>
      </div>
    </section>
  );
};

export default EshebaTestimonials;
