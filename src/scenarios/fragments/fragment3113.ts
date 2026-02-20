import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3111 } from "./fragment3111";
import type { FragmentToken3112 } from "./fragment3112";

export const FRAGMENT_3113 = gql(`
  fragment Fragment3113 on Member32 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_32
    memberCount_32
    memberMetric_32
  }
`);

type FragmentResult3113 = ResultOf<typeof FRAGMENT_3113>;
type FragmentSelf3113 = NonNullable<FragmentResult3113>;

export type FragmentToken3113 =
  | FragmentSelf3113["__typename"]
  | FragmentSelf3113["typenameHint"] | FragmentToken3111 | FragmentToken3112;
