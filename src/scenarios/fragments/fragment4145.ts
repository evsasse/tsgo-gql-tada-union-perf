import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4143 } from "./fragment4143";
import type { FragmentToken4144 } from "./fragment4144";

export const FRAGMENT_4145 = gql(`
  fragment Fragment4145 on Member224 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_224
    memberCount_224
    memberMetric_224
  }
`);

type FragmentResult4145 = ResultOf<typeof FRAGMENT_4145>;
type FragmentSelf4145 = NonNullable<FragmentResult4145>;

export type FragmentToken4145 =
  | FragmentSelf4145["__typename"]
  | FragmentSelf4145["typenameHint"] | FragmentToken4143 | FragmentToken4144;
