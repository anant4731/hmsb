import Image from "next/image"
import classes from "./Dashboard.module.css"
import SearchingImageAnimated from "@/helpers/assets/searching_img.jpg"
export default function Dashboard() {
    return <div className={classes.container}>
        <div className={classes.single_container}>
            <Image width={300} height={300} src={SearchingImageAnimated}></Image>
        </div>
        <div className={classes.single_container}></div>
        <div className={classes.single_container}></div>
    </div>
}