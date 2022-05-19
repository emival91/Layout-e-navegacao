import './styles.css';

type Props = { texto: String };

const Button = ({ texto }: Props) => {
  return (
    <button className="btn">
      <h1>{texto}</h1>
    </button>
  );
};

export default Button;