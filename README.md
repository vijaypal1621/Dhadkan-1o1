### Objective
Health Monitoring System provides the scientific and factual database essential to informed decision making and appropriate public health action. The key objective of surveillance is to provide information to guide interventions. The public health objectives and actions needed to make successful interventions determine the design and implementation of surveillance systems. For example, if the objective is to prevent the spread of epidemics of acute infectious diseases, such as SARS, managers need to intervene quickly to stop the spread of disease. Therefore, they need a surveillance system that provides rapid early warning information from clinics
and laboratories. In contrast, chronic diseases and health-related behaviours
change slowly. Managers typically monitor the effect of programs to change
risky behaviours such as tobacco smoking or chronic diseases once a year or
even less often. A monitoring system to measure the population effects of a
tuberculosis control program might provide information only every one to five
years—for example, through a series of demographic and health surveys. The
principle is that different public health objectives and the actions required to
reach them require different information systems. The type of action that can
be taken, when or how often that action needs to be taken, what information
is needed to take or monitor the action, and when or how frequently the
information is needed should determine the type of surveillance or health
information system.

### Motivation

Here are the main motivations for a health monitoring system and the great
reasons to develop it for a better doctor-patient communication and proper
medical attention :

1. Real-time health monitoring systems using IoT can help doctors prioritise
patients, and provide urgent care to those who are in the most danger
thereby saving lives.
2. More competent patient management can help utilise the resources of the
hospital more wisely and save money.
3. It is easy to use the system for patients and medical professionals.
4. The remote health monitoring system is especially useful to monitor
patients with chronic diseases. Most chronic diseases are incurable, so it is
necessary to monitor the state of the patient while at home, and quickly
respond if health indicators worsen.

5. The HMS is convenient and portable so it is very convenient for doctors to
manage patients from one app, and it is also very easy for patients to
monitor their own health by wearing a lightweight device like a bracelet.

### Hardware Components
1) Heart Rate Sensor
The working of this sensor can be done by connecting it from the
fingertip or human ear to Arduino board. So that heart rate can be easily
calculated. The pulse sensor includes a 24 inches color code cable, ear
clip, Velcro Dots-2, transparent stickers-3, etc.

• A colour code cable is connected to header connectors. So this sensor
is easily connected to an Arduino into the project without soldering.

• An ear clip size is the same as a heart rate sensor and it can be
connected using hot glue at the backside of the sensor to wear on the
earlobe.

• Two Velcro dots are completely sized toward the sensor at the hook
side. These are extremely useful while making a Velcro strap to cover
approximately a fingertip. This is used to cover the Sensor around the
finger.

• Transparent strikers are protection layers used to protect the sensor
from sweaty earlobes and fingers. This sensor includes three holes in
the region of the external edge so that one can easily connect anything
to it.

2) Wifi Module ESP8266
The ESP8266 WiFi Module is a self contained SOC with integrated TCP/
IP protocol stack that can give any micro-controller access to your WiFi
network. The ESP8266 is capable of either hosting an application or
offloading all WiFi networking functions from another application
processor. Each ESP8266 module comes pre-programmed with an AT
command set firmware, meaning, you can simply hook this up to your
Arduino device and get about as much WiFi-ability as a WiFi Shield
offers.
This module has a powerful enough on-board processing and
storage capability that allows it to be integrated with the sensors and
other application specific devices through its GPIOs with minimal
development up-front and minimal loading during runtime. Its high
degree of on-chip integration allows for minimal external circuitry,
including the front-end module, is designed to occupy minimal PCB area.

The ESP8266 supports APSD for VoIP applications and Bluetooth
co-existence interfaces, it contains a self-calibrated RF allowing it to
work under all operating conditions, and requires no external RF parts.

3) Circuit
The entire project is based on the NodeMcu ESP8266 as the system's
main brain. The ESP8266 controller is connected to all of the sensor relays.
To monitor pulse, the pulse sensor module is employed. It outputs the BPM.
The sensor outputs are sent to the NodeMcu ESP8266 and shown in the
user's Web application through the Internet.
