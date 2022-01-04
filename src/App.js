import React, { useState } from 'react'
import Navbar from './comp/Navbar';
import People from './comp/People';
import Planets from './comp/Planets';
import { ReactQueryDevtools } from 'react-query/devtools'

// il ne faut plus réinstaller le ReactQueryDevTools, il est compris dans le packet de base de useQuery
import { QueryClient, QueryClientProvider } from 'react-query'
// pour que le query fonctionne il faut lui donner un provider, comme un usecontext.
// sinon il ne peut pas l'utiliser

// Faire attention avec les tutos de Net Ninja, le useQuery pour le coup n'est pas à jour et pour le coup, pour une fois, c'est super chiant
// faut noter que son tuto date de 2020 et qu'on est début 2022
// depuis il y a eu la nouvelle version (la V3) comprennant beaucoup plus de TRUCS à l'interieure dont des outils qu'il fallait NPM avant.
// en gros c'est cool et pas cool
// dans l'ensemble quand même, je m'attendais à MIEUX !!

function App() {

  const [page, setPage] = useState('planets')

  const queryClient = new QueryClient()


  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <h1>Star Wars Info          </h1>
          <Navbar setPage={setPage} />
          <div className="content">
            {page === "planets" ? <Planets />
              : <People />
            }
          </div>
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
