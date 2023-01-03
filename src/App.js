import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import Join from "./pages/Join";
import Login from "./pages/Login";
import Main from "./pages/Main";
import { clearUser, setUser } from "./Redux/modules/userSlice";

function App() {
  const dispatch = useDispatch();
  const { isLoading, currentUser } = useSelector((state) => state.user);
  console.log(currentUser);
  useEffect(() => {
    // onAuthStateChanged는 unsubscribe함수를 리턴해줌! 이걸 cleanup function으로 사용
    const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
      if (!user) {
        dispatch(setUser(user));
      } else {
        dispatch(clearUser());
      }
    });
    return () => unsubscribe();
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route
        path="/join"
        element={currentUser ? <Navigate to="/" /> : <Join />}
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
