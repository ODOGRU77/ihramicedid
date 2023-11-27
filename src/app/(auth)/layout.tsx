import { FC, ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="flex  items-center justify-center h-screen">
      <div className="">{children}</div>
    </div>
  );
};

export default AuthLayout;
