import { Box, Container, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <Flex direction={{ base: "column", md: "row" }} spacing={8}>
        <Box flex="3">
          <Heading as="h2" size="xl" mb={4}>
            Top News
          </Heading>
          <Box mb={8}>
            <Image src="/images/top-news.jpg" alt="Top News" mb={4} />
            <Heading as="h3" size="lg" mb={2}>
              Headline of the Top News Article
            </Heading>
            <Text>
              Brief description of the top news article. This is a summary that gives readers an idea of what the article is about.
            </Text>
          </Box>
          <Box mb={8}>
            <Image src="/images/top-news-2.jpg" alt="Top News" mb={4} />
            <Heading as="h3" size="lg" mb={2}>
              Another Headline of the Top News Article
            </Heading>
            <Text>
              Brief description of another top news article. This is a summary that gives readers an idea of what the article is about.
            </Text>
          </Box>
        </Box>
        <Box flex="1" ml={{ md: 8 }}>
          <Heading as="h2" size="xl" mb={4}>
            Trending
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box>
              <Heading as="h4" size="md">
                Trending Article 1
              </Heading>
              <Text>
                Brief description of the trending article. This is a summary that gives readers an idea of what the article is about.
              </Text>
            </Box>
            <Box>
              <Heading as="h4" size="md">
                Trending Article 2
              </Heading>
              <Text>
                Brief description of another trending article. This is a summary that gives readers an idea of what the article is about.
              </Text>
            </Box>
            <Box>
              <Heading as="h4" size="md">
                Trending Article 3
              </Heading>
              <Text>
                Brief description of another trending article. This is a summary that gives readers an idea of what the article is about.
              </Text>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;