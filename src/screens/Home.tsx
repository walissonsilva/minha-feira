import {
  Box,
  Button,
  Fab,
  FlatList,
  Input,
  Modal,
  Spinner,
  Text,
  Tooltip,
} from "native-base";
import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import {
  createShoppingList,
  loadAllShoppingLists,
  ShoppingList,
} from "../services";

export function HomeScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const [newListTitle, setNewListTitle] = useState("");
  const [isModalAddListOpened, setIsModalAddListOpened] = useState(false);
  const [shoppingLists, setShoppingLists] = useState([] as ShoppingList[]);

  async function handleCreateNewShoppingList() {
    if (!newListTitle) {
      Alert.alert(
        "Título inválido",
        "O título precisa ter, pelo menos, 3 caracteres."
      );
      return;
    }

    const shoppingListAdded = await createShoppingList(
      new Date().getTime(),
      newListTitle
    );

    if (shoppingListAdded) {
      setShoppingLists([shoppingListAdded, ...shoppingLists]);
      setIsModalAddListOpened(false);
      setNewListTitle("");
    }
  }

  useEffect(() => {
    async function loadShoppingListsFromDB() {
      setIsLoading(true);
      const data = await loadAllShoppingLists();
      setShoppingLists(data);
      setIsLoading(false);
    }

    loadShoppingListsFromDB();
  }, []);

  if (isLoading)
    return (
      <Box flex="1" justifyContent="center" alignItems="center">
        <Spinner />
      </Box>
    );

  return (
    <Box p="4">
      <Tooltip label="Nova lista de compras">
        <Fab
          icon={<Feather name="plus" color="white" size={20} />}
          onPress={() => setIsModalAddListOpened(true)}
          colorScheme="blue"
        />
      </Tooltip>

      <FlatList
        data={shoppingLists}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Box p="3" mt="3" borderColor="gray.200" borderWidth={1} rounded="md">
            <Text color="gray.700" fontWeight="medium">
              {item.title}
            </Text>
          </Box>
        )}
        height="100%"
      />

      <Modal
        isOpen={isModalAddListOpened}
        onClose={() => setIsModalAddListOpened(false)}
        p="4"
        size="lg"
        avoidKeyboard
      >
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Nova Lista</Modal.Header>
          <Modal.Body>
            <Input
              onChangeText={setNewListTitle}
              placeholder="Nome da lista"
              fontSize="sm"
              value={newListTitle}
            />
          </Modal.Body>

          <Modal.Footer>
            <Button colorScheme="blue" onPress={handleCreateNewShoppingList}>
              Adicionar
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Box>
  );
}
