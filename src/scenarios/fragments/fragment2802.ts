import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2800 } from "./fragment2800";
import type { FragmentToken2801 } from "./fragment2801";

export const FRAGMENT_2802 = gql(`
  fragment Fragment2802 on Member01 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_01
    memberCount_01
    memberMetric_01
  }
`);

type FragmentResult2802 = ResultOf<typeof FRAGMENT_2802>;
type FragmentSelf2802 = NonNullable<FragmentResult2802>;

export type FragmentToken2802 =
  | FragmentSelf2802["__typename"]
  | FragmentSelf2802["typenameHint"] | FragmentToken2800 | FragmentToken2801;
