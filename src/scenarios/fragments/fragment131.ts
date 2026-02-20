import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken129 } from "./fragment129";
import type { FragmentToken130 } from "./fragment130";

export const FRAGMENT_131 = gql(`
  fragment Fragment131 on Member130 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_130
    memberCount_130
    memberMetric_130
  }
`);

type FragmentResult131 = ResultOf<typeof FRAGMENT_131>;
type FragmentSelf131 = NonNullable<FragmentResult131>;

export type FragmentToken131 =
  | FragmentSelf131["__typename"]
  | FragmentSelf131["typenameHint"] | FragmentToken129 | FragmentToken130;
