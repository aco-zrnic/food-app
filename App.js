import { createStackNavigator} from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';
import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";

const navigation = createStackNavigator(
  {
    Search: SearchScreen,
    SingleShop: ResultsShowScreen
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