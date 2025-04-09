import React from "react";

interface Props {
  showButtons?: boolean;
}

const Skeleton = ({ showButtons = true }: Props) => {
  return (
    <div className="mt-4 flex items-center justify-between gap-44">
      <div
        className={`flex ${showButtons ? "w-7/12" : "w-full"} flex-col gap-2`}
      >
        <div className="h-8 w-full animate-pulse rounded-md bg-gray-300/30 p-1"></div>
        <div className="h-4 w-5/12 animate-pulse rounded-md bg-gray-300/30 p-1"></div>
      </div>
      {showButtons && (
        <div className="flex w-4/12 items-start gap-2">
          <div className="h-7 w-36 animate-pulse rounded-md bg-gray-300/30 p-1"></div>
          <div className="h-7 w-36 animate-pulse rounded-md bg-gray-300/30 p-1"></div>
        </div>
      )}
    </div>
  );
};

export default Skeleton;
