import { auth } from "@repo/auth/server";
import { redirect } from "next/navigation";
import { Sidebar } from "./components/sidebar";

export default async function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.user) {
    redirect("/sign-in");
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 lg:gap-8 p-6">
        <aside className="lg:col-span-1">
          <div className="sticky top-6">
            <Sidebar />
          </div>
        </aside>
        <main className="lg:col-span-3">{children}</main>
      </div>
    </div>
  );
}
