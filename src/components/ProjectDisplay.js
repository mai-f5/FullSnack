import React from 'react'
import { Col } from 'react-bootstrap'
import imgPlaceholder from '../images/img-placeholder.png'
export default function ProjectDisplay() {
    return (
        <>
            <Col>
                <section>
                    <h2>Recipes notebook</h2>
                    <button>recommends</button>
                    <button>share</button>
                    <p>52 Recommended this project</p>
                </section>

                <img src={imgPlaceholder} alt='' /> {/*CAROUSEL */}


                <h3>Difficulty Level:</h3>
                <p>Medium</p>

                <h3>Project Description:</h3>
                <p>In this project you'll create a website containing recipes. The users can add, edit, delete and view recipes</p>

                <h3>Required Technologies:</h3>
                <p>
                    <span>HTML</span><span>CSS</span><span>JavaScript</span><span>Python</span>
                </p>

                <h3>Project's Assets</h3>
                <a href='#' download>RecipesAssets</a>

                <h3><a href='https://github.com'></a></h3>
            </Col>
            <Col>


            </Col>
        </>
    )
}
