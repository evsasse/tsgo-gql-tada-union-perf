import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1940 } from "./fragment1940";
import type { FragmentToken1941 } from "./fragment1941";

export const FRAGMENT_1942 = gql(`
  fragment Fragment1942 on Member261 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_261
    memberCount_261
    memberMetric_261
  }
`);

type FragmentResult1942 = ResultOf<typeof FRAGMENT_1942>;
type FragmentSelf1942 = NonNullable<FragmentResult1942>;

export type FragmentToken1942 =
  | FragmentSelf1942["__typename"]
  | FragmentSelf1942["typenameHint"] | FragmentToken1940 | FragmentToken1941;
