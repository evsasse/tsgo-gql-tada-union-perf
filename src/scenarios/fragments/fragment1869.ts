import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1867 } from "./fragment1867";
import type { FragmentToken1868 } from "./fragment1868";

export const FRAGMENT_1869 = gql(`
  fragment Fragment1869 on Member188 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_188
    memberCount_188
    memberMetric_188
  }
`);

type FragmentResult1869 = ResultOf<typeof FRAGMENT_1869>;
type FragmentSelf1869 = NonNullable<FragmentResult1869>;

export type FragmentToken1869 =
  | FragmentSelf1869["__typename"]
  | FragmentSelf1869["typenameHint"] | FragmentToken1867 | FragmentToken1868;
