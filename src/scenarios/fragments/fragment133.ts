import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken131 } from "./fragment131";
import type { FragmentToken132 } from "./fragment132";

export const FRAGMENT_133 = gql(`
  fragment Fragment133 on Member132 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_132
    memberCount_132
    memberMetric_132
  }
`);

type FragmentResult133 = ResultOf<typeof FRAGMENT_133>;
type FragmentSelf133 = NonNullable<FragmentResult133>;

export type FragmentToken133 =
  | FragmentSelf133["__typename"]
  | FragmentSelf133["typenameHint"] | FragmentToken131 | FragmentToken132;
