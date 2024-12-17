import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="h-screen w-full mt-4 p-4 space-y-4 flex items-center flex-col justify-center">
      <h1 className="text-3xl text-center">Welcome to Mengah Holding. This is the landing page!!</h1>
      <Card className="w-[300px] mx-auto mt-20">
        <CardContent className="flex flex-col items-center space-y-4 pt-8">
          <Link to="/login">
            <Button>Login</Button>
          </Link>
          <Link to="/signup">
            <Button>Sign Up</Button>
          </Link>
        </CardContent>
      </Card>
    </main>
  );
}


