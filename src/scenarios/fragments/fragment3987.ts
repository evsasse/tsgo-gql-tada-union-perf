import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3985 } from "./fragment3985";
import type { FragmentToken3986 } from "./fragment3986";

export const FRAGMENT_3987 = gql(`
  fragment Fragment3987 on Member66 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_66
    memberCount_66
    memberMetric_66
  }
`);

type FragmentResult3987 = ResultOf<typeof FRAGMENT_3987>;
type FragmentSelf3987 = NonNullable<FragmentResult3987>;

export type FragmentToken3987 =
  | FragmentSelf3987["__typename"]
  | FragmentSelf3987["typenameHint"] | FragmentToken3985 | FragmentToken3986;
