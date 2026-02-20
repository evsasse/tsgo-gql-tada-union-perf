import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4905 } from "./fragment4905";
import type { FragmentToken4906 } from "./fragment4906";

export const FRAGMENT_4907 = gql(`
  fragment Fragment4907 on Member146 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_146
    memberCount_146
    memberMetric_146
  }
`);

type FragmentResult4907 = ResultOf<typeof FRAGMENT_4907>;
type FragmentSelf4907 = NonNullable<FragmentResult4907>;

export type FragmentToken4907 =
  | FragmentSelf4907["__typename"]
  | FragmentSelf4907["typenameHint"] | FragmentToken4905 | FragmentToken4906;
