/* eslint-disable @typescript-eslint/no-explicit-any */
import { css } from 'styled-components';

export const px = (breakpoint: string | number) => {
  let value;

  switch (breakpoint) {
    case 'xs':
      value = 0;
      break;
    case 'sm':
      value = 576;
      break;
    case 'md':
      value = 768;
      break;
    case 'lg':
      value = 992;
      break;
    case 'xl':
      value = 1200;
      break;
    case 'xxl':
      value = 1200;
      break;
    default:
      value = breakpoint;
      break;
  }

  return `${value}px`;
};

type BreakPoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

const media = {
  lessThan:
    (breakPoint: BreakPoints | number) =>
    (literals: TemplateStringsArray, ...placeholders: any[]) =>
      css`
        @media (max-width: ${px(breakPoint)}) {
          ${css(literals, ...placeholders)};
        }
      `,
  greaterThan:
    (breakPoint: BreakPoints | number) =>
    (literals: TemplateStringsArray, ...placeholders: any[]) =>
      css`
        @media (min-width: ${px(breakPoint)}) {
          ${css(literals, ...placeholders)};
        }
      `,
  between:
    (
      firstBreakPoint: BreakPoints | number,
      secondBreakPoint: BreakPoints | number
    ) =>
    (literals: TemplateStringsArray, ...placeholders: any[]) =>
      css`
        @media (min-width: ${px(firstBreakPoint)}) and (max-width: ${px(
            secondBreakPoint
          )}) {
          ${css(literals, ...placeholders)};
        }
      `
};

// console.log(media.lessThan(1400));
// console.log(media.between('sm', 'lg'));
// console.log(media.between(100, 'lg'));
// console.log(media.greaterThan('md'));

export default media;
