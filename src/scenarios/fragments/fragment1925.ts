import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1923 } from "./fragment1923";
import type { FragmentToken1924 } from "./fragment1924";

export const FRAGMENT_1925 = gql(`
  fragment Fragment1925 on Member244 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_244
    memberCount_244
    memberMetric_244
  }
`);

type FragmentResult1925 = ResultOf<typeof FRAGMENT_1925>;
type FragmentSelf1925 = NonNullable<FragmentResult1925>;

export type FragmentToken1925 =
  | FragmentSelf1925["__typename"]
  | FragmentSelf1925["typenameHint"] | FragmentToken1923 | FragmentToken1924;
