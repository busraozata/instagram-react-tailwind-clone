import { useRoutes } from "react-router-dom";
import routes from "Routes";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import Loader from "components/Loader";
function App() {
  const user = useSelector((state) => state.auth.user);
  const showRoutes = useRoutes(routes);

  if (user === null) {
    return <Loader />;
  }
  return (
    <>
      <pre> {JSON.stringify(user, null, 2)} </pre>
      <Toaster position="top-right" />
      {showRoutes}
    </>
  );
}

export default App;
