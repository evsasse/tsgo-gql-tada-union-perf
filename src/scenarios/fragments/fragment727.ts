import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken725 } from "./fragment725";
import type { FragmentToken726 } from "./fragment726";

export const FRAGMENT_727 = gql(`
  fragment Fragment727 on Member166 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_166
    memberCount_166
    memberMetric_166
  }
`);

type FragmentResult727 = ResultOf<typeof FRAGMENT_727>;
type FragmentSelf727 = NonNullable<FragmentResult727>;

export type FragmentToken727 =
  | FragmentSelf727["__typename"]
  | FragmentSelf727["typenameHint"] | FragmentToken725 | FragmentToken726;
