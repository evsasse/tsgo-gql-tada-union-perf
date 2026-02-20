import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3852 } from "./fragment3852";
import type { FragmentToken3853 } from "./fragment3853";

export const FRAGMENT_3854 = gql(`
  fragment Fragment3854 on Member213 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_213
    memberCount_213
    memberMetric_213
  }
`);

type FragmentResult3854 = ResultOf<typeof FRAGMENT_3854>;
type FragmentSelf3854 = NonNullable<FragmentResult3854>;

export type FragmentToken3854 =
  | FragmentSelf3854["__typename"]
  | FragmentSelf3854["typenameHint"] | FragmentToken3852 | FragmentToken3853;
