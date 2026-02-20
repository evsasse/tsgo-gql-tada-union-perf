import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3089 } from "./fragment3089";
import type { FragmentToken3090 } from "./fragment3090";

export const FRAGMENT_3091 = gql(`
  fragment Fragment3091 on Member10 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_10
    memberCount_10
    memberMetric_10
  }
`);

type FragmentResult3091 = ResultOf<typeof FRAGMENT_3091>;
type FragmentSelf3091 = NonNullable<FragmentResult3091>;

export type FragmentToken3091 =
  | FragmentSelf3091["__typename"]
  | FragmentSelf3091["typenameHint"] | FragmentToken3089 | FragmentToken3090;
