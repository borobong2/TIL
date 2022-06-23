import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Hello from '../pages/Hello';
import Login from '../pages/Login';
import Intro1 from '../pages/Intro1';
import Intro2 from '../pages/Intro2';
import Intro3 from '../pages/Intro3';
import Loading from '../pages/Loading';
// 앱이 각 화면이 전환될 수 있는 기본 틀을 제공한다.
const Stack = createStackNavigator();

const Navigation = () => {
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  console.log(isLoading);
  return (
    //네비게이션의 트리를 관리해주는 컴포넌트
    <NavigationContainer>
      {/* 네비게이션 기본틀의 스택을 생성 */}
      <Stack.Navigator>
        {/* 해당스택에 들어갈 화면 요소를 넣어준다. */}
        <Stack.Screen
          name="Home"
          component={Hello}
          options={{header: () => null}}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="Intro1"
          component={Intro1}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="Intro2"
          component={Intro2}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="Intro3"
          component={Intro3}
          options={{header: () => null}}
        />
      </Stack.Navigator>
      {isLoading ? <Loading /> : null}
    </NavigationContainer>
  );
};

export default Navigation;
