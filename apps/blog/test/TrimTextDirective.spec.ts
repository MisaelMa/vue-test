import { TrimText } from '../src/common/directives/TrimText';
import { mount } from '@vue/test-utils';

describe('TrimTextDirective', () => {
  it('should trim the text when length is greater than maxLength', () => {
    const el = document.createElement('div');
    el.innerText = 'This is a long text that needs to be trimmed.';
    const binding = { value: { maxLength: 10, last: '...' } };

    TrimText.beforeMount(el, binding);

    expect(el.innerText).toEqual('This is a ...');
  });

  it('should not trim the text when length is less than maxLength', () => {
    const el = document.createElement('div');
    el.innerText = 'Short text';
    const binding = { value: { maxLength: 50 } };

    TrimText.beforeMount(el, binding);

    expect(el.innerText).toEqual('Short text');
  });

  it('should handle empty text', () => {
    const el = document.createElement('div');
    const binding = { value: { maxLength: 10, last: '...' } };

    TrimText.beforeMount(el, binding);

    expect(el.innerText).toEqual('');
  });
});

