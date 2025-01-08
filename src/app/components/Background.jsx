export const Background = () => {
  return (
    <div className="absolute flex items-center justify-center min-h-screen w-screen overflow-hidden">
      <div className=" absolute flex items-center justify-center  border-[1px] border-muted-foreground/20 w-[140px] h-[140px] rounded-full">
        <div className=" absolute flex items-center justify-center  border-[1px] border-muted-foreground/20 w-[340px] h-[340px] rounded-full">
          <div className=" absolute flex items-center justify-center  border-[1px] border-muted-foreground/20 w-[540px] h-[540px] rounded-full">
            <div className=" absolute flex items-center justify-center  border-[1px] border-muted-foreground/20 w-[940px] h-[940px] rounded-full">
              <div className=" absolute flex items-center justify-center  border-[1px] border-muted-foreground/20 w-[1340px] h-[1340px] rounded-full">
                <div className="flex justify-center items-center bg-white rounded-full w-[140px] h-[140px]">
                  <img
                    src="/pineleft.svg"
                    alt=""
                    className="w-[86px] h-[43px]"
                  />
                  <img
                    src="/pineright.svg"
                    alt=""
                    className="w-[86px] h-[43px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
