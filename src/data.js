const data = [
  {
    id: 1,
    name: "Agra",
    info: "Agra is a city on the banks of the Yamuna river in the Indian state of Uttar Pradesh, about 230 kilometres (140 mi) south-east of the national capital Delhi and 330 km west of the state capital Lucknow. With a population of roughly 1.6 million, Agra is the fourth-most populous city in Uttar Pradesh and twenty-third most populous city in India.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Taj_Mahal%2C_Agra%2C_India.jpg/1920px-Taj_Mahal%2C_Agra%2C_India.jpg",
    price: "35,758",
  },
  {
    id: 2,
    name: "Jaipur",
    info: "Jaipur is the capital and the largest city of the north-western Indian state of Rajasthan. As of 2011, the city has a population of 3.1 million, making it the tenth most populous city in the country. Located 268 km (167 miles) from the national capital New Delhi, Jaipur is also known as the Pink City due to the dominant color scheme of its buildings in old city.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg/1280px-East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg",
    price: "82,560",
  },
  {
    id: 3,
    name: "Goa",
    info: "Goa is a state on the southwestern coast of India within the Konkan region, geographically separated from the Deccan highlands by the Western Ghats.[9][10] It is bound by the Indian states of Maharashtra to the north, and Karnataka to the east and south, with the Arabian Sea in the west. It is India's smallest state by area and fourth-smallest by population. Goa has the highest GDP per capita among all Indian states,[6][11] two and a half times as high as the GDP per capita of the country as a whole.[12] The Eleventh Finance Commission of India named Goa the best-placed state because of its infrastructure, and India's National Commission on Population rated it as having the best quality of life in India (based on the commission's.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/56/Shantadurga_temple.jpg",
    price: "25,787",
  },
  {
    id: 4,
    name: "Kausani",
    info: "Kausani is a hill station and Village situated in Bageshwar district in the state of Uttarakhand, India. It is known for its scenery and its 300 km-wide panoramic view of Himalayan peaks like Trisul, Nanda Devi and Panchchuli. Mahatma Gandhi called this place the 'Switzerland of India' ,due to similarity in landscapes.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Sunset_at_Himalayas_6_Panchachulli_-_17.20_PM_-.jpg/204px-Sunset_at_Himalayas_6_Panchachulli_-_17.20_PM_-.jpg",
    price: "20,565",
  },
  {
    id: 5,
    name: "Manipur",
    info: "Manipur is a state in northeast India, with the city of Imphal as its capital.[13] It is bounded by the Indian states of Nagaland to the north, Mizoram to the south and Assam to the west. It also borders two regions of Myanmar, Sagaing Region to the east and Chin State to the south. The state covers an area of 22,327 km2 (8,621 sq mi). The official and most widely spoken language is the Meitei language (officially known as Manipuri). Native to the Meitei people, it is also used as a lingua franca by smaller communities, who speak a variety of other Tibeto-Burman languages.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/%EA%AF%85%EA%AF%A3%EA%AF%A1%EA%AF%83%EA%AF%A5%EA%AF%8F%EA%AF%86%EA%AF%A4%EA%AF%A1_%EA%AF%86%EA%AF%A4%EA%AF%A1%EA%AF%92%EA%AF%A4_%EA%AF%82%EA%AF%A5%EA%AF%8F%EA%AF%85%EA%AF%A4%EA%AF%A1%EA%AF%8A%EA%AF%A7_%EA%AF%81%EA%AF%85%EA%AF%A5%EA%AF%83%EA%AF%8D%EA%AF%A4_%EA%AF%82%EA%AF%A5%EA%AF%8F%EA%AF%81%EA%AF%AA_%28%EA%AF%81%EA%AF%85%EA%AF%A5%EA%AF%83%EA%AF%8D%EA%AF%A4_%EA%AF%80%EA%AF%A4%EA%AF%8C%EA%AF%A3%EA%AF%A1%29%EA%AF%92%EA%AF%A4_%EA%AF%91%EA%AF%8B%EA%AF%A5%EA%AF%A1_%EA%AF%85%EA%AF%A3%EA%AF%A1%EA%AF%86%EA%AF%A8%EA%AF%9E_%EA%AF%8A%EA%AF%AA%EA%AF%95_%EA%AF%83%EA%AF%A5%EA%AF%8F%EA%AF%80%EA%AF%A9%EA%AF%97%EA%AF%92%EA%AF%A4_%EA%AF%80%EA%AF%A5%EA%AF%9E%EA%AF%84_%EA%AF%83%EA%AF%83%EA%AF%A4.jpg/800px-thumbnail.jpg",
    price: "12,656",
  },
  {
    id: 6,
    name: "Bhutan",
    info: "Bhutan (Dzongkha: འབྲུག་རྒྱལ་ཁབ), officially the Kingdom of Bhutan, is a landlocked country in South Asia situated in the Eastern Himalayas between China in the north and India in the south. With a population of over 727,145[15] and a territory of 38,394 square kilometres (14,824 sq mi), Bhutan ranks 133rd in land area and 160th in population. Bhutan is a constitutional monarchy with a king (Druk Gyalpo) as the head of state and a prime minister as the head of government. Vajrayana Buddhism is the state religion and the Je Khenpo is the head of the state religion.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2b/Cloud-hidden%2C_whereabouts_unknown_%28Paro%2C_Bhutan%29.jpg",
    price: "60,456",
  },
  {
    id: 7,
    name: "Thailand",
    info: "Thailand,officially the Kingdom of Thailand and historically known as Siam (the official name until 1939),is a country in Southeast Asia on the Indochinese Peninsula. With a population of over 70 million[8], it spans 513,115 square kilometres (198,115 sq mi).[9] Thailand is bordered to the northwest by Myanmar, to the northeast and east by Laos, to the southeast by Cambodia, to the south by the Gulf of Thailand and Malaysia, and to the southwest by the Andaman Sea; it also shares maritime borders with Vietnam to the southeast and Indonesia and India to the southwest. Bangkok is the state capital and largest city.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Sukhothai_Historical_Park.jpg/1920px-Sukhothai_Historical_Park.jpg",
    price: "70,000",
  },
];

export default data;
