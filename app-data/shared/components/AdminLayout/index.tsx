import { FC, ReactNode } from "react";
import Navigation from "./Navigation";

type AdminLayoutProps = {
  title?: string;
  children?: ReactNode;
  window?: () => Window;
};

export const AdminLayout: FC<AdminLayoutProps> = (props) => {
  const { children, title = 'Administrácia', window } = props;
  

  return (
    <div >
      <Navigation>{children}</Navigation>
    </div>
  );
};
