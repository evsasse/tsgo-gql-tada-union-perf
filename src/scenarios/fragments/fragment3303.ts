import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3301 } from "./fragment3301";
import type { FragmentToken3302 } from "./fragment3302";

export const FRAGMENT_3303 = gql(`
  fragment Fragment3303 on Member222 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_222
    memberCount_222
    memberMetric_222
  }
`);

type FragmentResult3303 = ResultOf<typeof FRAGMENT_3303>;
type FragmentSelf3303 = NonNullable<FragmentResult3303>;

export type FragmentToken3303 =
  | FragmentSelf3303["__typename"]
  | FragmentSelf3303["typenameHint"] | FragmentToken3301 | FragmentToken3302;
