import { createStackNavigator} from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';
import SearchScreen from "./src/screens/SearchScreen";

const navigation = createStackNavigator(
  {
    Search: SearchScreen
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Business Search",
      //cardStyle: {backgroundColor:'#272822'}
    }
  }
)

export default createAppContainer(navigation)