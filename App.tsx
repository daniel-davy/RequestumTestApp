import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/styles/theme';
import { SafeAreaView } from 'react-native';
import 'react-native-gesture-handler';
import StackNavigation from './src/navigation/stackNavigation';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <SafeAreaView style={{flex: 1}}>
                <StackNavigation />
            </SafeAreaView>
        </ThemeProvider>
    );
};

export default App;
