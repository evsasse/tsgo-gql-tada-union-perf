import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken098 } from "./fragment098";
import type { FragmentToken099 } from "./fragment099";

export const FRAGMENT_100 = gql(`
  fragment Fragment100 on Member99 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_99
    memberCount_99
    memberMetric_99
  }
`);

type FragmentResult100 = ResultOf<typeof FRAGMENT_100>;
type FragmentSelf100 = NonNullable<FragmentResult100>;

export type FragmentToken100 =
  | FragmentSelf100["__typename"]
  | FragmentSelf100["typenameHint"] | FragmentToken098 | FragmentToken099;
