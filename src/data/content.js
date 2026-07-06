export const siteContent = {
  name: 'Marija Đorđević',
  brand: 'Marija Đorđević Fitnes',
  tagline: 'Jako telo. Jak um. Bez granica.',
  hero: {
    subtitle: 'Premium Personalni Trening',
    description:
      'Individualni pristup, naučno utemeljeni programi i podrška koja te vodi do rezultata — bez kompromisa.',
    cta: 'Zakaži konsultaciju',
    ctaSecondary: 'Pogledaj transformacije',
  },
  about: {
    title: 'O meni',
    subtitle: 'Tvoj partner u transformaciji',
    paragraphs: [
      'Ja sam Marija Đorđević — sertifikovani fitnes trener sa više od 8 godina iskustva u personalnom treningu, kondicioniranju i nutricionističkom savetovanju. Specijalizovana sam za žensku transformaciju tela, jačanje core muskulature i izgradnju zdravih, održivih navika.',
      'Moj pristup kombinuje precizno planirane treninge, praćenje napretka i motivaciju koja te drži fokusiranom — bilo da želiš da smršaš, oblikuješ telo ili jednostavno osećaš se snažnije svakog dana.',
      'Radim sa klijentima lično u Beogradu i online širom regiona. Svaki program je prilagođen tvom životnom ritmu, ciljevima i nivou spremnosti.',
    ],
    stats: [
      { value: '500+', label: 'Zadovoljnih klijenata' },
      { value: '8+', label: 'Godina iskustva' },
      { value: '15+', label: 'Sertifikata' },
    ],
  },
  services: [
    {
      icon: 'dumbbell',
      title: 'Personalni Trening',
      description:
        'Individualni treninzi prilagođeni tvom telu i ciljevima. Fokus na tehniku, progresiju i maksimalne rezultate.',
      price: 'od 4.500 RSD',
    },
    {
      icon: 'laptop',
      title: 'Online Coaching',
      description:
        'Kompletan program treninga i ishrane sa nedeljnim check-in sesijama i podrškom putem aplikacije.',
      price: 'od 8.000 RSD/mes',
    },
    {
      icon: 'heart',
      title: 'Program Transformacije',
      description:
        '12-nedeljni intenzivni program za potpunu promenu navika, tela i samopouzdanja. Uključuje sve.',
      price: 'od 35.000 RSD',
    },
    {
      icon: 'nutrition',
      title: 'Savetovanje Ishrane',
      description:
        'Personalizovani plan ishrane bez restriktivnih dijeta — balansirano, održivo i ukusno.',
      price: 'od 3.500 RSD',
    },
  ],
  gallery: {
    title: 'Galerija',
    subtitle: 'Treninzi, transformacije i inspiracija',
    images: [
      {
        src: '/images/hero.png',
        alt: 'Marija Đorđević — profesionalni portret',
        caption: 'Snaga počinje iznutra',
      },
      {
        src: '/images/about.png',
        alt: 'Marija Đorđević — trening poza',
        caption: 'Disciplina je luksuz',
      },
      {
        src: '/images/gallery-1.png',
        alt: 'Marija Đorđević — fitnes sesija',
        caption: 'Fokus. Forma. Rezultat.',
      }
    ],
    videos: [
      {
        id: 'v1',
        title: 'Full Body HIIT — 30 min',
        thumbnail: '/images/about.png',
        embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        description: 'Intenzivan trening za celo telo — idealan za kućne uslove.',
      },
      {
        id: 'v2',
        title: 'Core & Glutes Activation',
        thumbnail: '/images/gallery-1.png',
        embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        description: 'Aktivacija core muskulature i zadnjice pre glavnog treninga.',
      },
      {
        id: 'v3',
        title: 'Stretching & Recovery',
        thumbnail: '/images/hero.png',
        embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        description: 'Rastegzanje i oporavak za bolju fleksibilnost i regeneraciju.',
      },
    ],
  },
  contact: {
    email: 'marija@djordjevicfitness.rs',
    phone: '+381 64 123 4567',
    instagram: '@marija.djordjevic.fitnes',
    location: 'Beograd, Srbija',
  },
}
