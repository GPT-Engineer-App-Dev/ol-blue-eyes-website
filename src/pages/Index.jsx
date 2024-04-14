import { Box, VStack, Heading, Text, Image, HStack, Link } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="gray.100">
      <Box h="100vh" bgImage="https://images.unsplash.com/photo-1696815115201-e91173be822c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmcmFuayUyMHNpbmF0cmElMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTMwNzA1NjV8MA&ixlib=rb-4.0.3&q=80&w=1080" bgSize="cover" bgPosition="center" color="white" textAlign="center">
        <VStack justify="center" h="full" bgGradient="linear(to-b, transparent, navy)">
          <Heading size="3xl">Frank Sinatra</Heading>
          <Heading size="xl">The Voice of the Century</Heading>
        </VStack>
      </Box>

      <HStack bg="navy" color="white" justify="center" gap={12} py={6}>
        <Link href="/discography">Discography</Link>
        <Link href="/photos">Photos</Link>
        <Link href="/timeline">Timeline</Link>
        <Link href="/contact">Contact</Link>
      </HStack>

      <Box maxW="3xl" mx="auto" py={12} px={6}>
        <Heading size="xl" mb={4}>
          Biography
        </Heading>
        <Text mb={6}>Frank Sinatra was one of the most influential musical artists of the 20th century. Born in 1915 in Hoboken, New Jersey, Sinatra rose from humble beginnings to become a global superstar.</Text>
        <Text mb={6}>In the 1940s, Sinatra's solo career took off and he became known as "The Voice" for his incredible vocal range and emotive delivery. Hit songs like "I'll Never Smile Again" and "I've Got the World on a String" made him a household name.</Text>
        <Text>Over his seven-decade career, Sinatra won numerous Grammy Awards, starred in over 60 films, and recorded hundreds of now-classic songs. His music and style defined the "Rat Pack" era and continue to resonate with audiences today. Sinatra passed away in 1998, leaving an indelible mark on American music and culture.</Text>
      </Box>

      <HStack bg="navy" color="white" justify="center" py={8}>
        <Text>© 2023 Frank Sinatra. All rights reserved.</Text>
        <Link href="https://www.facebook.com/sinatra" target="_blank">
          <FaFacebook size={24} />
        </Link>
        <Link href="https://twitter.com/franksinatra" target="_blank">
          <FaTwitter size={24} />
        </Link>
        <Link href="https://www.instagram.com/sinatra" target="_blank">
          <FaInstagram size={24} />
        </Link>
      </HStack>
    </Box>
  );
};

export default Index;
