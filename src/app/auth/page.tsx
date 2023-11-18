import { SignIn } from "@/components/auth/sign-in";
import { SignInOAuth } from "@/components/auth/sign-in-oauth";
import { SignUp } from "@/components/auth/sign-up";
import { Card, CardHeader } from "@/components/ui/card";
import { Logo } from "@/components/ui/logo";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AuthPage() {
  return (
    <div className="min-h-screen flex flex-col w-fit mx-auto justify-center items-center">
      <Logo />
      <div className="w-full">
        <p className="text-center my-4">Sign in with one of our providers</p>
        <SignInOAuth />
      </div>
      <div className="my-4 items-center flex w-full">
        <Separator className="flex-1 dark:bg-gray-500" />
        <p className="px-6 text-sm text-gray-600 dark:text-gray-400">or</p>
        <Separator className="flex-1 dark:bg-gray-500" />
      </div>
      <Tabs defaultValue="sign-in" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="sign-in">Sign in</TabsTrigger>
          <TabsTrigger value="sign-up">Sign up</TabsTrigger>
        </TabsList>
        <TabsContent value="sign-in">
          <Card className="mt-2">
            <CardHeader className="pb-0 pl-4">
              <p>Sign in with email and password</p>
            </CardHeader>
            <SignIn className="p-4" />
          </Card>
        </TabsContent>
        <TabsContent value="sign-up">
          <Card>
            <CardHeader className="pb-0 pl-4">
              <p>Create an account with your email</p>
            </CardHeader>
            <SignUp className="p-4" />
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
