import { Pressable,View ,Text ,StyleSheet , Platform } from "react-native";

function ProductGrid({title ,category ,onPress}){
    return <View style={styles.productItem }>
        <Pressable android_ripple={{color:'#ccc'}} 
        style={({ pressed }) => [
            styles.button , 
            pressed ? styles.buttonPressed :null,
        ]}
            onPress={onPress}

        >
        <View style={[styles.innerContainer ,{ backgroundColor: '#ccc'}]}>
            <Text style={styles.title}>
            {title}
            </Text>
        </View>
        </Pressable>
    </View>
}

export default ProductGrid;
const styles = StyleSheet.create({
    productItem:{
        flex:1,
        margin:16,
        height:150,
        borderRadius:8,
        elevation:4,
        backgroundColor:'white',
        shadowColor:'black',
        shadowOpacity:0.25,
        shadowOffset:{width: 0 ,height: 2},
        shadowRadius:8,
        overflow:Platform.OS ==='android' ? 'hidden' : 'visible'
    },
    button:{
        flex:1,
    },
    buttonPressed: {
    opacity:0.5
    },
    innerContainer: {
        flex:1,
        padding:16,
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center',

    },
    title:{
        fontWeight:'bold',
        fontSize:18
    }
})