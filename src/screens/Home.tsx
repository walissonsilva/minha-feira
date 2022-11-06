import React from "react";
import {
  Box,
  Button,
  Fab,
  FlatList,
  Input,
  Modal,
  Text,
  Tooltip,
  VStack,
} from "native-base";
import Feather from "react-native-vector-icons/Feather";
import { useState } from "react";

export function HomeScreen() {
  const [isModalAddListOpened, setIsModalAddListOpened] = useState(false);
  const [newListTitle, setNewListTitle] = useState("");

  return (
    <Box p="4" bgColor="gray.900">
      <Tooltip label="Nova lista de compras">
        <Fab
          icon={<Feather name="plus" color="white" />}
          onPress={() => setIsModalAddListOpened(true)}
          colorScheme="blue"
        />
      </Tooltip>

      <FlatList
        data={[1, 2, 3, 4, 5]}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => (
          <Box p="3" mt="3" borderColor="gray.700" borderWidth={1} rounded="md">
            <Text color="gray.200" fontWeight="medium">{`Lista ${item}`}</Text>
          </Box>
        )}
        height="100%"
      />

      <Modal
        isOpen={isModalAddListOpened}
        onClose={() => setIsModalAddListOpened(false)}
        p="4"
      >
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Nova Lista</Modal.Header>
          <Modal.Body>
            <Input
              onChangeText={setNewListTitle}
              placeholder="Nome da lista"
              fontSize="sm"
            />
          </Modal.Body>

          <Modal.Footer>
            <Button colorScheme="blue">Adicionar</Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Box>
  );
}
