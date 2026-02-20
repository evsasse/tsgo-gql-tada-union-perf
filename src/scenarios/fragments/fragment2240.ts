import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2238 } from "./fragment2238";
import type { FragmentToken2239 } from "./fragment2239";

export const FRAGMENT_2240 = gql(`
  fragment Fragment2240 on Member279 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_279
    memberCount_279
    memberMetric_279
  }
`);

type FragmentResult2240 = ResultOf<typeof FRAGMENT_2240>;
type FragmentSelf2240 = NonNullable<FragmentResult2240>;

export type FragmentToken2240 =
  | FragmentSelf2240["__typename"]
  | FragmentSelf2240["typenameHint"] | FragmentToken2238 | FragmentToken2239;
