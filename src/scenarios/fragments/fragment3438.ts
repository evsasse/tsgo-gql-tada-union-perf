import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3436 } from "./fragment3436";
import type { FragmentToken3437 } from "./fragment3437";

export const FRAGMENT_3438 = gql(`
  fragment Fragment3438 on Member77 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_77
    memberCount_77
    memberMetric_77
  }
`);

type FragmentResult3438 = ResultOf<typeof FRAGMENT_3438>;
type FragmentSelf3438 = NonNullable<FragmentResult3438>;

export type FragmentToken3438 =
  | FragmentSelf3438["__typename"]
  | FragmentSelf3438["typenameHint"] | FragmentToken3436 | FragmentToken3437;
