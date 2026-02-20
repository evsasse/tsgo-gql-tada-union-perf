import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3638 } from "./fragment3638";
import type { FragmentToken3639 } from "./fragment3639";

export const FRAGMENT_3640 = gql(`
  fragment Fragment3640 on Member279 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_279
    memberCount_279
    memberMetric_279
  }
`);

type FragmentResult3640 = ResultOf<typeof FRAGMENT_3640>;
type FragmentSelf3640 = NonNullable<FragmentResult3640>;

export type FragmentToken3640 =
  | FragmentSelf3640["__typename"]
  | FragmentSelf3640["typenameHint"] | FragmentToken3638 | FragmentToken3639;
