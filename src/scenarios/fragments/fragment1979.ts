import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1977 } from "./fragment1977";
import type { FragmentToken1978 } from "./fragment1978";

export const FRAGMENT_1979 = gql(`
  fragment Fragment1979 on Member18 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_18
    memberCount_18
    memberMetric_18
  }
`);

type FragmentResult1979 = ResultOf<typeof FRAGMENT_1979>;
type FragmentSelf1979 = NonNullable<FragmentResult1979>;

export type FragmentToken1979 =
  | FragmentSelf1979["__typename"]
  | FragmentSelf1979["typenameHint"] | FragmentToken1977 | FragmentToken1978;
