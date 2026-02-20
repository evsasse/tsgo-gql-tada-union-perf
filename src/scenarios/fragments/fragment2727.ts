import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2725 } from "./fragment2725";
import type { FragmentToken2726 } from "./fragment2726";

export const FRAGMENT_2727 = gql(`
  fragment Fragment2727 on Member206 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_206
    memberCount_206
    memberMetric_206
  }
`);

type FragmentResult2727 = ResultOf<typeof FRAGMENT_2727>;
type FragmentSelf2727 = NonNullable<FragmentResult2727>;

export type FragmentToken2727 =
  | FragmentSelf2727["__typename"]
  | FragmentSelf2727["typenameHint"] | FragmentToken2725 | FragmentToken2726;
