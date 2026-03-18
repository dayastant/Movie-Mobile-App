
import { images } from "@/constants/images";
import { ImageBackground, Image, Text, View } from "react-native";
import { Tabs } from "expo-router";
import React from "react";

const _Layout = () => {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <>
                            <ImageBackground source={images.highlight}>
                                <Image source={icon} tintColor="#151312" className="size-5" />
                                <Text className="ml-2 text-base font-semibold text-secondary">
                                    Home
                                </Text>
                            </ImageBackground>
                        </>
                    )

                }} />
            <Tabs.Screen
                name="search"
                options={{
                    title: 'Search',
                    headerShown: false
                }} />
            <Tabs.Screen
                name="saved"
                options={{
                    title: 'Saved',
                    headerShown: false
                }} />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    headerShown: false
                }} />
        </Tabs>
    );
};