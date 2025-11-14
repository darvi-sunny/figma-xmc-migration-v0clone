import type { Field, LinkField, ImageField } from '@sitecore-content-sdk/nextjs';
import type { ComponentRendering } from '@sitecore-content-sdk/nextjs';

interface NavItem {
  id: string;
  fields: {
    title: Field<string>;
    link: LinkField;
  };
}

interface EshebaHeaderFields {
  logo: ImageField;
  navigationItems: NavItem[];
  loginText: Field<string>;
  signupText: Field<string>;
  loginLink: LinkField;
  signupLink: LinkField;
}

interface EshebaHeaderProps {
  rendering: ComponentRendering;
  fields: EshebaHeaderFields;
}

const EshebaHeader = ({ fields }: EshebaHeaderProps) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={fields.logo.value?.src || '/placeholder.svg'}
              alt={fields.logo.value?.alt as string}
              className="h-8"
            />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {fields.navigationItems?.map((item) => (
              <a
                key={item.id}
                href={item.fields.link.value?.href}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {item.fields.title.value}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <a
              href={fields.loginLink.value?.href}
              className="px-6 py-2 text-blue-600 hover:text-blue-700 transition-colors"
            >
              {fields.loginText.value}
            </a>
            <a
              href={fields.signupLink.value?.href}
              className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              {fields.signupText.value}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default EshebaHeader;
