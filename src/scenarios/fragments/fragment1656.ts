import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1654 } from "./fragment1654";
import type { FragmentToken1655 } from "./fragment1655";

export const FRAGMENT_1656 = gql(`
  fragment Fragment1656 on Member255 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_255
    memberCount_255
    memberMetric_255
  }
`);

type FragmentResult1656 = ResultOf<typeof FRAGMENT_1656>;
type FragmentSelf1656 = NonNullable<FragmentResult1656>;

export type FragmentToken1656 =
  | FragmentSelf1656["__typename"]
  | FragmentSelf1656["typenameHint"] | FragmentToken1654 | FragmentToken1655;
