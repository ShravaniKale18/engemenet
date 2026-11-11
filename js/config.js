/**
 * ====================================================================
 * MULTILINGUAL INVITATION CONFIGURATION (मराठी | हिंदी | ENGLISH)
 * ====================================================================
 * Default Language: 'mr' (मराठी - Marathi)
 * Can be switched dynamically via the floating language toggle button.
 */

var INVITATION_CONFIG = {
  // Auspicious Engagement Date & Time (Used for Live Countdown)
  eventDate: "2026-11-30T18:30:00",
  defaultLanguage: "mr",

  /* ==================================================================
   * DEMO / PLACEHOLDER IMAGES — Easy replacement section
   * ------------------------------------------------------------------
   * Replace these image paths with your actual couple photographs.
   * High-quality demo images are in: images/demo/
   * SVG fallbacks are in: assets/
   * ================================================================== */
  demoPhotos: {
    // 1. Large couple portrait — main invitation / hero
    heroCouple: "images/demo/couple-hero.jpg",
    heroCoupleFallback: "assets/couple-hero.svg",

    // 2a. Circular bride portrait — pastel pink lehenga & traditional jewellery
    bridePortrait: "images/demo/bride-portrait.jpg",
    bridePortraitFallback: "assets/bride-placeholder.svg",

    // 2b. Circular groom portrait — cream/ivory royal sherwani
    groomPortrait: "images/demo/groom-portrait.jpg",
    groomPortraitFallback: "assets/groom-placeholder.svg",

    // 3. Romantic couple photograph — middle of the page, floral setting
    romanticCouple: "images/demo/couple-romantic.jpg",
    romanticCoupleFallback: "assets/couple-romantic.svg",

    // 4. Engagement rings close-up — near event details
    engagementRings: "images/demo/engagement-rings.jpg",
    engagementRingsFallback: "assets/rings-placeholder.svg"
  },

  // Background Music
  music: {
    enabled: true,
    audioSrc: "https://cdn.pixabay.com/download/audio/2022/05/16/audio_c896e00b84.mp3?filename=flute-traditional-indian-111867.mp3",
    title: "Traditional Shehnai & Flute Melodies"
  },

  // Map & Location Link for Directions Button
  googleMapsUrl: "https://maps.google.com/?q=The+Grand+Rajwada+Palace+Udaipur",

  // Multilingual Dictionaries
  languages: {
    // -----------------------------------------------------------------
    // 1. MARATHI (मराठी) - DEFAULT
    // -----------------------------------------------------------------
    mr: {
      langCode: "mr",
      langName: "मराठी",
      pageTitle: "शुभ साखरपुडा निमंत्रण पत्रिका | संतोष आणि ऋतुजा",
      metaDesc: "श्रींच्या कृपेने व कुलदेवतेच्या आशीर्वादाने, संतोष आणि ऋतुजा यांच्या शुभ साखरपुडा सोहळ्याचे सस्नेह निमंत्रण.",

      welcome: {
        shloka: "|| श्री गणेशाय नमः || || श्री कुलस्वामिनी प्रसन्न ||",
        subtext: "सस्नेह निमंत्रण",
        heading: "शुभ साखरपुडा",
        previewText: "चि. संतोष आणि चि.सौ.कां. ऋतुजा<br>यांच्या शुभ साखरपुड्याचे सस्नेह निमंत्रण",
        coupleHighlight: "संतोष आणि ऋतुजा",
        openBtn: "निमंत्रण पत्रिका उघडा",
        audioHint: "मंगल संगीतासह निमंत्रण पाहण्यासाठी क्लिक करा"
      },

      cardHeader: {
        shloka: "|| श्री गणेशाय नमः || || श्री कुलस्वामिनी प्रसन्न ||",
        announcement: "सप्रेम नमस्कार, आमच्या कुटुंबियांच्या वतीने आपणास कळविण्यास अत्यंत आनंद होत आहे की, आमच्या मुलाचा व मुलीचा शुभ साखरपुडा सोहळा करण्याचे योजिले आहे."
      },

      couple: {
        monogram: "सं & ऋ",
        groom: {
          salutation: "चि.",
          name: "संतोष",
          displayName: "चि. संतोष",
          initial: "सं",
          father: "श्री.  बंडगर",
          mother: "सौ.  बंडगर",
          parentageHTML: "सुपुत्र: <span>सौ.  व श्री.  बंडगर</span>"
        },
        bride: {
          salutation: "चि.सौ.कां.",
          name: "ऋतुजा",
          displayName: "चि.सौ.कां. ऋतुजा",
          initial: "ऋ",
          father: "श्री. हरिश्चंद्र गडदे",
          mother: "सौ. छायाबाई गडदे",
          parentageHTML: "सुकन्या: <span>सौ. छायाबाई व श्री. हरिश्चंद्र गडदे</span>"
        },
        subtitle: "दोन जीवांचे मीलन, एका नव्या प्रवासाची सुरुवात",
        quote: "आई-वडिलांचे आशीर्वाद आणि थोरामोठ्यांच्या सानिध्यात, आम्ही घेत आहोत जन्मोजन्मीच्या रेशीमगाठीचा पवित्र संकल्प...",
        hashtag: "#संतोष_ऋतुजा",
        heroAlt: "भारतीय वधू-वर साखरपुडा छायाचित्र",
        brideAlt: "चि.सौ.कां. ऋतुजा — वधू",
        groomAlt: "चि. संतोष — वर",
        romanticAlt: "संतोष आणि ऋतुजा — रोमँटिक छायाचित्र",
        ringsAlt: "शुभ साखरपुडा सुवर्ण अंगठ्या",
        romanticTitle: "दोन मने, एक स्पंदन",
        ringsTitle: "शुभ वाङ्निश्चय अंगठ्या"
      },

      countdown: {
        preTitle: "शुभ दिनाची आतुरता",
        title: "मंगल सोहळा सुरू होण्यासाठी उरलेला वेळ",
        daysLabel: "दिवस",
        hoursLabel: "तास",
        minutesLabel: "मिनिटे",
        secondsLabel: "सेकंद",
        statusText: "आपली उपस्थिती आमच्यासाठी अत्यंत प्रार्थनीय आहे!",
        statusFinished: "आजचा दिवस मंगलमय! सोहळ्यास प्रारंभ झाला आहे!"
      },

      details: {
        preTitle: "सोहळ्याची माहिती",
        title: "शुभ मुहूर्त व स्थळ",
        subtitle: "आमच्या या मंगल सोहळ्यास आपण सहकुटुंब उपस्थित राहून वधू-वरास शुभाशीर्वाद द्यावेत",
        dateCard: {
          heading: "शुभ दिन व तारीख",
          display: "सोमवार, ३० नोव्हेंबर २०२६",
          subInfo: "या मंगलदिनी आपली उपस्थिती प्रार्थनीय आहे",
          btnText: "कॅलेंडरमध्ये जोडा"
        },
        timeCard: {
          heading: "शुभ वेळ",
          display: "सायंकाळी ०६:३० वाजता",
          muhurat: "शुभ वाङ्निश्चय मुहूर्त: सायंकाळी ०७:४५ वाजता",
          badge: "संध्याकाळचा सोहळा"
        },
        venueCard: {
          heading: "सोहळ्याचे स्थळ",
          name: "द ग्रँड राजवाडा पॅलेस व लॉन्स",
          hall: "रॉयल शीश महल बँक्वेट हॉल",
          badge: "शाही राजवाडा"
        },
        addressCard: {
          heading: "संपूर्ण पत्ता",
          line: "रॉयल हेरिटेज एन्क्लेव्ह, लेक व्ह्यू प्रोमेनेड जवळ",
          city: "उदयपूर, राजस्थान - ३१३००१",
          copyBtn: "पत्ता कॉपी करा",
        }
      },


      footer: {
        closingText: "आपली उपस्थिती आमच्या आनंदात द्विगुणित भर घालेल. या मंगल सोहळ्यास आपण सहकुटुंब, सहपरिवार उपस्थित राहून वधू-वरास शुभाशीर्वाद द्यावेत हीच नम्र विनंती.",
        signatureWithLove: "स्नेही: आपले नम्र ❤️",
        families: "बंडगर व गडदे परिवार",
        rsvpHeading: "उपस्थितीची पूर्वकल्पना द्यावी ही नम्र विनंती",
        rsvpSubtext: "आपण उपस्थित राहणार असल्यास कृपया येथे नोंदवावी",
        whatsappBtn: "व्हॉट्सॲपवर उपस्थिती नोंदवा",
        saveCalBtn: "कॅलेंडर सेव्ह करा",
        footnoteShloka: "॥ सर्वमंगल मांगल्ये शिवे सर्वार्थ साधिके । शरण्ये त्र्यंबके गौरि नारायणि नमोऽस्तु ते ॥",
        copyright: "चि. संतोष व चि.सौ.कां. ऋतुजा यांच्यासाठी मंगलमय सदिच्छा",
        rsvpContacts: [
          { name: "बंडगर परिवार", phone: "+91 98765 43210" },
          { name: "गडदे परिवार", phone: "+91 98765 01234" }
        ],
        whatsappNumber: "919876543210",
        whatsappMessage: "सप्रेम नमस्कार! आम्ही संतोष आणि ऋतुजा यांच्या शुभ साखरपुडा सोहळ्यास नक्की उपस्थित राहू."
      },

      toasts: {
        copiedAddress: "सोहळ्याचा पत्ता कॉपी केला गेला आहे!",
        failedCopy: "पत्ता कॉपी करणे शक्य झाले नाही",
        openingCal: "गुगल कॅलेंडर उघडत आहे...",
        copiedLink: "निमंत्रण लिंक कॉपी केली गेली आहे!",
        missingInput: "कृपया आपले नाव व आशीर्वाद प्रविष्ट करा!",
        blessingThanks: "आपल्या मंगल आशीर्वादाबद्दल मनःपूर्वक धन्यवाद! 🌸"
      }
    },

    // -----------------------------------------------------------------
    // 2. HINDI (हिंदी)
    // -----------------------------------------------------------------
    hi: {
      langCode: "hi",
      langName: "हिंदी",
      pageTitle: "शुभ सगाई निमंत्रण पत्र | संतोष एवं ऋतुजा",
      metaDesc: "भगवान श्री गणेश जी एवं कुलदेवी के आशीर्वाद से, संतोष एवं ऋतुजा के शुभ सगाई समारोह का सस्नेह निमंत्रण।",

      welcome: {
        shloka: "|| श्री गणेशाय नमः || || श्री कुलदेवी प्रसन्न ||",
        subtext: "सस्नेह निमंत्रण",
        heading: "शुभ सगाई समारोह",
        previewText: "चि. संतोष एवं आयु. ऋतुजा<br>के शुभ सगाई समारोह का सस्नेह निमंत्रण",
        coupleHighlight: "संतोष एवं ऋतुजा",
        openBtn: "निमंत्रण पत्र खोलें",
        audioHint: "मंगलमय संगीत के साथ निमंत्रण देखने के लिए क्लिक करें"
      },

      cardHeader: {
        shloka: "|| श्री गणेशाय नमः || || श्री कुलदेवी प्रसन्न ||",
        announcement: "सप्रेम नमस्कार, हमारे परिवारों की ओर से आपको सूचित करते हुए अत्यंत हर्ष हो रहा है कि हमारे प्रिय सुपुत्र एवं सुपुत्री का शुभ सगाई समारोह आयोजित किया गया है।"
      },

      couple: {
        monogram: "सं & ऋ",
        groom: {
          salutation: "चि.",
          name: "संतोष",
          displayName: "चि. संतोष",
          initial: "सं",
          father: "श्री  बंडगर",
          mother: "श्रीमती  बंडगर",
          parentageHTML: "सुपुत्र: <span>श्रीमती  एवं श्री  बंडगर</span>"
        },
        bride: {
          salutation: "आयु.",
          name: "ऋतुजा",
          displayName: "आयु. ऋतुजा",
          initial: "ऋ",
          father: "श्री हरिश्चंद्र गडदे",
          mother: "श्रीमती छायाबाई गडदे",
          parentageHTML: "सुपुत्री: <span>श्रीमती छायाबाई एवं श्री हरिश्चंद्र गडदे</span>"
        },
        subtitle: "दो आत्माओं का मिलन, एक सुंदर नए सफर की शुरुआत",
        quote: "माता-पिता के आशीर्वाद और अपनों के स्नेह के साथ, हम ले रहे हैं जन्म-जन्मांतर के पावन बंधन का संकल्प...",
        hashtag: "#संतोष_संग_ऋतुजा",
        heroAlt: "भारतीय वधू-वर सगाई चित्र",
        brideAlt: "आयु. ऋतुजा — वधू",
        groomAlt: "चि. संतोष — वर",
        romanticAlt: "संतोष एवं ऋतुजा — युगल चित्र",
        ringsAlt: "शुभ सगाई की स्वर्ण मुद्रिका",
        romanticTitle: "प्रेम और परंपरा का पावन बंधन",
        ringsTitle: "शुभ सगाई की अंगूठियाँ"
      },

      countdown: {
        preTitle: "शुभ घड़ी की प्रतीक्षा",
        title: "मांगलिक उत्सव प्रारंभ होने में शेष समय",
        daysLabel: "दिन",
        hoursLabel: "घंटे",
        minutesLabel: "मिनट",
        secondsLabel: "सेकंड",
        statusText: "आपकी गरिमामयी उपस्थिति हमारे लिए प्रार्थनीय है!",
        statusFinished: "आज का दिन मंगलमय है! शुभ समारोह प्रारंभ हो चुका है!"
      },

      details: {
        preTitle: "उत्सव का विवरण",
        title: "शुभ मुहूर्त एवं स्थल",
        subtitle: "हमारे इस मांगलिक अवसर पर आप सपरिवार पधारकर नवयुगल को अपना आशीर्वाद प्रदान करें",
        dateCard: {
          heading: "शुभ दिवस एवं दिनांक",
          display: "सोमवार, ३० नवंबर २०२६",
          subInfo: "इस पावन अवसर पर आपकी उपस्थिति सादर प्रार्थनीय है",
          btnText: "कैलेंडर में जोड़ें"
        },
        timeCard: {
          heading: "शुभ समय",
          display: "सायं ०६:३० बजे से",
          muhurat: "शुभ सगाई / अंगूठी मुहूर्त: सायं ०७:४५ बजे",
          badge: "संध्या उत्सव"
        },
        venueCard: {
          heading: "समारोह स्थल",
          name: "द ग्रैंड राजवाड़ा पैलेस एवं लॉन्स",
          hall: "रॉयल शीश महल बैंक्वेट हॉल",
          badge: "शाही महल"
        },
        addressCard: {
          heading: "पूरा पता",
          line: "रॉयल हेरिटेज एन्क्लेव, लेक व्यू प्रोमेनेड के पास",
          city: "उदयपुर, राजस्थान - ३१३००१",
          copyBtn: "पता कॉपी करें",
          directionsBtn: "दिशा-निर्देश"
        }
      },

      footer: {
        closingText: "आपकी गरिमामयी उपस्थिति हमारे इस मांगलिक उत्सव की शोभा बढ़ाएगी। आप सपरिवार पधारकर नवयुगल को अपना स्नेहिल आशीर्वाद प्रदान करें, यही हमारी विनम्र प्रार्थना है।",
        signatureWithLove: "सस्नेह: आपके अपने ❤️",
        families: "बंडगर एवं गडदे परिवार",
        rsvpHeading: "उपस्थिति की पूर्व सूचना सादर प्रार्थनीय",
        rsvpSubtext: "यदि आप पधार रहे हैं तो कृपया यहाँ सूचित करें",
        whatsappBtn: "व्हाट्सएप पर पुष्टि करें",
        saveCalBtn: "कैलेंडर सेव करें",
        footnoteShloka: "॥ सर्वमंगल मांगल्ये शिवे सर्वार्थ साधिके । शरण्ये त्र्यंबके गौरि नारायणि नमोऽस्तु ते ॥",
        copyright: "चि. संतोष एवं आयु. ऋतुजा के लिए मंगलमय शुभकामनाएँ",
        rsvpContacts: [
          { name: "बंडगर परिवार", phone: "+91 98765 43210" },
          { name: "गडदे परिवार", phone: "+91 98765 01234" }
        ],
        whatsappNumber: "919876543210",
        whatsappMessage: "सप्रेम नमस्कार! हम संतोष और ऋतुजा के सगाई समारोह में सहर्ष उपस्थित रहेंगे।"
      },

      toasts: {
        copiedAddress: "समारोह स्थल का पता कॉपी कर लिया गया है!",
        failedCopy: "पता कॉपी नहीं किया जा सका",
        openingCal: "गूगल कैलेंडर खुल रहा है...",
        copiedLink: "निमंत्रण लिंक कॉपी हो गया है!",
        missingInput: "कृपया अपना नाम और आशीर्वाद दर्ज करें!",
        blessingThanks: "आपके पावन आशीर्वाद के लिए बहुत-बहुत धन्यवाद! 🌸"
      }
    },

    // -----------------------------------------------------------------
    // 3. ENGLISH
    // -----------------------------------------------------------------
    en: {
      langCode: "en",
      langName: "English",
      pageTitle: "Engagement Invitation Card | Santosh & Rutuja",
      metaDesc: "With the divine blessings of our families, cordially invite you to celebrate the Engagement Ceremony of Santosh and Rutuja.",

      welcome: {
        shloka: "|| Shree Ganeshay Namah || || Shree Kulswamini Prasanna ||",
        subtext: "Cordially Invited",
        heading: "Engagement Ceremony",
        previewText: "To celebrate the auspicious Engagement Ceremony of<br><strong class='names-highlight'>Santosh &amp; Rutuja</strong>",
        coupleHighlight: "Santosh & Rutuja",
        openBtn: "Open Invitation",
        audioHint: "Click to enter with celebratory royal music"
      },

      cardHeader: {
        shloka: "|| Shree Ganeshay Namah ||",
        announcement: "Together with their families, cordially invite you to celebrate the auspicious Engagement Ceremony of their beloved children"
      },

      couple: {
        monogram: "S & R",
        groom: {
          salutation: "",
          name: "Santosh",
          displayName: "Santosh",
          initial: "S",
          father: "Mr.  Bandgar",
          mother: "Mrs.  Bandgar",
          parentageHTML: "Son of <span>Mrs.  &amp; Mr.  Bandgar</span>"
        },
        bride: {
          salutation: "",
          name: "Rutuja",
          displayName: "Rutuja",
          initial: "R",
          father: "Mr. Harishchandra Gadade",
          mother: "Mrs. Chayabai Gadade",
          parentageHTML: "Daughter of <span>Mrs. Chayabai &amp; Mr. Harishchandra Gadade</span>"
        },
        subtitle: "Two Souls, One Beautiful Journey",
        quote: "With the blessings of our ancestors and families, we take the first step towards an eternal bond of love and togetherness.",
        hashtag: "#SantoshWedsRutuja",
        heroAlt: "Indian Engagement Couple Portrait",
        brideAlt: "Rutuja — Bride Portrait",
        groomAlt: "Santosh — Groom Portrait",
        romanticAlt: "Santosh & Rutuja — Romantic Portrait",
        ringsAlt: "Auspicious Engagement Rings",
        romanticTitle: "Two Hearts, One Rhythm",
        ringsTitle: "The Sacred Rings"
      },

      countdown: {
        preTitle: "Counting Down Every Moment",
        title: "The Auspicious Celebration Begins In",
        daysLabel: "Days",
        hoursLabel: "Hours",
        minutesLabel: "Minutes",
        secondsLabel: "Seconds",
        statusText: "Your presence is warmly anticipated!",
        statusFinished: "Today is the auspicious day! Celebrations have begun!"
      },

      details: {
        preTitle: "Celebration Itinerary",
        title: "Ceremony & Venue Details",
        subtitle: "Please join us for an evening of sacred rituals, royal music, feasts, and unending laughter",
        dateCard: {
          heading: "The Date",
          display: "Monday, November 30, 2026",
          subInfo: "Mark your calendar for this auspicious union",
          btnText: "Add to Calendar"
        },
        timeCard: {
          heading: "The Time",
          display: "06:30 PM Onwards",
          muhurat: "Auspicious Ring Ceremony: 07:45 PM",
          badge: "Evening Soirée"
        },
        venueCard: {
          heading: "The Venue",
          name: "The Grand Rajwada Palace & Lawns",
          hall: "Royal Sheesh Mahal Banquet Hall",
          badge: "Royal Palace"
        }
      },

      footer: {
        closingText: "Your presence will make our celebration even more special. We look forward to celebrating this beautiful beginning with you!",
        signatureWithLove: "With Love ❤️",
        families: "The Bandgar & Gadade Families",
        rsvpHeading: "Kindly Favor Us with Your Response",
        rsvpSubtext: "Please let us know if you can grace the occasion with your presence",
        whatsappBtn: "RSVP on WhatsApp",
        saveCalBtn: "Save to Calendar",
        footnoteShloka: "॥ Sarvamangala Mangalye Shive Sarvartha Sadhike ॥",
        copyright: "Crafted with love & blessings for Santosh & Rutuja",
        rsvpContacts: [
          { name: "Bandgar Family", phone: "+91 98765 43210" },
          { name: "Gadade Family", phone: "+91 98765 01234" }
        ],
        whatsappNumber: "919876543210",
        whatsappMessage: "Namaste! We would love to attend the Engagement Ceremony of Santosh and Rutuja."
      },

      toasts: {
        copiedAddress: "Venue address copied to clipboard!",
        failedCopy: "Unable to copy address",
        openingCal: "Opening Google Calendar...",
        copiedLink: "Invitation link copied to clipboard!",
        missingInput: "Please enter your name and blessing!",
        blessingThanks: "Thank you for your warm blessings! 🌸"
      }
    }
  }
};

// Guarantee global availability in all execution environments
if (typeof window !== "undefined") {
  window.INVITATION_CONFIG = INVITATION_CONFIG;
}
