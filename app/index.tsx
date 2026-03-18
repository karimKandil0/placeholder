import tw from 'twrnc';
import { StatusBar } from 'expo-status-bar';
import { Pressable, SafeAreaView, Text, View } from 'react-native';

export default function LandingScreen() {
  return (
    <SafeAreaView style={tw`flex-1 bg-slate-950`}>
      <StatusBar style="light" />
      <View style={tw`flex-1 items-center justify-center px-6`}>
        <View style={tw`space-y-4 items-center text-center`}>
          <Text style={tw`text-3xl font-semibold text-white text-center`} numberOfLines={2}>
            Pay for absolutely nothing.
          </Text>
          <Text style={tw`text-base text-slate-300 leading-6 text-center`}>
            Join a community of idiots
          </Text>
          <Pressable
            style={tw`mt-6 w-full max-w-xs rounded-2xl bg-emerald-400 py-4 px-10 items-center`}
            onPress={() => {}}
            android_ripple={{ color: 'rgba(255,255,255,0.4)' }}>
            <Text style={tw`text-base font-semibold text-slate-950`}>Join Now.</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
