import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

const AvatarPage = () => {
  return (
    <div className="grid justify-center items-center h-[300px]">
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p>@Xavii07</p>
      </div>
    </div>
  );
};

export default AvatarPage;
