import { NavigationContainer } from "@react-navigation/native"
import AppNavigation from "./app"
import AuthNavigation from "./auth"
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../utils/store/index';
import Loading from "../components/loading";
import { useEffect } from "react";
import { getLogedInStatus } from "../utils/store/app";

const Navigation = () => {
  const dispatch: AppDispatch = useDispatch();
  const { loading, logedIn } = useSelector((state: RootState) => state.app)

  useEffect(() => {
    dispatch(getLogedInStatus())
  }, [])

  // return <Loading />

  return loading ? <Loading /> : <NavigationContainer>
    {
      logedIn ? <AppNavigation /> : <AuthNavigation />
    }
  </NavigationContainer>
}

export default Navigation