import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken379 } from "./fragment379";
import type { FragmentToken380 } from "./fragment380";

export const FRAGMENT_381 = gql(`
  fragment Fragment381 on Member100 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_100
    memberCount_100
    memberMetric_100
  }
`);

type FragmentResult381 = ResultOf<typeof FRAGMENT_381>;
type FragmentSelf381 = NonNullable<FragmentResult381>;

export type FragmentToken381 =
  | FragmentSelf381["__typename"]
  | FragmentSelf381["typenameHint"] | FragmentToken379 | FragmentToken380;
