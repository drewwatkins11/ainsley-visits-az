import React, { useEffect, useState } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Stack,
  CheckboxGroup,
  Checkbox,
  Text,
} from "@chakra-ui/react";
import content from "../../content";

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
        bottom="6"
        left="50%"
        transform={"translate(-50%, 0)"}
        borderRadius="full"
        backgroundColor="terraCotta"
        color="eggshell"
        size="lg"
        shadow="lg"
        onClick={() => setOpen(true)}
      >
        Packing List
      </Button>
      <Modal isOpen={isOpen} onClose={() => setOpen(false)}>
        <ModalOverlay />
        <ModalContent backgroundColor="eggshell">
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
