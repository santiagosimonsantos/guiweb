import { useRef } from "react"

export const Card = ({ title, description, icon, color }) => {
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
                className={`${color} cursor-pointer overflow-hidden relative block max-w-xl p-6 border-gray-200 rounded-md shadow dark:border-red-700 z-0`}
                ref={card}
            >
                <div>
                    <div className="relative z-10">
                        <h5 className="mb-2 text-4xl  font-bold tracking-tight text-gray-900 dark:text-white">
                            {title}
                        </h5>
                        <p className="font-normal text-justify text-gray-700 dark:text-white text-lg p-2">
                            {description}
                        </p>
                    </div>
                    <div className="absolute opacity-30 -bottom-8 -left-16 contrast-200">
                        {icon}
                    </div>
                </div>
            </div>
        </div>
    )
}
