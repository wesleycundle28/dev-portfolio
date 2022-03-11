import { A } from "../styles/Anchor.style";

export const Anchor = ({ href, Children }) => {
  return <A href={href}>{Children}</A>;
};
