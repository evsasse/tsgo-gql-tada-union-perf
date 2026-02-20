import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1675 } from "./fragment1675";
import type { FragmentToken1676 } from "./fragment1676";

export const FRAGMENT_1677 = gql(`
  fragment Fragment1677 on Member276 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_276
    memberCount_276
    memberMetric_276
  }
`);

type FragmentResult1677 = ResultOf<typeof FRAGMENT_1677>;
type FragmentSelf1677 = NonNullable<FragmentResult1677>;

export type FragmentToken1677 =
  | FragmentSelf1677["__typename"]
  | FragmentSelf1677["typenameHint"] | FragmentToken1675 | FragmentToken1676;
