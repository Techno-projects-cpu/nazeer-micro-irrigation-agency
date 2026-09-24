/* ---------------------------------------------------------------------------
   Regional sub-sites — /telugu, /hindi, /urdu, /tamil, /kannada.

   These are not translations of the English page. Each is a shorter page
   written for a farmer reading in their own language: one strong promise,
   the numbers that matter, what we stock, and how to reach us. Every fact
   below mirrors the English content (content.ts) — years, farmers, ISI,
   water saving, subsidy help, hours — so nothing is claimed here that the
   main site does not already say.
--------------------------------------------------------------------------- */

export type LocaleSlug = "telugu" | "hindi" | "urdu" | "tamil" | "kannada";

export interface LocalePage {
  slug: LocaleSlug;
  /** BCP-47 code for <html lang>. */
  code: string;
  dir: "ltr" | "rtl";
  /** The language's own name, in its own script. */
  name: string;
  /** "Click me to translate", in this language — printed on its button. */
  translateCta: string;
  meta: { title: string; description: string };
  brand: { name: string; sub: string };
  hero: {
    kicker: string;
    title: string;
    lead: string;
    primary: string;
    call: string;
  };
  /** A line about water, set large — a well-known saying where one exists. */
  saying: { text: string; source: string };
  stats: { value: string; label: string }[];
  promises: { kicker: string; title: string; items: { title: string; body: string }[] };
  range: { kicker: string; title: string; items: string[]; note: string };
  spares: string;
  visit: {
    kicker: string;
    title: string;
    body: string;
    hours: string;
    call: string;
    whatsapp: string;
    directions: string;
  };
  /** Pre-filled WhatsApp message for the "book a free visit" buttons. */
  whatsappMessage: string;
  languagesTitle: string;
  englishLink: string;
  actionBar: { call: string; whatsapp: string; directions: string };
}

/** Shared numbers — identical on every page, formatted with Latin digits. */
const NUMBERS = { years: "20+", farmers: "10,000+", water: "60%", yield: "20–30%" } as const;

export const LOCALES: Record<LocaleSlug, LocalePage> = {
  telugu: {
    slug: "telugu",
    code: "te",
    dir: "ltr",
    name: "తెలుగు",
    translateCta: "అనువాదం కోసం నన్ను నొక్కండి",
    meta: {
      title: "నజీర్ మైక్రో ఇరిగేషన్ ఏజెన్సీ — డ్రిప్, స్ప్రింక్లర్, పాలీహౌస్",
      description:
        "2004 నుండి గోదావరి ప్రాంతంలో నిజమైన ISI డ్రిప్, స్ప్రింక్లర్ పరికరాలు. మీ పొలానికి ఉచిత డిజైన్, సబ్సిడీకి పూర్తి సహాయం.",
    },
    brand: { name: "నజీర్", sub: "మైక్రో ఇరిగేషన్ ఏజెన్సీ" },
    hero: {
      kicker: "గోదావరి రైతుల నమ్మకం · 2004 నుండి",
      title: "ప్రతి చుక్కా పంటకే.",
      lead: "మీ పొలం, మీ పంట, మీ నీటి వనరు చూసి — ప్రతి డ్రిప్ లేఅవుట్‌ను నజీర్ స్వయంగా గీస్తారు.",
      primary: "ఉచిత పొలం సందర్శన బుక్ చేయండి",
      call: "ఇప్పుడే కాల్ చేయండి",
    },
    saying: {
      text: "వరదలా పారిన నీరు పొలం తాగుతుంది. లెక్కగా పారిన నీరు పంట తాగుతుంది.",
      source: "మా దుకాణం మాట",
    },
    stats: [
      { value: NUMBERS.years, label: "ఏళ్ల అనుభవం" },
      { value: NUMBERS.farmers, label: "సంతోషంగా ఉన్న రైతులు" },
      { value: NUMBERS.water, label: "వరకు నీటి ఆదా" },
      { value: NUMBERS.yield, label: "ఎక్కువ దిగుబడి అవకాశం" },
    ],
    promises: {
      kicker: "మా మాట",
      title: "మీ పొలానికి నాలుగు హామీలు",
      items: [
        {
          title: "నిజమైన ISI సరుకు మాత్రమే",
          body: "నకిలీ లేదు. ISI గుర్తు లేని వస్తువు మా దుకాణంలో ఉండదు.",
        },
        {
          title: "ఉచిత సందర్శన, ఉచిత డిజైన్",
          body: "మీ పొలానికే వస్తాం. కొలతలు తీసుకుని, లేఅవుట్ గీసి ఇస్తాం — రూపాయి ఖర్చు లేదు.",
        },
        {
          title: "సబ్సిడీకి పూర్తి సహాయం",
          body: "PMKSY, రాష్ట్ర మైక్రో ఇరిగేషన్ సబ్సిడీ — అర్హత నుండి కాగితాల వరకు మేమే దగ్గరుండి చూస్తాం.",
        },
        {
          title: "బిగించి, పరీక్షించి అప్పగిస్తాం",
          body: "మా బృందమే బిగించి, నీళ్లు వదిలి పరీక్షించాకే మీ చేతికిస్తాం. తర్వాత స్పేర్లు కూడా ఇదే కౌంటర్‌లో.",
        },
      ],
    },
    range: {
      kicker: "మా సరుకు",
      title: "ఒకే కప్పు కింద అన్నీ",
      items: [
        "డ్రిప్ సిస్టమ్స్",
        "స్ప్రింక్లర్లు & రెయిన్ గన్లు",
        "డ్రిప్ టేపులు & లేటరల్స్",
        "ఫిల్టర్లు & ఫెర్టిగేషన్",
        "HDPE / PVC పైపులు & ఫిట్టింగులు",
        "మల్చింగ్ ఫిల్మ్",
        "పాలీహౌస్‌లు",
        "పనిముట్లు",
      ],
      note: "100కు పైగా రకాలు — ఇప్పుడే షెల్ఫ్‌లపై ఉన్నాయి.",
    },
    spares:
      "బైక్ స్పేర్ పార్ట్స్ కూడా ఇక్కడే — చైన్లు, స్ప్రాకెట్లు, బ్రేక్ షూలు, క్లచ్ ప్లేట్లు, సరైన ధరకు.",
    visit: {
      kicker: "సంప్రదించండి",
      title: "మీ పొలం గురించి చెప్పండి. నీటి సంగతి మాకు వదిలేయండి.",
      body: "మీ పొలం ఫోటోతో వాట్సాప్ చేయండి, లేదా నేరుగా కాల్ చేయండి — అదే రోజు జవాబు, అదే రోజు ధర.",
      hours: "సోమ – శని · ఉదయం 9 – సాయంత్రం 7",
      call: "కాల్ చేయండి",
      whatsapp: "వాట్సాప్ చేయండి",
      directions: "దుకాణానికి దారి",
    },
    whatsappMessage: "నమస్తే నజీర్ మైక్రో ఇరిగేషన్! నా పొలానికి ఉచిత సందర్శన కావాలి.",
    languagesTitle: "మీ భాషలో చదవండి",
    englishLink: "పూర్తి వెబ్‌సైట్ ఇంగ్లీషులో",
    actionBar: { call: "కాల్", whatsapp: "వాట్సాప్", directions: "దారి" },
  },

  hindi: {
    slug: "hindi",
    code: "hi",
    dir: "ltr",
    name: "हिन्दी",
    translateCta: "अनुवाद के लिए मुझे क्लिक करें",
    meta: {
      title: "नज़ीर माइक्रो इरिगेशन एजेंसी — ड्रिप, स्प्रिंकलर और पॉलीहाउस",
      description:
        "2004 से गोदावरी क्षेत्र में असली ISI ड्रिप और स्प्रिंकलर सिस्टम। आपके खेत के लिए मुफ़्त डिज़ाइन और सब्सिडी में पूरी मदद।",
    },
    brand: { name: "नज़ीर", sub: "माइक्रो इरिगेशन एजेंसी" },
    hero: {
      kicker: "गोदावरी के किसानों का भरोसा · 2004 से",
      title: "हर बूँद, सिर्फ़ फ़सल के लिए।",
      lead: "आपका खेत, आपकी फ़सल, आपका पानी देखकर — हर ड्रिप लेआउट नज़ीर ख़ुद बनाते हैं।",
      primary: "मुफ़्त खेत-दौरा बुक करें",
      call: "अभी कॉल करें",
    },
    saying: { text: "जल है तो कल है।", source: "हर किसान जानता है" },
    stats: [
      { value: NUMBERS.years, label: "साल का अनुभव" },
      { value: NUMBERS.farmers, label: "संतुष्ट किसान" },
      { value: NUMBERS.water, label: "तक पानी की बचत" },
      { value: NUMBERS.yield, label: "ज़्यादा पैदावार की संभावना" },
    ],
    promises: {
      kicker: "हमारा वादा",
      title: "आपके खेत से चार वादे",
      items: [
        {
          title: "सिर्फ़ असली, ISI माल",
          body: "नकली नहीं। जिस पर ISI का निशान नहीं, वह हमारी दुकान में नहीं।",
        },
        {
          title: "मुफ़्त दौरा, मुफ़्त डिज़ाइन",
          body: "हम आपके खेत तक आते हैं, नाप लेते हैं और लेआउट बनाकर देते हैं — एक पैसा नहीं।",
        },
        {
          title: "सब्सिडी में पूरी मदद",
          body: "PMKSY और राज्य की माइक्रो-इरिगेशन सब्सिडी — पात्रता से काग़ज़ात तक, हम साथ रहते हैं।",
        },
        {
          title: "लगाकर, चलाकर सौंपते हैं",
          body: "हमारी टीम सिस्टम लगाती है, पानी चलाकर जाँचती है, फिर आपको सौंपती है। बाद में पुर्ज़े भी इसी काउंटर पर।",
        },
      ],
    },
    range: {
      kicker: "हमारा सामान",
      title: "एक छत के नीचे सब कुछ",
      items: [
        "ड्रिप सिस्टम",
        "स्प्रिंकलर और रेन गन",
        "ड्रिप टेप और लेटरल",
        "फ़िल्टर और फ़र्टिगेशन",
        "HDPE / PVC पाइप और फ़िटिंग",
        "मल्चिंग फ़िल्म",
        "पॉलीहाउस",
        "औज़ार",
      ],
      note: "100 से ज़्यादा किस्में — अभी शेल्फ़ पर।",
    },
    spares: "बाइक के स्पेयर पार्ट्स भी यहीं — चेन, स्प्रोकेट, ब्रेक शू, क्लच प्लेट, सही दाम पर।",
    visit: {
      kicker: "संपर्क",
      title: "अपने खेत के बारे में बताइए। पानी की फ़िक्र हम पर छोड़िए।",
      body: "खेत की फ़ोटो के साथ व्हाट्सऐप कीजिए या सीधे कॉल कीजिए — उसी दिन जवाब, उसी दिन दाम।",
      hours: "सोम – शनि · सुबह 9 – शाम 7",
      call: "कॉल करें",
      whatsapp: "व्हाट्सऐप करें",
      directions: "दुकान का रास्ता",
    },
    whatsappMessage: "नमस्ते नज़ीर माइक्रो इरिगेशन! मुझे अपने खेत के लिए मुफ़्त दौरा चाहिए।",
    languagesTitle: "अपनी भाषा में पढ़ें",
    englishLink: "पूरी वेबसाइट अंग्रेज़ी में",
    actionBar: { call: "कॉल", whatsapp: "व्हाट्सऐप", directions: "रास्ता" },
  },

  urdu: {
    slug: "urdu",
    code: "ur",
    dir: "rtl",
    name: "اردو",
    translateCta: "ترجمے کے لیے مجھے کلک کریں",
    meta: {
      title: "نذیر مائیکرو اریگیشن ایجنسی — ڈرپ، اسپرنکلر اور پولی ہاؤس",
      description:
        "2004 سے گوداوری علاقے میں اصلی ISI ڈرپ اور اسپرنکلر سسٹم۔ آپ کے کھیت کے لیے مفت ڈیزائن اور سبسڈی میں مکمل مدد۔",
    },
    brand: { name: "نذیر", sub: "مائیکرو اریگیشن ایجنسی" },
    hero: {
      kicker: "گوداوری کے کسانوں کا بھروسا · 2004 سے",
      title: "ہر قطرہ، صرف فصل کے لیے۔",
      lead: "آپ کا کھیت، آپ کی فصل، آپ کا پانی دیکھ کر — ہر ڈرپ نقشہ نذیر خود بناتے ہیں۔",
      primary: "مفت کھیت کا دورہ بک کریں",
      call: "ابھی کال کریں",
    },
    saying: {
      text: "پانی ہے تو زندگی ہے، زندگی ہے تو کھیتی ہے۔",
      source: "ہر کسان جانتا ہے",
    },
    stats: [
      { value: NUMBERS.years, label: "سال کا تجربہ" },
      { value: NUMBERS.farmers, label: "مطمئن کسان" },
      { value: NUMBERS.water, label: "تک پانی کی بچت" },
      { value: NUMBERS.yield, label: "زیادہ پیداوار کا امکان" },
    ],
    promises: {
      kicker: "ہمارا وعدہ",
      title: "آپ کے کھیت سے چار وعدے",
      items: [
        {
          title: "صرف اصلی، ISI مال",
          body: "نقلی نہیں۔ جس پر ISI کا نشان نہیں، وہ ہماری دکان میں نہیں۔",
        },
        {
          title: "مفت دورہ، مفت ڈیزائن",
          body: "ہم آپ کے کھیت تک آتے ہیں، ناپ لیتے ہیں اور نقشہ بنا کر دیتے ہیں — ایک پیسہ نہیں۔",
        },
        {
          title: "سبسڈی میں مکمل مدد",
          body: "PMKSY اور ریاستی مائیکرو اریگیشن سبسڈی — اہلیت سے کاغذات تک، ہم ساتھ رہتے ہیں۔",
        },
        {
          title: "لگا کر، چلا کر سونپتے ہیں",
          body: "ہماری ٹیم سسٹم لگاتی ہے، پانی چلا کر جانچتی ہے، پھر آپ کے حوالے کرتی ہے۔ بعد میں پرزے بھی اسی کاؤنٹر پر۔",
        },
      ],
    },
    range: {
      kicker: "ہمارا سامان",
      title: "ایک چھت کے نیچے سب کچھ",
      items: [
        "ڈرپ سسٹم",
        "اسپرنکلر اور رین گن",
        "ڈرپ ٹیپ اور لیٹرل",
        "فلٹر اور فرٹیگیشن",
        "HDPE / PVC پائپ اور فٹنگ",
        "ملچنگ فلم",
        "پولی ہاؤس",
        "اوزار",
      ],
      note: "100 سے زیادہ قسمیں — ابھی شیلف پر۔",
    },
    spares: "بائیک کے اسپیئر پارٹس بھی یہیں — چین، اسپراکٹ، بریک شو، کلچ پلیٹ، مناسب داموں پر۔",
    visit: {
      kicker: "رابطہ",
      title: "اپنے کھیت کے بارے میں بتائیے۔ پانی کی فکر ہم پر چھوڑیے۔",
      body: "کھیت کی تصویر کے ساتھ واٹس ایپ کیجیے یا سیدھے کال کیجیے — اسی دن جواب، اسی دن دام۔",
      hours: "پیر – ہفتہ · صبح 9 – شام 7",
      call: "کال کریں",
      whatsapp: "واٹس ایپ کریں",
      directions: "دکان کا راستہ",
    },
    whatsappMessage: "السلام علیکم نذیر مائیکرو اریگیشن! مجھے اپنے کھیت کے لیے مفت دورہ چاہیے۔",
    languagesTitle: "اپنی زبان میں پڑھیں",
    englishLink: "پوری ویب سائٹ انگریزی میں",
    actionBar: { call: "کال", whatsapp: "واٹس ایپ", directions: "راستہ" },
  },

  tamil: {
    slug: "tamil",
    code: "ta",
    dir: "ltr",
    name: "தமிழ்",
    translateCta: "மொழிபெயர்க்க என்னைக் கிளிக் செய்யவும்",
    meta: {
      title: "நசீர் மைக்ரோ இரிகேஷன் ஏஜென்சி — சொட்டு நீர், தெளிப்பு நீர், பாலிஹவுஸ்",
      description:
        "2004 முதல் கோதாவரி பகுதியில் உண்மையான ISI சொட்டு நீர் மற்றும் தெளிப்பு நீர் பாசன அமைப்புகள். உங்கள் வயலுக்கு இலவச வடிவமைப்பு, மானியத்துக்கு முழு உதவி.",
    },
    brand: { name: "நசீர்", sub: "மைக்ரோ இரிகேஷன் ஏஜென்சி" },
    hero: {
      kicker: "கோதாவரி விவசாயிகளின் நம்பிக்கை · 2004 முதல்",
      title: "ஒவ்வொரு சொட்டும் பயிருக்கே.",
      lead: "உங்கள் வயல், உங்கள் பயிர், உங்கள் நீர் ஆதாரம் பார்த்து — ஒவ்வொரு சொட்டு நீர் வரைபடத்தையும் நசீர் அவர்களே வரைகிறார்.",
      primary: "இலவச வயல் வருகையைப் பதிவு செய்யுங்கள்",
      call: "இப்போதே அழைக்கவும்",
    },
    saying: { text: "நீரின்றி அமையாது உலகு.", source: "திருக்குறள் 20" },
    stats: [
      { value: NUMBERS.years, label: "ஆண்டு அனுபவம்" },
      { value: NUMBERS.farmers, label: "மகிழ்ச்சியான விவசாயிகள்" },
      { value: NUMBERS.water, label: "வரை நீர் சேமிப்பு" },
      { value: NUMBERS.yield, label: "கூடுதல் மகசூல் வாய்ப்பு" },
    ],
    promises: {
      kicker: "எங்கள் வாக்குறுதி",
      title: "உங்கள் வயலுக்கு நான்கு உறுதிகள்",
      items: [
        {
          title: "உண்மையான ISI பொருட்கள் மட்டுமே",
          body: "போலி இல்லை. ISI முத்திரை இல்லாத பொருள் எங்கள் கடையில் இல்லை.",
        },
        {
          title: "இலவச வருகை, இலவச வடிவமைப்பு",
          body: "உங்கள் வயலுக்கே வந்து, அளந்து, வரைபடம் வரைந்து தருகிறோம் — ஒரு ரூபாய் செலவில்லை.",
        },
        {
          title: "மானியத்துக்கு முழு உதவி",
          body: "PMKSY மற்றும் மாநில நுண்ணீர் பாசன மானியம் — தகுதியிலிருந்து ஆவணங்கள் வரை நாங்கள் உடனிருக்கிறோம்.",
        },
        {
          title: "பொருத்தி, சோதித்து ஒப்படைக்கிறோம்",
          body: "எங்கள் குழுவே பொருத்தி, தண்ணீர் விட்டுச் சோதித்த பிறகே உங்களிடம் ஒப்படைக்கிறது. பின்னர் உதிரி பாகங்களும் இதே கவுண்டரில்.",
        },
      ],
    },
    range: {
      kicker: "எங்கள் பொருட்கள்",
      title: "ஒரே கூரையின் கீழ் அனைத்தும்",
      items: [
        "சொட்டு நீர் அமைப்புகள்",
        "தெளிப்பான்கள் & ரெயின் கன்",
        "டிரிப் டேப் & லேட்டரல்கள்",
        "ஃபில்டர் & ஃபெர்டிகேஷன்",
        "HDPE / PVC குழாய்கள் & இணைப்புகள்",
        "மல்ச்சிங் ஃபிலிம்",
        "பாலிஹவுஸ்",
        "கருவிகள்",
      ],
      note: "100-க்கும் மேற்பட்ட வகைகள் — இப்போதே அலமாரியில்.",
    },
    spares:
      "பைக் உதிரி பாகங்களும் இங்கேயே — செயின், ஸ்ப்ராக்கெட், பிரேக் ஷூ, கிளட்ச் பிளேட், நியாயமான விலையில்.",
    visit: {
      kicker: "தொடர்பு",
      title: "உங்கள் வயலைப் பற்றிச் சொல்லுங்கள். தண்ணீர்க் கவலையை எங்களிடம் விடுங்கள்.",
      body: "வயலின் புகைப்படத்துடன் வாட்ஸ்அப் செய்யுங்கள், அல்லது நேரடியாக அழைக்கவும் — அதே நாளில் பதில், அதே நாளில் விலை.",
      hours: "திங்கள் – சனி · காலை 9 – மாலை 7",
      call: "அழைக்கவும்",
      whatsapp: "வாட்ஸ்அப் செய்யவும்",
      directions: "கடைக்கு வழி",
    },
    whatsappMessage: "வணக்கம் நசீர் மைக்ரோ இரிகேஷன்! என் வயலுக்கு இலவச வருகை வேண்டும்.",
    languagesTitle: "உங்கள் மொழியில் படியுங்கள்",
    englishLink: "முழு இணையதளம் ஆங்கிலத்தில்",
    actionBar: { call: "அழை", whatsapp: "வாட்ஸ்அப்", directions: "வழி" },
  },

  kannada: {
    slug: "kannada",
    code: "kn",
    dir: "ltr",
    name: "ಕನ್ನಡ",
    translateCta: "ಅನುವಾದಕ್ಕಾಗಿ ನನ್ನನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ",
    meta: {
      title: "ನಜೀರ್ ಮೈಕ್ರೋ ಇರಿಗೇಷನ್ ಏಜೆನ್ಸಿ — ಹನಿ ನೀರಾವರಿ, ತುಂತುರು ನೀರಾವರಿ, ಪಾಲಿಹೌಸ್",
      description:
        "2004ರಿಂದ ಗೋದಾವರಿ ಪ್ರದೇಶದಲ್ಲಿ ಅಸಲಿ ISI ಹನಿ ಮತ್ತು ತುಂತುರು ನೀರಾವರಿ ವ್ಯವಸ್ಥೆಗಳು. ನಿಮ್ಮ ಹೊಲಕ್ಕೆ ಉಚಿತ ವಿನ್ಯಾಸ, ಸಬ್ಸಿಡಿಗೆ ಸಂಪೂರ್ಣ ಸಹಾಯ.",
    },
    brand: { name: "ನಜೀರ್", sub: "ಮೈಕ್ರೋ ಇರಿಗೇಷನ್ ಏಜೆನ್ಸಿ" },
    hero: {
      kicker: "ಗೋದಾವರಿ ರೈತರ ನಂಬಿಕೆ · 2004ರಿಂದ",
      title: "ಪ್ರತಿ ಹನಿಯೂ ಬೆಳೆಗೇ.",
      lead: "ನಿಮ್ಮ ಹೊಲ, ನಿಮ್ಮ ಬೆಳೆ, ನಿಮ್ಮ ನೀರಿನ ಮೂಲ ನೋಡಿ — ಪ್ರತಿಯೊಂದು ಡ್ರಿಪ್ ನಕ್ಷೆಯನ್ನು ನಜೀರ್ ಅವರೇ ಸ್ವತಃ ರಚಿಸುತ್ತಾರೆ.",
      primary: "ಉಚಿತ ಹೊಲ ಭೇಟಿ ಬುಕ್ ಮಾಡಿ",
      call: "ಈಗಲೇ ಕರೆ ಮಾಡಿ",
    },
    saying: {
      text: "ಹರಿದ ನೀರು ಹೊಲ ಕುಡಿಯುತ್ತದೆ; ಹನಿಸಿದ ನೀರು ಬೆಳೆ ಕುಡಿಯುತ್ತದೆ.",
      source: "ನಮ್ಮ ಅಂಗಡಿಯ ಮಾತು",
    },
    stats: [
      { value: NUMBERS.years, label: "ವರ್ಷಗಳ ಅನುಭವ" },
      { value: NUMBERS.farmers, label: "ಸಂತೃಪ್ತ ರೈತರು" },
      { value: NUMBERS.water, label: "ವರೆಗೆ ನೀರಿನ ಉಳಿತಾಯ" },
      { value: NUMBERS.yield, label: "ಹೆಚ್ಚು ಇಳುವರಿ ಸಾಧ್ಯತೆ" },
    ],
    promises: {
      kicker: "ನಮ್ಮ ಭರವಸೆ",
      title: "ನಿಮ್ಮ ಹೊಲಕ್ಕೆ ನಾಲ್ಕು ಭರವಸೆಗಳು",
      items: [
        {
          title: "ಅಸಲಿ ISI ಸಾಮಗ್ರಿ ಮಾತ್ರ",
          body: "ನಕಲಿ ಇಲ್ಲ. ISI ಗುರುತು ಇಲ್ಲದ ವಸ್ತು ನಮ್ಮ ಅಂಗಡಿಯಲ್ಲಿ ಇಲ್ಲ.",
        },
        {
          title: "ಉಚಿತ ಭೇಟಿ, ಉಚಿತ ವಿನ್ಯಾಸ",
          body: "ನಿಮ್ಮ ಹೊಲಕ್ಕೇ ಬಂದು, ಅಳತೆ ಮಾಡಿ, ನಕ್ಷೆ ಬರೆದು ಕೊಡುತ್ತೇವೆ — ಒಂದು ರೂಪಾಯಿ ಖರ್ಚಿಲ್ಲ.",
        },
        {
          title: "ಸಬ್ಸಿಡಿಗೆ ಸಂಪೂರ್ಣ ಸಹಾಯ",
          body: "PMKSY ಮತ್ತು ರಾಜ್ಯದ ಸೂಕ್ಷ್ಮ ನೀರಾವರಿ ಸಬ್ಸಿಡಿ — ಅರ್ಹತೆಯಿಂದ ದಾಖಲೆಗಳವರೆಗೆ ನಾವು ಜೊತೆಗಿರುತ್ತೇವೆ.",
        },
        {
          title: "ಅಳವಡಿಸಿ, ಪರೀಕ್ಷಿಸಿ ಒಪ್ಪಿಸುತ್ತೇವೆ",
          body: "ನಮ್ಮ ತಂಡವೇ ಅಳವಡಿಸಿ, ನೀರು ಹರಿಸಿ ಪರೀಕ್ಷಿಸಿದ ನಂತರವೇ ನಿಮಗೆ ಒಪ್ಪಿಸುತ್ತದೆ. ನಂತರ ಬಿಡಿಭಾಗಗಳೂ ಇದೇ ಕೌಂಟರ್‌ನಲ್ಲಿ.",
        },
      ],
    },
    range: {
      kicker: "ನಮ್ಮ ಸಾಮಗ್ರಿ",
      title: "ಒಂದೇ ಸೂರಿನಡಿ ಎಲ್ಲವೂ",
      items: [
        "ಹನಿ ನೀರಾವರಿ ವ್ಯವಸ್ಥೆ",
        "ಸ್ಪ್ರಿಂಕ್ಲರ್ & ರೈನ್ ಗನ್",
        "ಡ್ರಿಪ್ ಟೇಪ್ & ಲ್ಯಾಟರಲ್",
        "ಫಿಲ್ಟರ್ & ಫರ್ಟಿಗೇಷನ್",
        "HDPE / PVC ಪೈಪ್ & ಫಿಟ್ಟಿಂಗ್",
        "ಮಲ್ಚಿಂಗ್ ಫಿಲ್ಮ್",
        "ಪಾಲಿಹೌಸ್",
        "ಉಪಕರಣಗಳು",
      ],
      note: "100ಕ್ಕೂ ಹೆಚ್ಚು ವಿಧಗಳು — ಈಗಲೇ ಕಪಾಟಿನಲ್ಲಿ.",
    },
    spares: "ಬೈಕ್ ಬಿಡಿಭಾಗಗಳೂ ಇಲ್ಲೇ — ಚೈನ್, ಸ್ಪ್ರಾಕೆಟ್, ಬ್ರೇಕ್ ಶೂ, ಕ್ಲಚ್ ಪ್ಲೇಟ್, ನ್ಯಾಯವಾದ ಬೆಲೆಗೆ.",
    visit: {
      kicker: "ಸಂಪರ್ಕ",
      title: "ನಿಮ್ಮ ಹೊಲದ ಬಗ್ಗೆ ಹೇಳಿ. ನೀರಿನ ಚಿಂತೆ ನಮಗೆ ಬಿಡಿ.",
      body: "ಹೊಲದ ಫೋಟೋ ಜೊತೆ ವಾಟ್ಸ್‌ಆ್ಯಪ್ ಮಾಡಿ, ಅಥವಾ ನೇರವಾಗಿ ಕರೆ ಮಾಡಿ — ಅದೇ ದಿನ ಉತ್ತರ, ಅದೇ ದಿನ ಬೆಲೆ.",
      hours: "ಸೋಮ – ಶನಿ · ಬೆಳಿಗ್ಗೆ 9 – ಸಂಜೆ 7",
      call: "ಕರೆ ಮಾಡಿ",
      whatsapp: "ವಾಟ್ಸ್‌ಆ್ಯಪ್ ಮಾಡಿ",
      directions: "ಅಂಗಡಿಗೆ ದಾರಿ",
    },
    whatsappMessage: "ನಮಸ್ಕಾರ ನಜೀರ್ ಮೈಕ್ರೋ ಇರಿಗೇಷನ್! ನನ್ನ ಹೊಲಕ್ಕೆ ಉಚಿತ ಭೇಟಿ ಬೇಕು.",
    languagesTitle: "ನಿಮ್ಮ ಭಾಷೆಯಲ್ಲಿ ಓದಿ",
    englishLink: "ಪೂರ್ಣ ವೆಬ್‌ಸೈಟ್ ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ",
    actionBar: { call: "ಕರೆ", whatsapp: "ವಾಟ್ಸ್‌ಆ್ಯಪ್", directions: "ದಾರಿ" },
  },
};

export const LOCALE_SLUGS = Object.keys(LOCALES) as LocaleSlug[];

export function getLocale(slug: string): LocalePage | undefined {
  return (LOCALES as Record<string, LocalePage | undefined>)[slug];
}

/** Every language button, English first. Used by the switcher on all pages. */
export const LANGUAGE_LINKS: { href: string; code: string; dir: "ltr" | "rtl"; name: string; cta: string }[] = [
  { href: "/", code: "en", dir: "ltr", name: "English", cta: "Click me to translate" },
  ...LOCALE_SLUGS.map((slug) => ({
    href: `/${slug}`,
    code: LOCALES[slug].code,
    dir: LOCALES[slug].dir,
    name: LOCALES[slug].name,
    cta: LOCALES[slug].translateCta,
  })),
];

/** hreflang map for <link rel="alternate"> on every page. */
export const LANGUAGE_ALTERNATES: Record<string, string> = Object.fromEntries(
  LANGUAGE_LINKS.map((link) => [link.code, link.href]),
);
