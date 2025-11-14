import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import React from "react";

function Profile() {
  return (
    <Card className="p-4 w-72 shadow-lg rounded-none">
      <div className="flex flex-col items-center gap-3 mb-3">
        <Avatar className="w-15 h-15">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>ER</AvatarFallback>
        </Avatar>
        <span className="font-bold text-lg">Tom</span>
      </div>

      <CardContent className="text-center">
        <b>Name:</b> Tom <br />
        <b>Email:</b> tom@gmail.com <br />
        <b>Mobile No:</b> 7535646798 <br />
        <b>Gender:</b> Male <br />
        <b>Age:</b> 24 Years <br />
      </CardContent>

      <CardFooter className="flex justify-center items-center gap-2">
        <Button>Save</Button>

        <Button variant="outline">Edit</Button>
      </CardFooter>
    </Card>
  );
}

export default Profile;
