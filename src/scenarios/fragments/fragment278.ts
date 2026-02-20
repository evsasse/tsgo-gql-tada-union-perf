import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken276 } from "./fragment276";
import type { FragmentToken277 } from "./fragment277";

export const FRAGMENT_278 = gql(`
  fragment Fragment278 on Member277 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_277
    memberCount_277
    memberMetric_277
  }
`);

type FragmentResult278 = ResultOf<typeof FRAGMENT_278>;
type FragmentSelf278 = NonNullable<FragmentResult278>;

export type FragmentToken278 =
  | FragmentSelf278["__typename"]
  | FragmentSelf278["typenameHint"] | FragmentToken276 | FragmentToken277;
