import { IconName } from "@fortawesome/fontawesome-svg-core";

export default interface IProject {
    name: string;
    description: string;
    image: string;
    linkTitle: string;
    link: string;
    codeTitle: string;
    code: string;
    stackIcons: any[];
}