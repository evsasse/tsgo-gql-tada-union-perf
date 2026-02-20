import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4544 } from "./fragment4544";
import type { FragmentToken4545 } from "./fragment4545";

export const FRAGMENT_4546 = gql(`
  fragment Fragment4546 on Member65 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_65
    memberCount_65
    memberMetric_65
  }
`);

type FragmentResult4546 = ResultOf<typeof FRAGMENT_4546>;
type FragmentSelf4546 = NonNullable<FragmentResult4546>;

export type FragmentToken4546 =
  | FragmentSelf4546["__typename"]
  | FragmentSelf4546["typenameHint"] | FragmentToken4544 | FragmentToken4545;
