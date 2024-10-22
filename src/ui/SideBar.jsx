function SideBar({ children }) {
  return (
    <div className="bg-secondery-0 row-start-1 row-span-2 h-screen">
      <ul className="flex flex-col gap-y-4 p-5">{children}</ul>
    </div>
  );
}

export default SideBar;
