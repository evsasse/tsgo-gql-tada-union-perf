import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1409 } from "./fragment1409";
import type { FragmentToken1410 } from "./fragment1410";

export const FRAGMENT_1411 = gql(`
  fragment Fragment1411 on Member10 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_10
    memberCount_10
    memberMetric_10
  }
`);

type FragmentResult1411 = ResultOf<typeof FRAGMENT_1411>;
type FragmentSelf1411 = NonNullable<FragmentResult1411>;

export type FragmentToken1411 =
  | FragmentSelf1411["__typename"]
  | FragmentSelf1411["typenameHint"] | FragmentToken1409 | FragmentToken1410;
