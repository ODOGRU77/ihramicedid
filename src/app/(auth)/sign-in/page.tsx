import SignInForm from "@/components/form/SignInForm";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { useRouter } from "next/navigation";

const page = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return (
      <div className="bg-slate-200 p-10 rounded-lg  md:scale-110 lg:scale-120 xl: scale-130">
        <SignInForm />
      </div>
    );
  } else {
    return (
      <div>
        <Link href="/admin">Please go to admin page</Link>
      </div>
    );
  }
};

export default page;
