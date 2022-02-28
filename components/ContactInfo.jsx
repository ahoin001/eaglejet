import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  SimpleGrid,
  GridItem,
  Heading,
  Text,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Select,
  Checkbox,
  VStack,
} from "@chakra-ui/react";

import { ArrowRightIcon } from "@chakra-ui/icons";

export const ContactInfo = () => {
  return (
    <Box
    
      bg={"gray.200"}
      p={20}
      width="full"
      // maxW="8xl"
    >
      <SimpleGrid
       
        display={{ base: "initial", md: "grid" }}
        columns={{ md: 6 }}
        spacing={{ md: 6 }}
        // bg={"white"}
        p={[0, 0, 6]}
      >
        <GridItem area={"1/2/1/6"}>
          <Heading
            as="h1"
            fontSize="2xl"
            fontWeight="bold"
            textAlign="center"
            lineHeight="10"
          >
            26 Years of Professional Worldwide Airline First Officer Internship
            Programs for Low Time Pilots
          </Heading>
          <Heading
            as="h2"
            textAlign="center"
            mt={5}
            fontSize="md"
            color={useColorModeValue("gray.600", "gray.400")}
          >
            AIRLINE FIRST OFFICER EMPLOYMENT AND INTERNSHIP PROGRAMS FOR LOW
            TIME PILOTS IN USA, EUROPE, ASIA AND AFRICA:
          </Heading>
        </GridItem>
        <GridItem colSpan={{ md: 3 }}>
          <Box
          //   p={[4, 6]}
          >
            <Heading fontSize="lg" fontWeight="bold" lineHeight="6">
              <ArrowRightIcon boxSize="4" pb={1} />
              A320 & B737 NG First Officer Experience:
            </Heading>
            <Text
              mt={1}
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              A320 & B737 NG First Officer Experience & Employment For Low Time
              Type Rated & Non Type Rated Pilots.No minumum flight time
              requirement
            </Text>
          </Box>
        </GridItem>
        <GridItem colSpan={{ md: 3 }}>
          <Box
          //   p={[4, 6]}
          >
            <Heading fontSize="lg" fontWeight="bold" lineHeight="6">
              <ArrowRightIcon boxSize="4" pb={1} /> Any Nationality, Any License
            </Heading>
            <Text
              mt={1}
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              Any Nationality, Any License: Regional Jet & Heavy Turboprop Type
              Rating + First Officer Experience for 500 or 1250 Hours in Europe,
              Africa, Close to USA and Asia (click here)
            </Text>
          </Box>
        </GridItem>
        <GridItem colSpan={{ md: 3 }}>
          <Box
          //   p={[4, 6]}
          >
            <Heading fontSize="lg" fontWeight="bold" lineHeight="6">
              <ArrowRightIcon boxSize="4" pb={1} />
              Any Nationality, FAA License
            </Heading>
            <Text
              mt={1}
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              Any Nationality, FAA License: PIC Time Building as the Sole
              Manipulator of the Controls on Multi Engine and Multi Turbine
              Aircraft in the USA (click here)
            </Text>
          </Box>
        </GridItem>
        <GridItem colSpan={{ md: 3 }}>
          <Box
          //   p={[4, 6]}
          >
            <Heading fontSize="lg" fontWeight="bold" lineHeight="6">
              <ArrowRightIcon boxSize="4" pb={1} />
              US Citizen or Green Card Holder
            </Heading>
            <Text
              mt={1}
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              FAA Part 135 Turboprop or Turbojet First Officer Employment
              Program in the USA (click here)
            </Text>
          </Box>
        </GridItem>
        <GridItem area={"4/2/4/6"}>
          <Box
            //   p={[4, 6]}
            textAlign={"center"}
          >
            <Heading fontSize="lg" fontWeight="bold" lineHeight="6">
              <ArrowRightIcon boxSize="4" pb={1} />
              Executive Jet First Officer
            </Heading>
            <Text
              mt={1}
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              Executive Jet First Officer (click here)
            </Text>
          </Box>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};
