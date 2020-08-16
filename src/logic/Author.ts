export default class Author {
  id = "";
  secret = "id criptat";
  /** an empty string means that the author is local */
  name = "";
  /** Use / to created nested tags, ex: tag/subtag/sub-sub-tag */
  tags: Set<string> = new Set();
}
