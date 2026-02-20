import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3704 } from "./fragment3704";
import type { FragmentToken3705 } from "./fragment3705";

export const FRAGMENT_3706 = gql(`
  fragment Fragment3706 on Member65 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_65
    memberCount_65
    memberMetric_65
  }
`);

type FragmentResult3706 = ResultOf<typeof FRAGMENT_3706>;
type FragmentSelf3706 = NonNullable<FragmentResult3706>;

export type FragmentToken3706 =
  | FragmentSelf3706["__typename"]
  | FragmentSelf3706["typenameHint"] | FragmentToken3704 | FragmentToken3705;
