import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2913 } from "./fragment2913";
import type { FragmentToken2914 } from "./fragment2914";

export const FRAGMENT_2915 = gql(`
  fragment Fragment2915 on Member114 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_114
    memberCount_114
    memberMetric_114
  }
`);

type FragmentResult2915 = ResultOf<typeof FRAGMENT_2915>;
type FragmentSelf2915 = NonNullable<FragmentResult2915>;

export type FragmentToken2915 =
  | FragmentSelf2915["__typename"]
  | FragmentSelf2915["typenameHint"] | FragmentToken2913 | FragmentToken2914;
