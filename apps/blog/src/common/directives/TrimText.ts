import { DirectiveBinding, ObjectDirective } from 'vue';

export const TrimText:ObjectDirective = {
    beforeMount: (el:HTMLElement, binding:DirectiveBinding) => {
      const payload = binding.value;
      const { maxLength, last = "...." } = payload;
      const text = el.innerText;
      el.innerText =
        text.length > maxLength ? text.slice(0, maxLength) + last : text;
    },
};