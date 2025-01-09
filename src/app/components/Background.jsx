export const Background = () => {
  return (
    <div className="absolute flex items-center justify-center min-h-screen w-screen overflow-hidden">
      <div className=" absolute flex items-center justify-center  border-[1px] border-muted-foreground/20 w-[180px] h-[180px] rounded-full">
        <div className=" absolute flex items-center justify-center  border-[1px] border-muted-foreground/20 w-[340px] h-[340px] rounded-full">
          <div className=" absolute flex items-center justify-center  border-[1px] border-muted-foreground/20 w-[540px] h-[540px] rounded-full">
            <div className=" absolute flex items-center justify-center  border-[1px] border-muted-foreground/20 w-[940px] h-[940px] rounded-full">
              <div className=" absolute flex items-center justify-center  border-[1px] border-muted-foreground/20 w-[1340px] h-[1340px] rounded-full">
                <div className="flex justify-center  items-center rounded-full w-[160px] h-[160px] ">
                  <img
                    src="/pineleft.svg"
                    alt=""
                    className="w-[60px] h-[83px]"
                  />
                  <img
                    src="/pineright.svg"
                    alt=""
                    className="w-[60px] h-[83px]"
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
