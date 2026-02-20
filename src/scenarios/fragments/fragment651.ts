import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken649 } from "./fragment649";
import type { FragmentToken650 } from "./fragment650";

export const FRAGMENT_651 = gql(`
  fragment Fragment651 on Member90 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_90
    memberCount_90
    memberMetric_90
  }
`);

type FragmentResult651 = ResultOf<typeof FRAGMENT_651>;
type FragmentSelf651 = NonNullable<FragmentResult651>;

export type FragmentToken651 =
  | FragmentSelf651["__typename"]
  | FragmentSelf651["typenameHint"] | FragmentToken649 | FragmentToken650;
