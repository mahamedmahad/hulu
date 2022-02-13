import Image from "next/image";
import HeaderItem from "../headerItem";
import {
    HomeIcon,
    BadgeCheckIcon,
    CollectionIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
} from "@heroicons/react/outline";

const Header = () => {
    return (
        <header className={"flex items-center " +
            "flex-col sm:flex-row m-5 justify-between h-auto"}>

            <Image
                src={"/images/logo.png"}
                alt={"hulu"}
                width={200}
                height={100}
                className={"object-contain"}
            />
            {/****Header items***/}
            <div className={"flex items-center flex-grow justify-evenly max-w-2xl"}>
                <HeaderItem title={"Home"} Icon={HomeIcon}/>
                <HeaderItem title={"Trendings"} Icon={LightningBoltIcon}/>
                <HeaderItem title={"Verified"} Icon={BadgeCheckIcon}/>
                <HeaderItem title={"Collections"} Icon={CollectionIcon}/>
                <HeaderItem title={"Search"} Icon={SearchIcon}/>
                <HeaderItem title={"Account"} Icon={UserIcon}/>

            </div>


        </header>
    )
}

export default Header;