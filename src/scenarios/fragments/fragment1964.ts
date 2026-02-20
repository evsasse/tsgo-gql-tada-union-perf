import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1962 } from "./fragment1962";
import type { FragmentToken1963 } from "./fragment1963";

export const FRAGMENT_1964 = gql(`
  fragment Fragment1964 on Member03 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_03
    memberCount_03
    memberMetric_03
  }
`);

type FragmentResult1964 = ResultOf<typeof FRAGMENT_1964>;
type FragmentSelf1964 = NonNullable<FragmentResult1964>;

export type FragmentToken1964 =
  | FragmentSelf1964["__typename"]
  | FragmentSelf1964["typenameHint"] | FragmentToken1962 | FragmentToken1963;
