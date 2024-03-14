import favFilmProject from '../assests/favFilmProject.png';
import filmProject from '../assests/filmProject.png';
import pizza from '../assests/pizza.png';

export const data = {

  tr: {
    title: "Yaratıcı Düşünür, minimalist sever",
    intro:
      "Merhaba, ben Çağrı. Full-Stack geliştiriciyim. Harika kullanıcı deneyimleri ile sağlam ve ölçeklenebilir ön uç ürünleri oluşturacak bir geliştirici arıyorsanız. Benimle iletişime geçebilirsiniz.",
    profile: "Profil",
    skill: "Yetenekler",
    projects: "Projeler",
    profileData: {
      headerData: "Hakkımda",
      name: "Cüneyt Çağrı YILMAZ",
      birhdayData: "Doğum Günü",
      birthdayValue: "25.02.1998",
      cityData: "İkamet Şehri",
      cityValue: "Antalya",
      educationData: "Eğitim Durumu",
      educationValue: { universityName: "Antalya Bilim Uni. Electrical Electornics Engineering", departmentType: "Lisans", graduadeYear: "2022" },
      jobData: "Full-Stack Geliştirici",
      roleData: "Tercih Ettiği Rol",
      aboutData: [
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.", "Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!"
      ]
    },
    footerTitle: "Bir sonraki ürününüz üzerinde birlikte çalışalım.",

    headerData: {
      headerButtons: ["Yetenekler", "Projeler", "Bana ulaş"]
    },
    projectsData: [
      {
        id: 1,
        title: "Workintech",
        image: favFilmProject,
        description: "Kullanıcılarınızın hangi çerezleri kabul edeceğini veya reddedeceğini seçmesine olanak tanıyan basit, özelleştirilebilir, minimum kurulum çerez eklentisi. Bu, Vanilla JS, SCSS ve Parcel Bundler ile oluşturulmuştur ve bir NPM paketi olarak mevcuttur ve git deposu her türlü özelleştirmeyi yapar kodlama ve temalar mümkün.",
        library: ["React", "Redux", "Axios"],
        github: "https://github.com/cuneytcagriyilmaz/fsweb-s10g3-redux-watchlist-solution",
        website: "https://cuneytcagriyilmaz-fsweb-s10g3-redux-watchlist-solution-chi.vercel.app/"
      },
      {
        id: 2,
        title: "Workintech",
        image: filmProject,
        description: "Kullanıcılarınızın hangi çerezleri kabul edeceğini veya reddedeceğini seçmesine olanak tanıyan basit, özelleştirilebilir, minimum kurulum çerez eklentisi. Bu, Vanilla JS, SCSS ve Parcel Bundler ile oluşturulmuştur ve bir NPM paketi olarak mevcuttur ve git deposu her türlü özelleştirmeyi yapar kodlama ve temalar mümkün.",
        library: ["React", "Redux", "Axios"],
        github: "https://github.com/cuneytcagriyilmaz/fsweb-s10g2-redux-filmler-solution",
        website: "https://cuneytcagriyilmaz-fsweb-s10g2-redux-filmler-solution-eight.vercel.app/movies"
      },
      {
        id: 3,
        title: "Workintech",
        image: pizza,
        description: "Kullanıcılarınızın hangi çerezleri kabul edeceğini veya reddedeceğini seçmesine olanak tanıyan basit, özelleştirilebilir, minimum kurulum çerez eklentisi. Bu, Vanilla JS, SCSS ve Parcel Bundler ile oluşturulmuştur ve bir NPM paketi olarak mevcuttur ve git deposu her türlü özelleştirmeyi yapar kodlama ve temalar mümkün.",
        library: ["React", "Redux", "Axios"],
        github: "https://github.com/cuneytcagriyilmaz/fsweb-s7-challenge-pizza",
        website: "https://fsweb-s7-challenge-pizza-lovat.vercel.app/order"
      }
    ],
    skillsData: [
      {
        title: "JavaScript",
        description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        title: "React.Js",
        description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        title: "Node.Js",
        description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }
    ],
  },
  en: {
    title: "Creative Thinker, Minimalism Lover",
    intro:
      " Hi, I’m Cagri. I’m a full-stack developer. If you are looking for a Developer who to craft solid and scalable frontend products withgreat user experiences. Let’s shake hands with me.",
    profile: "Profile",
    skill: "Skills",
    projects: "Projects",
    profileData: {
      headerData: "About Me",
      name: "Cüneyt Çağrı YILMAZ",
      birhdayData: "Birthday",
      birthdayValue: "22.05.1998",
      cityData: "City",
      cityValue: "Antalya",
      educationData: "Education",
      educationValue: {
        universityName: "Antalya Bilim Uni. Electrical Electornics Engineering",
        departmentType: "Bachelor's degree",
        graduadeYear: "2022",
      },
      jobData: "Full-Stack Java Developer",
      roleData: "Preferred Role",
      aboutData: [
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.", "Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!"
      ]
    },
    footerTitle: "Bir sonraki ürününüz üzerinde birlikte çalışalım.",
    headerData: {
      headerButtons: ["Skills", "Projects", "Hire Me"]
    },
    projectsData: [
      {
        id: 1,
        title: "Workintech",
        image: favFilmProject,
        description: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
        library: ["React", "Redux", "Axios"],
        github: "https://github.com/cuneytcagriyilmaz/fsweb-s10g3-redux-watchlist-solution",
        website: "https://cuneytcagriyilmaz-fsweb-s10g3-redux-watchlist-solution-chi.vercel.app/"
      },
      {
        id: 2,
        title: "Workintech",
        image: filmProject,
        description: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
        library: ["React", "Redux", "Axios"],
        github: "https://github.com/cuneytcagriyilmaz/fsweb-s10g2-redux-filmler-solution",
        website: "https://cuneytcagriyilmaz-fsweb-s10g2-redux-filmler-solution-eight.vercel.app/movies"
      },
      {
        id: 3,
        title: "Workintech",
        image: pizza,
        description: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
        library: ["React", "Redux", "Axios"],
        github: "https://github.com/cuneytcagriyilmaz/fsweb-s7-challenge-pizza",
        website: "https://fsweb-s7-challenge-pizza-lovat.vercel.app/order"
      }
    ],
    skillsData: [
      {
        title: "JavaScript",
        description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        title: "React.Js",
        description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        title: "Node.Js",
        description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }
    ],
  },

};
