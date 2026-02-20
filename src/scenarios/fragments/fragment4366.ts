import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4364 } from "./fragment4364";
import type { FragmentToken4365 } from "./fragment4365";

export const FRAGMENT_4366 = gql(`
  fragment Fragment4366 on Member165 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_165
    memberCount_165
    memberMetric_165
  }
`);

type FragmentResult4366 = ResultOf<typeof FRAGMENT_4366>;
type FragmentSelf4366 = NonNullable<FragmentResult4366>;

export type FragmentToken4366 =
  | FragmentSelf4366["__typename"]
  | FragmentSelf4366["typenameHint"] | FragmentToken4364 | FragmentToken4365;
