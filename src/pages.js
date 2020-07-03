import Episodes from './pages/Episodes';
import Characters from './pages/Characters';
import Locations from './pages/Locations';

const pages = [
    { path: "/", component: Episodes, label: "Episodios" },
    { path: "/characters", component: Characters, label: "Personajes" },
    { path: "/locations", component: Locations, label: "Dimensiones" },
]

export default pages;