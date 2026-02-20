import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2932 } from "./fragment2932";
import type { FragmentToken2933 } from "./fragment2933";

export const FRAGMENT_2934 = gql(`
  fragment Fragment2934 on Member133 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_133
    memberCount_133
    memberMetric_133
  }
`);

type FragmentResult2934 = ResultOf<typeof FRAGMENT_2934>;
type FragmentSelf2934 = NonNullable<FragmentResult2934>;

export type FragmentToken2934 =
  | FragmentSelf2934["__typename"]
  | FragmentSelf2934["typenameHint"] | FragmentToken2932 | FragmentToken2933;
