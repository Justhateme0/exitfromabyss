import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.story': 'Story',
    'nav.trailer': 'Trailer',
    'nav.download': 'Download',
    'nav.contact': 'Contact',

    // Home page
    'home.title': 'Exit from Abyss',
    'home.subtitle': `Descend into the depths of horror in this psychological survival game where your worst nightmares become reality.`,
    'home.watchTrailer': 'Watch Trailer',
    'home.learnMore': 'Learn More',
    'home.feature1.title': 'Psychological Horror',
    'home.feature1.desc': 'Experience a deeply disturbing journey that will challenge your sanity and survival instincts.',
    'home.feature2.title': 'Immersive Story',
    'home.feature2.desc': 'Uncover the dark secrets of the Abyss through a rich, atmospheric narrative.',
    'home.feature3.title': 'Survival Mechanics',
    'home.feature3.desc': 'Manage resources and make crucial decisions to survive the horrors that await.',

    // About page
    'about.title': 'About the Game',
    'about.overview.title': 'Game Overview',
    'about.overview.desc': `Exit from Abyss is a psychological horror survival game that plunges players into the depths of an ancient underground facility where reality and nightmare intertwine.`,
    'about.requirements.title': 'System Requirements',
    'about.features.title': 'Key Features',
    'about.features.atmosphere.title': 'Atmospheric Horror',
    'about.features.atmosphere.desc': `Immerse yourself in a deeply atmospheric environment with dynamic lighting and realistic sound design.`,
    'about.features.survival.title': 'Survival Mechanics',
    'about.features.survival.desc': 'Manage your resources, health, and sanity while solving puzzles and avoiding deadly encounters.',
    'about.features.narrative.title': 'Branching Narrative',
    'about.features.narrative.desc': 'Your choices matter. Experience multiple endings based on your decisions.',

    // Story page
    'story.title': 'Story',
    'story.prologue.title': 'Prologue',
    'story.prologue.desc1': `In the year 2045, deep beneath the surface of an abandoned military complex, a team of researchers discovered an ancient facility unlike anything humanity had ever encountered.`,
    'story.prologue.desc2': `You are Dr. Sarah Chen, a leading expert in quantum physics and paranormal phenomena.`,
    'story.descent.title': 'The Descent',
    'story.descent.desc1': `As you descend deeper into The Abyss, you begin to experience strange phenomena.`,
    'story.descent.desc2': `You discover logs and recordings from the missing research team.`,
    'story.truth.title': 'The Truth',
    'story.truth.desc': `The Abyss is revealed to be a containment facility, designed by an ancient civilization.`,
    'story.choice.title': 'Your Choice',
    'story.choice.desc': `As you uncover the truth about The Abyss and its prisoners, you face an impossible choice.`,

    // Download page
    'download.title': 'Download Now',
    'download.steam.title': 'Steam Version',
    'download.steam.desc': 'Download and play through Steam platform with achievements and cloud saves.',
    'download.steam.button': 'Play on Steam',
    'download.vkplay.title': 'VK Play Version',
    'download.vkplay.desc': 'Download and play through VK Play platform with regional pricing.',
    'download.vkplay.button': 'Play on VK Play',
    'download.requirements.title': 'System Requirements',
    'download.requirements.minimum': 'Minimum',
    'download.requirements.recommended': 'Recommended',

    // Contact page
    'contact.title': 'Contact Us',
    'contact.form.title': 'Get in Touch',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    'contact.connect.title': 'Connect With Us',
    'contact.press.title': 'Press Inquiries',
    'contact.press.desc': 'For press inquiries, please contact our PR team at:',
  },
  ru: {
    // Navigation
    'nav.home': 'Главная',
    'nav.about': 'Об игре',
    'nav.story': 'Сюжет',
    'nav.trailer': 'Трейлер',
    'nav.download': 'Скачать',
    'nav.contact': 'Контакты',

    // Home page
    'home.title': 'Exit from Abyss',
    'home.subtitle': 'Погрузитесь в пучины ужаса в этой психологической игре на выживание, где ваши худшие кошмары становятся реальностью.',
    'home.watchTrailer': 'Смотреть трейлер',
    'home.learnMore': 'Узнать больше',
    'home.feature1.title': 'Психологический хоррор',
    'home.feature1.desc': 'Испытайте глубоко тревожное путешествие, которое бросит вызов вашему рассудку и инстинкту выживания.',
    'home.feature2.title': 'Захватывающий сюжет',
    'home.feature2.desc': 'Раскройте тёмные тайны Бездны через богатый, атмосферный нарратив.',
    'home.feature3.title': 'Механики выживания',
    'home.feature3.desc': 'Управляйте ресурсами и принимайте важные решения, чтобы выжить среди ожидающих вас ужасов.',

    // About page
    'about.title': 'Об игре',
    'about.overview.title': 'Обзор игры',
    'about.overview.desc': 'Exit from Abyss - это психологическая игра ужасов на выживание, которая погружает игроков в глубины древнего подземного комплекса, где реальность и кошмар переплетаются.',
    'about.requirements.title': 'Системные требования',
    'about.features.title': 'Ключевые особенности',
    'about.features.atmosphere.title': 'Атмосферный хоррор',
    'about.features.atmosphere.desc': 'Погрузитесь в глубоко атмосферную среду с динамическим освещением и реалистичным звуковым дизайном.',
    'about.features.survival.title': 'Механики выживания',
    'about.features.survival.desc': 'Управляйте ресурсами, здоровьем и рассудком, решая головоломки и избегая смертельных встреч.',
    'about.features.narrative.title': 'Разветвлённый сюжет',
    'about.features.narrative.desc': 'Ваш выбор имеет значение. Испытайте множество концовок, основанных на ваших решениях.',

    // Story page
    'story.title': 'Сюжет',
    'story.prologue.title': 'Пролог',
    'story.prologue.desc1': 'В 2045 году, глубоко под поверхностью заброшенного военного комплекса, команда исследователей обнаружила древний объект, не похожий ни на что, с чем человечество сталкивалось ранее.',
    'story.prologue.desc2': 'Вы - доктор Сара Чен, ведущий эксперт по квантовой физике и паранормальным явлениям.',
    'story.descent.title': 'Спуск',
    'story.descent.desc1': 'По мере того как вы спускаетесь глубже в Бездну, вы начинаете испытывать странные явления.',
    'story.descent.desc2': 'Вы обнаруживаете записи и записи пропавшей исследовательской команды.',
    'story.truth.title': 'Правда',
    'story.truth.desc': 'Бездна оказывается объектом сдерживания, созданным древней цивилизацией.',
    'story.choice.title': 'Ваш выбор',
    'story.choice.desc': 'Раскрывая правду о Бездне и её узниках, вы сталкиваетесь с невозможным выбором.',

    // Download page
    'download.title': 'Скачать игру',
    'download.steam.title': 'Версия Steam',
    'download.steam.desc': 'Скачайте и играйте через платформу Steam с достижениями и облачными сохранениями.',
    'download.steam.button': 'Играть в Steam',
    'download.vkplay.title': 'Версия VK Play',
    'download.vkplay.desc': 'Скачайте и играйте через платформу VK Play с региональными ценами.',
    'download.vkplay.button': 'Играть в VK Play',
    'download.requirements.title': 'Системные требования',
    'download.requirements.minimum': 'Минимальные',
    'download.requirements.recommended': 'Рекомендуемые',

    // Contact page
    'contact.title': 'Связаться с нами',
    'contact.form.title': 'Написать нам',
    'contact.form.name': 'Имя',
    'contact.form.email': 'Email',
    'contact.form.message': 'Сообщение',
    'contact.form.submit': 'Отправить сообщение',
    'contact.connect.title': 'Присоединяйтесь к нам',
    'contact.press.title': 'Для прессы',
    'contact.press.desc': 'По вопросам прессы обращайтесь в нашу PR-команду:',
  }
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'ru',
  setLanguage: () => {},
  t: () => '',
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ru');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};