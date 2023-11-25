import * as s from "./style.css";
import Logo from './logo.svg';
import { SearchForm } from "./SearchForm";

export const SearchNavigationBar = () => {
  return (
    <nav className={s.navigationBar}>
      <div className={s.startWrapper}>
        <div className={s.logo}>
          <Logo />
        </div>
      </div>
      <div className={s.centerWrapper}>
        <SearchForm />
      </div>
      <div className={s.endWrapper}></div>
    </nav>
  );
};
