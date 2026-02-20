import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3307 } from "./fragment3307";
import type { FragmentToken3308 } from "./fragment3308";

export const FRAGMENT_3309 = gql(`
  fragment Fragment3309 on Member228 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_228
    memberCount_228
    memberMetric_228
  }
`);

type FragmentResult3309 = ResultOf<typeof FRAGMENT_3309>;
type FragmentSelf3309 = NonNullable<FragmentResult3309>;

export type FragmentToken3309 =
  | FragmentSelf3309["__typename"]
  | FragmentSelf3309["typenameHint"] | FragmentToken3307 | FragmentToken3308;
