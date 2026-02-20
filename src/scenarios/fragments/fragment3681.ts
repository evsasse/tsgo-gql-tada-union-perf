import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3679 } from "./fragment3679";
import type { FragmentToken3680 } from "./fragment3680";

export const FRAGMENT_3681 = gql(`
  fragment Fragment3681 on Member40 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_40
    memberCount_40
    memberMetric_40
  }
`);

type FragmentResult3681 = ResultOf<typeof FRAGMENT_3681>;
type FragmentSelf3681 = NonNullable<FragmentResult3681>;

export type FragmentToken3681 =
  | FragmentSelf3681["__typename"]
  | FragmentSelf3681["typenameHint"] | FragmentToken3679 | FragmentToken3680;
