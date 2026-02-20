import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3286 } from "./fragment3286";
import type { FragmentToken3287 } from "./fragment3287";

export const FRAGMENT_3288 = gql(`
  fragment Fragment3288 on Member207 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_207
    memberCount_207
    memberMetric_207
  }
`);

type FragmentResult3288 = ResultOf<typeof FRAGMENT_3288>;
type FragmentSelf3288 = NonNullable<FragmentResult3288>;

export type FragmentToken3288 =
  | FragmentSelf3288["__typename"]
  | FragmentSelf3288["typenameHint"] | FragmentToken3286 | FragmentToken3287;
