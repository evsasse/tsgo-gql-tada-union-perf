import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken006 } from "./fragment006";
import type { FragmentToken007 } from "./fragment007";

export const FRAGMENT_008 = gql(`
  fragment Fragment008 on Member07 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_07
    memberCount_07
    memberMetric_07
  }
`);

type FragmentResult008 = ResultOf<typeof FRAGMENT_008>;
type FragmentSelf008 = NonNullable<FragmentResult008>;

export type FragmentToken008 =
  | FragmentSelf008["__typename"]
  | FragmentSelf008["typenameHint"] | FragmentToken006 | FragmentToken007;
