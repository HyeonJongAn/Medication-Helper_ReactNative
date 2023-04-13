// App.tsx

import React from "react";
import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native"; // 전체 네비게이션을 감싸는 컨테이너 불러오기
import { createStackNavigator } from "@react-navigation/stack"; // 스택 네비게이션 라이브러리 불러오기
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//보여줄 화면들 불러오기
import Welcome from "./screens/All/Welcome";
import Register from "./screens/All/Register";
import UserMain from "./screens/User/UserMain";
import UserPage from "./screens/User/Userpage";
import MedicRegister from "./screens/User/MedicRegister";
import MedicineList from "./screens/User/MedicineList";
import PregnantForbid from "./screens/User/PregnantForbid";
import DuplicateForbid from "./screens/User/DuplicateForbid";
import SameEffect from "./screens/User/SameEffect";
import MedicinDetail from "./screens/User/MedicineDetail";

// 스택 네비게이션 만들기
const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

LogBox.ignoreAllLogs();

/*
  NavigationContainer을 사용해, 전체 네비게이션을 감싼다.
  Stack.Navigator을 사용해, 스택 네비게이션으로 보여줄 화면을 감싼다.
  Stack.Screen을 사용해, 스택 네비게이션으로 보여줄 화면(React 컴포넌트 형식)을 지정해준다.
  
  스택 네이게이션은, 기본적으로 맨위에 작성한 화면을 보여준다. (메인화면)
*/
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="UserMain">
          {() => (
            <Tab.Navigator screenOptions={{ headerShown: false }}>
              <Tab.Screen name="UserMain" component={UserMain} />
              <Tab.Screen name="MedicRegister" component={MedicRegister} />
              <Tab.Screen name="MedicineList" component={MedicineList} />
              <Tab.Screen name="Mypage" component={UserPage} />
            </Tab.Navigator>
          )}
        </Stack.Screen>
        <Stack.Screen name="MedicineDetail" component={MedicinDetail} />
        <Stack.Screen name="PregnantFobid" component={PregnantForbid} />
        <Stack.Screen name="DuplicateForbid" component={DuplicateForbid} />
        <Stack.Screen name="SameEffect" component={SameEffect} />
        {/* <Stack.Screen name="ManagerMain">
          {()=>(
            <Tab.Navigator screenOptions={{headerShown:false}}>

            </Tab.Navigator>
          )}
        </Stack.Screen> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
