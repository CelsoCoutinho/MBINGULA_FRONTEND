import { useRef, useState, useContext } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import { RiRestaurant2Fill } from "react-icons/ri";
import { IoHome } from "react-icons/io5";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineReload } from "react-icons/ai";
import { BiLogOut, BiLogIn } from "react-icons/bi";

import { AuthContext } from '../../context/AuthContext';

function Navbar() {
  const navRef = useRef();
  const [showMore, setShowMore] = useState(false);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const { signed, signOut } = useContext(AuthContext);

  const handleShowMore = () => {
    setShowMore(true);
  };

  const handleBack = () => {
    setShowMore(false);
  };

  return (
    <header className="header">
      <Link to="/" className="logo">
        <RiRestaurant2Fill className="fa-cutlery" />
        Restaurante Mbingula
      </Link>

      <div className="navbar">
        <nav ref={navRef}>
          <ul>
            {!showMore ? (
              <>
                <li><NavLink to="/"><IoHome className="icones-menu" /> Home</NavLink></li>
                <li><NavLink to="/"> <AiOutlineQuestionCircle className="icones-menu" /> Sobre</NavLink></li>
                <li>
                  {signed ? (
                    <NavLink to="/" onClick={signOut}> <BiLogOut className="icones-menu" /> Sair</NavLink>
                  ) : (
                    <NavLink to="/Front-office/components/LoginRegisterForm"> <BiLogIn className="icones-menu" /> Entrar</NavLink>
                  )}
                </li>
                <li><NavLink to="/Back-office/App_BackOffice"><AiOutlineUser className="icones-menu" /> Admin</NavLink></li>
                <li><NavLink to="/Front-office/pages/mesaReservada"> Reservar Mesa</NavLink></li>
                <li>
                  <NavLink to="#" onClick={handleShowMore}><AiOutlinePlusCircle className="icones-menu" /> Ver mais</NavLink>
                </li>
              </>
            ) : (
              <>
                <li><NavLink to="/Front-office/pages/AtividadeCasa"><IoHome className="icones-menu" /> Atividades</NavLink></li>
                <li><NavLink to="/Front-office/pages/CardapioItems"><IoHome className="icones-menu" /> Cardápio </NavLink></li>
                <li><NavLink to="/Front-office/pages/Servicos"><IoHome className="icones-menu" /> Serviços</NavLink></li>
                <li><NavLink to="/Front-office/pages/pages/avaliacao/create"><IoHome className="icones-menu" /> Avaliação</NavLink></li>
                <li><NavLink to="#" onClick={handleBack}><AiOutlineReload className="icones-menu" /> Voltar</NavLink></li>
              </>
            )}
            <button
              className="nav-btn nav-close-btn"
              onClick={showNavbar}>
              <FaTimes />
            </button>
          </ul>
        </nav>

        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
    </header>
  );
}

export default Navbar;