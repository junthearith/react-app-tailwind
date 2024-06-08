import './App.css'
import { NavbarComponent } from './components/NavbarComponent'
import { FooterComponent } from './components/FooterComponent'
import { CardComponent } from './components/CardComponent'
import { CTACardComponent } from './components/CTACardComponent'

function App() {

  return (
    <>
      <main>
        <NavbarComponent/>
        <section className='flex flex-wrap justify-center gap-1'>
          <CardComponent/>
          <CardComponent/>
          <CardComponent/>
          <CardComponent/>
          <div className='flex flex-wrap gap-1'>
            <CTACardComponent/>
            <CTACardComponent/>
            <CTACardComponent/>
            <CTACardComponent/>
          </div>
        </section>
      </main>
      <footer>
        <FooterComponent/>
      </footer>
    </>
  )
}

export default App
