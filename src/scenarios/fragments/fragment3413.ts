import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3411 } from "./fragment3411";
import type { FragmentToken3412 } from "./fragment3412";

export const FRAGMENT_3413 = gql(`
  fragment Fragment3413 on Member52 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_52
    memberCount_52
    memberMetric_52
  }
`);

type FragmentResult3413 = ResultOf<typeof FRAGMENT_3413>;
type FragmentSelf3413 = NonNullable<FragmentResult3413>;

export type FragmentToken3413 =
  | FragmentSelf3413["__typename"]
  | FragmentSelf3413["typenameHint"] | FragmentToken3411 | FragmentToken3412;
