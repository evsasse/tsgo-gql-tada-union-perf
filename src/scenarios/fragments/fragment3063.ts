import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3061 } from "./fragment3061";
import type { FragmentToken3062 } from "./fragment3062";

export const FRAGMENT_3063 = gql(`
  fragment Fragment3063 on Member262 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_262
    memberCount_262
    memberMetric_262
  }
`);

type FragmentResult3063 = ResultOf<typeof FRAGMENT_3063>;
type FragmentSelf3063 = NonNullable<FragmentResult3063>;

export type FragmentToken3063 =
  | FragmentSelf3063["__typename"]
  | FragmentSelf3063["typenameHint"] | FragmentToken3061 | FragmentToken3062;
