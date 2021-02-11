import IContact from "../interfaces/IContact";

const contacts: IContact[] = [
    {label: 'Name', icon: "user", value: 'Jozef Lacko'},
    {label: 'Nationality', icon: "globe", value: 'Slovak, EU'},
    {label: 'Live', icon: "map-marker", value: 'Vienna, Austria'},
    {label: 'Email', icon: "envelope", value: 'jlacko27@gmail.com', mailLink: 'jlacko27@gmail.com'},
    {label: 'LinkedIn ', icon: "linkedin", value: 'jozeflacko', link: 'https://www.linkedin.com/in/jozeflacko'},
    {label: 'GitHub ', icon: "github", value: 'jozeflacko', link: 'https://github.com/jozeflacko'},
];

export default contacts;