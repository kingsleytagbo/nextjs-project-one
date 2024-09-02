import React from 'react';

const IconWrapper: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="tw-w-10 tw-h-10 md:tw-w-12 md:tw-h-12 tw-mx-auto tw-mb-4 md:tw-mb-6 tw-text-purple-500"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  />
);

const SmartphoneIcon: React.FC = () => (
  <IconWrapper>
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12" y2="18" />
  </IconWrapper>
);

const BellIcon: React.FC = () => (
  <IconWrapper>
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </IconWrapper>
);

const CodeIcon: React.FC = () => (
  <IconWrapper>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </IconWrapper>
);

interface FeatureCardProps {
  Icon: React.FC;
  title: string;
  description: string;
  showReadMore?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ Icon, title, description, showReadMore = false }) => (
  <div className="tw-bg-gray-100 tw-p-4 md:tw-p-6 tw-rounded-lg tw-shadow-sm hover:tw-shadow-xl tw-text-center tw-transition-all tw-duration-300 group tw-relative tw-overflow-hidden tw-border-2 tw-border-transparent hover:tw-border-[#D43396]">
    <div className="tw-h-1 tw-w-full tw-bg-gray-100 tw-absolute tw-top-0 tw-left-0 tw-right-0 group-hover:tw-bg-gradient-to-r group-hover:tw-from-purple-600 group-hover:tw-to-pink-500 tw-transition-all tw-duration-300"></div>
    <Icon />
    <h3 className="tw-text-xl md:tw-text-2xl lg:tw-text-[1.75rem] tw-font-semibold tw-mb-2 md:tw-mb-4 tw-text-black">{title}</h3>
    <p className="tw-text-gray-600 tw-mb-4 tw-text-base md:tw-text-lg lg:tw-text-[1.125rem] tw-leading-relaxed">{description}</p>
    {showReadMore && (
      <a href="#" className="tw-text-purple-500 tw-font-medium tw-inline-flex tw-items-center tw-text-base md:tw-text-lg lg:tw-text-[1.125rem]">
        Read More
        <svg className="tw-w-4 tw-h-4 md:tw-w-5 md:tw-h-5 tw-ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
    )}
  </div>
);

const FeaturesSection: React.FC = () => (
  <section id="features" className="tw-py-12 md:tw-py-20 tw-bg-gray-100">
    <div className="tw-container tw-mx-auto tw-px-4">
      <div className="tw-text-center tw-mb-8 md:tw-mb-12">
        <h2 className="tw-text-3xl md:tw-text-4xl tw-font-bold tw-text-black">Our Features</h2>
      </div>
      <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-6 md:tw-gap-8">
        <FeatureCard
          Icon={SmartphoneIcon}
          title="Enjoy This App"
          description="Hotpot bubble and squeak pukka quaint Jeffrey brown bread easy peasy squiffy!"
          showReadMore={true}
        />
        <FeatureCard
          Icon={BellIcon}
          title="Fully Secured"
          description="Hotpot bubble and squeak pukka quaint Jeffrey brown bread easy peasy squiffy!"
        />
        <FeatureCard
          Icon={CodeIcon}
          title="Design & Branding"
          description="Hotpot bubble and squeak pukka quaint Jeffrey brown bread easy peasy squiffy!"
        />
      </div>
    </div>
  </section>
);

export default FeaturesSection;