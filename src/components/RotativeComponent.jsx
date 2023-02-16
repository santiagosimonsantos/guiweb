
export const RotativeComponent = ({ children }) => {
    const wrapper = useRef(null)
    const card = useRef(null)

    const handleMouseEnter = (e) => {
        e.preventDefault()
        console.log(e)
    }

    const handleMouseMove = (e) => {
        e.preventDefault()
        card.current.style.transition = "none"
        card.current.style.zIndex = "30"
        const { width, height, left, top } =
            wrapper.current.getBoundingClientRect()
        const x = e.clientX - left
        const y = e.clientY - top
        const halfWidth = width / 2
        const halfHeight = height / 2
        const rotationX = ((y - halfHeight) / halfHeight) * 10
        const rotationY = ((x - halfWidth) / halfWidth) * 10
        card.current.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`

    }

    const handleMouseLeave = () => {
        card.current.style.transition = "transform 0.5s ease-in-out"
        card.current.style.transform = "rotateX(0) rotateY(0)"
    }

    return (
        <div
            className="[perspective:1000px] relative"
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            ref={wrapper}
        >
            <div
                className="cursor-pointer overflow-hidden relative block max-w-xl p-6 border-gray-200 rounded-md shadow dark:border-red-700 z-0"
                ref={card}
            >
                {children}
            </div>
        </div>
    )
}