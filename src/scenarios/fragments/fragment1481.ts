import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1479 } from "./fragment1479";
import type { FragmentToken1480 } from "./fragment1480";

export const FRAGMENT_1481 = gql(`
  fragment Fragment1481 on Member80 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_80
    memberCount_80
    memberMetric_80
  }
`);

type FragmentResult1481 = ResultOf<typeof FRAGMENT_1481>;
type FragmentSelf1481 = NonNullable<FragmentResult1481>;

export type FragmentToken1481 =
  | FragmentSelf1481["__typename"]
  | FragmentSelf1481["typenameHint"] | FragmentToken1479 | FragmentToken1480;
