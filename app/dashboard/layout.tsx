import SideNav from '@/app/ui/dashboard/sidenav';
//children can either be a page or another layout
//pages inside /dashboard will automatically nest the page.tsx and all its other pages inside this inner page route Layout
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex/col flex h-screen md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
