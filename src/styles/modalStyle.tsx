import Modal from "react-modal";
export const modalStyle: Modal.Styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.85)",
  },
  content: {
    position: "absolute",
    top: "5%",
    left: "10%",
    right: "10%",
    bottom: "5rem",
    backgroundColor: "black",
    minWidth: "40%",
    borderRadius: "0rem",
    padding: "0rem",
  },
};
export const menueModalStyle: Modal.Styles = {
  content: {
    top: "40%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    minWidth: "40%",
    overflowY: "scroll",
  },
};
