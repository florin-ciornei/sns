export default class Author {
    id: string = "";
    secret: string = "id criptat";
    /** an empty string means that the author is local */
    name: string = "";
    /** Use / to created nested tags, ex: tag/subtag/sub-sub-tag */
    tags: Set<string> = new Set;
}