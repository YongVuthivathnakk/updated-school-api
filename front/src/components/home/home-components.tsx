"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="py-10 text-center">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
        Welcome to School API
      </h1>
    </header>
  );
};

export const Main = () => {
  return (
    <main className="max-w-3xl mx-auto">
      <Card className="text-center">
        <CardHeader>
          <CardTitle className="text-2xl">
            School Database</CardTitle>
          <CardDescription>Check all the data from the school database</CardDescription>
          <Separator className="my-4" />
          
          <div className="flex justify-center gap-2">
            <Button className="cursor-pointer">Click Me</Button>
            <Button className="cursor-pointer">Click Me</Button>
            <Button className="cursor-pointer">Click Me</Button>
          </div>
        </CardHeader>
        <CardContent>
          <h3>Table Name</h3>
          <Card>
            <CardHeader>
              <CardTitle>
                Name
              </CardTitle>
            </CardHeader>
          </Card>
        </CardContent>
        <CardFooter className="flex justify-end gap-3">
          <Button variant={"outline"}>
            Previous
          </Button>
          <Button variant={"outline"}>
            Next
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
};

export const Footer = () => {
  return (
    <div className="mt-12">
      <Separator className="my-4" />
      <footer className="text-center text-sm text-muted-foreground">
        &copy; 2025 Your Company Name. All Rights Reserved.
      </footer>
    </div>
  );
};
