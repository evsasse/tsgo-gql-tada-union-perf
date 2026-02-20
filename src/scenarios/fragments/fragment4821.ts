import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4819 } from "./fragment4819";
import type { FragmentToken4820 } from "./fragment4820";

export const FRAGMENT_4821 = gql(`
  fragment Fragment4821 on Member60 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_60
    memberCount_60
    memberMetric_60
  }
`);

type FragmentResult4821 = ResultOf<typeof FRAGMENT_4821>;
type FragmentSelf4821 = NonNullable<FragmentResult4821>;

export type FragmentToken4821 =
  | FragmentSelf4821["__typename"]
  | FragmentSelf4821["typenameHint"] | FragmentToken4819 | FragmentToken4820;
