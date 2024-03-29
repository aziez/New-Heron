import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home/Home";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import { Selection } from "./pages/Selection/Selection";
import Type9 from "./pages/Type/Type9";
import Type11 from "./pages/Type/Type11";
import Type11H from "./pages/Type/Type11s";
import Denah9 from "./pages/Denah/Denah9";
import Denah11 from "./pages/Denah/Denah11";
import Denah11s from "./pages/Denah/Denah11s";
import Potongan9 from "./pages/Selection/Potongan9";
import Potongan11 from "./pages/Selection/Potongan11";
import Potongan11S from "./pages/Selection/Potongan11s";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/selection">
          <Selection />
        </Route>
        <Route exact path="/type9">
          <Potongan9 />
        </Route>
        <Route exact path="/type11">
          <Potongan11 />
        </Route>
        <Route exact path="/type11s">
          <Potongan11S />
        </Route>
        <Route exact path="/type/type9">
          <Type9 />
        </Route>
        <Route exact path="/type/type11">
          <Type11 />
        </Route>
        <Route exact path="/type/type11s">
          <Type11H />
        </Route>
        <Route exact path="/denah/denah9">
          <Denah9 />
        </Route>
        <Route exact path={"/denah/denah11"}>
          <Denah11 />
        </Route>
        <Route exact path={"/denah/denah11s"}>
          <Denah11s />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
