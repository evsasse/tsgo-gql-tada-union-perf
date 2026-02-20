import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2173 } from "./fragment2173";
import type { FragmentToken2174 } from "./fragment2174";

export const FRAGMENT_2175 = gql(`
  fragment Fragment2175 on Member214 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_214
    memberCount_214
    memberMetric_214
  }
`);

type FragmentResult2175 = ResultOf<typeof FRAGMENT_2175>;
type FragmentSelf2175 = NonNullable<FragmentResult2175>;

export type FragmentToken2175 =
  | FragmentSelf2175["__typename"]
  | FragmentSelf2175["typenameHint"] | FragmentToken2173 | FragmentToken2174;
