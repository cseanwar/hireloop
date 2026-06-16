import { getSession } from "@/lib/core/session";
import ProfileCard from "@/components/dashboard/ProfileCard";
import { Card, Button, Progress, Avatar, ProgressBar } from "@heroui/react";

import {
  Bookmark,
  Send,
  Calendar,
  Trophy,
  User,
  Activity,
  Bell,
  Mail,
} from "lucide-react";

export default async function SeekerDashboardPage() {
  const session = await getSession();
  const stats = [
    {
      title: "Saved Jobs",
      value: 12,
      icon: Bookmark,
      color: "text-white",
    },
    {
      title: "Applications Submitted",
      value: 24,
      icon: Send,
      color: "text-white",
    },
    {
      title: "Interviews Scheduled",
      value: 3,
      icon: Calendar,
      color: "text-amber-500",
    },
    {
      title: "Offers Received",
      value: 1,
      icon: Trophy,
      color: "text-emerald-500",
    },
  ];

  const activities = [
    {
      icon: Activity,
      text: (
        <>
          Application for{" "}
          <span className="font-medium">Senior Product Designer</span> at
          TechFlow updated to{" "}
          <span className="text-amber-400 font-medium">Under Review</span>
        </>
      ),
      time: "2 hours ago",
    },
    {
      icon: Bell,
      text: (
        <>
          New Job Alert:{" "}
          <span className="font-medium">Lead Frontend Engineer</span> at FinGrid
          matches your profile.
        </>
      ),
      time: "5 hours ago",
    },
    {
      icon: Mail,
      text: (
        <>
          You have a new message from{" "}
          <span className="font-medium">Sarah Jenkins</span> (Hiring Manager at
          CloudApps).
        </>
      ),
      time: "1 day ago",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        {stats.map((item, idx) => {
          const Icon = item.icon;

          return (
            <Card key={idx} className="bg-zinc-950 border border-zinc-800">
              <Card.Content className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-zinc-400 text-sm">{item.title}</p>

                    <h2 className="text-5xl font-semibold mt-4">
                      {item.value}
                    </h2>
                  </div>

                  <Icon className={`w-5 h-5 ${item.color}`} />
                </div>
              </Card.Content>
            </Card>
          );
        })}
      </div>

      {/* Profile + Status */}
      <div className="grid lg:grid-cols-2 gap-5 mt-5">
        {/* Profile Card */}
        <ProfileCard user={session?.user} />
        {/* <Card className="bg-zinc-950 border border-zinc-800">
          <Card.Content className="p-8">
            <div className="flex items-center gap-5">
              <Avatar
                size="lg"
                icon={<User />}
                className="w-20 h-20 bg-zinc-800"
              />

              <div>
                <h3 className="text-3xl font-semibold">Alex Rivera</h3>

                <p className="text-zinc-400 mt-1">alex.rivera@example.com</p>
              </div>
            </div>
          </Card.Content>
          <Button className="w-full mb-5 bg-transparent border border-zinc-700 text-white hover:bg-zinc-900">
            Edit Profile
          </Button>
        </Card> */}

        {/* Status Card */}
        <Card className="bg-zinc-950 border border-zinc-800">
          <Card.Content className="p-8">
            <h3 className="text-2xl font-semibold mb-8">Application Status</h3>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Applied</span>
                  <span>10</span>
                </div>

                <ProgressBar value={100} className="h-2" />
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Under Review</span>
                  <span>6</span>
                </div>

                <ProgressBar value={60} color="warning" className="h-2" />
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Shortlisted</span>
                  <span>5</span>
                </div>

                <ProgressBar value={50} color="primary" className="h-2" />
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Rejected</span>
                  <span>2</span>
                </div>

                <ProgressBar value={20} color="danger" className="h-2" />
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Offered</span>
                  <span>1</span>
                </div>

                <ProgressBar value={10} color="success" className="h-2" />
              </div>
            </div>
          </Card.Content>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="mt-24">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-4xl font-semibold">Recent Activity</h2>

          <Button variant="light" className="text-zinc-400">
            View All Activity
          </Button>
        </div>

        <div className="space-y-4">
          {activities.map((item, idx) => {
            const Icon = item.icon;

            return (
              <Card key={idx} className="bg-zinc-950 border border-zinc-800">
                <Card.Content className="p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-zinc-300" />
                      </div>

                      <p className="text-zinc-200">{item.text}</p>
                    </div>

                    <span className="text-zinc-500 text-sm whitespace-nowrap">
                      {item.time}
                    </span>
                  </div>
                </Card.Content>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
