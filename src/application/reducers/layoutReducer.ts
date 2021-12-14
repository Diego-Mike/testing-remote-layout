import { AnyAction } from "redux";

interface IInitialState {
  terminalSeleccionada?: string | number;
  opcionAplicacion: string;
}

const layoutReducer = (state = {}, action: AnyAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default layoutReducer;
