import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3677 } from "./fragment3677";
import type { FragmentToken3678 } from "./fragment3678";

export const FRAGMENT_3679 = gql(`
  fragment Fragment3679 on Member38 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_38
    memberCount_38
    memberMetric_38
  }
`);

type FragmentResult3679 = ResultOf<typeof FRAGMENT_3679>;
type FragmentSelf3679 = NonNullable<FragmentResult3679>;

export type FragmentToken3679 =
  | FragmentSelf3679["__typename"]
  | FragmentSelf3679["typenameHint"] | FragmentToken3677 | FragmentToken3678;
