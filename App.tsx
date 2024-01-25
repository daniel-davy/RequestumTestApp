import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import StackNavigation from './src/navigation/stackNavigation';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/config/theme';

const App = () => {

    return (
        <ThemeProvider theme={theme}>
            <SafeAreaView style={{ flex: 1 }}>
                <StatusBar
                    barStyle={'light-content'}
                    backgroundColor={Colors.darker}
                />
                <StackNavigation />
            </SafeAreaView>
        </ThemeProvider>
    );
};

export default App;
