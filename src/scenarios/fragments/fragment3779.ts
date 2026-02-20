import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3777 } from "./fragment3777";
import type { FragmentToken3778 } from "./fragment3778";

export const FRAGMENT_3779 = gql(`
  fragment Fragment3779 on Member138 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_138
    memberCount_138
    memberMetric_138
  }
`);

type FragmentResult3779 = ResultOf<typeof FRAGMENT_3779>;
type FragmentSelf3779 = NonNullable<FragmentResult3779>;

export type FragmentToken3779 =
  | FragmentSelf3779["__typename"]
  | FragmentSelf3779["typenameHint"] | FragmentToken3777 | FragmentToken3778;
