import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3007 } from "./fragment3007";
import type { FragmentToken3008 } from "./fragment3008";

export const FRAGMENT_3009 = gql(`
  fragment Fragment3009 on Member208 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_208
    memberCount_208
    memberMetric_208
  }
`);

type FragmentResult3009 = ResultOf<typeof FRAGMENT_3009>;
type FragmentSelf3009 = NonNullable<FragmentResult3009>;

export type FragmentToken3009 =
  | FragmentSelf3009["__typename"]
  | FragmentSelf3009["typenameHint"] | FragmentToken3007 | FragmentToken3008;
