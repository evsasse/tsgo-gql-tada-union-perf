import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken126 } from "./fragment126";
import type { FragmentToken127 } from "./fragment127";

export const FRAGMENT_128 = gql(`
  fragment Fragment128 on Member127 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_127
    memberCount_127
    memberMetric_127
  }
`);

type FragmentResult128 = ResultOf<typeof FRAGMENT_128>;
type FragmentSelf128 = NonNullable<FragmentResult128>;

export type FragmentToken128 =
  | FragmentSelf128["__typename"]
  | FragmentSelf128["typenameHint"] | FragmentToken126 | FragmentToken127;
