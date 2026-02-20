import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken802 } from "./fragment802";
import type { FragmentToken803 } from "./fragment803";

export const FRAGMENT_804 = gql(`
  fragment Fragment804 on Member243 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_243
    memberCount_243
    memberMetric_243
  }
`);

type FragmentResult804 = ResultOf<typeof FRAGMENT_804>;
type FragmentSelf804 = NonNullable<FragmentResult804>;

export type FragmentToken804 =
  | FragmentSelf804["__typename"]
  | FragmentSelf804["typenameHint"] | FragmentToken802 | FragmentToken803;
