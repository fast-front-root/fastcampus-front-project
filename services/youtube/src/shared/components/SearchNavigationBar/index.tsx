import * as s from "./style.css";
import Logo from './logo.svg';
import { SearchForm } from "./SearchForm";
import Link from "next/link";
import { getMainPageLink } from "@/src/shared/utils/link/page";

export const SearchNavigationBar = () => {
  return (
    <nav className={s.navigationBar}>
      <div className={s.startWrapper}>
        <Link href={getMainPageLink()}>
          <div className={s.logo}>
            <Logo />
          </div>
        </Link>
      </div>
      <div className={s.centerWrapper}>
        <SearchForm />
      </div>
      <div className={s.endWrapper}></div>
    </nav>
  );
};
