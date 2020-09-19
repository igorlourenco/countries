import React from "react";
import {
    Box,
    Divider,
    Flex,
    Image,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Text,
    useDisclosure
} from "@chakra-ui/core";
import {BsPeopleFill} from "react-icons/bs";
import {BiWorld, BiTimeFive} from "react-icons/bi";
import {FaMapMarkerAlt, FaRegMoneyBillAlt, FaPhoneAlt} from "react-icons/fa";
import {ImMap} from "react-icons/im";
import {HiSpeakerphone} from "react-icons/hi";

function formatNumber(number) {
    return number.toString().replace( /(\d)(?=(\d{3)+(?!\d))/g, '$1.' )
}

export default function Country({country, index}) {
    const {isOpen, onOpen, onClose} = useDisclosure();

    return (
        <>
            <Flex
                key={index}
                align="center"
                verticalAlign="center"
                flexDirection="column"
                p={2}
                borderRadius="lg"
                shadow="md"
                onClick={onOpen}
            >
                <Image borderRadius="lg" width="100%" src={country.flag} mb={3}/>
                <Text>({country.alpha3Code}) {country.translations.br}</Text>
            </Flex>

            <Modal onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay/>
                <ModalContent borderRadius="lg">
                    <ModalHeader>{country.translations.br} ({country.alpha2Code}/{country.alpha3Code})</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>
                        <Divider/>

                        <Text>{country.name}</Text>

                        <Divider/>

                        <Flex flexDirection="row">
                            <Box as={FaMapMarkerAlt} size="20px" color="blue.400" mr={2}/>
                            <Text>{country.capital}</Text>
                        </Flex>

                        <Divider/>

                        {country.languages.map( (language) => (
                            <Flex flexDirection="row">
                                <Box as={HiSpeakerphone} size="20px" color="blue.400" mr={2}/>
                                <Text>{language.nativeName} ({language.name})</Text>
                            </Flex>
                        ) )}

                        <Divider/>

                        <Flex flexDirection="row">
                            <Box as={BsPeopleFill} size="20px" color="blue.400" mr={2}/>
                            <Text>{formatNumber( country.population )}</Text>
                        </Flex>

                        <Divider/>

                        <Flex flexDirection="row">
                            <Box as={ImMap} size="20px" color="blue.400" mr={2}/>
                            <Text>{country.region} | {country.subregion}</Text>
                        </Flex>

                        <Divider/>

                        {country.currencies.map( (currency) => (
                            <Flex flexDirection="row">
                                <Box as={FaRegMoneyBillAlt} size="20px" color="blue.400" mr={2}/>
                                <Text>{currency.name} ({currency.code} - {currency.symbol})</Text>
                            </Flex>
                        ) )}

                        <Divider/>

                        <Flex flexDirection="row">
                            <Box as={BiWorld} size="20px" color="blue.400" mr={2}/>
                            <Text>{country.topLevelDomain.map( domain => (" | " + domain) )}</Text>
                        </Flex>

                        <Divider/>

                        <Flex flexDirection="row">
                            <Box as={FaPhoneAlt} size="20px" color="blue.400" mr={2}/>
                            <Text>{country.callingCodes.map( callingCode => (" | " + callingCode) )}</Text>
                        </Flex>

                        <Divider/>

                        <Flex flexDirection="row">
                            <Box as={BiTimeFive} size="20px" color="blue.400" mr={2}/>
                            <Text>{country.timezones.map( timezone => (" | " + timezone) )}</Text>
                        </Flex>

                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}
