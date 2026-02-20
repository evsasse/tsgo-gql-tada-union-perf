import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2199 } from "./fragment2199";
import type { FragmentToken2200 } from "./fragment2200";

export const FRAGMENT_2201 = gql(`
  fragment Fragment2201 on Member240 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_240
    memberCount_240
    memberMetric_240
  }
`);

type FragmentResult2201 = ResultOf<typeof FRAGMENT_2201>;
type FragmentSelf2201 = NonNullable<FragmentResult2201>;

export type FragmentToken2201 =
  | FragmentSelf2201["__typename"]
  | FragmentSelf2201["typenameHint"] | FragmentToken2199 | FragmentToken2200;
