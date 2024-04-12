import React, { useState } from "react";
import { Box, Heading, Text, Image, VStack, FormControl, FormLabel, Input, Button, useToast } from "@chakra-ui/react";

const Index = () => {
  const [email, setEmail] = useState("");
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle form submission (e.g., send data to backend)
    console.log("Submitted:", email);
    setEmail("");
    toast({
      title: "Success!",
      description: "You have been added to the waitlist.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h1" size="2xl" mb={6}>
        Introducing Our New Product
      </Heading>
      <Text fontSize="xl" mb={8}>
        Get ready for the most amazing product you've ever seen!
      </Text>
      <Image src="https://images.unsplash.com/photo-1479064555552-3ef4979f8908?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuZXclMjBwcm9kdWN0JTIwbGF1bmNofGVufDB8fHx8MTcxMjkzMDAwMXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Product Launch" mb={8} mx="auto" maxW="md" borderRadius="lg" />
      <VStack spacing={4} mb={8}>
        <Text fontSize="lg" fontWeight="bold">
          Join the Waitlist
        </Text>
        <Text>Be the first to know when our product launches!</Text>
      </VStack>
      <form onSubmit={handleSubmit}>
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} mb={4} />
        </FormControl>
        <Button type="submit" colorScheme="blue" size="lg">
          Sign Up
        </Button>
      </form>
    </Box>
  );
};

export default Index;
