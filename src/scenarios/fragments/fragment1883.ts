import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1881 } from "./fragment1881";
import type { FragmentToken1882 } from "./fragment1882";

export const FRAGMENT_1883 = gql(`
  fragment Fragment1883 on Member202 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_202
    memberCount_202
    memberMetric_202
  }
`);

type FragmentResult1883 = ResultOf<typeof FRAGMENT_1883>;
type FragmentSelf1883 = NonNullable<FragmentResult1883>;

export type FragmentToken1883 =
  | FragmentSelf1883["__typename"]
  | FragmentSelf1883["typenameHint"] | FragmentToken1881 | FragmentToken1882;
