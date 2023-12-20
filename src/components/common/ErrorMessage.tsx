import "../../styles/ErrorMesssage.scss";

type TOwnProps = {
  message: string;
};
const ErrorMessage = (props: TOwnProps) => {
  const { message } = props;
  return <div className="error-message">{message}</div>;
};
export default ErrorMessage;
