import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3317 } from "./fragment3317";
import type { FragmentToken3318 } from "./fragment3318";

export const FRAGMENT_3319 = gql(`
  fragment Fragment3319 on Member238 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_238
    memberCount_238
    memberMetric_238
  }
`);

type FragmentResult3319 = ResultOf<typeof FRAGMENT_3319>;
type FragmentSelf3319 = NonNullable<FragmentResult3319>;

export type FragmentToken3319 =
  | FragmentSelf3319["__typename"]
  | FragmentSelf3319["typenameHint"] | FragmentToken3317 | FragmentToken3318;
