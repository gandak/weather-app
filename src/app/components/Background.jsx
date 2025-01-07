export const Background = () => {
  return (
    <div className="absolute flex gap-4 items-center justify-center min-h-screen w-screen overflow-hidden">
      <div className=" absolute border-[1px] border-muted-foreground/20 w-[140px] h-[140px] rounded-full"></div>
      <div className=" absolute border-[1px] border-muted-foreground/20 w-[340px] h-[340px] rounded-full"></div>
      <div className=" absolute border-[1px] border-muted-foreground/20 w-[540px] h-[540px] rounded-full"></div>
      <div className=" absolute border-[1px] border-muted-foreground/20 w-[940px] h-[940px] rounded-full"></div>
      <div className=" absolute border-[1px] border-muted-foreground/20 w-[1340px] h-[1340px] rounded-full"></div>
      <img src="/pineleft.svg" alt="" />
      <img src="/pineright.svg" alt="" />
    </div>
  );
};
