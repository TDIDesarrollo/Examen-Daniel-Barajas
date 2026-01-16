import { Link } from "react-router"
import RabbitLogo from "../../assets/RabbitLogo.png";


const Header = () => {
  return (
    <header className="w-full bg-black/70 flex justify-between items-center p-8 mb-10">
        <Link to="/" className="text-xl hover:text-blue-950 font-bold">Home</Link>
        <div className="flex items-center justify-center">
          <img src={RabbitLogo} width={80} height={80} alt="Rabbit logo"/>
          <h1 className="text-4xl ">Rabbit</h1>
        </div>
        <Link to="/saved-posts" className="text-xl hover:text-blue-950 font-bold">Post guardados</Link>
    </header>
  )
}

export default Header