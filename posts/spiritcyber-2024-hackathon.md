---
title: "Breaking into IoT and OT devices at the SPIRITCYBER-24 Hackathon"
summary: We competed in the SPIRITCYBER-24 Hackathon, securing 3rd place overall with a total prize of $14,700 after identifying critical vulnerabilities in smart city and industrial IoT devices.
date: 2025-02-03T14:39:00+08:00
# categories: [Hackathon]
# tags: [hackathon]
showtoc: true
tocopen: false
---

# SPIRITCYBER Hackathon?

SPIRITCYBER is a hackathon that started in 2022 and aims to discover new IoT attack techniques through crowdsourced wisdom from the broader cybersecurity community. It will take place during the Singapore International Cyber Week (SICW).

The theme for this year's SPIRITCYBER-24 is 'Cybersecure Urban Living.' The event is organized by SPIRIT, a Singapore government-funded R&D center located at Nanyang Technological University (NTU).[^1]

[^1]: https://www.sicw.gov.sg/events/15-oct/iot-hackathon-spiritcyber-2024/, https://www.sicw.gov.sg/events/19-october-2023/iot-hackathon-spiritcyber-2023/

# SPIRITCYBER-2024

We registered for the SPIRITCYBER-24 Hackathon and were fortunate to be selected to participate in the online elimination round, which will last only 30 days.

Below, I have listed the different target smart device categories:
- **Smart City**: Connected Lamp Posts
- **Smart Buildings**: AMR, Lift, Auto Door
- **Other Smart Home devices**

You can check the actual photos of the target smart devices [here](https://www.facebook.com/SICWSG/posts/pfbid023mApv1LLhyWdTVGEsJMchSiHp4ReNfLBE6sG8iUoVUXxdeaxfwp6zgP3Z6hddKz3l).

## Elimination Round

My teammates, Jay Turla and Japz Divino, and I managed to identify several vulnerabilities ranging from low to critical severity, including XSS, Account Takeover, RCE, Modbus attacks, and OPC UA attacks.

We qualified for the Finals of SPIRITCYBER-24, placing 3rd in the Elimination Round with a score of 5,700, earning a prize of $10,500 and a bonus of $2,000 for securing 3rd place. The final round will be held at the GovWare event during the Singapore International Cyber Week in Singapore from October 15–17.
 
<!-- ![](/img/spiritcyber-2024-hackathon/img1.png)  -->

<img src="/img/spiritcyber-2024-hackathon/img1.png" alt="foo" class="img-lg">

## Final Round

For the final round, stricter rules were set, and each team was given limited time to test each of the smart device categories.

We had a hard time testing with the limited time, but we still managed to place 3rd in the final round, earning a prize of $200 for the single bug we reported on the PLC controller.

<!-- ![](/img/spiritcyber-2024-hackathon/img3.jpg)  -->
<img src="/img/spiritcyber-2024-hackathon/img3.jpg" alt="foo" class="img-lg">

Since the score from the final round is added to the score from the elimination round, our overall score placed us 3rd in the SPIRITCYBER-24 Hackathon competition, earning a total prize of $14,700.

<!-- ![](/img/spiritcyber-2024-hackathon/img2.png) -->
<img src="/img/spiritcyber-2024-hackathon/img2.png" alt="foo" class="img-lg">

# Exploits Demo

Here are some of the exploits we demoed in the final round of the hackathon (which won't be accepted since we already reported them in the elimination round).

**Controlling Lift / Elevator PLC**

[![Controlling Lift / Elevator PLC](/img/spiritcyber-2024-hackathon/img4.png)](https://www.facebook.com/watch/?v=1617379705799965)

**Timing Attack via Modbus that stops the Autonomous Mobile Robot**

[![Timing Attack via Modbus that stops the Automous Mobile Robot](/img/spiritcyber-2024-hackathon/img5.png)](https://www.facebook.com/chvdotph/videos/533934589360355/)

# Conclusion

It was fun meeting researchers, bug hunters, and hackers from different countries. We enjoyed the hackathon event as well as GovWare, where we got a lot of freebies, swag, and stickers from various companies showcasing their businesses and products. We also learned a lot about hacking into different IoT and OT devices. A big shoutout to the organizers from 
Cyber Security Agency of Singapore, Nanyang Technological University and the awesome guys from Starlabs! 
