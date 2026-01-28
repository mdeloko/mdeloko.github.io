import "./carousel.css"



export default function Carousel(props : React.PropsWithChildren){
    
    return(<>
        <div className="carousel">
            {props.children}
        </div>
    </>)
}