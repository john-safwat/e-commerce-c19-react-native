import {Image, StyleSheet, Text, useWindowDimensions, View} from "react-native";
import {appStyles} from "../../core/theme/app_theme.tsx";
import {SafeAreaView} from 'react-native-safe-area-context';
import RouteHeader from "../components/RouteHeader.tsx";
import {Carousel} from "react-native-reanimated-carousel";

const styles = StyleSheet.create({})

const data = [
    require("../../../assets/images/banner_1.png"),
    require("../../../assets/images/banner_2.png"),
    require("../../../assets/images/banner_3.png"),
];

export default function HomeScreenUI() {
    const {width} = useWindowDimensions();
    return (
        <SafeAreaView style={appStyles.scaffold}>
            <RouteHeader/>
            <Carousel
                style={{width, height: 200 , justifyContent:"center"}}
                data={data}
                renderItem={({item}) => (

                    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                        <Image
                            source={item}
                            style={{width: width * 0.9, borderRadius: 12}}
                        />
                    </View>
                )}
            />
        </SafeAreaView>
    )
}

