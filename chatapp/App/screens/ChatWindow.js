// /* eslint-disable react/display-name */
// /* eslint-disable react/display-name */
// import React, { useContext, useEffect, useMemo, useState } from 'react';
// import { LogBox, SafeAreaView, StyleSheet, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/native-stack';
// import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
// import { StreamChat } from 'stream-chat';
// // import {
// //   Channel,
// //   ChannelList,
// //   Chat,
// //   MessageInput,
// //   MessageList,
// //   OverlayProvider,
// //   useAttachmentPickerContext,

// // } from 'stream-chat-react-native';
// import {Channel,ChannelList,Chat,MessageInput,MessageList,OverlayProvider,useAttachmentPickerContext} from 'stream-chat-react-native-core'

// LogBox.ignoreAllLogs(true);

// const chatClient = StreamChat.getInstance('dz5f4d5kzrue');
// const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoibGF0ZS1zYWxhZC0xIiwiZXhwIjoxNjM2NjY5Mzk3fQ.3PmxrdzZ47IUXWSWDU6xLtbMVG5R5MfWt8aemC5l7C0';
// const user = { id: 'late-salad-1' };

// const filters = {
//   members: { $in: ['late-salad-1'] },
//   type: 'messaging',
// };

// const sort = { last_message_at: -1 };

// const ChannelListScreen = ({ navigation }) => {
//   const { setChannel } = useContext(AppContext);

//   const memoizedFilters = useMemo(() => filters, []);

//   return (
//     <Chat client={chatClient}>
//       <View style={StyleSheet.absoluteFill}>
//         <ChannelList
//           filters={memoizedFilters}
//           onSelect={(channel) => {
//             setChannel(channel);
//             navigation.navigate('Channel');
//           }}
//           sort={sort}
//         />
//       </View>
//     </Chat>
//   );
// };

// const ChannelScreen = ({ navigation }) => {
//   const { channel } = useContext(AppContext);
// //   const headerHeight = useHeaderHeight();
//   const { setTopInset } = useAttachmentPickerContext();

//   useEffect(() => {
//     setTopInset(headerHeight);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [headerHeight]);

//   return (
//     <SafeAreaView>
//       <Chat client={chatClient}>
//         <Channel channel={channel} keyboardVerticalOffset={headerHeight}>
//           <View style={StyleSheet.absoluteFill}>
//             <MessageList />
//             <MessageInput />
//           </View>
//         </Channel>
//       </Chat>
//     </SafeAreaView>
//   );
// };

// const Stack = createStackNavigator();

// const AppContext = React.createContext();

// const ChatWindow = () => {
//   const { bottom } = useSafeAreaInsets();

//   const [channel, setChannel] = useState();
//   const [clientReady, setClientReady] = useState(false);

//   useEffect(() => {
//     const setupClient = async () => {
//       await chatClient.connectUser(user, userToken);

//       setClientReady(true);
//     };

//     setupClient();
//   }, []);

//   return (
//     <NavigationContainer>
//       <AppContext.Provider value={{ channel, setChannel }}>
//         <OverlayProvider bottomInset={bottom}>
//           {clientReady && (
//             <Stack.Navigator
//               initialRouteName='ChannelList'
//               screenOptions={{
//                 headerTitleStyle: { alignSelf: 'center', fontWeight: 'bold' },
//               }}
//             >
//               <Stack.Screen
//                 component={ChannelScreen}
//                 name='Channel'
//                 options={() => ({
//                   headerBackTitle: 'Back',
//                   headerRight: () => <></>,
//                   headerTitle: channel?.data?.name,
//                 })}
//               />
//               <Stack.Screen component={ChannelListScreen} name='ChannelList' options={{ headerTitle: 'Channel List' }} />
//             </Stack.Navigator>
//           )}
//         </OverlayProvider>
//       </AppContext.Provider>
//     </NavigationContainer>
//   );
// };

// export default () => {
//   return (
//     <SafeAreaProvider>
//    <ChatWindow/>
//     </SafeAreaProvider>
//   );
// };
