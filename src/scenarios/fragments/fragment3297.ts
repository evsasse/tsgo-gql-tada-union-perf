import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3295 } from "./fragment3295";
import type { FragmentToken3296 } from "./fragment3296";

export const FRAGMENT_3297 = gql(`
  fragment Fragment3297 on Member216 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_216
    memberCount_216
    memberMetric_216
  }
`);

type FragmentResult3297 = ResultOf<typeof FRAGMENT_3297>;
type FragmentSelf3297 = NonNullable<FragmentResult3297>;

export type FragmentToken3297 =
  | FragmentSelf3297["__typename"]
  | FragmentSelf3297["typenameHint"] | FragmentToken3295 | FragmentToken3296;
