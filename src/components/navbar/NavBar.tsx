/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from 'react-router-dom';
import classes from './navbar.module.scss';

// interface StateObject {
//   title: string,
//   type: string,
//   desc: string,
//   country: string,
//   price: number,
//   sqareMeters: number,
//   rooms: number,
// }

const NavBar = () => {

  return (
    <>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <Link to='/' className={classes.left}>
            Home
          </Link>
          <div className={classes.right}>
            Nfts
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
