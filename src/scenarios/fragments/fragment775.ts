import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken773 } from "./fragment773";
import type { FragmentToken774 } from "./fragment774";

export const FRAGMENT_775 = gql(`
  fragment Fragment775 on Member214 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_214
    memberCount_214
    memberMetric_214
  }
`);

type FragmentResult775 = ResultOf<typeof FRAGMENT_775>;
type FragmentSelf775 = NonNullable<FragmentResult775>;

export type FragmentToken775 =
  | FragmentSelf775["__typename"]
  | FragmentSelf775["typenameHint"] | FragmentToken773 | FragmentToken774;
