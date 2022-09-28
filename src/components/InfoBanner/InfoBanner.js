import "./InfoBanner.scss";

function InfoBanner({ newRequest, products }) {
    const userPosition = newRequest.position;
    const userLevel = newRequest.level;
    const userAge = newRequest.age;
    const userHeight = newRequest.height;

    let gloveMessage = "";
    let batMessage = "";
    let cleatMessage = "";
    let levelGloveMessage = "";
    let ageBatMessage = "";

    if (userPosition === "infield") {
        if (Number(userAge) < 10) {
            gloveMessage = "What an exciting time it is starting our with softball! Here are some glove recommendations to help you get started."
        } else {
            gloveMessage = "As an infielder, it's essential to have a smaller glove in order to be able to get rid of the ball quickly. Our game is extremely fast paced and we don't want to lose the ball in our mitt. The open pocket allows us to see the ball coming into our glove as we receive the ball. However, at the end of the day, choose hat you're most comfortable ith as the glove should feel like it's an extension of the hand"
        }
    } else if (userPosition === "outfield") {
        if (Number(userAge) < 10) {
            gloveMessage = "What an exciting time it is starting our with softball! Here are some glove recommendations to help you get started."
        } else {
        gloveMessage = "As an outfielder, there is a lot of ground to cover so a slightly bigger glove is preferred. However, control and being able to find the ball out fo the glove quickly are essential."
        }
    } else if (userPosition === "pitcher") {
        if (Number(userAge) < 10) {
            gloveMessage = "What an exciting time it is starting our with softball! Here are some glove recommendations to help you get started."
        } else {
            gloveMessage = "As a pitcher, a closed web is preferred in order to hide the grip of the ball as to not give away anything to your opponents."
        }
    } else if (userPosition === "catcher") {
        if (Number(userAge) < 12) {
            gloveMessage = "What an exciting time it is starting our with softball! Here are some glove recommendations to help you get started."
        } else {
        gloveMessage = "As a catcher, a first base mitt is suggested to give you more control behind the plate and help you be a better wall."
        }
    } else if (userPosition === "first base") {
        if (Number(userAge) < 12) {
            gloveMessage = "What an exciting time it is starting our with softball! Here are some glove recommendations to help you get started."
        } else {
        gloveMessage = "As a first baseman, trappers are preferred as it allows you to pick any ball that your infielders throw your way."
        }
    } 

    if (userLevel === "beginner" || userLevel === "house league") {
        levelGloveMessage = "As someone who is just getting into the sport or not playing competitively, a softer glove is suggested as it eliminates the break-in process and makes it easier to pick up new skills. As you progress, and fall in love with the sport more, you can invest in a glove with higher quality leather that will last longer."
    } else if (userLevel === "select") {
        levelGloveMessage = "As you start to get more competitive, you're fundamentals are there and you'll be playing more games throughout the season. A glove with higher quality leather may help as it will last longer through the seasons of ball."
    } else if (userLevel === "rep" || userLevel === "pro") {
        levelGloveMessage = "At the rep/pro level, you'll want a glove that can last you through the season and even multiple seasons if taken care of. Higher quality leather is suggested as it will withstand the high speeds of the ball and mold specifically to your hand."
    }

    if (Number(userAge) <= 7  ) {
        ageBatMessage = `As a ${Number(userAge)} year old, a 24" - 26" bat is recommended with a -13.5 to -11 drop. Control is essential at this age as players are still at the beginning stages of learning the game and having fun.`;
    } else if (Number(userAge) <= 9 && Number(userAge) >= 8) {
        ageBatMessage = `As a ${Number(userAge)} year old, a 26" - 29" bat is recommended with a -13 to -10 drop. Control is essential at this age as players are still at the beginning stages of learning the game and having fun.`;
    } else if (Number(userAge) <= 13 && Number(userAge) >= 10) {
        ageBatMessage = `As a ${Number(userAge)} year old, a 28" - 32" bat is recommended with a -12 to -10 drop. Control is essential at this age as players are still learning to establish control of the fundamentals. `;
    } else if (Number(userAge) >= 14 && (Number(userHeight) === 1 || Number(userHeight) === 2 || Number(userHeight) === 3)) {
        ageBatMessage = `As a ${Number(userAge)} year old at your height, a 31" - 32" bat is recommended with a -10 to -8 drop. Depending on the type of hitter you are, you may go with a different bat weight. Power hitters may go for heavier bats while contact hitters may go with something lighter so that they have more control.`;
    }
    else if (Number(userAge) >= 14 && (Number(userHeight) === 4 || Number(userHeight) === 5)) {
        ageBatMessage = `As a ${Number(userAge)} year old at your height, a 33" - 34" bat is recommended with a -10 to -8 drop. Depending on the type of hitter you are, you may go with a different bat weight. Power hitters may go for heavier bats while contact hitters may go with something lighter so that they have more control.`;
    }

    if (userAge < 15) {
        cleatMessage = `Players who are competing in an agegroup that is under the age of 15 must use molded cleats for competition. `
    } else {
        cleatMessage = `You have the freedom to choose what type of cleats to purchase. Metal cleats provide more grip when moving around on the field. TPU/Molded cleats are less harsh on the feet/body and would be more suited towards the older player.`
    }

    return (
        <div className="banner">
            {products === "gloves" && <p>{gloveMessage}</p>} 
            {products === "bats" && <p>{batMessage}</p>}
            {products === "cleats" && <p>{cleatMessage}</p>}
            {products === "gloves" && <p>{levelGloveMessage}</p>}
            {products === "bats" && <p>{ageBatMessage}</p>}
        </div>
    );
}

export default InfoBanner;