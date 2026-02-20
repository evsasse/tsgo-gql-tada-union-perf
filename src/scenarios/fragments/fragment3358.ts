import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3356 } from "./fragment3356";
import type { FragmentToken3357 } from "./fragment3357";

export const FRAGMENT_3358 = gql(`
  fragment Fragment3358 on Member277 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_277
    memberCount_277
    memberMetric_277
  }
`);

type FragmentResult3358 = ResultOf<typeof FRAGMENT_3358>;
type FragmentSelf3358 = NonNullable<FragmentResult3358>;

export type FragmentToken3358 =
  | FragmentSelf3358["__typename"]
  | FragmentSelf3358["typenameHint"] | FragmentToken3356 | FragmentToken3357;
