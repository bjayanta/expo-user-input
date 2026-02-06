import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Invoice = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const [products, setProducts] = useState([
    { name: "Pen", quantity: 2, price: 10 },
    { name: "Notebook", quantity: 1, price: 50 },
  ]);

  const onChange = (event: any, selectedDate?: Date) => {
    setShow(false);

    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const handleSubmit = () => {
    Keyboard.dismiss();
    alert("Invoice created! (not really, this is just a placeholder)");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 40}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            paddingHorizontal: 16,
            gap: 16,
          }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Create Invoice
            </Text>
            <Text style={{ fontSize: 14, color: "gray" }}>
              This is where you can create a new invoice.
            </Text>
          </View>

          <View style={{ flexDirection: "row", gap: 16 }}>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "normal",
                  paddingVertical: 6,
                }}
              >
                SL Number
              </Text>
              <TextInput
                keyboardType="number-pad"
                returnKeyType="next"
                style={{ borderWidth: 1, borderColor: "gray", padding: 8 }}
              />
            </View>

            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "normal",
                  paddingVertical: 6,
                }}
              >
                Date
              </Text>

              <Pressable
                onPress={() => setShow(!show)}
                style={{ padding: 8, borderWidth: 1, borderColor: "gray" }}
              >
                {/* <Text>{date.toLocaleString()}</Text> */}
                <Text>{date.toLocaleDateString("en-GB")}</Text>
              </Pressable>

              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode="date"
                  is24Hour={true}
                  display="default"
                  onChange={onChange}
                />
              )}
            </View>
          </View>

          <View>
            <Text
              style={{ fontSize: 16, fontWeight: "normal", paddingVertical: 6 }}
            >
              Customer Name
            </Text>
            <TextInput
              keyboardType="default"
              style={{ borderWidth: 1, borderColor: "gray", padding: 8 }}
            />
          </View>

          <View>
            <Text
              style={{ fontSize: 16, fontWeight: "normal", paddingVertical: 6 }}
            >
              Mobile Number
            </Text>
            <TextInput
              keyboardType="phone-pad"
              returnKeyType="next"
              style={{ borderWidth: 1, borderColor: "gray", padding: 8 }}
            />
          </View>

          <View>
            <Text
              style={{ fontSize: 16, fontWeight: "normal", paddingVertical: 6 }}
            >
              Address
            </Text>
            <TextInput
              keyboardType="default"
              multiline
              numberOfLines={2}
              style={{
                borderWidth: 1,
                borderColor: "gray",
                padding: 8,
                minHeight: 80,
                textAlignVertical: "top",
              }}
            />
          </View>

          {/* Add Products */}
          <View style={{ flexDirection: "column", gap: 16 }}>
            <Text style={{ fontSize: 16 }}>Add Products</Text>

            {/* Form */}
            <View
              style={{
                flexDirection: "column",
                gap: 16,
              }}
            >
              <TextInput
                placeholder="Product name"
                keyboardType="default"
                returnKeyType="next"
                style={{ borderWidth: 1, borderColor: "gray", padding: 8 }}
              />

              <View style={{ flexDirection: "row", gap: 16 }}>
                <TextInput
                  placeholder="Quantity"
                  keyboardType="number-pad"
                  returnKeyType="next"
                  style={{
                    flex: 1,
                    borderWidth: 1,
                    borderColor: "gray",
                    padding: 8,
                  }}
                />

                <TextInput
                  placeholder="Price"
                  keyboardType="decimal-pad"
                  returnKeyType="next"
                  style={{
                    flex: 1,
                    borderWidth: 1,
                    borderColor: "gray",
                    padding: 8,
                  }}
                />

                <Pressable
                  onPress={() => alert("Add product (not implemented)")}
                  style={({ pressed }) => [
                    {
                      alignItems: "center",
                      backgroundColor: pressed ? "#004080" : "#007BFF",
                      paddingHorizontal: 16,
                      paddingVertical: 8,
                    },
                  ]}
                >
                  <Text style={{ color: "white" }}>+</Text>
                </Pressable>
              </View>
            </View>

            {/* Table */}
            <View style={styles.table}>
              {/* Header */}
              <View style={styles.row}>
                <Text style={[styles.cell, { fontWeight: "bold", flex: 2 }]}>
                  Product
                </Text>
                <Text
                  style={[
                    styles.cell,
                    { fontWeight: "bold", textAlign: "center" },
                  ]}
                >
                  QTY
                </Text>
                <Text
                  style={[
                    styles.cell,
                    { fontWeight: "bold", textAlign: "right" },
                  ]}
                >
                  Price
                </Text>
                <Text
                  style={[
                    styles.cell,
                    { fontWeight: "bold", textAlign: "right" },
                  ]}
                >
                  Total
                </Text>
              </View>

              {/* Rows */}
              {products.map((product, index) => (
                <View key={index} style={styles.row}>
                  <Text style={[styles.cell, { flex: 2 }]}>{product.name}</Text>
                  <Text style={[styles.cell, { textAlign: "center" }]}>
                    {String(product.quantity)}
                  </Text>
                  <Text style={[styles.cell, { textAlign: "right" }]}>
                    {String(product.price)}
                  </Text>
                  <Text style={[styles.cell, { textAlign: "right" }]}>
                    {product.quantity * product.price}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          <Pressable
            onPress={handleSubmit}
            style={({ pressed }) => [
              {
                alignItems: "center",
                backgroundColor: pressed ? "#004080" : "#007BFF",
                marginTop: 20,
                padding: 12,
              },
            ]}
          >
            <Text style={{ fontSize: 18, color: "white" }}>Order Confirm</Text>
          </Pressable>

          <Text style={{ fontSize: 14, color: "gray", marginTop: 12 }}>
            Note: This is just a UI mockup. The submit button does not actually
            create an invoice.
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  table: {
    borderWidth: 1,
    borderColor: "#ccc",
    overflow: "hidden",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  cell: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRightWidth: 1,
    borderColor: "#ccc",
  },
});

export default Invoice;
