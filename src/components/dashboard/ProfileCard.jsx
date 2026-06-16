"use client";

import { Card, Button } from "@heroui/react";
import { Person } from "@gravity-ui/icons";
import Image from "next/image";

export default function ProfileCard({ user }) {
  return (
    <Card className="bg-zinc-950 border border-zinc-800">
      <Card.Content className="p-8 flex flex-col h-full">
        {/* Profile Info */}
        <div className="flex items-start gap-5">
          {/* Avatar */}
          <div className="w-20 h-20 rounded-full border border-white/10 bg-zinc-800 flex items-center justify-center shrink-0">
            {user?.image ? (
              <Image
                width={40}
                height={40}
                src={user.image}
                alt={user.name}
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <Person className="text-zinc-400" width={34} height={34} />
            )}
          </div>

          {/* User Info */}
          <div>
            <h2 className="text-3xl font-semibold text-white">
              {user?.name || "Alex Rivera"}
            </h2>

            <p className="text-zinc-400 mt-1 text-base">
              {user?.email || "alex.rivera@example.com"}
            </p>
          </div>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Button */}
      </Card.Content>
      <Button
        className="mb-5 w-full border border-white/30 bg-transparent text-white"
        variant="bordered"
      >
        Edit Profile
      </Button>
    </Card>
  );
}
