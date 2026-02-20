import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken319 } from "./fragment319";
import type { FragmentToken320 } from "./fragment320";

export const FRAGMENT_321 = gql(`
  fragment Fragment321 on Member40 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_40
    memberCount_40
    memberMetric_40
  }
`);

type FragmentResult321 = ResultOf<typeof FRAGMENT_321>;
type FragmentSelf321 = NonNullable<FragmentResult321>;

export type FragmentToken321 =
  | FragmentSelf321["__typename"]
  | FragmentSelf321["typenameHint"] | FragmentToken319 | FragmentToken320;
