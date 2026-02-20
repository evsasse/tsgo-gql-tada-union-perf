import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken004 } from "./fragment004";
import type { FragmentToken005 } from "./fragment005";

export const FRAGMENT_006 = gql(`
  fragment Fragment006 on Member05 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_05
    memberCount_05
    memberMetric_05
  }
`);

type FragmentResult006 = ResultOf<typeof FRAGMENT_006>;
type FragmentSelf006 = NonNullable<FragmentResult006>;

export type FragmentToken006 =
  | FragmentSelf006["__typename"]
  | FragmentSelf006["typenameHint"] | FragmentToken004 | FragmentToken005;
