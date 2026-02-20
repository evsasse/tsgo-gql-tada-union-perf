import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1978 } from "./fragment1978";
import type { FragmentToken1979 } from "./fragment1979";

export const FRAGMENT_1980 = gql(`
  fragment Fragment1980 on Member19 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_19
    memberCount_19
    memberMetric_19
  }
`);

type FragmentResult1980 = ResultOf<typeof FRAGMENT_1980>;
type FragmentSelf1980 = NonNullable<FragmentResult1980>;

export type FragmentToken1980 =
  | FragmentSelf1980["__typename"]
  | FragmentSelf1980["typenameHint"] | FragmentToken1978 | FragmentToken1979;
