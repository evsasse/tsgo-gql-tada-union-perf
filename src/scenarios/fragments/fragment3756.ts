import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3754 } from "./fragment3754";
import type { FragmentToken3755 } from "./fragment3755";

export const FRAGMENT_3756 = gql(`
  fragment Fragment3756 on Member115 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_115
    memberCount_115
    memberMetric_115
  }
`);

type FragmentResult3756 = ResultOf<typeof FRAGMENT_3756>;
type FragmentSelf3756 = NonNullable<FragmentResult3756>;

export type FragmentToken3756 =
  | FragmentSelf3756["__typename"]
  | FragmentSelf3756["typenameHint"] | FragmentToken3754 | FragmentToken3755;
