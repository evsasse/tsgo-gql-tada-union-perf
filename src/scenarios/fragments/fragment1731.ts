import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1729 } from "./fragment1729";
import type { FragmentToken1730 } from "./fragment1730";

export const FRAGMENT_1731 = gql(`
  fragment Fragment1731 on Member50 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_50
    memberCount_50
    memberMetric_50
  }
`);

type FragmentResult1731 = ResultOf<typeof FRAGMENT_1731>;
type FragmentSelf1731 = NonNullable<FragmentResult1731>;

export type FragmentToken1731 =
  | FragmentSelf1731["__typename"]
  | FragmentSelf1731["typenameHint"] | FragmentToken1729 | FragmentToken1730;
