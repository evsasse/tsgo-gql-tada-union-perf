import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1006 } from "./fragment1006";
import type { FragmentToken1007 } from "./fragment1007";

export const FRAGMENT_1008 = gql(`
  fragment Fragment1008 on Member167 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_167
    memberCount_167
    memberMetric_167
  }
`);

type FragmentResult1008 = ResultOf<typeof FRAGMENT_1008>;
type FragmentSelf1008 = NonNullable<FragmentResult1008>;

export type FragmentToken1008 =
  | FragmentSelf1008["__typename"]
  | FragmentSelf1008["typenameHint"] | FragmentToken1006 | FragmentToken1007;
