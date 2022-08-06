import { BiChart, BiHandicap, BiHeadphone, BiMusic } from "react-icons/bi";
import davido from '../img/davido.jpg'
import bestsong from '../HomeImg/bestsong.jpg'
import daily from '../HomeImg/daily.jpg'
import week from '../HomeImg/week.jpg'
import Hot from '../HomeImg/hot.jpg'
import yoruba from '../HomeImg/yoruba.jpg'
import hausa from '../HomeImg/hausa.jpg'
import Igbo from '../HomeImg/igbo.jpg'
import besthip from '../HomeImg/bestHip.jpg'
import bestTrend from '../HomeImg/besttrend.jpg'
import bestAfro from '../HomeImg/bestAfro.jpg'
import bestAfrica from '../HomeImg/bestAfrica.jpg'
import bestInter from '../HomeImg/bestInter.jpg'
import top100 from '../HomeImg/top100.jpg'
import topAfrica from '../HomeImg/topAfrica.jpg'
import Triller from '../HomeImg/trilla.png'
import topInter from '../HomeImg/topInter.jpg'
import topGospel from '../HomeImg/topGosple.jpg'
import Alltime from '../HomeImg/all time.jpg'

const Hotlist = [
    {
        id: 1,
        img:daily,
        img1: bestsong,
        img2:top100,
        icon: <BiHeadphone />,
        Number: "198.3M",
        Trend: "Daily Trending",
        Half: "Best Song",
        Week: "Top Nigeria",
        spot: "Spotify Nigeria"
    },
    {
        id: 2,
        icon: <BiHeadphone />,
        img:week,
        img1: bestAfrica,
        img2:topAfrica,
        Number: "13.3M",
        Name: "Chart",
        Trend: "Midweek Music",
        Half: "Best Africa",
        Week: "Top Africa",
        spot: "Spotify Nigeria"
    },
    {
        id: 3,
        icon: <BiHeadphone />,
        img: Hot,
        img1:besthip,
        img2:Triller,
        Number: "10.5M",
        Name: "Chart",
        Trend: "Hot & Free",
        Half: "Best Hip-Hop",
        Week: "Weekly Triller",
        spot: "Spotify Nigeria"
    },
    {
        id: 4,
        icon: <BiHeadphone />,
        img: yoruba,
        img2:topInter,
        img1:bestTrend,
        Number: "198.3M",
        Name: "Chart",
        Trend: "Top Yoruba Song",
        Half: "Best Trending",
        Week: "Top International",
        spot: "Spotify Nigeria"
    },
    {
        id: 5,
        icon: <BiHeadphone />,
        img: hausa,
        img1:bestAfro,
        img2:topGospel,
        Number: "198.3M",
        Name: "Chart",
        Trend: "Hot Hausa Hit",
        Half: "Best Afrobeats",
        Week: "Top Gosple Song",
        spot: "Spotify Nigeria"
    },
    {
        id: 6,
        icon: <BiHeadphone />,
        img: Igbo,
        img2:Alltime,
        img1:bestInter,
        Number: "198.3M",
        Name: "Chart",
        Trend: "Top Igbo Song",
        Half: "Best International",
        Week: "All Time Hit",
        spot: "Spotify Nigeria"
    },

]
export { Hotlist };
