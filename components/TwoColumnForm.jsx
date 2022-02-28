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
} from "@chakra-ui/react";

// TODO Mark Required fields after asking which are necessary

export default function Component() {
  return (
    <Box
      bg={useColorModeValue("gray.500", "inherit")}
      p={6}
      width="full"
      maxW="8xl"
    >
      <Box bg={"red.100"}>
        <SimpleGrid
          display={{ base: "initial", md: "grid" }}
          columns={{ md: 3 }}
          spacing={{ md: 6 }}
        >
          <GridItem colSpan={{ md: 2 }}>
            <Box p={[4, 6]}>
              <Heading fontSize="lg" fontWeight="bold" lineHeight="6">
                Personal Information
              </Heading>
              <Text
                mt={1}
                fontSize="sm"
                color={useColorModeValue("gray.600", "gray.400")}
              >
                If using an AOL, HOTMAIL or YAHOO email address, please do not
                complete the below form and instead email directly to
                info@eaglejet.com, your name, country of residence, nationality,
                type of license, if holding a type rating and total flight time
                to email you details of the programs you qualify for.
              </Text>
            </Box>
          </GridItem>

          <GridItem mt={[5, null, 0]} colSpan={{ md: 3 }}>
            <chakra.form
              method="POST"
              shadow="base"
              rounded={[null, "md"]}
              overflow={{ sm: "hidden" }}
            >
              <Stack
                // px={4}
                // py={5}
                p={[3, 7]}
                bg={useColorModeValue("white", "gray.700")}
                spacing={6}
              >
                <SimpleGrid columns={6} spacing={6}>
                  <FormControl as={GridItem} colSpan={[6, 2]}>
                    <FormLabel
                      htmlFor="first_name"
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue("gray.700", "gray.50")}
                    >
                      Name
                    </FormLabel>
                    <Input
                      isRequired
                      type="text"
                      name="first_name"
                      id="first_name"
                      autoComplete="given-name"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 2]}>
                    <FormLabel
                      htmlFor="phone_number"
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue("gray.700", "gray.50")}
                    >
                      Phone Number
                    </FormLabel>
                    <Input
                      type="tel"
                      name="phone_number"
                      id="phone_number"
                      autoComplete="family-name"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 2]}>
                    <FormLabel
                      htmlFor="email_address"
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue("gray.700", "gray.50")}
                    >
                      Email
                    </FormLabel>
                    <Input
                      type="email"
                      name="email_address"
                      id="email_address"
                      autoComplete="email"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 3]}>
                    <FormLabel
                      htmlFor="country"
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue("gray.700", "gray.50")}
                    >
                      Country / Region
                    </FormLabel>
                    <Select
                      id="country"
                      name="country"
                      autoComplete="country"
                      placeholder="Select option"
                      mt={3}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </Select>
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 3]}>
                    <FormLabel
                      htmlFor="street_address"
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue("gray.700", "gray.50")}
                    >
                      Street address
                    </FormLabel>
                    <Input
                      type="text"
                      name="street_address"
                      id="street_address"
                      autoComplete="street-address"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={(6, 3)}>
                    <FormLabel
                      htmlFor="nationality"
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue("gray.700", "gray.50")}
                    >
                      Nationality
                    </FormLabel>
                    <Input
                      type="text"
                      name="nationality"
                      id="nationality"
                      autoComplete="street-address"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 3]}>
                    <FormLabel
                      htmlFor="US_work_permit"
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue("gray.700", "gray.50")}
                    >
                      Please Check Here If You Hold A US Work Permit :
                    </FormLabel>

                    <Stack spacing={5} direction="row" mt={3}>
                      <Checkbox colorScheme="facebook">
                        Currently Hold US Work Permit
                      </Checkbox>
                    </Stack>
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 2]}>
                    <FormLabel
                      htmlFor="licenses"
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue("gray.700", "gray.50")}
                    >
                      Licenses
                    </FormLabel>
                    <Input
                      type="text"
                      name="licenses"
                      id="licenses"
                      autoComplete="licenses"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 2]}>
                    <FormLabel
                      htmlFor="ratings"
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue("gray.700", "gray.50")}
                    >
                      Ratings
                    </FormLabel>
                    <Input
                      type="text"
                      name="ratings"
                      id="ratings"
                      autoComplete="ratings"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                    />
                  </FormControl>

                  {/*TODO : Adjust attributes for whatever we call this element */}
                  <FormControl as={GridItem} colSpan={[6, 2]}>
                    <FormLabel
                      htmlFor="postal_code"
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue("gray.700", "gray.50")}
                    >
                      Issuing Authority (EASA,FAA,etc)
                    </FormLabel>
                    <Input
                      type="text"
                      name="postal_code"
                      id="postal_code"
                      autoComplete="postal-code"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                    />
                  </FormControl>
                </SimpleGrid>
              </Stack>
            </chakra.form>
          </GridItem>
          <GridItem colSpan={{ md: 2 }}>
            <Box p={[4]}>
              <Heading fontSize="lg" fontWeight="bold" lineHeight="6">
                Flight Experience
              </Heading>
            </Box>
          </GridItem>
          <GridItem mt={[5, null, 0]} colSpan={{ md: 3 }}>
            <chakra.form
              method="POST"
              shadow="base"
              rounded={[null, "md"]}
              overflow={{ sm: "hidden" }}
            >
              <Stack
                // px={4}
                // py={5}
                p={[3, 7]}
                bg={useColorModeValue("white", "gray.700")}
                spacing={6}
              >
                <SimpleGrid columns={6} spacing={6}>
                  <FormControl as={GridItem} colSpan={[6, 3]}>
                    <FormLabel
                      htmlFor="total_flight_hours"
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue("gray.700", "gray.50")}
                    >
                      Total Hrs. of Flight Time
                    </FormLabel>
                    <Input
                      type="text"
                      name="total_flight_hours"
                      id="total_flight_hours"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 3]}>
                    <FormLabel
                      htmlFor="pilot_command_time"
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue("gray.700", "gray.50")}
                    >
                      Pilot In Command Time
                    </FormLabel>
                    <Input
                      isRequired
                      type="text"
                      name="pilot_command_time"
                      id="pilot_command_time"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                    />
                  </FormControl>
                  <FormControl as={GridItem} colSpan={[6, 3]}>
                    <FormLabel
                      htmlFor="multiengine_time"
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue("gray.700", "gray.50")}
                    >
                      Multiengine Time
                    </FormLabel>
                    <Input
                      type="text"
                      name="multiengine_time"
                      id="multiengine_time"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 3]}>
                    <FormLabel
                      htmlFor="turbine_simulator_time"
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue("gray.700", "gray.50")}
                    >
                      Turbine Simulator Time
                    </FormLabel>
                    <Input
                      type="text"
                      name="turbine_simulator_time"
                      id="turbine_simulator_time"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 3]}>
                    <FormLabel
                      htmlFor="turbo_prop_time"
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue("gray.700", "gray.50")}
                    >
                      Turboprop Time
                    </FormLabel>
                    <Input
                      type="text"
                      name="turbo_prop_time"
                      id="turbo_prop_time"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 3]}>
                    <FormLabel
                      htmlFor="turbo_jet_time"
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue("gray.700", "gray.50")}
                    >
                      Turbojet Time
                    </FormLabel>
                    <Input
                      type="text"
                      name="turbo_jet_time"
                      id="turbo_jet_time"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 3]}>
                    <FormLabel
                      htmlFor="a320_captain_hours"
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue("gray.700", "gray.50")}
                    >
                      A320 Captain Hours
                    </FormLabel>
                    <Input
                      type="text"
                      name="a320_captain_hours"
                      id="a320_captain_hours"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 3]}>
                    <FormLabel
                      htmlFor="a320_first_officer_hours"
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue("gray.700", "gray.50")}
                    >
                      A320 First Officer Hours
                    </FormLabel>
                    <Input
                      type="text"
                      name="a320_first_officer_hours"
                      id="a320_first_officer_hours"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 3]}>
                    <FormLabel
                      htmlFor="b737_captain_hours"
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue("gray.700", "gray.50")}
                    >
                      B737 Captain Hours
                    </FormLabel>
                    <Input
                      type="text"
                      name="b737_captain_hours"
                      id="b737_captain_hours"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 3]}>
                    <FormLabel
                      htmlFor="b737_first_officer_hours"
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue("gray.700", "gray.50")}
                    >
                      B737 First Officer Hours
                    </FormLabel>
                    <Input
                      type="text"
                      name="b737_first_officer_hours"
                      id="b737_first_officer_hours"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 3]}>
                    <FormLabel
                      htmlFor="desired_start_date"
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue("gray.700", "gray.50")}
                    >
                      Desired Start Date
                    </FormLabel>
                    <Input
                      type="date"
                      name="desired_start_date"
                      id="desired_start_date"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 3]}>
                    <FormLabel
                      htmlFor="desired_program"
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue("gray.700", "gray.50")}
                    >
                      Desired Program
                    </FormLabel>
                    <Select placeholder="Select Program">
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Select>
                  </FormControl>
                </SimpleGrid>
              </Stack>
            </chakra.form>
          </GridItem>
        </SimpleGrid>
      </Box>

      {/* <Box visibility={{ base: "hidden", sm: "visible" }} aria-hidden="true">
        <Box py={5}>
          <Box
            borderTop="solid 1px"
            borderTopColor={useColorModeValue("gray.200", "whiteAlpha.200")}
          ></Box>
        </Box>
      </Box> */}
    </Box>
  );
}
