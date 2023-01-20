export const SocialCard = ({
  socialImg,
  user,
  follwers,
  subscribers,
  statsImg,
  statsTxt,
  borderColor,
  insta,
}) => {
  return (
    <div
      className={`border-t-4 ${
        insta ? "instaBorder" : borderColor
      } rounded overflow-hidden p-2 bg-lightGrayishBlueCardBg hover:bg-slate-200 transition duration-200 text-center cursor-pointer dark:bg-darkDesaturatedBlueCardBg dark:hover:bg-[#2e344d]`}
    >
      <div className="flex items-center justify-center py-4">
        <img src={socialImg} alt={user} />
        <h1 className="ml-2 text-darkGrayishBlueText font-bold">{user}</h1>
      </div>

      <h1 className="font-extrabold text-5xl md:text-6xl">{follwers}</h1>
      <h3 className="font-light tracking-[5px] text-darkGrayishBlueText uppercase text-sm py-2">{subscribers ? "Subscribers" : "Followers"}</h3>

      <div className="flex justify-center items-center pt-4 pb-2">
        <img src={statsImg} alt={user} />
        <h3 className={`${subscribers ? "text-brightRed": "text-limeGreen"} font-bold ml-1 text-sm`}>{statsTxt}</h3>
      </div>
    </div>
  );
};
