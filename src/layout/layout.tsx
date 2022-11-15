import { useAuthenticator } from "@aws-amplify/ui-react";
import Center from "layout/center";
import LogRocket from "logrocket";
import { useRouter } from "next/router";
import { FC, ReactElement, ReactNode, useEffect, useState } from "react";
import Modal from "react-modal";
import { menueModalStyle } from "styles/modalStyle";
import { MenueView, NavbarView } from "ui-components";
// import NavbarView from "../ui-components/Navbar";

const Layout: FC<{ children: ReactNode }> = ({ children }): ReactElement => {
  const [modalToOpen, setModalToOpen] = useState("");
  const router = useRouter();
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  useEffect(() => {
    LogRocket.identify(user?.attributes?.email || "anonymous user");
  }, [user]);
  return (
    <>
      <NavbarView
        width="100%"
        margin="0px"
        overrides={{ menu: { onClick: () => setModalToOpen("MenueView") } }}
      />
      <Modal isOpen={modalToOpen == "MenueView"} style={menueModalStyle}>
        <Center>
          <MenueView
            overrides={{
              "close-circle": {
                onClick: () => setModalToOpen(""),
                className: "custom-btn",
              },
              "Frame 38": {
                onClick: () => {
                  setModalToOpen("");
                  router.push("/");
                },
              },
              "Frame 39": {
                onClick: () => {
                  setModalToOpen("");
                  router.push("/map");
                },
              },
              "Frame 40": {
                onClick: () => {
                  setModalToOpen("");
                  router.push("/growers");
                },
              },
              "Frame 41": {
                onClick: () => {
                  setModalToOpen("");
                  router.push("/crops");
                },
              },
              "Frame 4335393153": {
                onClick: () => {
                  setModalToOpen("");
                  router.push("/add-images");
                },
              },
            }}
          />
        </Center>
      </Modal>
      {children}
    </>
  );
};

export default Layout;
