import { useCallback, useContext } from "react";
import SignupModal from "../Modals/SignupModal";
import ProfileView from "../Modals/ProfileView";
import ConnectionProfileView from "../Pages/Connections/ConnectionProfileView";
import SendMailTo from "../Modals/SendMailTo";
import EditProfile from "../Pages/Profile/EditProfile";
import SignUp from "../Modals/SignUp";
import PostAjob from "../Pages/Jobs/PostAjob";
import EditJob from "../Pages/Jobs/EditJob";
import { useRecoilState } from "recoil";
import { ActiveModal } from "../../Global/Atom";

const RenderModal = ({}) => {
  const [activeModalState, setActiveModalState] = useRecoilState(ActiveModal);

  const onClose = useCallback(() => {
    setActiveModalState("");
  }, []);
  switch (activeModalState) {
    case "form":
      return <ViewJobDetail onClose={onClose} />;
    default:
      return;
  }
};

export default RenderModal;
