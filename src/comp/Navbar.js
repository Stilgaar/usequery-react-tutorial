// façon plus mieux que d'utiliser un react routeur quand même.
// par contre ya pas de clicks en arrière sur ce genre de choses
// mais j'aime bien

function Navbar({ setPage }) {
    return (
        <nav>
            <button onClick={() => setPage('people')}> People</button>
            <button onClick={() => setPage('planets')}> Planets</button>
        </nav>
    )
}
export default Navbar;