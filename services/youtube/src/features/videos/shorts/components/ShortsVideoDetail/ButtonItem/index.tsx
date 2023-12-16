import * as s from './style.css';

type Props = {
  buttonText: string;
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const ButtonItem = ({ buttonText, label, onClick }: Props) => {
  return (
    <div className={s.wrapper}>
      <label className={s.label}>
        <button className={s.button} onClick={onClick}>
          {buttonText}
        </button>
        {label}
      </label>
    </div>
  );
};
