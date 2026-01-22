import { useEffect, useRef, useState } from 'react'
import './navbar.css'
import { MdRocketLaunch,MdMenu, MdClose } from 'react-icons/md'
import { Link } from 'react-router-dom'

export default function NavBar(){
    const [visible, setVisible] = useState(true)
    const lastScrollY = useRef(0)
    
    function changeMobileMenuState(){
        const menuDiv = document.getElementById('mobile-menu')
        const menuBtn = document.getElementById("menu-btn")
        const body = document.querySelector("body")
        console.log(body)
        if (menuBtn && menuDiv&&body){
            menuBtn.classList.toggle("hide-btn")
            menuDiv.classList.toggle("hide-menu")
            body.classList.toggle("stop-scroll")
        }
    }

    function handleScroll(){
        const actualScrollY = window.scrollY

        if(lastScrollY.current < actualScrollY && actualScrollY > 50){
            setVisible(false)
        }else{
            setVisible(true)
        }
        lastScrollY.current = actualScrollY
    }

    useEffect(()=>{
        window.addEventListener("scroll",handleScroll)
        return ()=>{
            window.removeEventListener("scroll",handleScroll)
        }
    },[])

    function handleLinkClick(e: React.MouseEvent<HTMLAnchorElement>){
        e.currentTarget.blur()

        const menuDiv = document.getElementById('mobile-menu')
        
        if (menuDiv && !menuDiv.classList.contains('hide-menu')){
            changeMobileMenuState()
        }
    }

    return <nav id='top-nav' className={visible?"":"top-nav-hide"}>
        <div id="logo" >
            <Link to={'/'} role='button' aria-label='Início'>
                <MdRocketLaunch />
                <h1>Dev Erik</h1>
            </Link>
        </div>
        <div id="mobile">
            <button id="menu-btn" onClick={changeMobileMenuState} aria-label='Menu' >
                <MdMenu />
            </button>
            <div id='mobile-menu' className='hide-menu'>
                <Link to={'/'} onClick={handleLinkClick}>Início</Link>
                <Link to={'/cursos-e-formacoes'} onClick={handleLinkClick}>Formações</Link>
                <Link to={'/projetos'} onClick={handleLinkClick}>Projetos</Link>
                <Link to={'/contatos'} onClick={handleLinkClick}>Contatos</Link>
                <button onClick={changeMobileMenuState} aria-label='Fechar'><MdClose/></button>
            </div>
        </div>
        <div id="desktop">
            <Link to={'/'} onClick={handleLinkClick}>Início</Link>
            <Link to={'/cursos-e-formacoes'} onClick={handleLinkClick}>Formações</Link>
            <Link to={'/projetos'} onClick={handleLinkClick}>Projetos</Link>
            <Link to={'/contatos'} onClick={handleLinkClick}>Contatos</Link>
        </div>
    </nav>
}