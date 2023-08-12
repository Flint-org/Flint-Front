import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { StyleSheet } from 'react-native';

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
      style={styles.container}
      textStyle={styles.text}
      placeholderStyle={styles.placeholder}
      listItemLabelStyle={styles.listItemLabel}
      dropDownContainerStyle={styles.dropdownContainer}
      selectedItemLabelStyle={styles.selectedItemLabel}
      searchContainerStyle={styles.searchContainer}
      searchTextInputStyle={styles.searchTextInput}
      customItemContainerStyle={styles.customItemContainer}
      searchPlaceholderTextColor="#c0c0c0"
      autoScroll={true}
      zIndex={zIndex}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3f3f3',
    borderColor: '#f3f3f3',
  },
  text: {
    fontWeight: '500',
  },
  dropdownContainer: {
    borderColor: '#f3f3f3',
  },
  placeholder: {
    fontWeight: '500',
    color: '#c0c0c0',
  },
  listItemLabel: {
    fontWeight: '400',
  },
  selectedItemLabel: {
    fontWeight: '600',
  },
  searchContainer: {
    backgroundColor: '#fff',
    borderBlockColor: '#f3f3f3',
  },
  searchTextInput: {
    borderColor: 'transparent',
    fontWeight: '500',
  },
});

export default InfoDropdown;
