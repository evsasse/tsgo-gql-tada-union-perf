import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1408 } from "./fragment1408";
import type { FragmentToken1409 } from "./fragment1409";

export const FRAGMENT_1410 = gql(`
  fragment Fragment1410 on Member09 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_09
    memberCount_09
    memberMetric_09
  }
`);

type FragmentResult1410 = ResultOf<typeof FRAGMENT_1410>;
type FragmentSelf1410 = NonNullable<FragmentResult1410>;

export type FragmentToken1410 =
  | FragmentSelf1410["__typename"]
  | FragmentSelf1410["typenameHint"] | FragmentToken1408 | FragmentToken1409;
