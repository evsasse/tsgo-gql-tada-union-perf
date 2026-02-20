import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3416 } from "./fragment3416";
import type { FragmentToken3417 } from "./fragment3417";

export const FRAGMENT_3418 = gql(`
  fragment Fragment3418 on Member57 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_57
    memberCount_57
    memberMetric_57
  }
`);

type FragmentResult3418 = ResultOf<typeof FRAGMENT_3418>;
type FragmentSelf3418 = NonNullable<FragmentResult3418>;

export type FragmentToken3418 =
  | FragmentSelf3418["__typename"]
  | FragmentSelf3418["typenameHint"] | FragmentToken3416 | FragmentToken3417;
