import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4518 } from "./fragment4518";
import type { FragmentToken4519 } from "./fragment4519";

export const FRAGMENT_4520 = gql(`
  fragment Fragment4520 on Member39 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_39
    memberCount_39
    memberMetric_39
  }
`);

type FragmentResult4520 = ResultOf<typeof FRAGMENT_4520>;
type FragmentSelf4520 = NonNullable<FragmentResult4520>;

export type FragmentToken4520 =
  | FragmentSelf4520["__typename"]
  | FragmentSelf4520["typenameHint"] | FragmentToken4518 | FragmentToken4519;
