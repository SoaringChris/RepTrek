import {Stack} from "expo-router";

export default function HomeLayout(){
    return(
        <>
        <Stack
        screenOptions={{
            title: "RepTrek",
            headerStyle: {
                backgroundColor: "#052F5F"
            },
            headerTitleStyle: {
                fontWeight: "bold"
            },
        }}
        />
        <Stack.Screen
        name="index"
        options={{
            title: "Welcome"
        }}
        />
        </>
    )
}