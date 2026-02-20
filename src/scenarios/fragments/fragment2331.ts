import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2329 } from "./fragment2329";
import type { FragmentToken2330 } from "./fragment2330";

export const FRAGMENT_2331 = gql(`
  fragment Fragment2331 on Member90 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_90
    memberCount_90
    memberMetric_90
  }
`);

type FragmentResult2331 = ResultOf<typeof FRAGMENT_2331>;
type FragmentSelf2331 = NonNullable<FragmentResult2331>;

export type FragmentToken2331 =
  | FragmentSelf2331["__typename"]
  | FragmentSelf2331["typenameHint"] | FragmentToken2329 | FragmentToken2330;
