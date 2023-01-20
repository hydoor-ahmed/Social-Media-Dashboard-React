export const StatusCard = ({
  title,
  follwers,
  statusNum,
  socialImg,
  arrImg,
  statusColor,
}) => {
  return (
    <div className="bg-lightGrayishBlueCardBg hover:bg-slate-200 transition duration-200 cursor-pointer p-6 rounded-md dark:bg-darkDesaturatedBlueCardBg dark:hover:bg-[#2e344d]">
      <div className="flex justify-between items-center">
        <h3 className="text-darkGrayishBlueText font-bold">{title}</h3>
        <img src={socialImg} alt={title} />
      </div>

      <div>
        <div className="flex justify-between items-center mt-6">
          <h1 className="font-bold text-3xl">{follwers}</h1>
          <div className="flex items-center">
            <img src={arrImg} alt={title} />
            <h3
              className={`ml-1 font-bold text-sm ${
                statusColor ? "text-limeGreen" : "text-brightRed"
              }`}
            >
              {statusNum}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
