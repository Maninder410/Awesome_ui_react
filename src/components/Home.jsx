import React from 'react'
import '../styles/home.scss'
import vg from "../assets/2.webp"
import {
AiFillGoogleCircle,
AiFillYoutube,
AiFillInstagram,
AiFillAmazonCircle} from "react-icons/ai"

const Home = ()=> {
  return (
    <>
  <div className = "home" id = "home">
  <main>
    <h1> TechyStar</h1>
    <p>solution to all your problems</p>
  </main>
  </div>
  <div className="home2">
    <img src = {vg} alt = "Graphics"/>
    <div>
        <p>
            we are your one and only solution to the teach problems
            you face
            every day. We are leading tech company whoe aim is to increase the 
            problem solving ability in children.
        </p>
    </div>
  </div>
  <div className="home3" id = "about">
    <div>
    <h1>who we are</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti ipsum, similique sit id sequi perspiciatis facere quisquam. Sunt rem perferendis placeat adipisci iusto deleniti pariatur ullam quo in non quos nihil eligendi dicta, quisquam sit maxime veritatis velit eius accusamus labore nobis tempore provident! Voluptate, facilis. Magni ipsam, repudiandae at aspernatur esse aliquid sequi, incidunt vero harum praesentium tempora illum laudantium laborum impedit assumenda? Mollitia ratione facere placeat perspiciatis natus facilis est quidem praesentium a temporibus fuga aut esse sint fugiat ex ea deserunt, tenetur voluptatum similique. Molestias amet voluptatum minima repellat nesciunt iusto repellendus assumenda molestiae dignissimos? Eveniet, non. </p>
    </div>
  </div>
  <div className="home4" id = "brands">
    <div>
        <h1> Brands</h1>
        <article>
            <div style = {{animationDelay:"0.3s"}}>
                <AiFillGoogleCircle/>
                <p>Google</p>
            </div>
            <div style = {{animationDelay:"0.5s"}}>
                <AiFillAmazonCircle/>
                <p>amazon</p>
            </div>
            <div style = {{animationDelay:"0.7s"}}>
                <AiFillYoutube/>
                <p>youtube</p>
            </div>
            <div style = {{animationDelay:"1s"}}>
                <AiFillInstagram/>
                <p>Instagram</p>
            </div>
        </article>
    </div>
  </div>
  </>
  );
}
export default Home;
