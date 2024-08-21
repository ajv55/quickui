'use client';
import { FC, useState } from 'react';
import Card from '../../components/card';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { duotoneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaCopy } from 'react-icons/fa';

const cardExamples = [
  {
    title: 'Default Card',
    component: (
      <Card
        titleClassName='text-zinc-900'
        descriptionClassName='text-gray-600'
        additionalContentClassname='text-primary-dark'
        title="Default Card"
        description="A classic card with a subtle shadow and border. Ideal for general use cases."
        additionalContent={
          <p>This card is perfect for displaying general content. The design includes a subtle shadow to give it a sense of depth.</p>
        }
      />
    ),
    code: `
<Card
  title="Default Card"
  description="A classic card with a subtle shadow and border. Ideal for general use cases."
  additionalContent={
    <p>This card is perfect for displaying general content. The design includes a subtle shadow to give it a sense of depth.</p>
  }
/>
`
  },
  {
    title: 'Outlined Card',
    component: (
      <Card
        variant="outlined"
        titleClassName='text-zinc-900'
        descriptionClassName='text-gray-600'
        additionalContentClassname='text-primary-dark'
        title="Outlined Card"
        description="An outlined card with a clean border, suitable for content that needs emphasis."
        additionalContent={
          <p>This card features a clean border with no background color, making it suitable for emphasizing content without a strong background.</p>
        }
      />
    ),
    code: `
<Card
  variant="outlined"
  title="Outlined Card"
  description="An outlined card with a clean border, suitable for content that needs emphasis."
  additionalContent={
    <p>This card features a clean border with no background color, making it suitable for emphasizing content without a strong background.</p>
  }
/>
`
  },
  {
    title: 'Elevated Card',
    component: (
      <Card
        variant="elevated"
        titleClassName='text-zinc-900'
        descriptionClassName='text-gray-600'
        additionalContentClassname='text-primary-dark'
        title="Elevated Card"
        description="A card with elevated shadow to create a strong visual impact. Great for featured content."
        additionalContent={
          <p>This card stands out with an elevated shadow effect, perfect for showcasing important or featured content.</p>
        }
      />
    ),
    code: `
<Card
  variant="elevated"
  title="Elevated Card"
  description="A card with elevated shadow to create a strong visual impact. Great for featured content."
  additionalContent={
    <p>This card stands out with an elevated shadow effect, perfect for showcasing important or featured content.</p>
  }
/>
`
  },
  {
    title: 'Image Card',
    component: (
      <Card
        variant="image"
        titleClassName='text-zinc-900'
        descriptionClassName='text-gray-600'
        additionalContentClassname='text-primary-dark'
        image="https://via.placeholder.com/400x250"
        title="Image Card"
        description="A card that includes an image at the top, ideal for visual content."
        additionalContent={
          <p>This card is designed to highlight visual content with a prominent image at the top, suitable for product displays or visual showcases.</p>
        }
      />
    ),
    code: `
<Card
  variant="image"
  image="https://via.placeholder.com/400x250"
  title="Image Card"
  description="A card that includes an image at the top, ideal for visual content."
  additionalContent={
    <p>This card is designed to highlight visual content with a prominent image at the top, suitable for product displays or visual showcases.</p>
  }
/>
`
  },
  {
    title: 'Hover Card',
    component: (
      <Card
        variant="hover"
        titleClassName='text-zinc-900'
        descriptionClassName='text-gray-600'
        additionalContentClassname='text-primary-dark'
        title="Hover Card"
        description="A card that scales up on hover, providing an interactive experience."
        additionalContent={
          <p>Ideal for user interactions, this card provides a visual cue with a scaling effect when hovered over.</p>
        }
      />
    ),
    code: `
<Card
  variant="hover"
  title="Hover Card"
  description="A card that scales up on hover, providing an interactive experience."
  additionalContent={
    <p>Ideal for user interactions, this card provides a visual cue with a scaling effect when hovered over.</p>
  }
/>
`
  },
  {
    title: 'Profile Card',
    component: (
      <Card
        variant="profile"
        titleClassName='text-zinc-900'
        descriptionClassName='text-gray-600'
        additionalContentClassname='text-primary-dark'
        image="https://via.placeholder.com/150"
        title="Profile Card"
        description="A card designed for user profiles, including an avatar and profile details."
        additionalContent={
          <div className="mt-4">
            <p className="text-gray-600">John Doe</p>
            <p className="text-sm text-gray-500">Software Engineer</p>
          </div>
        }
      />
    ),
    code: `
<Card
  variant="profile"
  image="https://via.placeholder.com/150"
  title="Profile Card"
  description="A card designed for user profiles, including an avatar and profile details."
  additionalContent={
    <div className="mt-4">
      <p className="text-gray-600">John Doe</p>
      <p className="text-sm text-gray-500">Software Engineer</p>
    </div>
  }
/>
`
  },
  {
    title: 'Info Card',
    component: (
      <Card
        variant="info"
        title="Info Card"
        description="A card styled for informational content with a blue background and border."
        additionalContent={
          <p>This card is useful for displaying informational content with a distinct blue background, making it stand out as a source of important information.</p>
        }
      />
    ),
    code: `
<Card
  variant="info"
  title="Info Card"
  description="A card styled for informational content with a blue background and border."
  additionalContent={
    <p>This card is useful for displaying informational content with a distinct blue background, making it stand out as a source of important information.</p>
  }
/>
`
  },
  {
    title: 'Action Card',
    component: (
      <Card
        variant="action"
        title="Action Card"
        description="A card with a green theme and a call-to-action button for user interaction."
        button={<button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">Take Action</button>}
        additionalContent={
          <p>This card encourages user action with a prominent button, making it ideal for calls-to-action.</p>
        }
      />
    ),
    code: `
<Card
  variant="action"
  title="Action Card"
  description="A card with a green theme and a call-to-action button for user interaction."
  button={<button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">Take Action</button>}
  additionalContent={
    <p>This card encourages user action with a prominent button, making it ideal for calls-to-action.</p>
  }
/>
`
  },
  {
    title: 'Feature Card',
    component: (
      <Card
        variant="feature"
        title="Feature Card"
        description="A bright card designed to highlight features with a yellow background."
        additionalContent={
          <p>This card is ideal for highlighting features or unique selling points with its bright yellow background and engaging design.</p>
        }
      />
    ),
    code: `
<Card
  variant="feature"
  title="Feature Card"
  description="A bright card designed to highlight features with a yellow background."
  additionalContent={
    <p>This card is ideal for highlighting features or unique selling points with its bright yellow background and engaging design.</p>
  }
/>
`
  },
  {
    title: 'Pricing Card',
    component: (
      <Card
        variant="pricing"
        title="Pricing Card"
        description="A card showcasing pricing information with a gray background."
        additionalContent={
          <div className="text-center mt-4">
            <p className="text-3xl font-bold">$29.99</p>
            <p className="text-gray-600">Per Month</p>
          </div>
        }
      />
    ),
    code: `
<Card
  variant="pricing"
  title="Pricing Card"
  description="A card showcasing pricing information with a gray background."
  additionalContent={
    <div className="text-center mt-4">
      <p className="text-3xl font-bold">$29.99</p>
      <p className="text-gray-600">Per Month</p>
    </div>
  }
/>
`
  },
];

const CardShowcase: FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (index: number) => {
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000); // Reset after 2 seconds
  };

  return (
    <div className="w-full p-8 bg-background-dark overflow-scroll h-screen">
      <div className="container mx-auto">
        <div className="text-center flex flex-col items-start justify-start mb-8">
          <h1 className="text-6xl font-bold bg-gradient-to-br from-primary-light via-secondary-light to-secondary-light bg-clip-text text-transparent mb-4">Card Showcase</h1>
          <section className=" flex justify-start items-start flex-col">
            <h2 className="text-3xl font-semibold text-secondary-light mb-4">Introduction</h2>
            <p className="text-lg text-left text-text-dark mb-4">
              The <code className="text-primary-dark">Card</code> component is a versatile and visually appealing component designed to display content in a structured manner. It supports various styles such as default, outlined, elevated, image-based, and more. Below are examples showcasing different variations of the Card component.
            </p>
            <h2 className="text-3xl font-semibold text-secondary-light ">Usage Examples</h2>
          </section>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardExamples.map((example, index) => (
            <div key={index} className="bg-background-light p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-primary-light">{example.title}</h2>
              <div className="mb-4">
                {example.component}
              </div>
              <div className="relative">
                <CopyToClipboard text={example.code} onCopy={() => handleCopy(index)}>
                  <button className="absolute top-0 right-0 p-2 text-white bg-indigo-600 rounded hover:bg-indigo-500">
                    <FaCopy />
                  </button>
                </CopyToClipboard>
                {copiedIndex === index && (
                  <span className="absolute top-0 left-0 p-1 text-sm text-green-400">
                    Copied!
                  </span>
                )}
                <SyntaxHighlighter language="typescript" style={duotoneDark} showLineNumbers={true}>
                  {example.code}
                </SyntaxHighlighter>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardShowcase;
