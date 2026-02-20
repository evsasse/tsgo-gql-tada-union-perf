import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3901 } from "./fragment3901";
import type { FragmentToken3902 } from "./fragment3902";

export const FRAGMENT_3903 = gql(`
  fragment Fragment3903 on Member262 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_262
    memberCount_262
    memberMetric_262
  }
`);

type FragmentResult3903 = ResultOf<typeof FRAGMENT_3903>;
type FragmentSelf3903 = NonNullable<FragmentResult3903>;

export type FragmentToken3903 =
  | FragmentSelf3903["__typename"]
  | FragmentSelf3903["typenameHint"] | FragmentToken3901 | FragmentToken3902;
