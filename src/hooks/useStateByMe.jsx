import { useState,  } from "react";

function useStateByMe () {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  return {
    showRegisterModal, setShowRegisterModal,
    showLoginModal, setShowLoginModal,
  }
}

export default useStateByMe;