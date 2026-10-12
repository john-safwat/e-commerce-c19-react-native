import HomeScreen from "./lib/ui/home/HomeScreen.tsx";
import {GestureHandlerRootView} from "react-native-gesture-handler";


function App() {
    return <GestureHandlerRootView>
        <HomeScreen/>
    </GestureHandlerRootView>
}

export default App;
