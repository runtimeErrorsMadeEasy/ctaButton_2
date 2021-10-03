import { html } from 'lit';
import '../cta-button.js';

export default {
  title: 'CtaButton',
  component: 'cta-button',
  argTypes: {
    title: { control: 'text' },
    counter: { control: 'number' },
    textColor: { control: 'color' },
    invert: { control: 'boolean' },
    link: { control: 'text' },
    icon: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

function Template({
  title = 'Bose Headphones 1',
  textColor,
  invert = false,
  link = 'https://www.bose.com/en_us/products/headphones/noise_cancelling_headphones/quietcomfort-headphones-45.html#v=qc45_white_smoke',
  icon = 'image:music-note',
  disabled = true,
}) {
  return html`
    <cta-button
      style="--cta-button-text-color: ${textColor || 'black'}"
      .title=${title}
      .invert=${invert}
      .link=${link}
      .icon=${icon}
    >
    </cta-button>

    <cta-button
      style="--cta-button-text-color: ${textColor || 'white'}"
      title="Bose Headphones 2"
      .invert=${invert}
      link="https://www.bose.com/en_us/products/headphones/noise_cancelling_headphones/quietcomfort-headphones-45.html#v=qc45_white_smoke"
      icon="image:music-note"
    >
    </cta-button>

    <cta-button
      style="--cta-button-text-color: ${textColor || 'white'}"
      title="Bose Heaphones 3"
      .invert=${invert}
      link="https://www.bose.com/en_us/products/headphones/noise_cancelling_headphones/quietcomfort-headphones-45.html#v=qc45_white_smoke"
      icon="image:music-note"
    >
    </cta-button>

    <cta-button
      title="Bose Headphones 4"
      .invert=${invert}
      .icon=${icon}
      .disabled=${disabled}
    >
    </cta-button>
  `;
}

export const Regular = Template.bind({});
