import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3091 } from "./fragment3091";
import type { FragmentToken3092 } from "./fragment3092";

export const FRAGMENT_3093 = gql(`
  fragment Fragment3093 on Member12 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_12
    memberCount_12
    memberMetric_12
  }
`);

type FragmentResult3093 = ResultOf<typeof FRAGMENT_3093>;
type FragmentSelf3093 = NonNullable<FragmentResult3093>;

export type FragmentToken3093 =
  | FragmentSelf3093["__typename"]
  | FragmentSelf3093["typenameHint"] | FragmentToken3091 | FragmentToken3092;
