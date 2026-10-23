export interface Course {
  id: string;
  title: string;
  arabicTitle: string;
  category: 'Facial & Skin Aesthetics' | 'Body & Massage Therapy' | 'Foundations & Science' | 'Beauty, Nails & Grooming';
  duration: string;
  trainer?: string;
  audience: string;
  description: string;
  image: string;
  pillLabel: string;
  status: 'Open for Enquiry' | 'Coming Soon (Register Interest)' | 'Enquiry / Pending Confirmation';
  badge: string;
}

export const COURSE_CATALOGUE: Course[] = [
  {
    id: 'facial-skin-care-treatments',
    title: 'Facial Skin Care Treatments',
    arabicTitle: 'علاجات العناية ببشرة الوجه',
    category: 'Facial & Skin Aesthetics',
    duration: '100 Hours',
    trainer: 'Dr. Seeta Yadav',
    audience: 'Age 18+, High School graduate candidate',
    description: 'Practical training in facial cleansing, exfoliation, extraction techniques, mask application, and basic skin analysis for different skin types.',
    image: '/academy-images/polished-al-novelle-training-centre-interior.png',
    pillLabel: 'Facial Care',
    status: 'Open for Enquiry',
    badge: 'Facial'
  },
  {
    id: 'body-treatment-techniques',
    title: 'Body Treatment Techniques',
    arabicTitle: 'تقنيات علاج الجسم',
    category: 'Body & Massage Therapy',
    duration: '350 Hours',
    trainer: 'Dr. Seeta Yadav',
    audience: 'Age 18+, High School graduate candidate',
    description: 'Practical training in body exfoliation, wrapping, and non-invasive body contouring support treatments.',
    image: '/academy-images/refined-al-novelle-training-centre-interior-1.png',
    pillLabel: 'Body Care',
    status: 'Open for Enquiry',
    badge: 'Body'
  },
  {
    id: 'massage-therapy-fundamentals',
    title: 'Massage Therapy Fundamentals',
    arabicTitle: 'أساسيات التدليك',
    category: 'Body & Massage Therapy',
    duration: '250 Hours',
    trainer: 'Dr. Azaiba Kara',
    audience: 'Age 18+, High School graduate candidate',
    description: 'Manual massage techniques for face and body, including relaxation and therapeutic movements with structured clinical safety.',
    image: '/academy-images/elegant-al-novelle-training-centre-1.png',
    pillLabel: 'Massage',
    status: 'Open for Enquiry',
    badge: 'Massage'
  },
  {
    id: 'electrical-facial-treatments',
    title: 'Electrical Facial Treatments',
    arabicTitle: 'علاجات الوجه بالأجهزة الكهربائية',
    category: 'Facial & Skin Aesthetics',
    duration: '75 Hours',
    trainer: 'Dr. Azaiba Kara',
    audience: 'Age 18+, High School graduate candidate',
    description: 'Use of electrical and mechanical devices for facial treatments, contraindications, and comprehensive safety protocols.',
    image: '/academy-images/laser-device-training.png',
    pillLabel: 'Electro-Facial',
    status: 'Open for Enquiry',
    badge: 'Devices'
  },
  {
    id: 'anatomy-physiology-skin-care',
    title: 'Anatomy & Physiology for Skin Care',
    arabicTitle: 'التشريح ووظائف الأعضاء للعناية بالبشرة',
    category: 'Foundations & Science',
    duration: '90 Hours',
    trainer: 'Dr. Seeta Yadav',
    audience: 'Age 18+, High School graduate candidate',
    description: 'Foundational anatomy, physiology, and skin structure knowledge essential for modern aesthetic and beauty practice.',
    image: '/academy-images/academy-lounge-classroom.png',
    pillLabel: 'Skin Anatomy',
    status: 'Open for Enquiry',
    badge: 'Anatomy'
  },
  {
    id: 'hygiene-infection-control',
    title: 'Hygiene & Infection Control in Beauty Practice',
    arabicTitle: 'النظافة ومكافحة العدوى في ممارسات التجميل',
    category: 'Foundations & Science',
    duration: '10 Hours',
    trainer: 'Dr. Seeta Yadav',
    audience: 'Age 18+, High School graduate candidate',
    description: 'Sanitation, sterilization, and cross-contamination prevention protocols for clinical rooms and salon environments.',
    image: '/academy-images/refined-aesthetic-training-centre-interior.png',
    pillLabel: 'Hygiene Safety',
    status: 'Open for Enquiry',
    badge: 'Safety'
  },
  {
    id: 'mens-grooming-skincare',
    title: "Men's Grooming and Skincare Practice",
    arabicTitle: 'ممارسات العناية بمظهر الرجال وبشرتهم',
    category: 'Beauty, Nails & Grooming',
    duration: '250 Hours',
    trainer: 'Dr. Azaiba Kara',
    audience: 'Age 18+, High School graduate candidate',
    description: 'Hygiene, workplace safety, client consultation, skin analysis, men’s facials, beard shaping, traditional shaving, and scalp care.',
    image: '/academy-images/al-novelle-training-centre-interior.png',
    pillLabel: "Men's Grooming",
    status: 'Open for Enquiry',
    badge: 'Grooming'
  },
  {
    id: 'semi-permanent-makeup',
    title: 'Semi-Permanent Make-up',
    arabicTitle: 'المكياج شبه الدائم',
    category: 'Beauty, Nails & Grooming',
    duration: '150 Hours',
    trainer: 'Dr. Seeta Yadav',
    audience: 'Age 18+, High School graduate candidate',
    description: 'Micropigmentation techniques, skin and colour theory, hygiene, client consultation, patch testing, mapping, design, and safe aftercare.',
    image: '/academy-images/practical-class-mannequin.png',
    pillLabel: 'SPMU Training',
    status: 'Enquiry / Pending Confirmation',
    badge: 'SPMU'
  },
  {
    id: 'chemical-peelings-microneedling',
    title: 'Chemical Peelings + Microneedling',
    arabicTitle: 'التقشير الكيميائي والوخز بالإبر الدقيقة',
    category: 'Facial & Skin Aesthetics',
    duration: '300 Hours',
    trainer: 'Dr. Seeta Yadav',
    audience: 'Age 18+, Beauty Therapists, Nurses',
    description: 'Advanced knowledge and practical skill in chemical peels and microneedling: microbiology, active ingredients, depth, wound healing, and safe delivery.',
    image: '/academy-images/polished-aesthetic-training-centre-interior.png',
    pillLabel: 'Peel & Needle',
    status: 'Coming Soon (Register Interest)',
    badge: 'Advanced'
  },
  {
    id: 'dermaplaning',
    title: 'Dermaplaning',
    arabicTitle: 'تقشير البشرة بالشفرة',
    category: 'Facial & Skin Aesthetics',
    duration: '110 Hours',
    trainer: 'Dr. Azaiba Kara',
    audience: 'Age 18+, Beauty Therapists, Nurses',
    description: 'Manual exfoliation technique using a surgical blade to remove dead skin cells and vellus hair, including client assessment and blade safety.',
    image: '/academy-images/refined-al-novelle-training-centre-interior-2.png',
    pillLabel: 'Dermaplaning',
    status: 'Open for Enquiry',
    badge: 'Facial'
  },
  {
    id: 'eyebrow-eyelash-specialist',
    title: 'Eyebrow and Eyelash Specialist Treatments',
    arabicTitle: 'العلاجات المتخصصة للحواجب والرموش',
    category: 'Beauty, Nails & Grooming',
    duration: '380 Hours',
    trainer: 'Dr. Azaiba Kara',
    audience: 'Age 18+, High School graduate candidate',
    description: 'Individual and volume eyelash extensions, semi-permanent lash lifting, brow lamination, tinting, and eyebrow sculpting by waxing, threading and tweezing.',
    image: '/academy-images/polished-al-novelle-training-center-interior-1.png',
    pillLabel: 'Brow & Lash',
    status: 'Open for Enquiry',
    badge: 'Lash & Brow'
  },
  {
    id: 'electric-epilation',
    title: 'Electric Epilation',
    arabicTitle: 'إزالة الشعر بالتحليل الكهربائي',
    category: 'Beauty, Nails & Grooming',
    duration: '180 Hours',
    trainer: 'Dr. Seeta Yadav',
    audience: 'Age 18+, High School graduate candidate',
    description: 'Permanent hair removal using needle-based electrolysis techniques (galvanic, thermolysis, blend), follicle targeting, and infection control.',
    image: '/academy-images/polished-al-novelle-training-center-interior.png',
    pillLabel: 'Epilation',
    status: 'Open for Enquiry',
    badge: 'Epilation'
  },
  {
    id: 'beauty-therapy',
    title: 'Beauty Therapy',
    arabicTitle: 'علاج التجميل',
    category: 'Body & Massage Therapy',
    duration: '1,200 Hours',
    trainer: 'Dr. Seeta Yadav',
    audience: 'Age 18+, High School graduate candidate',
    description: 'Comprehensive program: health and safety in salon environments, facial and body electrotherapy, massage treatments, and anatomy & physiology.',
    image: '/academy-images/training-consultation.png',
    pillLabel: 'Beauty Therapy',
    status: 'Open for Enquiry',
    badge: 'Core Program'
  },
  {
    id: 'science-of-skincare-ingredients',
    title: 'Science of Skincare Ingredients',
    arabicTitle: 'علم مكونات العناية بالبشرة',
    category: 'Foundations & Science',
    duration: '20 Hours',
    trainer: 'Dr. Azaiba Kara',
    audience: 'Age 18+, High School graduate candidate',
    description: 'Skin structure, cosmetic ingredients, moisturisers, exfoliating acids, Vitamin C, retinoids, reading INCI lists, and building client regimens.',
    image: '/academy-images/student-support-admissions.png',
    pillLabel: 'Skin Science',
    status: 'Open for Enquiry',
    badge: 'Science'
  },
  {
    id: 'nail-technology',
    title: 'Nail Technology',
    arabicTitle: 'تقنية الأظافر',
    category: 'Beauty, Nails & Grooming',
    duration: '190 Hours',
    audience: 'Age 18+, High School graduate candidate',
    description: 'Fundamentals of nail and skin biology, salon hygiene, client care and communication, and professional manicure and pedicure services.',
    image: '/academy-images/refined-al-novelle-training-centre-interior.png',
    pillLabel: 'Nail Tech',
    status: 'Open for Enquiry',
    badge: 'Nails'
  },
  {
    id: 'science-of-hair-scalp-care',
    title: 'Science of Hair and Scalp Care',
    arabicTitle: 'علم العناية بالشعر وفروة الرأس',
    category: 'Foundations & Science',
    duration: '20 Hours',
    trainer: 'Dr. Seeta Yadav',
    audience: 'Age 18+, High School graduate candidate',
    description: 'Hair biology, scalp health, common hair and scalp concerns, hair structure, hair loss assessment, and personalized care recommendations.',
    image: '/academy-images/academy-approach-session.png',
    pillLabel: 'Scalp Science',
    status: 'Open for Enquiry',
    badge: 'Hair Science'
  },
  {
    id: 'advanced-facial-techniques',
    title: 'Advanced Facial Techniques',
    arabicTitle: 'تقنيات العناية بالوجه المتقدمة',
    category: 'Facial & Skin Aesthetics',
    duration: '30 Hours',
    trainer: 'Dr. Azaiba Kara',
    audience: 'Age 18+, High School graduate, Nurses, Therapists',
    description: 'Hydrafacial, microdermabrasion, advanced exfoliation, skin analysis, treatment protocols, product selection, contraindications, and safe practice.',
    image: '/academy-images/polished-al-novelle-training-centre-interior-1.png',
    pillLabel: 'Adv Facials',
    status: 'Open for Enquiry',
    badge: 'Clinical'
  }
];

export const COURSE_NAMES = COURSE_CATALOGUE.map(c => c.title);
