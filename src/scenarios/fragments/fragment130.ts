import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken128 } from "./fragment128";
import type { FragmentToken129 } from "./fragment129";

export const FRAGMENT_130 = gql(`
  fragment Fragment130 on Member129 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_129
    memberCount_129
    memberMetric_129
  }
`);

type FragmentResult130 = ResultOf<typeof FRAGMENT_130>;
type FragmentSelf130 = NonNullable<FragmentResult130>;

export type FragmentToken130 =
  | FragmentSelf130["__typename"]
  | FragmentSelf130["typenameHint"] | FragmentToken128 | FragmentToken129;
