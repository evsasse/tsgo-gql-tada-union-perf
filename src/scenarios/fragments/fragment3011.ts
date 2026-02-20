import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3009 } from "./fragment3009";
import type { FragmentToken3010 } from "./fragment3010";

export const FRAGMENT_3011 = gql(`
  fragment Fragment3011 on Member210 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_210
    memberCount_210
    memberMetric_210
  }
`);

type FragmentResult3011 = ResultOf<typeof FRAGMENT_3011>;
type FragmentSelf3011 = NonNullable<FragmentResult3011>;

export type FragmentToken3011 =
  | FragmentSelf3011["__typename"]
  | FragmentSelf3011["typenameHint"] | FragmentToken3009 | FragmentToken3010;
