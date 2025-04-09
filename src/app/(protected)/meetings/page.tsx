"use client";

import Link from "next/link";
import { Badge } from "~/components/ui/badge";
import { Button, buttonVariants } from "~/components/ui/button";
import { useProject } from "~/hooks/use-project";
import { api } from "~/trpc/react";
import MeetingCard from "../dashboard/meeting-card";
import { useRefetch } from "~/hooks/use-refetch";
import Skeleton from "~/components/skeleton";

const MeetingPage = () => {
  const { projectId } = useProject();
  const refetch = useRefetch();
  const { mutate: deleteMeeting, isPending } =
    api.project.deleteMeeting.useMutation();
  const { data: meetings, isLoading } = api.project.getMeetings.useQuery(
    { projectId },
    { refetchInterval: 4000 },
  );

  return (
    <>
      <MeetingCard />
      <div className="h-4"></div>
      <h1 className="text-xl font-semibold">Meetings</h1>
      {meetings && meetings.length === 0 && <div>No meetings found</div>}
      {isLoading && <Skeleton />}
      <ul className="divide-y divide-gray-200">
        {meetings?.map((meeting) => {
          return (
            <li
              key={meeting.id}
              className="flex items-center justify-between gap-x-6 py-5"
            >
              <div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <Link
                      href={`/meetings/${meeting.id}`}
                      className="text-sm font-semibold"
                    >
                      {meeting.name}
                    </Link>
                    {meeting.status === "PROCESSING" && (
                      <Badge className="bg-yellow-500 text-white">
                        Processing...
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center gap-x-2 text-xs text-gray-500">
                    <p className="whitespace-nowrap">
                      {meeting.createdAt.toLocaleDateString()}
                    </p>
                    <p className="truncate">{meeting.issues.length} issues</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-none items-center gap-x-4">
                <Link
                  href={`/meetings/${meeting.id}`}
                  className={buttonVariants({
                    size: "sm",
                    variant: "outline",
                  })}
                >
                  View Meeting
                </Link>
                <Button
                  onClick={() => {
                    deleteMeeting({ meetingId: meeting.id });
                    refetch();
                  }}
                  disabled={isPending}
                  variant={"destructive"}
                  size={"sm"}
                >
                  Delete Meeting
                </Button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MeetingPage;
