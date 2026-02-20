import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3491 } from "./fragment3491";
import type { FragmentToken3492 } from "./fragment3492";

export const FRAGMENT_3493 = gql(`
  fragment Fragment3493 on Member132 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_132
    memberCount_132
    memberMetric_132
  }
`);

type FragmentResult3493 = ResultOf<typeof FRAGMENT_3493>;
type FragmentSelf3493 = NonNullable<FragmentResult3493>;

export type FragmentToken3493 =
  | FragmentSelf3493["__typename"]
  | FragmentSelf3493["typenameHint"] | FragmentToken3491 | FragmentToken3492;
