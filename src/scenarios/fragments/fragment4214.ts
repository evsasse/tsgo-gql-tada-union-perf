import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4212 } from "./fragment4212";
import type { FragmentToken4213 } from "./fragment4213";

export const FRAGMENT_4214 = gql(`
  fragment Fragment4214 on Member13 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_13
    memberCount_13
    memberMetric_13
  }
`);

type FragmentResult4214 = ResultOf<typeof FRAGMENT_4214>;
type FragmentSelf4214 = NonNullable<FragmentResult4214>;

export type FragmentToken4214 =
  | FragmentSelf4214["__typename"]
  | FragmentSelf4214["typenameHint"] | FragmentToken4212 | FragmentToken4213;
