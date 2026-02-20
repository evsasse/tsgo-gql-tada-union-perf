import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3725 } from "./fragment3725";
import type { FragmentToken3726 } from "./fragment3726";

export const FRAGMENT_3727 = gql(`
  fragment Fragment3727 on Member86 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_86
    memberCount_86
    memberMetric_86
  }
`);

type FragmentResult3727 = ResultOf<typeof FRAGMENT_3727>;
type FragmentSelf3727 = NonNullable<FragmentResult3727>;

export type FragmentToken3727 =
  | FragmentSelf3727["__typename"]
  | FragmentSelf3727["typenameHint"] | FragmentToken3725 | FragmentToken3726;
