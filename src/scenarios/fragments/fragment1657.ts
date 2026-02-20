import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1655 } from "./fragment1655";
import type { FragmentToken1656 } from "./fragment1656";

export const FRAGMENT_1657 = gql(`
  fragment Fragment1657 on Member256 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_256
    memberCount_256
    memberMetric_256
  }
`);

type FragmentResult1657 = ResultOf<typeof FRAGMENT_1657>;
type FragmentSelf1657 = NonNullable<FragmentResult1657>;

export type FragmentToken1657 =
  | FragmentSelf1657["__typename"]
  | FragmentSelf1657["typenameHint"] | FragmentToken1655 | FragmentToken1656;
