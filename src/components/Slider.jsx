import React, { useState } from 'react'
import left from '../assets/left.svg'
import right from '../assets/right.svg'
import { Container, ImageContainer, NavButton, DotContainer, Dot, Img } from "./styled.js"

const Slider = ({ config }) => {
    const [imageIndex, setImageIndex] = useState(0)


    const next = () => {
        setImageIndex(slideNo => slideNo += 1)
        if (imageIndex === config.length - 1) {
            setImageIndex(0)
        }
    }

    const prev = () => {
        setImageIndex(slideNo => slideNo -= 1)
        if (imageIndex === 0) {
            setImageIndex(config.length - 1)
        }
    }

    return (
        <Container>
            <ImageContainer src={config[imageIndex].image} />
            <NavButton right onClick={next}>
                <Img src={right} />
            </NavButton>
            <NavButton onClick={prev}>
                <Img src={left} />
            </NavButton>
            <DotContainer>
                {
                    config.map((element, index) => (
                        <Dot key={element.image} onClick={() => { setImageIndex(index) }} active={(index === imageIndex)} />
                    ))
                }
            </DotContainer>
        </Container>
    )
}

export default Slider