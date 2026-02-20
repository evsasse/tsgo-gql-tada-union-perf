import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2108 } from "./fragment2108";
import type { FragmentToken2109 } from "./fragment2109";

export const FRAGMENT_2110 = gql(`
  fragment Fragment2110 on Member149 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_149
    memberCount_149
    memberMetric_149
  }
`);

type FragmentResult2110 = ResultOf<typeof FRAGMENT_2110>;
type FragmentSelf2110 = NonNullable<FragmentResult2110>;

export type FragmentToken2110 =
  | FragmentSelf2110["__typename"]
  | FragmentSelf2110["typenameHint"] | FragmentToken2108 | FragmentToken2109;
