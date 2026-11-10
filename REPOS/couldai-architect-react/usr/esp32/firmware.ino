#include <WiFi.h>
#include <PubSubClient.h>

const char* ssid = "YOUR_WIFI_SSID";
const char* password = "YOUR_WIFI_PASSWORD";
const char* mqtt_server = "YOUR_MQTT_BROKER_IP";

WiFiClient espClient;
PubSubClient client(espClient);

// Sensor Pins
#define VOLTAGE_PIN 34
#define CURRENT_PIN 35
#define TEMP_PIN 32
#define PRESSURE_PIN 33
#define FLOW_PIN 25
#define TANK_PIN 26
#define TRIG_PIN 27
#define ECHO_PIN 14

void setup_wifi() {
  delay(10);
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
}

void reconnect() {
  while (!client.connected()) {
    Serial.print("Attempting MQTT connection...");
    if (client.connect("ESP32Client")) {
      Serial.println("connected");
    } else {
      Serial.print("failed, rc=");
      Serial.print(client.state());
      Serial.println(" try again in 5 seconds");
      delay(5000);
    }
  }
}

void setup() {
  Serial.begin(115200);
  setup_wifi();
  client.setServer(mqtt_server, 1883);

  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);
}

void loop() {
  if (!client.connected()) {
    reconnect();
  }
  client.loop();

  // Read sensors (mocked/analog)
  float voltage = analogRead(VOLTAGE_PIN) * (3.3 / 4095.0) * 100; // Scaled
  float current = analogRead(CURRENT_PIN) * (3.3 / 4095.0) * 10;
  float temp = analogRead(TEMP_PIN) * (3.3 / 4095.0) * 50;

  float pressure = analogRead(PRESSURE_PIN) * (3.3 / 4095.0) * 100;
  float flow = analogRead(FLOW_PIN) * (3.3 / 4095.0) * 50;
  float tank = analogRead(TANK_PIN) * (3.3 / 4095.0) * 100;

  // Waste distance
  digitalWrite(TRIG_PIN, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);
  long duration = pulseIn(ECHO_PIN, HIGH);
  float distance = duration * 0.034 / 2;

  char payload[256];
  
  // Electricity
  snprintf(payload, sizeof(payload), "{\"voltage\":%.2f,\"current\":%.2f,\"temperature\":%.2f}", voltage, current, temp);
  client.publish("smartgov/sensors/electricity", payload);

  // Water
  snprintf(payload, sizeof(payload), "{\"pressure\":%.2f,\"flow\":%.2f,\"tank_level\":%.2f}", pressure, flow, tank);
  client.publish("smartgov/sensors/water", payload);

  // Waste
  snprintf(payload, sizeof(payload), "{\"bin_level\":%.2f}", distance);
  client.publish("smartgov/sensors/waste", payload);

  delay(5000); // Publish every 5 seconds
}
