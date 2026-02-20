import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken691 } from "./fragment691";
import type { FragmentToken692 } from "./fragment692";

export const FRAGMENT_693 = gql(`
  fragment Fragment693 on Member132 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_132
    memberCount_132
    memberMetric_132
  }
`);

type FragmentResult693 = ResultOf<typeof FRAGMENT_693>;
type FragmentSelf693 = NonNullable<FragmentResult693>;

export type FragmentToken693 =
  | FragmentSelf693["__typename"]
  | FragmentSelf693["typenameHint"] | FragmentToken691 | FragmentToken692;
