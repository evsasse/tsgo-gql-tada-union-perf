import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4084 } from "./fragment4084";
import type { FragmentToken4085 } from "./fragment4085";

export const FRAGMENT_4086 = gql(`
  fragment Fragment4086 on Member165 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_165
    memberCount_165
    memberMetric_165
  }
`);

type FragmentResult4086 = ResultOf<typeof FRAGMENT_4086>;
type FragmentSelf4086 = NonNullable<FragmentResult4086>;

export type FragmentToken4086 =
  | FragmentSelf4086["__typename"]
  | FragmentSelf4086["typenameHint"] | FragmentToken4084 | FragmentToken4085;
