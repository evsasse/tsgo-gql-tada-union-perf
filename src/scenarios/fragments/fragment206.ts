import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken204 } from "./fragment204";
import type { FragmentToken205 } from "./fragment205";

export const FRAGMENT_206 = gql(`
  fragment Fragment206 on Member205 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_205
    memberCount_205
    memberMetric_205
  }
`);

type FragmentResult206 = ResultOf<typeof FRAGMENT_206>;
type FragmentSelf206 = NonNullable<FragmentResult206>;

export type FragmentToken206 =
  | FragmentSelf206["__typename"]
  | FragmentSelf206["typenameHint"] | FragmentToken204 | FragmentToken205;
