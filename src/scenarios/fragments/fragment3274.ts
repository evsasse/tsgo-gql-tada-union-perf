import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3272 } from "./fragment3272";
import type { FragmentToken3273 } from "./fragment3273";

export const FRAGMENT_3274 = gql(`
  fragment Fragment3274 on Member193 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_193
    memberCount_193
    memberMetric_193
  }
`);

type FragmentResult3274 = ResultOf<typeof FRAGMENT_3274>;
type FragmentSelf3274 = NonNullable<FragmentResult3274>;

export type FragmentToken3274 =
  | FragmentSelf3274["__typename"]
  | FragmentSelf3274["typenameHint"] | FragmentToken3272 | FragmentToken3273;
