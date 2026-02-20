import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2289 } from "./fragment2289";
import type { FragmentToken2290 } from "./fragment2290";

export const FRAGMENT_2291 = gql(`
  fragment Fragment2291 on Member50 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_50
    memberCount_50
    memberMetric_50
  }
`);

type FragmentResult2291 = ResultOf<typeof FRAGMENT_2291>;
type FragmentSelf2291 = NonNullable<FragmentResult2291>;

export type FragmentToken2291 =
  | FragmentSelf2291["__typename"]
  | FragmentSelf2291["typenameHint"] | FragmentToken2289 | FragmentToken2290;
