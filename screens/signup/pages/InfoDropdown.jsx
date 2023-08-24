import React from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { StyleSheet } from "react-native";
import { WithLocalSvg } from "react-native-svg";

import ArrowUpSvg from "../../../assets/images/arrow_up.svg";
import ArrowDownSvg from "../../../assets/images/arrow_down.svg";

const InfoDropdown = ({
  loading,
  open,
  value,
  items,
  setOpen,
  setValue,
  setItems,
  onOpen,
  placeholder,
  searchable,
  searchPlaceholder,
  zIndex,
}) => {
  return (
    <DropDownPicker
      loading={loading}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      onOpen={onOpen}
      searchable={searchable ? true : false}
      placeholder={placeholder}
      searchPlaceholder={searchPlaceholder}
      autoScroll={true}
      showTickIcon={false}
      zIndex={zIndex}
      ArrowUpIconComponent={() => (
        <WithLocalSvg width={17} height={17} asset={ArrowUpSvg} />
      )}
      ArrowDownIconComponent={() => (
        <WithLocalSvg width={17} height={17} asset={ArrowDownSvg} />
      )}
      style={styles.container}
      textStyle={styles.text}
      placeholderStyle={styles.placeholder}
      listItemLabelStyle={styles.listItemLabel}
      dropDownContainerStyle={styles.dropdownContainer}
      selectedItemContainerStyle={styles.selectedItemContainer}
      selectedItemLabelStyle={styles.selectedItemLabel}
      searchContainerStyle={styles.searchContainer}
      searchTextInputStyle={styles.searchTextInput}
      customItemContainerStyle={styles.customItemContainer}
      searchPlaceholderTextColor="#c0c0c0"
      translation={{ NOTHING_TO_SHOW: "일치하는 사항이 없습니다." }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f3f3f3",
    borderColor: "#f3f3f3",
  },
  text: {
    fontWeight: "500",
  },
  dropdownContainer: {
    borderColor: "#f3f3f3",
  },
  placeholder: {
    fontWeight: "500",
    color: "#c0c0c0",
  },
  listItemLabel: {
    fontWeight: "400",
  },
  selectedItemContainer: {
    backgroundColor: "rgba(255, 151, 16, 0.2)",
  },
  selectedItemLabel: {
    fontWeight: "600",
  },
  searchContainer: {
    backgroundColor: "#fff",
    borderBlockColor: "#f3f3f3",
  },
  searchTextInput: {
    borderColor: "transparent",
    fontWeight: "500",
  },
});

export default InfoDropdown;
