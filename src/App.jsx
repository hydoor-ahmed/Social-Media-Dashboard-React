import { useState } from "react";
import { SocialCard } from "./components/SocialCard";

import fbImg from "./assets/images/icon-facebook.svg";
import twImg from "./assets/images/icon-twitter.svg";
import instaImg from "./assets/images/icon-instagram.svg";
import ytImg from "./assets/images/icon-youtube.svg";

import iconUp from "./assets/images/icon-up.svg";
import iconDown from "./assets/images/icon-down.svg";
import { StatusCard } from "./components/StatusCard";

const App = () => {
  const [dark, setDark] = useState(false);

  return (
    <div className={`${dark ? "dark" : ""}`}>
      <div
        className={
          "px-4 lg:px-16 xl:px-36 md:h-screen dark:bg-veryDarkBluBg dark:text-white pb-4"
        }
      >
        <div className="flex flex-col sm:flex-row justify-between items-center py-7">
          <div className="w-full sm:w-fit pb-4 sm:pb-0 border-b border-veryDarkBlueTopBgPattern dark:border-darkGrayishBlueText sm:border-none">
            <h1 className="font-bold text-xl sm:text-2xl">
              Social Media Dashboard
            </h1>
            <p className="font-bold text-darkGrayishBlueText">
              Total Followers: 23,004
            </p>
          </div>

          <div className="flex items-center pt-4 sm:pt-0 justify-between sm:justify-end w-full sm:w-fit">
            <h3 className="font-bold text-darkGrayishBlueText text">
              Dark Mode
            </h3>
            <button
              onClick={() => setDark(!dark)}
              className="outline-none ml-4 bg-toggleLight w-14 h-7 p-1.5 flex items-center rounded-full cursor-pointer hover:bg-gradient-to-tr from-toggleDarkFrom to-toggleDarkTo"
            >
              <span
                className={`bg-white w-5 h-5 rounded-full block ${
                  dark ? "mr-auto" : "ml-auto"
                }`}
              ></span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10 mb-5">
          <SocialCard
            socialImg={fbImg}
            user="@nathanf"
            follwers={1987}
            subscribers={false}
            statsImg={iconUp}
            statsTxt="12 Today"
            borderColor="fb"
            insta={false}
          />
          <SocialCard
            socialImg={twImg}
            user="@nathanf"
            follwers={1044}
            subscribers={false}
            statsImg={iconUp}
            statsTxt="99 Today"
            borderColor="tw"
            insta={false}
          />
          <SocialCard
            socialImg={instaImg}
            user="@realnathanf"
            follwers="11k"
            subscribers={false}
            statsImg={iconUp}
            statsTxt="1099 Today"
            insta={true}
          />
          <SocialCard
            socialImg={ytImg}
            user="Nathan F."
            follwers={8239}
            subscribers={true}
            statsImg={iconDown}
            statsTxt="144 Today"
            borderColor="yt"
            insta={false}
          />
        </div>

        <div>
          <h1 className="font-bold text-darkGrayishBlueText text-2xl py-4 dark:text-white">
            Overview - Today
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10">
            <StatusCard
              title="Page Views"
              follwers="87"
              statusNum="3%"
              socialImg={fbImg}
              arrImg={iconUp}
              statusColor={true}
            />
            <StatusCard
              title="Likes"
              follwers="52"
              statusNum="2%"
              socialImg={fbImg}
              arrImg={iconDown}
              statusColor={false}
            />

            <StatusCard
              title="Likes"
              follwers="5462"
              statusNum="2257%"
              socialImg={instaImg}
              arrImg={iconUp}
              statusColor={true}
            />
            <StatusCard
              title="Profile Views"
              follwers="52K"
              statusNum="1375%"
              socialImg={instaImg}
              arrImg={iconUp}
              statusColor={true}
            />
          </div>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10">
            <StatusCard
              title="Retweets"
              follwers="117"
              statusNum="303%"
              socialImg={twImg}
              arrImg={iconUp}
              statusColor={true}
            />
            <StatusCard
              title="Likes"
              follwers="507"
              statusNum="553%"
              socialImg={twImg}
              arrImg={iconUp}
              statusColor={true}
            />

            <StatusCard
              title="Likes"
              follwers="107"
              statusNum="19%"
              socialImg={ytImg}
              arrImg={iconDown}
              statusColor={false}
            />
            <StatusCard
              title="Total Views"
              follwers="1407"
              statusNum="12%"
              socialImg={ytImg}
              arrImg={iconDown}
              statusColor={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
