import { html } from 'lit';
import '../src/polaris-card-news.js';

export default {
  title: 'PolarisCardNews',
  component: 'polaris-card-news',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <polaris-card-news
      style="--polaris-card-news-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </polaris-card-news>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
