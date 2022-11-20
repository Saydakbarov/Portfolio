import { styled } from "@mui/material";

 export const AnimateSkills = styled("div") `
    position: relative;
    width: 120px;
    height: 120px;
    transform-style: preserve-3d;
    animation: animate 20s infinite linear;
    margin: 0 auto;
    @keyframes animate {
        0%{
            transform: perspective(1000px) rotateY(0deg);
        }
        100%{
            transform: perspective(1000px) rotateY(360deg);
        }
    }

    .box{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
        transform-origin: center;
        transform: rotateY(calc(var(--i) * 45deg)) translateZ(200px);
        -webkit-box-reflect: below 0px linear-gradient(transparent,transparent,#0027);

        img{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }


@media screen and (max-width:452px) {
    width: 90px;
    height: 90px;
    margin-left: 0px;
    
    .box{
        transform: rotateY(calc(var(--i) * 45deg)) translateZ(130px);
    }
}   
@media screen and (max-width:768px) {
   
    margin-left: 0px;
    
  
}  
  
`

