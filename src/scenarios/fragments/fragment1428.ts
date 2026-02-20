import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1426 } from "./fragment1426";
import type { FragmentToken1427 } from "./fragment1427";

export const FRAGMENT_1428 = gql(`
  fragment Fragment1428 on Member27 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_27
    memberCount_27
    memberMetric_27
  }
`);

type FragmentResult1428 = ResultOf<typeof FRAGMENT_1428>;
type FragmentSelf1428 = NonNullable<FragmentResult1428>;

export type FragmentToken1428 =
  | FragmentSelf1428["__typename"]
  | FragmentSelf1428["typenameHint"] | FragmentToken1426 | FragmentToken1427;
