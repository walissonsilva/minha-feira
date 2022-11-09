import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import {
  Box,
  Button,
  Fab,
  FlatList,
  Flex,
  Icon,
  Input,
  Modal,
  Pressable,
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
  const bottomTabHeight = useBottomTabBarHeight();

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
        <Spinner size="lg" />
      </Box>
    );

  return (
    <Box p="4">
      <Tooltip label="Nova lista de compras">
        <Fab
          icon={<Feather name="plus" color="white" size={20} />}
          onPress={() => setIsModalAddListOpened(true)}
          colorScheme="blue"
          marginBottom={bottomTabHeight}
        />
      </Tooltip>

      <FlatList
        data={shoppingLists}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Flex
            flexDir="row"
            alignItems="center"
            justifyContent="space-between"
            borderColor="gray.300"
            borderWidth={1}
            rounded="md"
            p="3"
            mt="3"
          >
            <Pressable flex="1" onPress={() => console.log("Opa!")}>
              <Text color="gray.700" fontWeight="medium" fontSize="md">
                {item.title}
              </Text>
            </Pressable>

            <Box width="6" display="flex" alignItems="center">
              <Icon
                size="sm"
                color="red.400"
                as={<Feather name="trash" />}
                onPress={() => console.log("Deletar")}
              />
            </Box>
          </Flex>
        )}
        height="100%"
        width="100%"
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
