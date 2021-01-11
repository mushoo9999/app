import React, {
    Component,
} from 'react';
import {
    View,
    WebView,
    ToastAndroid,
    TouchableWithoutFeedback,
    Image,
    Text,
    ActivityIndicator,
    Dimensions,
} from 'react-native';
const ScreenWidth = Dimensions.get('window').width;
class WebViewComponent extends Component {
    render() {
        return (
            <View style={{flexDirection: 'column', flex: 1}}>
                <View style={{flexDirection: 'row', backgroundColor: '#00BCD4', padding: 10,justifyContent:'center',position:'relative'}}>
                    <TouchableWithoutFeedback  onPress={() => {this.props.navigation.goBack()}}>
                        <Image  style={{width: 30, height: 30,position:'absolute',left:10,top:10}} source={require('./../image/icon_back.png') }/>
                    </TouchableWithoutFeedback>
                    <Text style={{fontSize: 20, color: "#FFFFFF"}}>不明觉厉</Text>
                </View>
                <WebView
                    renderLoading={() => {//加载视图
                        return (
                            <View
                                style={ {
                                    flex: 1,
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                <ActivityIndicator size='large' color='#00BCD4'/>
                            </View>

                        );
                    }}
                    scalesPageToFit={true}
                    startInLoadingState={true}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{uri: this.props.navigation.state.params.name}}/>
            </View>
        );
    };


}
export  default  WebViewComponent;