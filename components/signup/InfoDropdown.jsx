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
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3f3f3',
    borderColor: '#f3f3f3',
    borderWidth: '1.2px',
    borderRadius: '12px',
  },
  text: {
    fontSize: '18px',
    fontWeight: '500',
  },
  dropdownContainer: {
    borderColor: '#f3f3f3',
    borderWidth: '1.2px',
  },
  placeholder: {
    fontSize: '18px',
    fontWeight: '500',
    color: '#c0c0c0',
  },
  listItemLabel: {
    fontSize: '16px',
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
    borderRadius: '0',
    fontSize: '18px',
    fontWeight: '500',
  },
});

export default InfoDropdown;
