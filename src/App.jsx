import GlobalStyle from "./styles/global";
import ProjectRoutes from "./router";
import { UseCreateContextByMe } from "./context/useCreateContextByMe"; 

export default function App() {
  return (
    <>
      <GlobalStyle />
      <UseCreateContextByMe>
        <ProjectRoutes />
      </UseCreateContextByMe>
    </>
  );
}
