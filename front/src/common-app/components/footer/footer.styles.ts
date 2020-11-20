import { css } from 'emotion';
import { theme } from 'core/theme';

const { palette, spacing, breakpoints } = theme;
const color = palette.customPalette;

export const footerContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: ${spacing(37.5)};
  padding: ${spacing(2.5)} ${spacing(12.5)};
  background-color: ${color.secondary};
  @media (max-width: ${breakpoints.values.md}px) {
    padding: ${spacing(2.5)} ${spacing(5)} ${spacing(6)} ${spacing(5)};
  }
  @media (max-width: ${breakpoints.values.xs}px) {
    height: ${spacing(43.75)};
  }
`;

export const topContainer = css`
  padding: 0 ${spacing(2)};
  display: flex;
  justify-content: space-between;
  height: ${spacing(24.375)};
  align-items: center;
  @media (max-width: ${breakpoints.values.xs}px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    height: ${spacing(27.5)};
  }
`;

export const topContainerCenter = css`
  padding: 0 ${spacing(2)};
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${spacing(24.375)};
`;

export const linkList = css`
  padding: 0;
  margin: 0;
  list-style: none;
  @media (max-width: ${breakpoints.values.xs}px) {
    text-align: center;
    margin-top: ${spacing(2.4)};
  }
`;

export const link = css`
  font-size: ${spacing(2.2)};
  color: ${color.greyLight};
  text-decoration: none;
  &:hover {
    color: ${color.primary};
  }
`;

export const bottomContainer = css`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${color.primary};
  padding-top: ${spacing(2)};
  @media (max-width: ${breakpoints.values.xs}px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const lemoncodeIcon = css`
  height: ${spacing(12.5)};
`;

export const iconContainer = css`
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const iconListItem = css`
  margin-right: ${spacing(1)};
  &:first-of-type {
    margin-right: ${spacing(1.4)};
  }
  &:last-of-type {
    margin-right: 0;
  }
`;

export const icon = css`
  color: ${color.greyLight};
  font-size: ${spacing(3)};
  &:hover {
    cursor: pointer;
    color: ${color.primary};
  }
`;

export const githubIcon = css`
  height: ${spacing(2.75)};
  fill: ${color.greyLight};
  &:hover {
    cursor: pointer;
    fill: ${color.primary};
  }
`;

export const copyright = css`
  color: ${color.greyLight};
  @media (max-width: ${breakpoints.values.xs}px) {
    margin-top: ${spacing(0.8)};
  }
`;
