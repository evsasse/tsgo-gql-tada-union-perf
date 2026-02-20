import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken273 } from "./fragment273";
import type { FragmentToken274 } from "./fragment274";

export const FRAGMENT_275 = gql(`
  fragment Fragment275 on Member274 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_274
    memberCount_274
    memberMetric_274
  }
`);

type FragmentResult275 = ResultOf<typeof FRAGMENT_275>;
type FragmentSelf275 = NonNullable<FragmentResult275>;

export type FragmentToken275 =
  | FragmentSelf275["__typename"]
  | FragmentSelf275["typenameHint"] | FragmentToken273 | FragmentToken274;
