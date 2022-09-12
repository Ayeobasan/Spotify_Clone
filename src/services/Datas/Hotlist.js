import { BiHeadphone } from "react-icons/bi";
// import davido from '../asset/img/davido.jpg'
import bestsong from '../../asset/HomeImg/bestsong.jpg'
import daily from '../../asset/HomeImg/daily.jpg'
import week from '../../asset/HomeImg/week.jpg'
import Hot from '../../asset/HomeImg/hot.jpg'
import yoruba from '../../asset/HomeImg/yoruba.jpg'
import hausa from '../../asset/HomeImg/hausa.jpg'
import Igbo from '../../asset/HomeImg/igbo.jpg'
import besthip from '../../asset/HomeImg/bestHip.jpg'
import bestTrend from '../../asset/HomeImg/besttrend.jpg'
import bestAfro from '../../asset/HomeImg/bestAfro.jpg'
import bestAfrica from '../../asset/HomeImg/bestAfrica.jpg'
import bestInter from '../../asset/HomeImg/bestInter.jpg'
import top100 from '../../asset/HomeImg/top100.jpg'
import topAfrica from '../../asset/HomeImg/topAfrica.jpg'
import Triller from '../../asset/HomeImg/trilla.png'
import topInter from '../../asset/HomeImg/topInter.jpg'
import topGospel from '../../asset/HomeImg/topGosple.jpg'
import Alltime from '../../asset/HomeImg/all time.jpg'

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
