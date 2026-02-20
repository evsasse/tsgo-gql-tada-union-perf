import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1402 } from "./fragment1402";
import type { FragmentToken1403 } from "./fragment1403";

export const FRAGMENT_1404 = gql(`
  fragment Fragment1404 on Member03 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_03
    memberCount_03
    memberMetric_03
  }
`);

type FragmentResult1404 = ResultOf<typeof FRAGMENT_1404>;
type FragmentSelf1404 = NonNullable<FragmentResult1404>;

export type FragmentToken1404 =
  | FragmentSelf1404["__typename"]
  | FragmentSelf1404["typenameHint"] | FragmentToken1402 | FragmentToken1403;
