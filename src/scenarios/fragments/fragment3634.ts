import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3632 } from "./fragment3632";
import type { FragmentToken3633 } from "./fragment3633";

export const FRAGMENT_3634 = gql(`
  fragment Fragment3634 on Member273 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_273
    memberCount_273
    memberMetric_273
  }
`);

type FragmentResult3634 = ResultOf<typeof FRAGMENT_3634>;
type FragmentSelf3634 = NonNullable<FragmentResult3634>;

export type FragmentToken3634 =
  | FragmentSelf3634["__typename"]
  | FragmentSelf3634["typenameHint"] | FragmentToken3632 | FragmentToken3633;
