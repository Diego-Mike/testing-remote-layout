import { CssBaseline } from "@mui/material";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { storeConfiguration } from "../application/store";

import Layout from "./Layout";

render(
  <>
    <Provider store={storeConfiguration()}>
      <CssBaseline />
      <Layout />
    </Provider>
  </>,
  document.getElementById("layout")
);
