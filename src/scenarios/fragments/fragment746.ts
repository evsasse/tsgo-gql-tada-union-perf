import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken744 } from "./fragment744";
import type { FragmentToken745 } from "./fragment745";

export const FRAGMENT_746 = gql(`
  fragment Fragment746 on Member185 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_185
    memberCount_185
    memberMetric_185
  }
`);

type FragmentResult746 = ResultOf<typeof FRAGMENT_746>;
type FragmentSelf746 = NonNullable<FragmentResult746>;

export type FragmentToken746 =
  | FragmentSelf746["__typename"]
  | FragmentSelf746["typenameHint"] | FragmentToken744 | FragmentToken745;
