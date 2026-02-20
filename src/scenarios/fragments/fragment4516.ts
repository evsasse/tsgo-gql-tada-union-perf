import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4514 } from "./fragment4514";
import type { FragmentToken4515 } from "./fragment4515";

export const FRAGMENT_4516 = gql(`
  fragment Fragment4516 on Member35 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_35
    memberCount_35
    memberMetric_35
  }
`);

type FragmentResult4516 = ResultOf<typeof FRAGMENT_4516>;
type FragmentSelf4516 = NonNullable<FragmentResult4516>;

export type FragmentToken4516 =
  | FragmentSelf4516["__typename"]
  | FragmentSelf4516["typenameHint"] | FragmentToken4514 | FragmentToken4515;
