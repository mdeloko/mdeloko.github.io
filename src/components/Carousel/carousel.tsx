import useEmblaCarousel from "embla-carousel-react"
import {type EmblaCarouselType} from "embla-carousel"
import { useCallback, useEffect, useState } from "react";
import { MdChevronLeft,MdChevronRight } from "react-icons/md";
import "./carousel.css"
import Autoplay, {type AutoplayOptionsType} from "embla-carousel-autoplay";

export interface ICarouselProps extends AutoplayOptionsType, React.PropsWithChildren {
    carouselAriaLabel:string;
    carouselAriaRoleDescription:string;
    previousButtonAriaLabel:string;
    nextButtonAriaLabel:string;
}

export default function Carousel({
        children,
        carouselAriaLabel,
        carouselAriaRoleDescription,
        previousButtonAriaLabel,
        nextButtonAriaLabel,
        ...autoPlayProps
    } : ICarouselProps){
    const [emblaRef,emblaApi] = useEmblaCarousel({loop:true,},[Autoplay({
        ...autoPlayProps
    })]);

    const [scrollSnaps,setScrollSnaps] = useState<number[]>([])
    const [selectedSnap,setSelectedSnap] = useState(0)
    
    useEffect(function(){
        if(!emblaApi) return
        
        setupSnaps(emblaApi)
        emblaApi.on("reInit",setupSnaps)
        emblaApi.on("reInit",setActiveSnap)
        emblaApi.on("select",setActiveSnap)
        emblaApi.off("autoplay:stop",(emblaApi) => emblaApi.plugins().autoplay.reset() )
        emblaApi.on("pointerUp",(emblaApi)=>emblaApi.plugins().autoplay.play())
    },[emblaApi])

    const nextSlide = useCallback(function (){
        if(emblaApi) emblaApi.scrollNext()
    },[emblaApi])

    const prevSlide = useCallback(function (){
        if(emblaApi) emblaApi.scrollPrev()
    },[emblaApi])

    function goTo(idx:number){
        if (emblaApi) return emblaApi.scrollTo(idx)
        return
    }
    function setupSnaps(emblaApi:EmblaCarouselType){
        return setScrollSnaps(emblaApi.scrollSnapList())
    }
    function setActiveSnap(emblaApi:EmblaCarouselType){
        return setSelectedSnap(emblaApi.selectedScrollSnap())
    }

    return(<>
        <div className="embla" aria-label={carouselAriaLabel} aria-roledescription={carouselAriaRoleDescription}>
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {children}
                </div>
            </div>

            <div className="embla__dots">
                {scrollSnaps.map((_,idx)=>(
                    <button key={idx} className={idx === selectedSnap?"embla__dot--selected":"embla__dot"} onClick={()=>goTo(idx)} />
                ))}
            </div>

            <button className="embla__prev" onClick={prevSlide} aria-label={previousButtonAriaLabel}><MdChevronLeft/></button>
            <button className="embla__next" onClick={nextSlide}aria-label={nextButtonAriaLabel}><MdChevronRight/></button>
    </div>
    </>)
}