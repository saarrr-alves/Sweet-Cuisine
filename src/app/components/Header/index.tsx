import style from './Header.module.css';
import Image from 'next/image';

const Header = () => {
  return (
    <header className={style.header}>
      <Image className={style.img} src="/favicon.ico" alt="Logo do Sweet Cuisine" width={50} height={50} />
      <h1 className={style.title}>Bem-Vindos ao <span>Sweet Cuisine</span></h1>
    </header>
  );
}

export default Header;