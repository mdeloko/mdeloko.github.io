import { useEffect, useRef, useState } from 'react'
import './navbar.css'
import { MdRocketLaunch,MdMenu, MdClose } from 'react-icons/md'
import { Link } from 'react-router-dom'

export default function NavBar(){
    const [visible, setVisible] = useState<boolean>(true)
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
    const [dragX, setDragX] = useState<number | null>(null)

    const lastScrollY = useRef<number>(0)
    const touchStartX = useRef<number | null>(null)
    const touchStartY = useRef<number | null>(null)
    const isDragging = useRef<boolean>(false)
    const isHorizontalSwipe = useRef<boolean>(false)
    const menuRef = useRef<HTMLDivElement>(null)
    
    function toggleMenu() {
        setIsMenuOpen(prev => !prev)
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

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('stop-scroll')
        } else {
            document.body.classList.remove('stop-scroll')
        }
    }, [isMenuOpen])

    useEffect(() => {
        const handleTouchStart = (e: TouchEvent) => {
            touchStartX.current = e.touches[0].clientX;
            touchStartY.current = e.touches[0].clientY;
            isHorizontalSwipe.current = false;
            
            if (isMenuOpen || touchStartX.current > window.innerWidth - 50) {
                isDragging.current = true;
            }
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (!isDragging.current || touchStartX.current === null || touchStartY.current === null) return;

            const currentX = e.touches[0].clientX;
            const currentY = e.touches[0].clientY;
            const deltaX = currentX - touchStartX.current;
            const deltaY = currentY - touchStartY.current;

            if (!isHorizontalSwipe.current) {
                const absX = Math.abs(deltaX);
                const absY = Math.abs(deltaY);
                
                if (absX > 10 && absX > absY) {
                    isHorizontalSwipe.current = true;
                } else if (absY > 10) {
                    isDragging.current = false;
                    return;
                }
            }

            if (!isHorizontalSwipe.current) return;

            if (e.cancelable) {
                e.preventDefault();
            }

            const menuWidth = menuRef.current?.getBoundingClientRect().width || window.innerWidth;

            if (isMenuOpen) {
                if (deltaX > 0) {
                    setDragX(deltaX);
                } else {
                    setDragX(0);
                }
            } else {
                if (deltaX < 0) {
                    setDragX(Math.max(0, menuWidth + deltaX));
                }
            }
        };

        const handleTouchEnd = () => {
            if (!isDragging.current) return;
            isDragging.current = false;
            touchStartX.current = null;
            touchStartY.current = null;
            isHorizontalSwipe.current = false;

            setDragX((prevDragX) => {
                if (prevDragX !== null) {
                    const menuWidth = menuRef.current?.getBoundingClientRect().width || window.innerWidth;
                    const threshold = menuWidth / 3;
                    
                    if (isMenuOpen) {
                        if (prevDragX > threshold) setIsMenuOpen(false);
                    } else {
                        if (prevDragX < menuWidth - threshold) setIsMenuOpen(true);
                    }
                }
                return null;
            });
        };

        window.addEventListener('touchstart', handleTouchStart, { passive: true });
        window.addEventListener('touchmove', handleTouchMove, { passive: false });
        window.addEventListener('touchend', handleTouchEnd, { passive: true });
        window.addEventListener('touchcancel', handleTouchEnd, { passive: true });

        return () => {
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleTouchEnd);
            window.removeEventListener('touchcancel', handleTouchEnd);
        };
    }, [isMenuOpen]);

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
            toggleMenu()
        }
    }
    const mobileMenuStyle: React.CSSProperties = {
        transform: dragX !== null ? `translateX(${dragX}px)` : '',
        transition: dragX !== null ? 'none' : '', 
    };

    return <nav id='top-nav' className={visible?"":"top-nav-hide"}>
        <div id="logo" >
            <Link to={'/'} role='button' aria-label='Início'>
                <MdRocketLaunch />
                <h1>Dev Erik</h1>
            </Link>
        </div>
        <div id="mobile">
            <button
                id="menu-btn"
                className={isMenuOpen?"hide-btn":""}
                onClick={toggleMenu}
                aria-label='Menu'
                >
                <MdMenu />
            </button>
            <div
                ref={menuRef}
                id='mobile-menu'
                className={isMenuOpen ? "" : "hide-menu"}
                style={mobileMenuStyle}
                >
                <Link to={'/'} onClick={handleLinkClick}>Início</Link>
                <Link to={'/sobre'} onClick={handleLinkClick}>Sobre Mim</Link>
                <Link to={'/cursos-e-formacoes'} onClick={handleLinkClick}>Formações</Link>
                <Link to={'/projetos'} onClick={handleLinkClick}>Projetos</Link>
                <Link to={'/contatos'} onClick={handleLinkClick}>Contatos</Link>
                <button onClick={toggleMenu} aria-label='Fechar'><MdClose/></button>
            </div>
        </div>
        <div id="desktop">
            <Link to={'/'} onClick={handleLinkClick}>Início</Link>
            <Link to={'/sobre'} onClick={handleLinkClick}>Sobre Mim</Link>
            <Link to={'/cursos-e-formacoes'} onClick={handleLinkClick}>Formações</Link>
            <Link to={'/projetos'} onClick={handleLinkClick}>Projetos</Link>
            <Link to={'/contatos'} onClick={handleLinkClick}>Contatos</Link>
        </div>
    </nav>
}