import { ReactNode } from "react";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";

interface GoogleSignInButtonProps {
  children: ReactNode;
}

const GoogleSignInButton = ({ children }: GoogleSignInButtonProps) => {
  const loginWithGoogle = () =>
    signIn("google", { callbackUrl: "http://localhost:3000/admin" });
  return (
    <Button
      onClick={loginWithGoogle}
      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
    >
      {children}
    </Button>
  );
};

export default GoogleSignInButton;
