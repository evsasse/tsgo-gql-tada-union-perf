import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3357 } from "./fragment3357";
import type { FragmentToken3358 } from "./fragment3358";

export const FRAGMENT_3359 = gql(`
  fragment Fragment3359 on Member278 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_278
    memberCount_278
    memberMetric_278
  }
`);

type FragmentResult3359 = ResultOf<typeof FRAGMENT_3359>;
type FragmentSelf3359 = NonNullable<FragmentResult3359>;

export type FragmentToken3359 =
  | FragmentSelf3359["__typename"]
  | FragmentSelf3359["typenameHint"] | FragmentToken3357 | FragmentToken3358;
