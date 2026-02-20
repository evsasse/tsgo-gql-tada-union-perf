import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3942 } from "./fragment3942";
import type { FragmentToken3943 } from "./fragment3943";

export const FRAGMENT_3944 = gql(`
  fragment Fragment3944 on Member23 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_23
    memberCount_23
    memberMetric_23
  }
`);

type FragmentResult3944 = ResultOf<typeof FRAGMENT_3944>;
type FragmentSelf3944 = NonNullable<FragmentResult3944>;

export type FragmentToken3944 =
  | FragmentSelf3944["__typename"]
  | FragmentSelf3944["typenameHint"] | FragmentToken3942 | FragmentToken3943;
