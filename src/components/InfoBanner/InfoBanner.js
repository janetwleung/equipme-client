import { useState } from "react";
import "./InfoBanner.scss";

function InfoBanner({ newRequest, products }) {
    let gloveMessage = "";
    let batMessage = "";
    let cleatMessage = "";
    let levelGloveMessage = "";
    let ageBatMessage = "";

    if (newRequest.position === "infield") {
        gloveMessage = "As an infielder, it's essential to have a smaller glove in order to be able to get rid of the ball quickly. Our game is extremely fast paced and we don't want to lose the ball in our mitt. The open pocket allows us to see the ball coming into our glove as we receive the ball. However, at the end of the day, choose hat you're most comfortable ith as the glove should feel like it's an extension of the hand"
    } else if (newRequest.position === "outfield") {
        gloveMessage = "As an outfielder, there is a lot of ground to cover so a slightly bigger glove is preferred. However, control and being able to find the ball out fo the glove quickly are essential."
    } else if (newRequest.position === "pitcher") {
        gloveMessage = "As a pitcher, a closed web is preferred in order to hide the grip of the ball as to not give away anything to your opponents."
    } else if (newRequest.position === "catcher") {
        gloveMessage = "As a catcher, a first base mitt is suggested to give you more control behind the plate and help you be a better wall."
    } else if (newRequest.position === "first base") {
        gloveMessage = "As a first baseman, trappers are preferred as it allows you to pick any ball that your infielders throw your way."
    } 

    if (newRequest.level === "beginner" || newRequest.level === "house league") {
        levelGloveMessage = "As someone who is just getting into the sport or not playing competitively, a softer glove is suggested as it eliminates the break-in process and makes it easier to pick up new skills. As you progress, and fall in love with the sport more, you can invest in a glove with higher quality leather that will last longer."
    } else if (newRequest.level === "select") {
        levelGloveMessage = "As you start to get more competitive, you're fundamentals are there and you'll be playing more games throughout the season. A glove with higher quality leather may help as it will last longer through the seasons of ball."
    } else if (newRequest.level === "rep" || newRequest.level === "pro") {
        levelGloveMessage = "At the rep/pro level, you'll want a glove that can last you through the season and even multiple seasons if taken care of. Higher quality leather is suggested as it will withstand the high speeds of the ball and mold specifically to your hand."
    }

    if (Number(newRequest.age) <= 7  ) {
        ageBatMessage = `As a ${Number(newRequest.age)} year old, a bat that is 24" - 26" is suggested with a -13.5 to -11 drop.`;
    } else if (8 <= Number(newRequest.age) <= 9) {
        ageBatMessage = `As a ${Number(newRequest.age)} year old, a bat that is 26" - 29" is recommended with a -13 to -10 drop.`;
    } else if (10 <= Number(newRequest.age) <= 13) {
        ageBatMessage = `As a ${Number(newRequest.age)} year old, a bat that is 28" - 32" is recommended with a -12 to -10 drop.`;
    } else if (Number(newRequest.age) >= 14) {
        ageBatMessage = `As a ${Number(newRequest.age)} year old, a bat that is 31" - 34" is recommended with a -10 to -8 drop.`;
    }


    return (
        <div className="banner">
            {products === "gloves" && <p>{gloveMessage}</p>} 
            {products === "bats" && <p>{batMessage}</p>}
            {products === "cleats" && <p>{cleatMessage}</p>}
            {products === "gloves" && <p>{levelGloveMessage}</p>}
            {products === "bats" && <p>{ageBatMessage}</p>}
             

{/* 
            {newRequest.position === "infield" ? <p>
                As an infielder, it's essential to have a smaller glove in order to be able to get
                rid of the ball quickly. Our game is extremely fast paced and we don't want to lose
                the ball in our mitt. The open pocket allows us to see the ball coming into our glove
                as we receive the ball.
            </p> : ""}
            {newRequest.position === "outfield" ? <p>
                As an outfielder, there is a lot of ground to cover so a slightly bigger glove is preferred.
                However, control and being able to find the ball out fo the glove quickly are essential.
            </p> : ""}
            {newRequest.position === "pitcher" ? <p>
                As a pitcher, a closed web is preferred in order to hide the grip of the ball as to not give away anything
                to your opponents.
            </p> : ""}
            {newRequest.position === "catcher" ? <p>
                As a catcher, a first base mitt is suggested to give you more control behind the plate and 
                help you be a better wall.
            </p> : ""}
            {newRequest.position === "first base" ? <p>
                As a first baseman, trappers are preferred as it allows you to pick any ball that your infielders throw your way.
            </p>: ""}
         */}
        </div>
    );
}

export default InfoBanner;