import { useAuthenticator } from "@aws-amplify/ui-react";
import Center from "layout/center";
import { FC, ReactElement, ReactNode, useState } from "react";
import Modal from "react-modal";
import { menueModalStyle } from "styles/modalStyle";
import { MenueView, NavbarView } from "ui-components";
// import NavbarView from "../ui-components/Navbar";

const Layout: FC<{ children: ReactNode }> = ({ children }): ReactElement => {
  const [modalToOpen, setModalToOpen] = useState("");
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  // useEffect(() => {
  //   LogRocket.identify(user?.attributes?.email || "anonymous user");
  // }, [user]);
  return (
    <>
      <NavbarView
        width="100%"
        margin="0px 0px 20px 0px"
        overrides={{ menu: { onClick: () => setModalToOpen("MenueView") } }}
      />
      <Modal isOpen={modalToOpen == "MenueView"} style={menueModalStyle}>
        <Center>
          <MenueView />
        </Center>
      </Modal>
      {children}
    </>
  );
};

export default Layout;
