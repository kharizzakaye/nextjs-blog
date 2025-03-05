// common UI for multiple pages under blog segment

import SideNav from "@/app/ui/components/sidenav";


export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
        <SideNav/>
        {children}
      </>
    );
  }