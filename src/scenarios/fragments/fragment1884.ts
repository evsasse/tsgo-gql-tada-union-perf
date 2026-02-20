import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1882 } from "./fragment1882";
import type { FragmentToken1883 } from "./fragment1883";

export const FRAGMENT_1884 = gql(`
  fragment Fragment1884 on Member203 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_203
    memberCount_203
    memberMetric_203
  }
`);

type FragmentResult1884 = ResultOf<typeof FRAGMENT_1884>;
type FragmentSelf1884 = NonNullable<FragmentResult1884>;

export type FragmentToken1884 =
  | FragmentSelf1884["__typename"]
  | FragmentSelf1884["typenameHint"] | FragmentToken1882 | FragmentToken1883;
