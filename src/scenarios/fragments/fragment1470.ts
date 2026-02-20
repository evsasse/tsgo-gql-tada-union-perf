import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1468 } from "./fragment1468";
import type { FragmentToken1469 } from "./fragment1469";

export const FRAGMENT_1470 = gql(`
  fragment Fragment1470 on Member69 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_69
    memberCount_69
    memberMetric_69
  }
`);

type FragmentResult1470 = ResultOf<typeof FRAGMENT_1470>;
type FragmentSelf1470 = NonNullable<FragmentResult1470>;

export type FragmentToken1470 =
  | FragmentSelf1470["__typename"]
  | FragmentSelf1470["typenameHint"] | FragmentToken1468 | FragmentToken1469;
