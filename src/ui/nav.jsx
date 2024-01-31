import { NavLink } from "react-router-dom";

function CustomLink({ to, name, children, ...props }) {

  //TODO create a better button with corner borders
  const buttonStyle =
    "block py-4 text-center border-2 border-double border-primary bg-primaryBackground/60 hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#60e047,0_0_15px_#60e047,0_0_15px_#60e047]";
  return (
    // <li className={isActive ? buttonStyle + "active" : buttonStyle}>
      <li>
      {/* <Link className="block" to={to} {...props} > */}
      <NavLink className={({isActive}) =>{
        return buttonStyle + (isActive ? "shadow shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#60e047,0_0_15px_#60e047,0_0_30px_#60e047]" : "")
      }} to={to} {...props} >
        {name}
      </NavLink>
    </li>
  );
}

//TODO add submenu navigation
export default function Nav() {
  return (
      <nav className="h-full backdrop-blur border-2 border-double border-primary bg-primaryDark/60 p-5 text-2xl">
        <ul className="flex flex-col justify-around h-full">
          <CustomLink to={"/"} name={"Home"} />
          {/* Interests likes the Lego Clone Collection, SW in general, tuned cars in NFS, GTA mod recommendations*/}
          <CustomLink to={"/interests"} name={"Interests"} />
          {/* project reports like this website, smart home, 3D Printig */}
          <CustomLink to={"/projects"} name={"Projects"} />
          {/* tv, movies, books, music */}
          <CustomLink to={"/media"} name={"Media"} />
          {/* page settings disable tilt, sound etc. */}
          <CustomLink to={"/settings"} name={"Settings"} />
        </ul>
      </nav>
  );
}
