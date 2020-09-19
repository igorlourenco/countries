import React from "react";
import {Box, Button, Flex, Heading, useColorMode} from "@chakra-ui/core";

export default function Header() {
    const { colorMode, toggleColorMode } = useColorMode();
    const backgroundColorHeader = { light: "blue.500", dark: "blue.700" };

    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            backgroundColor={backgroundColorHeader[colorMode]}
            color="white"
            mb={8}
            p={3}
            pr={6}
        >
            <Flex align="center">
                <Heading size="xl">países</Heading>
            </Flex>


            <Box flexBasis="auto">
                <Button onClick={toggleColorMode} backgroundColor={backgroundColorHeader[colorMode]} shadow="md">
                    usar tema {colorMode === "light" ? "escuro" : "claro"}
                </Button>
            </Box>
        </Flex>
    )
}