import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken985 } from "./fragment985";
import type { FragmentToken986 } from "./fragment986";

export const FRAGMENT_987 = gql(`
  fragment Fragment987 on Member146 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_146
    memberCount_146
    memberMetric_146
  }
`);

type FragmentResult987 = ResultOf<typeof FRAGMENT_987>;
type FragmentSelf987 = NonNullable<FragmentResult987>;

export type FragmentToken987 =
  | FragmentSelf987["__typename"]
  | FragmentSelf987["typenameHint"] | FragmentToken985 | FragmentToken986;
