import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3940 } from "./fragment3940";
import type { FragmentToken3941 } from "./fragment3941";

export const FRAGMENT_3942 = gql(`
  fragment Fragment3942 on Member21 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_21
    memberCount_21
    memberMetric_21
  }
`);

type FragmentResult3942 = ResultOf<typeof FRAGMENT_3942>;
type FragmentSelf3942 = NonNullable<FragmentResult3942>;

export type FragmentToken3942 =
  | FragmentSelf3942["__typename"]
  | FragmentSelf3942["typenameHint"] | FragmentToken3940 | FragmentToken3941;
