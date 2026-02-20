import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1699 } from "./fragment1699";
import type { FragmentToken1700 } from "./fragment1700";

export const FRAGMENT_1701 = gql(`
  fragment Fragment1701 on Member20 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_20
    memberCount_20
    memberMetric_20
  }
`);

type FragmentResult1701 = ResultOf<typeof FRAGMENT_1701>;
type FragmentSelf1701 = NonNullable<FragmentResult1701>;

export type FragmentToken1701 =
  | FragmentSelf1701["__typename"]
  | FragmentSelf1701["typenameHint"] | FragmentToken1699 | FragmentToken1700;
