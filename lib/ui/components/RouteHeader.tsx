import { Image, StyleSheet, TextInput, View } from "react-native";
import { colors } from "../../core/theme/app_theme.tsx";
import Ionicons from "@react-native-vector-icons/ionicons";
const styles = StyleSheet.create({
    padding: {
        padding: 16,
        gap: 8,
    },
    row: {
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
    },
    searchContainer: {
        flex: 1,
        borderColor: colors.main,
        borderWidth: 1,
        borderRadius: 500,
        flexDirection: "row",
        alignItems: "center",
    },
    searchIcon: {
        width: 28,
        height: 28,
        marginLeft: 8,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: colors.main,
    },
    cartIcon: {
        width: 28,
        height: 28,
    },
});

export default function RouteHeader() {
    return (
        <View style={styles.padding}>
            <Image
                source={require("/Users/johnsafwat/WebstormProjects/commerce/assets/images/logo_image.png")}
            />
            <View style={styles.row}>
                <View style={styles.searchContainer}>
                    <Image
                        source={require("/Users/johnsafwat/WebstormProjects/commerce/assets/images/search_icon.png")}
                        style={styles.searchIcon}
                    />
                    <TextInput
                        placeholder="what do you search for?"
                        placeholderTextColor={colors.main}
                        style={styles.input}
                    />
                </View>
                <Ionicons name={"cart-sharp"} size={30} color={colors.main}  />
                <Image
                    source={require("/Users/johnsafwat/WebstormProjects/commerce/assets/images/cart_icon.png")}
                    style={styles.cartIcon}
                />
            </View>
        </View>
    );
}
