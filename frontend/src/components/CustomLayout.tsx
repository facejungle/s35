export default function CustomLayout({ layoutChildren, sidebarWidgets }: { layoutChildren: React.ReactElement, sidebarWidgets: React.ReactElement }) {
   return (
      <>
         <main className="flex-row container">{layoutChildren}</main>
         <aside>{sidebarWidgets}</aside>
      </>
   );
}