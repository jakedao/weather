type TOwnProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

const TextField = (props: TOwnProps) => {
  const { label, ...other } = props;

  return (
    <div className="text-field">
      <label>{label}:</label>
      <input {...other} />
    </div>
  );
};
export default TextField;
