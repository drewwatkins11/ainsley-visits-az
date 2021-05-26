import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Stack,
  Checkbox,
  Text,
} from "@chakra-ui/react";
import content from "../../content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LocalCheckbox = ({
  id,
  label,
  note,
}: {
  id: string;
  label: string;
  note?: string;
}) => {
  const [isChecked, setCheckedState] = useState();
  const setChecked = (isChecked) => {
    setCheckedState(isChecked);
    localStorage.setItem(id, JSON.stringify(isChecked));
  };
  useEffect(() => {
    const checked = localStorage.getItem(id);
    console.log("checked", checked);
    setCheckedState(JSON.parse(checked));
  }, []);

  return (
    <Checkbox
      value={id}
      isChecked={isChecked}
      onChange={(e) => setChecked(e.target.checked)}
      colorScheme="desertGreen"
    >
      <b>{label}</b>
      <br />
      <Text fontSize="sm" color="desertGrey">
        <i>{note}</i>
      </Text>
    </Checkbox>
  );
};

const PackingList = () => {
  const { packingList } = content;
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Button
        position="fixed"
        bottom="8"
        left="50%"
        transform={"translate(-50%, 0)"}
        borderRadius="full"
        backgroundColor="terraCotta"
        color="eggshell"
        size="lg"
        shadow="lg"
        onClick={() => setOpen(true)}
      >
        <Box display="inline" mr="2">
          <FontAwesomeIcon icon="clipboard-list" />
        </Box>
        Packing list
      </Button>
      <Modal isOpen={isOpen} onClose={() => setOpen(false)}>
        <ModalOverlay />
        <ModalContent backgroundColor="#F5F5F5">
          <ModalHeader>Packing List</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb="8">
            <Stack spacing="8">
              <Text fontSize="sm">{packingList.intro}</Text>
              <Stack>
                {packingList.items.map((item) => {
                  return (
                    <LocalCheckbox
                      id={item.id}
                      key={item.id}
                      label={item.item}
                      note={item.note || null}
                    />
                  );
                })}
              </Stack>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PackingList;
