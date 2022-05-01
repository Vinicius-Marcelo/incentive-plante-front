import * as B from "./styles";

export default function Button({ children, ...rest }) {
  return <B.Container {...rest}>{children}</B.Container>;
}
