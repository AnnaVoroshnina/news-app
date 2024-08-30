import {Header} from "./components/Header/header.tsx";
import {Main} from "./pages/Main/Main.tsx";

export function App() {

  return (
    <>
      <Header />
        <div className='container'>
            <Main />
        </div>
    </>
  )
}

