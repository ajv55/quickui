'use client';
import { FC } from 'react';
import Card from '../../components/card';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import clsx from 'clsx';

const cardExamples = [
  {
    title: 'Default Card',
    component: (
      <Card
        title="Default Card"
        description="This is a default card with a basic shadow."
      />
    ),
    code: `
<Card
  title="Default Card"
  description="This is a default card with a basic shadow."
/>
`
  },
  {
    title: 'Outlined Card',
    component: (
      <Card
        variant="outlined"
        title="Outlined Card"
        description="This card has an outlined border."
      />
    ),
    code: `
<Card
  variant="outlined"
  title="Outlined Card"
  description="This card has an outlined border."
/>
`
  },
  {
    title: 'Elevated Card',
    component: (
      <Card
        variant="elevated"
        title="Elevated Card"
        description="This card has a higher elevation and shadow."
      />
    ),
    code: `
<Card
  variant="elevated"
  title="Elevated Card"
  description="This card has a higher elevation and shadow."
/>
`
  },
  {
    title: 'Image Card',
    component: (
      <Card
        variant="image"
        image="https://via.placeholder.com/400x250"
        title="Image Card"
        description="This card includes an image at the top."
      />
    ),
    code: `
<Card
  variant="image"
  image="https://via.placeholder.com/400x250"
  title="Image Card"
  description="This card includes an image at the top."
/>
`
  },
  {
    title: 'Hover Card',
    component: (
      <Card
        variant="hover"
        title="Hover Card"
        description="This card scales up on hover."
      />
    ),
    code: `
<Card
  variant="hover"
  title="Hover Card"
  description="This card scales up on hover."
/>
`
  },
  {
    title: 'Profile Card',
    component: (
      <Card
        variant="profile"
        image="https://via.placeholder.com/150"
        title="Profile Card"
        description="This card is designed for user profiles."
      />
    ),
    code: `
<Card
  variant="profile"
  image="https://via.placeholder.com/150"
  title="Profile Card"
  description="This card is designed for user profiles."
/>
`
  },
  {
    title: 'Info Card',
    component: (
      <Card
        variant="info"
        title="Info Card"
        description="This card is styled for informational purposes."
      />
    ),
    code: `
<Card
  variant="info"
  title="Info Card"
  description="This card is styled for informational purposes."
/>
`
  },
  {
    title: 'Action Card',
    component: (
      <Card
        variant="action"
        title="Action Card"
        description="This card is designed for actions."
        button={<button className="bg-green-500 text-white px-4 py-2 rounded">Action</button>}
      />
    ),
    code: `
<Card
  variant="action"
  title="Action Card"
  description="This card is designed for actions."
  button={<button className="bg-green-500 text-white px-4 py-2 rounded">Action</button>}
/>
`
  },
  {
    title: 'Feature Card',
    component: (
      <Card
        variant="feature"
        title="Feature Card"
        description="This card highlights a feature."
      />
    ),
    code: `
<Card
  variant="feature"
  title="Feature Card"
  description="This card highlights a feature."
/>
`
  },
  {
    title: 'Pricing Card',
    component: (
      <Card
        variant="pricing"
        title="Pricing Card"
        description="This card showcases pricing information."
      />
    ),
    code: `
<Card
  variant="pricing"
  title="Pricing Card"
  description="This card showcases pricing information."
/>
`
  },
];

const CardShowcase: FC = () => {
  return (
    <div className="w-full py-12 px-4 bg-background-dark h-screen">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-secondary-dark mb-12 text-center">Card Showcase</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardExamples.map((example, index) => (
            <div key={index} className="bg-background-light p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-primary-light">{example.title}</h2>
              <div className="mb-4">
                {example.component}
              </div>
              <SyntaxHighlighter language="jsx" style={solarizedlight} showLineNumbers={true}>
                {example.code}
              </SyntaxHighlighter>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardShowcase;
