// ---------------Menu Buttons------------------------------------------------------------------------------------------


const menuBtns = ['All', 'saudi Arabia', 'Syria', '', 'Palestine', 'Iraq','Iran'];
// console.log(menuBtns);

const menuButtons = document.querySelector(".menuButtons");
// console.log(menuButtons);

let menuButtonContent = [];

menuBtns.forEach((btns) => {
    let categoryBtns = `<button class="mainBtns" onclick="changeCategory('${btns}')">${btns}</button>`;
    // console.log(categoryBtns);

    menuButtonContent.push(categoryBtns);
    // console.log(menuButtonContent);
});

menuButtons.innerHTML = menuButtonContent.join("");
// console.log(typeof menuButtons);



// ---------------Menu Items List---------------------------------------------------------------------------------------

const menuItemsList=[

   
    {id:1,
    title:"Kabaa tullah makkah",
    category:"saudi arabia",
    image:"./Assests/1..jpg",
    description:"The Kaaba (Arabic: ٱلْكَعْبَة, romanized: al-Kaʿba,  'the Cube', Arabic pronunciation: [al.ˈkaʕ.ba]), also spelled Ka'ba, Ka'bah or Kabah, sometimes referred to as al-Ka'ba al-Musharrafa (Arabic: ٱلْكَعْبَة ٱلْمُشَرَّفَة, romanized: al-Kaʿba l-Mušarrafa, lit. 'the Honored Ka'ba', Arabic pronunciation: [al.ˈkaʕ.ba‿l.mu.ˈʃar.ra.fa]), is a stone building at the center of Islam's most important mosque and holiest site, the Masjid al-Haram in Mecca, Saudi Arabia. It is considered by Muslims to be the Bayt Allah (Arabic: بَيْت ٱللَّٰه, lit. 'House of God') and is the qibla (Arabic: قِبْلَة, direction of prayer) for Muslims around the world. The current structure was built after the original building was damaged by fire during the siege of Mecca by Umayyads in 683.[4]In early Islam, Muslims faced in the general direction of Jerusalem as the qibla in their prayers before changing the direction to face the Kaaba, believed by Muslims to be a result of a Quranic verse revelation to Muhammad. "
},
{
    id:2,
    title:"Masjid e nabwi madina",
    category:"saudi arabia",
    image:"./Assests/2..jpg",
    description:"Al-Masjid an-Nabawī (Arabic: ٱلْمَسْجِد ٱلنَّبَوِي ,mosque of the Prophet), known in English as the Prophet's Mosque, is the second mosque built by the Islamic prophet Muhammad in Medina, after that of Quba, as well as the second largest mosque and holiest site in Islam, after Masjid al-Haram in Mecca, in the Saudi region of the Hejaz. The mosque is located at the heart of Medina, and is a major site of pilgrimage that falls under the purview of the Custodian of the Two Holy Mosques."},
   {id:3,
    title:"Masjid e aqsa",
    category:"Palestine",
    image:"./Assests/3..jpg",
    description:"Al-Aqsa Mosque, properly Jāmiʿ al-Aqṣā (Arabic: جامع الأقصى, 'congregational mosque of Al-Aqsa '), also known as the Qibli Mosque or Qibli Chapel (Arabic: المصلى القبلي, romanized: al-muṣallā al-qiblī,  'prayer hall of the qibla (south)'), is a congregational mosque or prayer hall in the Old City of Jerusalem. In some sources the building is also named al-Masjid al-Aqṣā,but this name and its English translation Al Aqsa Mosque itself, is disputed as it can instead apply to the whole compound in which the building sits.[6] The wider compound is also known as the Haram al-Sharif, the Al-Aqsa Mosque compound (or simply Al-Aqsa), and the Temple Mount."},
{
    id:4,
    title:"Masjid e qubat us sakhra",
    category:"Palestine",
    image:"./Assests/4..jpg",
    description:" The Dome of the Rock (Arabic: قبة الصخرة, romanized: Qubbat aṣ-Ṣakhra) is an Islamic shrine at the center of the Al-Aqsa Mosque compound on the Temple Mount in the Old City of Jerusalem, a site also known to Muslims as the Haram al-Sharif or Al-Aqsa. Its initial construction was undertaken by the Umayyad Caliphate on the orders of Abd al-Malik during the Second Fitna in 691–692 CE, and it has since been situated on top of the site of the Second Jewish Temple (built in c. 516 BCE to replace the destroyed Solomon's Temple and rebuilt by Herod the Great), which was destroyed by the Romans in 70 CE. The original dome collapsed in 1015 and was rebuilt in 1022–23. The Dome of the Rock is the world's oldest surviving work of Islamic architecture "
},
{
    id:5,
    title:"Mina",
    category:"saudi arabia",
    image:"./Assests/5..jpg",
    description:"Mina (Arabic: مِنَى, romanized: Minā), also known as Muna (Arabic: مُنَى, romanized: Munā), and commonly known as the (City of the Tents) is a valley located 8 kilometres (5 miles) southeast of the city of Mecca, in the district of Masha'er, Province of Makkah in the Hejazi region Saudi Arabia. Covering an area of approximately 20 km2 (7.7 sq mi), Mina incorporates the tents, the area of Jamarat, and the slaughterhouses just outside the tents.Mina is most famous for its role in the Hajj (Pilgrimage). To accommodate the pilgrims who stay in Mina over multiple nights in the month of Dhu al-Hijjah, more than 100,000 air-conditioned tents have been built in the area, giving Mina the nickname City of Tents. With a capacity of up to 3 million people, Mina has been called the largest tent city in the world."
},
{
    id:6,
    title:"Muzdalfa",
    category:"saudi arabia",
    image:"./Assests/6..jpeg",
    description:"Muzdalifah (Arabic: مُزْدَلِفَة) is an open and level area near Mecca in the Hejazi region of Saudi Arabia that is associated with the Ḥajj (Pilgrimage). It lies just southeast of Mina, on the route between Mina and Arafat.PilgrimageThe stay at Muzdalifah is preceded by a day at Mount Arafat, consisting of glorifying Allāh (God) repeating the duʿāʾ (Supplication), repentance to Allah, and asking him for forgiveness. At Arafat, Ẓuhr and ʿAṣr prayers are performed in a combined and abbreviated form during the time of Zuhr. After sunset on the ninth day of the Islamic month of Dhūl-Ḥijjah, Muslim pilgrims travel to Muzdalifah, sometimes arriving at night because of over-crowding. After arriving at Muzdalifah, pilgrims pray the Maghrib and ʿIshāʾ prayers jointly, whereas the Isha prayer is shortened to 2 rakats. At Muzdalifah, pilgrims collect pebbles for the Stoning of the Devil (Arabic: رَمِي ٱلْجَمَرَات, romanized: Ramī al-Jamarāt,. 'Stoning of the Place of Pebbles')."},
{
    id:7,
    title:"Masjid e Quba",
    category:"saudi arabia",
    image:"./Assests/7..jpg",
    description:"The Quba Mosque (Arabic: مَسْجِد قُبَاء, romanized: Masjid Qubāʾ) is a mosque located in Medina, in the Hejazi region of Saudi Arabia, built in the lifetime of the Islamic prophet Muhammad in the 7th century C.E. It is thought to be the first mosque in the world, built on the first day of Muhammad's emigration to Medina. Its first stone is said to have been laid by the prophet, and the structure completed by his companions."},
{
    id:8,
    title:"Masjid al qiblatain",
    category:"saudi arabia",
    image:"./Assests/8..jpg",
    description:"The Masjid al-Qiblatayn (Arabic: مسجد القبلتين,  'Mosque of the Two Qiblas'), also spelt Masjid al-Qiblatain,[1] is a mosque in Medina believed by Muslims to be the place where the final Islamic prophet, Muhammad, received the command to change the Qibla (direction of prayer) from Jerusalem to Mecca. The mosque was built by Sawad ibn Ghanam ibn Ka'ab during the year 2 AH (623 CE) and is one of the few mosques in the world to have contained two mihrabs (niches indicating the qibla) in different directions"
},
{
    id:9,
    title:"Masjid e tibria",
    category:"syria",
    image:"./Assests/9..jpg",
    description:"It is located in the northern neighborhood of Lake Tiberias, and it was built by Al-Zahir Al-Omar Al-Zaydani in the eighteenth century AD, and many names are given to it, such as Al-Fawqani Mosque and Al-Zaydani Mosque.Selection Criteriai. to exhibit an important interchange of human values, over a span of time or within a cultural area of the world, on developments in architecture or technology, monumental arts, town-planning or landscape designii. to bear a unique or at least exceptional testimony to a cultural tradition or to a civilization which is living or which has disappearedvi. to be directly or tangibly associated with events or living traditions, with ideas, or with beliefs, with artistic and literary works of outstanding universal significanceState of PreservationThe mosque is closed and is in urgent need of restoration. The municipality of Tiberias used the mosque as a warehouse for building material"
},
{
    id:10,
    title:"Mashhad imam reza",
    category:"iran",
    image:"./Assests/10..jpg",
    description:"he Imam Reza shrine (Persian: حرم امام رضا, romanized: Haram-e Emâm Rezâ, lit. 'Sanctuary of Imam Reza') in Mashhad, Iran, is a complex which contains the mausoleum of Imam Reza, aka Ali al-Rida or Ali al-Ridha, the eighth Imam of Twelver Shias. It is the largest mosque in the world by area. Also contained within the complex are the Goharshad Mosque, a museum, a library, four seminaries,["},
   { id:11,
    title:"Mazar e hazrat bilal",
    category:"syria",
    image:"./Assests/11..webp",
    description:"The Tomb of Bilal ibn Rabah in the historic cemetery of Bab al-Saghir, Damascus is one of the several purported sites claiming to be the burial of prophet Muhammad's companion (Sahabi) Bilal Rabah (also known as the Bilal Habashi). According to al-Suyuti, Bilal ibn Rabah's actual grave is in Bab al-Saghir in Damascus, Syria, it is also the view of most historians. However, there is another grave in the outskirts of Amman, Jordan, in a village called (Rabahiya). This grave is seen as a shrine and cenotaph built in Bilal's honor."},

   {id:12,
    title:"Rouza e moula Ali",
    category:"iraq",
    image:"./Assests/12..jpg",
    description:"The Sanctuary of Imām 'Alī (Arabic: حَرَم ٱلْإِمَام عَلِيّ, romanized: Ḥaram al-ʾImām ʿAlī), also known as the Mosque of 'Alī (Arabic: مَسْجِد عَلِيّ, romanized: Masjid ʿAlī), located in Najaf, Iraq, is a mosque which many Muslims believe contains the tomb of 'Alī ibn Abī Tālib, a cousin, son-in-law and companion of the Islamic prophet Muhammad. "
},
{
    id:13,
    title:"Safa marwah",
    category:"saudi arabia",
    image:"./Assests/13..jpg",
    description:" Safa and Marwa (Arabic: ٱلصَّفَا وَٱلْمَرْوَة, romanized: Aṣ-Ṣafā wal-Marwah) are two small hills, connected to the larger Abu Qubais and Qaiqan mountains, respectively, in Mecca, Saudi Arabia, now made part of the Masjid al-Haram. Muslims travel back and forth between them seven times in what is known as Sa'ee (Arabic: سَعِي, romanized: sa'iy, lit. 'seeking/searching or walking')ritual pilgrimages of Ḥajj and Umrah.Muslims run between the two mountains (called Sa'ee), which they believe was made a ritual as a tribute to Hajas search for water in the area when she ran out of provisions after Ibrahim left her in the valley upon Allah s command. The space between the two mountains in which the pilgrims run is called al-Mas'aa."
}
,
{
    id:14,
    title:"Mazar e hazrat usman",
    category:"saudi arabia",
    image:"./Assests/13..jpg",
    description:" The Tomb of Uthman ibn Affan (مقبرة عثمان بن عفان), also the Mausoleum of Uthman ibn Affan, was a domed Ottoman mausoleum inside the Jannat ul-Baqi cemetery, Medina. The dome over the grave of Uthman ibn Affan was the first to be built in the Baqi ul-Gharqad cemetery."
}
]

// console.log(menuItemsList[0].image);

const menuItems = document.querySelector(".itemsSection");
// console.log(menuItems);

let menuItemListContent = [];

menuItemsList.forEach((items) => {
    let itemsList = `<div class="menuBox">
                        <div class="menuImg">
                            <img src="${items.image}" alt="">
                        </div>
                        <div class="menuText">
                            <div class="upperText">
                                <h4>${items.title}</h4>
                                <h5>${items.category}</h5>
                            </div>
                            <div class="lowerText">
                                <p>${items.description}</p>
                            </div>
                        </div>
                    </div>`;
    // console.log(itemsList);

    menuItemListContent.push(itemsList);
    // console.log(menuItemListContent);
})

menuItems.innerHTML = menuItemListContent.join("");
console.log(menuItems);


// ---------------Menu Categery List---------------------------------------------------------------------------------------

const changeCategory = (find) => {
    // console.log(find);


    if (find == "All") {

        menuItems.innerHTML = menuItemListContent.join("");

    } else {

        const findCategory = menuItemsList.filter((menu) => menu.category.toLowerCase() === find.toLowerCase()).map((menu) => {
            return `<div class="menuBox">
                        <div class="menuImg">
                            <img src="${menu.image}" alt="">
                        </div>
                        <div class="menuText">
                            <div class="upperText">
                                <h4>${menu.title}</h4>
                                <h5>${menu.category}</h5>
                            </div>
                            <div class="lowerText">
                                <p>${menu.description}</p>
                            </div>
                        </div>
                    </div>`;
        })
        // console.log(findCategory)
        menuItems.innerHTML = findCategory.join("");

    }
}