import Header from '../components/Header'
import Media from "../components/Media";
import Grid  from "@material-ui/core/Grid";
import Box  from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px"
  }
});

const mediaCards = 
[
    {
        image: "https://korben.info/app/uploads/2015/05/hackerman-comment-pirater-le-tem.jpg",
        title: "7 Skills of Highly Effective Hackers For Hack Time",
        description: "Our team was inspired by the seven skills of highly effective programmers created by the Hackerman. We wanted to provide our own take on the topic. Here are our seven skills of effective hackers...",
        avatar: "https://static-cdn.jtvnw.net/jtv_user_pictures/hackerman__-profile_image-ab897011d7c7bb16-300x300.jpeg",
        pseudo: "Hackerman",
        date: "26 mai 2015",
    },
    {
        image: "https://img-b.udemycdn.com/course/480x270/1565838_e54e_12.jpg?secure=HjVLtkBfbmHlfpSNem6kAA%3D%3D%2C1622841742",
        title: "The Complete 2021 Web Development Bootcamp",
        description: "Become a full-stack web developer with just one course. HTML, CSS, Javascript, Node, React, MongoDB and more! Be able to build ANY website you want. Craft a portfolio of websites to apply for junior developer jobs. Build fully-fledged websites and web apps for your startup or business.",
        pseudo: "Dr. Angela Yu",
        date: "Mai 2021",
    },
    {
        image: "https://img-c.udemycdn.com/course/480x270/2559100_dcb9_4.jpg?Expires=1622791674&Signature=RwvCNMIl0slV7SFlUD70dNqaLGc0XyzrGxz523W8iCHzitGWzKChvb5UQxtKLPpfYHPugGcdRAgRinryNtPw0ildqxxgNP3pa8H678uB7IAq98uTFtO-jku0BOEsfjlmCWWEKu1XMZCXeI1~IdHXggSL7Kf1IhweYblrAKEZhojWetneQ3vm~NF1ZwKjALjsZEDozbeG-gK47k02vsIJU4oogioll9vCwmU5VUOJoMznsoL9XuzST5iCXjCcvfdn0w1BclpFegCT2Vs9TOD9v73Krm66WiJL-Z3ZkcIbVbJ9lzh5MCBCcM2la9I-eLxEbDMhwXLew~v1fAZ~a4zVqA__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
        title: "JavaScript : la formation ULTIME",
        description: "Maîtrisez Javascript grâce au cours le plus complet sur internet ! Projets, exercices, quiz, ES8 et bien d’autres !",
        pseudo: "Louis Nicolas Leuillet",
        date: "Janvier 2021",
    },
    {
        image: "https://img-b.udemycdn.com/course/480x270/1847900_663e_3.jpg?secure=fnInhtM7caOa3VDcU_Josg%3D%3D%2C1622790854",
        title: "React 16+ Le Guide Complet (+Redux, React Router & Firebase)",
        description: "React en profondeur à partir de zéro. Apprends Reactjs, Redux, React Router 4, Authentification, BDD et bien plus !",
        pseudo: "Antho Welc",
        date: "Juillet 2020",
    },
    {
        image: "https://image.freepik.com/vecteurs-libre/super-heros-volant-au-lever-du-soleil_24381-367.jpg",
        title: "Test",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae aliquam repudiandae laudantium sed quia eaque odit totam, eius exercitationem illum aliquid nulla minima repellendus! Velit dignissimos quis blanditiis sint nesciunt?",
        pseudo: "Hero",
        date: "4 juin 2021",
    },
    {
        image: "https://image.freepik.com/vecteurs-libre/super-heros-volant-au-lever-du-soleil_24381-367.jpg",
        title: "Test",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae aliquam repudiandae laudantium sed quia eaque odit totam, eius exercitationem illum aliquid nulla minima repellendus! Velit dignissimos quis blanditiis sint nesciunt?",
        pseudo: "Hero",
        date: "4 juin 2021",
    },
    {
        image: "https://image.freepik.com/vecteurs-libre/super-heros-volant-au-lever-du-soleil_24381-367.jpg",
        title: "Test",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae aliquam repudiandae laudantium sed quia eaque odit totam, eius exercitationem illum aliquid nulla minima repellendus! Velit dignissimos quis blanditiis sint nesciunt?",
        pseudo: "Hero",
        date: "4 juin 2021",
    },
    {
        image: "https://image.freepik.com/vecteurs-libre/super-heros-volant-au-lever-du-soleil_24381-367.jpg",
        title: "Test",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae aliquam repudiandae laudantium sed quia eaque odit totam, eius exercitationem illum aliquid nulla minima repellendus! Velit dignissimos quis blanditiis sint nesciunt?",
        pseudo: "Hero",
        date: "4 juin 2021",
    },
    {
        image: "https://image.freepik.com/vecteurs-libre/super-heros-volant-au-lever-du-soleil_24381-367.jpg",
        title: "Test",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae aliquam repudiandae laudantium sed quia eaque odit totam, eius exercitationem illum aliquid nulla minima repellendus! Velit dignissimos quis blanditiis sint nesciunt?",
        pseudo: "Hero",
        date: "4 juin 2021",
    },
    {
        image: "https://image.freepik.com/vecteurs-libre/super-heros-volant-au-lever-du-soleil_24381-367.jpg",
        title: "Test",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae aliquam repudiandae laudantium sed quia eaque odit totam, eius exercitationem illum aliquid nulla minima repellendus! Velit dignissimos quis blanditiis sint nesciunt?",
        pseudo: "Hero",
        date: "4 juin 2021",
    },
    {
        image: "https://image.freepik.com/vecteurs-libre/super-heros-volant-au-lever-du-soleil_24381-367.jpg",
        title: "Test",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae aliquam repudiandae laudantium sed quia eaque odit totam, eius exercitationem illum aliquid nulla minima repellendus! Velit dignissimos quis blanditiis sint nesciunt?",
        pseudo: "Hero",
        date: "4 juin 2021",
    },
    {
        image: "https://image.freepik.com/vecteurs-libre/super-heros-volant-au-lever-du-soleil_24381-367.jpg",
        title: "Test",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae aliquam repudiandae laudantium sed quia eaque odit totam, eius exercitationem illum aliquid nulla minima repellendus! Velit dignissimos quis blanditiis sint nesciunt?",
        pseudo: "Hero",
        date: "4 juin 2021",
    },
    {
        image: "https://image.freepik.com/vecteurs-libre/super-heros-volant-au-lever-du-soleil_24381-367.jpg",
        title: "Test",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae aliquam repudiandae laudantium sed quia eaque odit totam, eius exercitationem illum aliquid nulla minima repellendus! Velit dignissimos quis blanditiis sint nesciunt?",
        pseudo: "Hero",
        date: "4 juin 2021",
    },
    {
        image: "https://image.freepik.com/vecteurs-libre/super-heros-volant-au-lever-du-soleil_24381-367.jpg",
        title: "Test",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae aliquam repudiandae laudantium sed quia eaque odit totam, eius exercitationem illum aliquid nulla minima repellendus! Velit dignissimos quis blanditiis sint nesciunt?",
        pseudo: "Hero",
        date: "4 juin 2021",
    },
    {
        image: "https://image.freepik.com/vecteurs-libre/super-heros-volant-au-lever-du-soleil_24381-367.jpg",
        title: "Test",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae aliquam repudiandae laudantium sed quia eaque odit totam, eius exercitationem illum aliquid nulla minima repellendus! Velit dignissimos quis blanditiis sint nesciunt?",
        pseudo: "Hero",
        date: "4 juin 2021",
    },
    {
        image: "https://image.freepik.com/vecteurs-libre/super-heros-volant-au-lever-du-soleil_24381-367.jpg",
        title: "Test",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae aliquam repudiandae laudantium sed quia eaque odit totam, eius exercitationem illum aliquid nulla minima repellendus! Velit dignissimos quis blanditiis sint nesciunt?",
        pseudo: "Hero",
        date: "4 juin 2021",
    },
]

export const Dashboard = () => {    
    const classes = useStyles();
    return (
        <>
        <Header />
        <Box p={5}>
        <Grid container spacing={5} >
            {mediaCards.map((mediaCards, i) => {
            return <Grid key={i} item>
                <Media {...mediaCards} />
                </Grid>
            })}
        </Grid>
        </Box>
        </>
    )
}

export default Dashboard