import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken405 } from "./fragment405";
import type { FragmentToken406 } from "./fragment406";

export const FRAGMENT_407 = gql(`
  fragment Fragment407 on Member126 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_126
    memberCount_126
    memberMetric_126
  }
`);

type FragmentResult407 = ResultOf<typeof FRAGMENT_407>;
type FragmentSelf407 = NonNullable<FragmentResult407>;

export type FragmentToken407 =
  | FragmentSelf407["__typename"]
  | FragmentSelf407["typenameHint"] | FragmentToken405 | FragmentToken406;
