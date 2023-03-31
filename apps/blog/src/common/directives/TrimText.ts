import { DirectiveBinding, ObjectDirective } from 'vue';

export const TrimText:ObjectDirective = {
    beforeMount: (el:HTMLElement, binding:DirectiveBinding) => {
      const payload = binding.value;
      const { maxLength, last = "...." } = payload;
      const text = el.innerText;
      const isMayor = text ? text.length > maxLength : false
      el.innerText = isMayor ? text.slice(0, maxLength) + last : text ? text : '';
    },
};