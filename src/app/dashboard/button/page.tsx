import { Button } from "@/components/ui/button";
import {
  ChevronRightIcon,
  QuestionMarkCircledIcon,
  LayoutIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

const ButtonPage = () => {
  return (
    <div className="grid grid-cols-5 gap-4">
      <Button>Default</Button>
      <Button variant="outline">Button</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="outline" size="icon">
        <ChevronRightIcon className="h-4 w-4" />
      </Button>
      <Button>
        <QuestionMarkCircledIcon className="mr-2 h-4 w-4" /> Login with Email
      </Button>
      <Button disabled>
        <LayoutIcon className="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </Button>
      <Button asChild>
        <Link href="/login">Login</Link>
      </Button>
    </div>
  );
};

export default ButtonPage;
