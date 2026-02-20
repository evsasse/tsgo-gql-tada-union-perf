import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1436 } from "./fragment1436";
import type { FragmentToken1437 } from "./fragment1437";

export const FRAGMENT_1438 = gql(`
  fragment Fragment1438 on Member37 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_37
    memberCount_37
    memberMetric_37
  }
`);

type FragmentResult1438 = ResultOf<typeof FRAGMENT_1438>;
type FragmentSelf1438 = NonNullable<FragmentResult1438>;

export type FragmentToken1438 =
  | FragmentSelf1438["__typename"]
  | FragmentSelf1438["typenameHint"] | FragmentToken1436 | FragmentToken1437;
