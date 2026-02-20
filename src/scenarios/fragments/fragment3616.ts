import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3614 } from "./fragment3614";
import type { FragmentToken3615 } from "./fragment3615";

export const FRAGMENT_3616 = gql(`
  fragment Fragment3616 on Member255 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_255
    memberCount_255
    memberMetric_255
  }
`);

type FragmentResult3616 = ResultOf<typeof FRAGMENT_3616>;
type FragmentSelf3616 = NonNullable<FragmentResult3616>;

export type FragmentToken3616 =
  | FragmentSelf3616["__typename"]
  | FragmentSelf3616["typenameHint"] | FragmentToken3614 | FragmentToken3615;
