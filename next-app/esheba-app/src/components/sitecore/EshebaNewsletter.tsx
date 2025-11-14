import type { Field } from '@sitecore-content-sdk/nextjs';
import type { ComponentRendering } from '@sitecore-content-sdk/nextjs';

interface EshebaNewsletterFields {
  title: Field<string>;
  placeholder: Field<string>;
  buttonText: Field<string>;
}

interface EshebaNewsletterProps {
  rendering: ComponentRendering;
  fields: EshebaNewsletterFields;
}

const EshebaNewsletter = ({ fields }: EshebaNewsletterProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-blue-600 rounded-3xl py-12 px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">{fields.title.value}</h2>

          <div className="max-w-2xl mx-auto relative">
            <input
              type="email"
              placeholder={fields.placeholder.value}
              className="w-full px-6 py-4 rounded-full focus:outline-none pr-16"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
              <span className="text-xl">{fields.buttonText.value}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EshebaNewsletter;
