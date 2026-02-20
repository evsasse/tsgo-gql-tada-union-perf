import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3133 } from "./fragment3133";
import type { FragmentToken3134 } from "./fragment3134";

export const FRAGMENT_3135 = gql(`
  fragment Fragment3135 on Member54 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_54
    memberCount_54
    memberMetric_54
  }
`);

type FragmentResult3135 = ResultOf<typeof FRAGMENT_3135>;
type FragmentSelf3135 = NonNullable<FragmentResult3135>;

export type FragmentToken3135 =
  | FragmentSelf3135["__typename"]
  | FragmentSelf3135["typenameHint"] | FragmentToken3133 | FragmentToken3134;
