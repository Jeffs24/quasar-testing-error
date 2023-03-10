import { describe, it, expect } from 'vitest';
import HelloWorld from '@/components/HelloWorld.vue';
import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-vitest';
import router from '@/router';
import i18n from '@/i18n';
import { render, screen } from '@testing-library/vue';

installQuasarPlugin();

describe('HelloWorld', () => {
  it('renders properly', () => {
    render(HelloWorld, {
      props: { msg: 'This is a test' },
      global: {
        plugins: [router, i18n],
      },
    });

    expect(screen.queryByText(/This is a test/)).not.toBeNull();
  });
});
