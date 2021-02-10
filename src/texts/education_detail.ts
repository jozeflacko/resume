import IDetail from "../interfaces/IDetail";

const detail: IDetail = {
    icon:'graduation-cap',
    items: [
      {
        name: 'Master of Engineering',
        subname: 'Study program: Business Informatics',
        place: 'Technical University of Kosice, Slovakia',
        from: 'September 2013',
        to: 'May 2015',
        logos:['../assets/logos/tu.png'],
        description: `My engineer degree study programme was focused on the acquirement of theoretical and 
        practical knowledge in the field of design and development business enterprise systems and 
        on database systems analysis. My overall classification of the qualification was 89.9%`,
        www:'www.tuke.sk',
        notes: `Master Thesis: “Implementation of a software system for
        experimental analysis of methods for aggregation of opinions using
        Adaboost”`,
        links: [
          {
            icon:"graduation-cap",
            text:'Diploma',
            www:`../assets/pdf/Lacko_Jozef_Diplom_Master_Slovak_English.pdf`,
            color:'#4885ed'
          }
        ],
      },
      {
        name: 'Bachelor of Engineering',
        subname: 'Study program: Business Informatics',
        place: 'Technical University of Kosice, Slovakia',
        from: 'September 2010',
        to: 'June 2013',
        /*logos:['../assets/logos/tu.png'],*/
        description: `My bachelor degree study programme was focused on the acquirement of 
        knowledge in the field of computer network management, data analysis, business economy, 
        design of business enterprise systems and programming. My overall classification of the qualification was 84.9%`,
        www:'www.tuke.sk',
        notes: `Master Thesis: "Design and realization of Music Box". The main aim of the bachelor 
        thesis was to create a musical machine based on a set of liquid-filled bottles controlled by a computer LabJack interface.`,
        links: [
          {
            icon:"graduation-cap",
            text:'Diploma',
            www:`../assets/pdf/Lacko_Jozef_Diplom_Bachelor_Slovak_English.pdf`,
            color:'#4885ed'
          }
        ],
      }
    ]
};
export default detail;
