# Afghan_Proverbs_API
 
A simple Express project of Afghan proverbs in Pashto and Dari languages, along with their English translations and meanings and what category they are in. With this project you can add, update, delete, and retrieve proverbs, including getting a random proverb.

## Project Description

This project is a RESTful API that allows you to:

- **Add new proverbs**
- **Update existing proverbs**
- **Delete proverbs**
- **Get all proverbs**
- **Get a single proverb by ID**
- **Get a random proverb**

The proverbs are stored in a JSON file (`proverbs.json`) which is in the data folder inside the project.

## How to Run the Project Locally

### Prerequisites

Before running the project, make sure you have the following installed on your machine:

- **Node.js**
- **npm**

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/WazhmaHakimi/Afghan_Proverbs_API.git
   cd Afghan_proverbs_API

2. Install dependencies:
    ```bash
    npm install

3. Start the server:
    ```bash
    nodemon app.js
The API will be running on http://localhost:3000/.

## Example Requests & Responses Using Postman

1. GET All Proverbs
    ```bash
    postman GET http://localhost:3000/proverbs
    
- **The response will be like below.**
    ```bash
    [
        {
            "id": 1,
            "textDari": "کسی که به کوه بالا می‌رود، امکان لغزش دارد",
            "textPashto": "چې غر ته خېژي، پښه يې ښويېږي",
            "translationEn": "He who climbs the mountain may slip.",
            "meaning": "Ambition carries risks; the greater the effort, the greater the potential for setbacks.",
            "category": "Life Lessons"
        },
        {
            "id": 2,
            "textDari": "سگ ها همراه با کاروان پارس می کنند، اما کاروان به پیش می رود.",
            "textPashto": "سپي د کاروان سره غاپي، خو کاروان روان وي",
            "translationEn": "Dogs bark at the caravan, but the caravan moves on.",
            "meaning": "Ignore critics and distractions; focus on your goals.",
            "category": "Perseverance"
        },
        {
            "id": 3,
            "textDari": "هر گلی که عطر دارد، خار هم دارد",
            "textPashto": "هر ګل چې خوشبوي لري، اغزي لري",
            "translationEn": "Every flower that smells sweet has thorns",
            "meaning": "Beauty and goodness often come with pain or hardship.",
            "category": "Reality"
        },
        {
            "id": 4,
            "textDari": "دو پرنده در دست، بهتر از ده پرنده در درخت است",
            "textPashto": "دوه مرغۍ په لاس کې، تر لسو مرغو په ونو غوره دي",
            "translationEn": "Two birds in hand are better than ten in the tree",
            "meaning": "It's better to hold onto what you already have than to risk it for uncertain gain.",
            "category": "Caution"
        },
        {
            "id": 5,
            "textDari": "از دور به کسی قضاوت نکن، بگذار نزدیک شود تا بشناسی‌اش",
            "textPashto": "له ورايه مې مه وهه، چې ورشم در به ښيم",
            "translationEn": "Don’t throw stones from afar; let me come closer and show you who I am.",
            "meaning": "Don’t judge someone without knowing them properly.",
            "category": "Judgment"
        },
        {
            "id": 6,
            "textDari": "کسی که به خدا توکل کند، هرگز تنها نمی‌ماند",
            "textPashto": "پر خدا توکل کوه، نه به بنده",
            "translationEn": "Rely on God, not on people.",
            "meaning": "True strength and support come from faith, not from depending too much on others.",
            "category": "Faith"
        },
        {
            "id": 7,
            "textDari": "کسی که ضعیف است هم لیاقت احترام دارد",
            "textPashto": "کمزوري هم د درناوي وړ دی",
            "translationEn": "Even the weak deserve respect.",
            "meaning": "Never underestimate or disrespect someone because of their status or strength.",
            "category": "Respect"
        },
        {
            "id": 8,
            "textDari": "به فرزندت لقب بد نده، حتی اگر کار بدی کرده باشد",
            "textPashto": "خپل بچي ته مار مه وايه، که مار هم وي",
            "translationEn": "Don’t call your own child a snake, even if he is one.",
            "meaning": "Be careful with how you label your loved ones; your words define relationships.",
            "category": "Parenting"
        },
        {
            "id": 9,
            "textDari": "ممکن است طلا از خاک پیدا شود، اما خاک هرگز طلا نمی‌شود",
            "textPashto": "د خاورو نه زر پيدا کېږي، خو د زرو نه خاک نه پيدا کېږي",
            "translationEn": "Gold can come from dust, but dust will never come from gold.",
            "meaning": "Greatness can come from humble beginnings, but once refined, something doesn't revert.",
            "category": "Growth"
        },
        {
            "id": 10,
            "textDari": "هر چه بزرگ‌تر باشد، تأثیر و سایه‌اش هم بیشتر است",
            "textPashto": "چې لوى شي، سيورى به لري",
            "translationEn": "The bigger it gets, the larger the shade.",
            "meaning": "Great people or deeds have a wider impact and influence.",
            "category": "Leadership"
        },
        {
            "id": 11,
            "textDari": "به جای افتخار به نام پدرت، راه و کار او را دنبال کن",
            "textPashto": "د پلار نوم مه خورئ، د پلار کار وخورئ",
            "translationEn": "Don’t live off your father’s name—live by your father’s work.",
            "meaning": "Don’t rely on family reputation—earn your own honor through action.",
            "category": "Responsibility"
        },
        {
            "id": 12,
            "textDari": "خانه با لبخند ساخته می‌شود و با خشم ویران می‌گردد",
            "textPashto": "په خندا کور ودانيږي، په قهر ورانيږي",
            "translationEn": "A house is built with smiles, destroyed with anger.",
            "meaning": "Love and peace maintain a family; anger breaks it apart.",
            "category": "Family"
        },
        {
            "id": 13,
            "textDari": "یک دهان و دو گوش داریم، پس بیشتر گوش کنیم تا حرف بزنیم",
            "textPashto": "يوه خوله، دوه غوږه لري",
            "translationEn": "One mouth, two ears.",
            "meaning": "Listen more than you speak.",
            "category": "Wisdom"
        },
        {
            "id": 14,
            "textDari": "با نزدیکان خود دعوا نکن که دشمنان خوشحال نشوند",
            "textPashto": "له خپلو سره شخړه مه کوه، چې د پردو خندا نشي",
            "translationEn": "Don’t fight with your own, or strangers will laugh at you.",
            "meaning": "Keep family or internal matters private; public disputes cause dishonor.",
            "category": "Unity"
        }
    ]

2. GET Single Proverbs
    ```bash
    postman GET http://localhost:3000/proverbs/1
    
- **The response will be like below.**
    ```bash
    {
        "id": 1,
        "textDari": "کسی که به کوه بالا می‌رود، امکان لغزش دارد",
        "textPashto": "چې غر ته خېژي، پښه يې ښويېږي",
        "translationEn": "He who climbs the mountain may slip.",
        "meaning": "Ambition carries risks; the greater the effort, the greater the potential for setbacks.",
        "category": "Life Lessons"
    }

3. GET Random Proverbs
    ```bash
    postman GET http://localhost:3000/proverbs/random
    
- **The response will be like below.**
    ```bash
    {
        "id": 6,
        "textDari": "کسی که به خدا توکل کند، هرگز تنها نمی‌ماند",
        "textPashto": "پر خدا توکل کوه، نه به بنده",
        "translationEn": "Rely on God, not on people.",
        "meaning": "True strength and support come from faith, not from depending too much on others.",
        "category": "Faith"
    },

4. POST Create a New Proverb
    ```bash
    postman POST http://localhost:3000/proverbs
   { 
    "textDari": "از دور به کسی قضاوت نکن، بگذار نزدیک شود تا بشناسی‌اش",
    "textPashto": "له ورايه مې مه وهه، چې ورشم در به ښيم",
    "translationEn": "Don’t throw stones from afar; let me come closer and show you who I am.",
    "meaning": "Don’t judge someone without knowing them properly.",
    "category": "Judgment"
    }
    
- **The response will be like below.**
    ```bash
    {
    "id": 15,
    "textDari": "از دور به کسی قضاوت نکن، بگذار نزدیک شود تا بشناسی‌اش",
    "textPashto": "له ورايه مې مه وهه، چې ورشم در به ښيم",
    "translationEn": "Don’t throw stones from afar; let me come closer and show you who I am.",
    "meaning": "Don’t judge someone without knowing them properly.",
    "category": "Judgment"
    }

5. PUT Update a Proverb
    ```bash
    postman PUT http://localhost:3000/proverbs/1
    {
    "id": 1,
    "textDari": "کسی که به کوه بالا می‌رود، امکان لغزش دارد",
    "textPashto": "چې غر ته خېژي، پښه يې ښويېږي",
    "translationEn": "He who climbs the mountain may slip.",
    "meaning": "Ambition carries risks; the greater the effort, the greater the potential for setbacks.",
    "category": "Reality"
    }
    
- **The response will be like below.**
    ```bash
    {
    "id": 1,
    "textDari": "کسی که به کوه بالا می‌رود، امکان لغزش دارد",
    "textPashto": "چې غر ته خېژي، پښه يې ښويېږي",
    "translationEn": "He who climbs the mountain may slip.",
    "meaning": "Ambition carries risks; the greater the effort, the greater the potential for setbacks.",
    "category": "Reality"
    }

6. DELETE a Proverb
    ```bash
    postman Delete http://localhost:3000/proverbs/1
    {
    "id": 1,
    "textDari": "کسی که به کوه بالا می‌رود، امکان لغزش دارد",
    "textPashto": "چې غر ته خېژي، پښه يې ښويېږي",
    "translationEn": "He who climbs the mountain may slip.",
    "meaning": "Ambition carries risks; the greater the effort, the greater the potential for setbacks.",
    "category": "Reality"
    }
    
- **The response will be like below.**
    ```bash
    {
    "result": "The proverb has been deleted"
    }

This is how the program works. Enjoy working with my program and learning good lessons with these proverbs!