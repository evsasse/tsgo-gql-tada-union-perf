import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1934 } from "./fragment1934";
import type { FragmentToken1935 } from "./fragment1935";

export const FRAGMENT_1936 = gql(`
  fragment Fragment1936 on Member255 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_255
    memberCount_255
    memberMetric_255
  }
`);

type FragmentResult1936 = ResultOf<typeof FRAGMENT_1936>;
type FragmentSelf1936 = NonNullable<FragmentResult1936>;

export type FragmentToken1936 =
  | FragmentSelf1936["__typename"]
  | FragmentSelf1936["typenameHint"] | FragmentToken1934 | FragmentToken1935;
